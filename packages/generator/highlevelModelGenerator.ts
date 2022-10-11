import {Model, getModels, ModelProps} from './modelDefinition'

export function run(models: Record<string, Model>) {
  function renderModel(name: string, model: Model): string {
    const isLocal = model.extendedModel && !model.extendedModel.path
    const extendedModelName = model.extendedModel?.path ? `Base${name}` : model.extendedModel?.name || 'Object'

    function mapProps(props: ModelProps) {
      return props.map(({name, type}) => `${name}: ${type}`)
    }

    const constructorParams = [
      {name: 'api', type: 'MiroApi'},
      ...model.props,
      {name: 'props', type: `KeepBase<${extendedModelName}>`},
    ]

    return `

export class ${name} extends ${extendedModelName} {
    /** @hidden */
    _api: MiroApi

    ${mapProps(model.props).join('\n')}

    /** @hidden */
    constructor(${mapProps(constructorParams).join(', ')}) {
        super(${isLocal ? ['api', ...model.props.map(({name}) => name), 'props'].join(', ') : ''})
        this._api = api
        ${model.props.map(({name}) => `this.${name} = ${name}`).join('\n')}
        Object.assign(this, props)
    }

    ${renderMethods(models[model.inherits], model.props)}

    ${renderMethods(model, model.props)}
}
`
  }

  function renderMethods(model?: Model, props?: ModelProps) {
    if (!model) return ''
    return model.methods
      .map((method) => {
        const returns = method.returns

        return `
/** {@inheritDoc api/apis!MiroApi.${method.method}} */
async ${method.alias}(...parameters: GetParameters${method.topLevelCall ? 1 : props.length}<MiroApi['${
          method.method
        }']>): Promise<${returns ? returns : 'void'}${method.paginated ? '[]' : ''}> {
${renderFunctionBody(method, props)}
}
`
      })
      .join('\n')
  }

  function renderApiCall(method: Model['methods'][number], props: ModelProps) {
    const apiCallArguments = method.topLevelCall
      ? [`this.${props[props.length - 1].name}.toString()`]
      : props.map(({name}) => `this.${name}.toString()`)

    apiCallArguments.push('...parameters')

    return `await this._api.${method.method}(${apiCallArguments.join(',')})`
  }

  function renderFunctionBody(method: Model['methods'][number], props: ModelProps) {
    const apiCall = renderApiCall(method, props)
    const returnClassName = method.returns
    if (!returnClassName) return apiCall

    const paginatedData = typeof method.paginated === 'string' ? `result.${method.paginated}` : 'result'

    const returnModel = models[returnClassName]

    return `
        const result = (${apiCall}).body;

        ${method.paginated ? `return ${paginatedData} ? ${paginatedData}.map(result => { ` : ''}

        ${renderReturnValue(returnClassName, returnModel, props)}

        ${method.paginated ? '}) : []' : ''}
`
  }

  function renderModelContructorArgs(model: Model, props: ModelProps): string {
    return [
      'this._api',
      ...model.props.map((_, i, {length}) => {
        if (i === length - 1) return `result.${model.id}`
        return !props[i] ? `parameters[${i}]` : `this.${props[i].name}`
      }),
      'result',
    ].join(',')
  }

  function renderReturnValue(returns: string | number, model: Model, props: ModelProps) {
    return `
        return new ${returns} (
            ${renderModelContructorArgs(model, props)}
        )
`
  }

  function renderImports() {
    return `
import { MiroApi } from '../api'
import { GetParameters0, GetParameters1, GetParameters2, GetParameters3, KeepBase } from "./helpers";

${Object.keys(models)
  .map((name) => {
    const extendedModel = models[name].extendedModel
    if (!extendedModel?.path) return ''
    const importName = `Base${name}`
    return `import { ${extendedModel.name} ${extendedModel.name !== importName ? `as ${importName}` : ''} } from './${
      extendedModel.path
    }';`
  })
  .join('\n')}
`
  }

  let code = renderImports()

  for (const name of Object.keys(models)) {
    const model = models[name]

    code += renderModel(name, model)
  }

  return code
}

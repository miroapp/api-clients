import {Model, getModels} from './modelDefinition'

export function run(models: Record<string, Model>) {
  function renderModel(name: string, model: Model): string {
    const isLocal = !model.extendedModel?.path
    const extendedModelName = model.extendedModel?.path ? `Base${name}` : model.extendedModel.name

    return `

export class ${name} extends ${extendedModelName} {
    /** @hidden */
    _api: MiroApi
    /** @hidden */
    _headParams: [${model.props.map((_) => `string`).join(', ')}]

    constructor(api: MiroApi, headParams: ${name}['_headParams'], props: ${`KeepBase<${extendedModelName}>`}) {
        super(${isLocal ? 'api, headParams, props' : ''})
        this._api = api
        this._headParams = headParams
        Object.assign(this, props)
    }

    ${renderMethods(models[model.inherits], model.props)}

    ${renderMethods(model, model.props)}
}
`
  }

  function renderMethods(model?: Model, props?: string[]) {
    if (!model) return ''
    return model.methods
      .map((m) => {
        const returns = m.returns

        return `
/** {@inheritDoc api!MiroApi.${m.method}} */
async ${m.alias}(...args: GetParameters${m.topLevelCall ? 1 : props.length}<MiroApi['${m.method}']>): Promise<${
          returns ? returns : 'void'
        }${m.paginated ? '[]' : ''}> {
${renderFunctionBody(m, props)}
}
`
      })
      .join('\n')
  }

  function renderApiCall(m: Model['methods'][number], props: string[]) {
    return `await this._api.${m.method}(${
      m.topLevelCall ? `this._headParams[${props.length - 1}]` : '...this._headParams'
    }, ...args)`
  }

  function renderFunctionBody(m: Model['methods'][number], props: string[]) {
    const apiCall = renderApiCall(m, props)
    const returns = m.returns
    if (!returns) return apiCall

    const paginatedData = m.paginated === true ? 'result' : `result.${m.paginated}`

    const returnModel = models[returns]

    return `
        const result = (${apiCall}).body;

        ${m.paginated ? `return ${paginatedData} ? ${paginatedData}.map(result => { ` : ''}

        ${renderReturnValue(returns, returnModel, props)}

        ${m.paginated ? '}) : []' : ''}
`
  }

  function renderModelContructorArgs(returnModel: Model, props: string[]): string {
    return returnModel.props
      .map((_, i, {length}) => {
        if (i === length - 1) return `toString(result.${returnModel.id})`
        return !props[i] ? `args[${i}]` : `this._headParams[${i}]`
      })
      .join(',')
  }

  function renderReturnValue(returns: string | number, returnModel: Model, props: string[]) {
    return `
        return new ${returns} (
            this._api,
            [${renderModelContructorArgs(returnModel, props)}],
            result
        )
`
  }

  function renderImports() {
    return `
import { MiroApi } from '../api'
import { GetParameters0, GetParameters1, GetParameters2, GetParameters3, KeepBase, toString } from "./helpers";

${Object.keys(models)
  .map((name) => {
    const extendedModel = models[name].extendedModel
    if (!extendedModel?.path) return ''
    return `import { ${extendedModel.name} as Base${name}}  from './${extendedModel.path}';`
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

if (process.argv[1] === __filename) {
  console.log(run(getModels()))
}

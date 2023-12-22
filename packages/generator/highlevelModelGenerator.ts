// Fixing import to fix "createProgram is not a function" as per this - https://github.com/microsoft/TypeScript/issues/54018
import ts from 'typescript'
import path from 'path'
import {Model, ModelProps} from './modelDefinition'
import {MiroApi} from './../miro-api/api/apis' // Changed import pattern to fix issue with "./../../packages/miro-api/api/apis has no exported member named MiroApi"

const filePath = path.resolve('../miro-api/api/')
const program = ts.createProgram([filePath], {})
const source = program.getSourceFile('../miro-api/api/apis.ts')

const text = source.getFullText(source)

const methodDocs: Record<string, {comments: string; params: string[]}> = {}

ts.transform(source, [
  (context: ts.TransformationContext) => {
    const visit: ts.Visitor = (node: ts.Node) => {
      if (ts.isMethodDeclaration(node)) {
        const end = node.getFullStart()
        const length = node.getLeadingTriviaWidth(source)
        const comments = text.slice(end, end + length)
        const name = ('escapedText' in node.name && node.name.escapedText) || ''
        const params = []
        for (const match of comments.matchAll(/@param ([a-zA-Z]+)/gi)) {
          params.push(match[1])
        }
        // params.
        methodDocs[name] = {comments, params}
      }

      return ts.visitEachChild(node, visit, context)
    }

    return (node: ts.Node) => ts.visitNode(node, visit)
  },
])

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

        const prefixParamCount = method.topLevelCall ? 1 : props.length
        const params = Array.from({
          length: MiroApi.prototype[method.method].length - prefixParamCount,
        })

        const original = methodDocs[method.method]
        let docs = original.comments
        for (let i = 0; i < prefixParamCount; i++) {
          docs = docs.replace(/^.* @param .*\n/m, '')
        }

        return `
${docs} async ${method.alias}(${params.map(
          (_, i) =>
            `${original.params[i + prefixParamCount]}: Parameters<MiroApi['${method.method}']>[${
              i + prefixParamCount
            }]`,
        )}): Promise<${returns ? returns : 'void'}${method.paginated ? '[]' : ''}> {
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

    const params = Array.from({
      length: MiroApi.prototype[method.method].length - apiCallArguments.length,
    })

    const original = methodDocs[method.method]

    const allApiCallArguments = apiCallArguments.concat(
      params.map((_, i) => `${original.params[i + apiCallArguments.length]}`),
    )

    return `await this._api.${method.method}(${allApiCallArguments.join(',')})`
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
import { KeepBase } from "./helpers";

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

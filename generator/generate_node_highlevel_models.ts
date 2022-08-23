import { Model, getModels } from "./modelDefinition";

export function run(models: Record<string, Model>) {

  function renderModel(name: string, model: Model): string {
    return `

export class ${name} extends ${model.extendedModel ? `Base${name}` : "Object"} {
    /** @hidden */
    _api: MiroEndpoints
    /** @hidden */
    _headParams: [${model.props.map((_) => `string`).join(", ")}]

    constructor(api: MiroEndpoints, headParams: ${name}['_headParams'], rest: ${
      model.extendedModel ? `KeepBase<Base${name}>` : "object"
    }) {
        super()
        this._api = api
        this._headParams = headParams
        Object.assign(this, rest)
    }

${model.methods
  .map((m) => {
    const returns = m.returns;

    return `
    /** {@inheritDoc api!MiroEndpoints.${m.method}} */
    async ${m.alias}(...rest: GetParameters${
      m.topLevelCall ? 1 : model.props.length
    }<MiroEndpoints['${m.method}']>): Promise<${returns ? returns : "void"}${
      m.paginated ? "[]" : ""
    }> {
        ${renderFunctionBody(m, model)}
    }
`;
  })
  .join("\n")}

}
`;
  }

  function renderApiCall(m: Model["methods"][number], model: Model) {
    return `await this._api.${m.method}(${
      m.topLevelCall
        ? `this._headParams[${model.props.length - 1}]`
        : "...this._headParams"
    }, ...rest)`;
  }

  function renderFunctionBody(m: Model["methods"][number], model: Model) {
    const apiCall = renderApiCall(m, model);
    const returns = m.returns;
    if (!returns) return apiCall;

    const paginatedData =
      m.paginated === true ? "result" : `result.${m.paginated}`;

    const returnModel = models[returns];

    return `
        const result = (${apiCall}).body;

        ${
          m.paginated
            ? `return ${paginatedData} ? ${paginatedData}.map(result => { `
            : ""
        }

        ${renderReturnValue(returns, returnModel)}

        ${m.paginated ? "}) : []" : ""}
`;
  }

  function renderReturnValue(returns: string | number, returnModel: Model) {
    return `
        return new ${returns} (
            this._api,
            [${returnModel.props.map((_, i, { length }) =>
              i === length - 1
                ? `toString(result.${returnModel.id})`
                : `this._headParams[${i}]`
            )}],
            result
        )
`;
  }

  function renderImports() {
    return `
import { MiroEndpoints } from '../api'
import { GetParameters0, GetParameters1, GetParameters2, GetParameters3, KeepBase, toString } from "./helpers";

${Object.keys(models)
  .map((name) => {
    const extendedModel = models[name].extendedModel;
    if (!extendedModel) return "";
    return `import { ${extendedModel.name} as Base${name}}  from './${extendedModel.path}';`;
  })
  .join("\n")}
`;
  }

  let code = renderImports();

  for (const name of Object.keys(models)) {
    const model = models[name];

    code += renderModel(name, model);
  }

  return code;
}

if (process.argv[1] === __filename) {
  console.log(run(getModels()));
}

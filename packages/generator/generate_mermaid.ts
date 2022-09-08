import {normalizeTheModel, models} from './modelDefinition'

console.log('```mermaid')
console.log('graph LR;')

for (const name of Object.keys(models)) {
  const model = normalizeTheModel(models[name])

  console.log(
    model.methods
      .filter((m) => m.returns)
      .map((m) => {
        return `${name}-->|${m.alias}| ${m.returns}`
      })
      .join('\n'),
  )
}
console.log('```')

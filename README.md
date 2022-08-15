This repository contains Mir API client and tools needed to generate them based on OpenAPI specification.
Currently the only available client is [Node.JS client](./typescript-node) written in typescript.

### Generating typescript-node client

```bash
yarn
yarn run generate
```

API clients are generated using `@openapitools/openapi-generator-cli`.

They are generated based on the API specifications from `miro-openapi-files` repository. The specifications should all be merged into a single JSON or YAML spec. Each endpoint should have a unique `operationId` as client method names are derived from that.

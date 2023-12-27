## Miro API clients

This repository contains Miro API clients and the tools needed to generate them, based on the OpenAPI specification (OAS).
Currently, the only available client is the [Node.js client](./packages/miro-api), written in [TypeScript](https://www.typescriptlang.org/).

Contribution to this project is open and welcome! Read our [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines to get started. Thank you for your help!

### Miro Node.js client

- [Miro Node.js client reference documentation](https://miroapp.github.io/api-clients/index.html)


### Miro Postman Collection

- This repo also contains `postman` workspace that uses `spec.json` created with `update-spec.ts` to generate the postman collection. 

To run this locally, go to the root directory (api-clients), and run : 

`yarn update-spec`

`yarn build`

`yarn postman:publish`


The generated collection is available at `generated/postman-collection.json` for reference.

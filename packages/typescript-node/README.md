# ⚠️ 🚧 This client is still a work in progress, and therefore subject to change without notice. 🚧 ⚠️

🚧 [Miro Node,js API client reference documentation](https://miroapp.github.io/api-clients/classes/index.Miro.html)

## Miro Node.js API client library

The Miro Node.js API client is a JavaScript library that enables Miro REST API functionality in Miro apps based on Node.js.
You can use Node.js and JavaScript to send requests to and handle responses from the Miro REST API.

You can use the client to implement backend functionality in your Miro app, such as:

- OAuth 2.0 authorization
- Programmatic data exchange with an external system
- Data storage in the app backend.

## Install the client library

To install the Miro Node.js API client and its dependencies, run the following command in your project root directory:

```bash
npm install @miro/miro-node
```

## Import the clients

The Miro Node.js library makes a stateful high-level client, and stateless low-level client available:

- The `Miro` object is the entry point for the stateful high-level client. \
  It contains properties and methods to interact with Miro users. For example, to trigger the authorization flow. \
  The [`Miro` methods](https://miroapp.github.io/api-clients/classes/index.Miro.html) are related to authorization and access token management.
- The `MiroApi` object is the entry point for the stateless low-level client. \
  It contains properties and methods for backend-to-backend communication and to run automation scripts. \
  It enables passing the OAuth access token once, and then reusing it in subsequent calls. \
    The [`MiroApi` methods](https://miroapp.github.io/api-clients/classes/index.MiroApi.html) enable creating and getting boards associated with the current access token, as well as organization information (available on Enterprise API for users on an Enterprise plan).

To start using the high-level `Miro` client, import it, and then create a new instance:

```typescript
// Import the Miro object 
import {Miro} from "@mirohq/miro-node"

// Create a new instance of the Miro object
const miro = new Miro()

// You can use the 'as' method to return a
// high-level instance of 'MiroApi' for a specific user
miro.as(userId: ExternalUserId): MiroApi
```

To start using the low-level `MiroApi`  client, import it, and then create a new instance:

```typescript
// Import the MiroApi object 
import {MiroApi} from "./index.ts"

// Create a new instance of the MiroApi object,
// and pass the OAuth access token as a parameter
const api = new MiroApi("<access_token>")

// Use the MiroApi instance to send a request to the Miro REST API,
// and to get all the boards that can be accessed with the current access token.
const boards = await api.getBoards()
```

## Handle OAuth authorization

`Miro` handles authorization and per-user access token management. \
By default, the client loads the app configuration from the following environment variables:

- `MIRO_CLIENT_ID`
- `MIRO_CLIENT_SECRET`
- `MIRO_REDIRECT_URL`

Alternatively, you can pass these values to the constructor when you create a new `Miro` instance:

```typescript
import {Miro} from "@mirohq/miro-node"

const miro = new Miro({
  clientId: "<your_app_client_id>>",
  clientSecret: "<your_app_client_secret>",
  redirectUrl: "https://example.com/miro_redirect_url",
})
```

Other options are documented in the [reference](https://miroapp.github.io/api-clients/interfaces/index.Opts.html).

The client has all methods that are needed to complete Miro authorization flows and make API calls:

1. Check if current user has authorized the app: [`miro.isAuthorized(someUserId)`](https://miroapp.github.io/api-clients/classes/index.Miro.html#isAuthorized)
2. Request user to authorize the app by redirecting them to: [`miro.getAuthUrl()`](https://miroapp.github.io/api-clients/classes/index.Miro.html#getAuthUrl)
3. Exchange users authorization code for a token in the return url's request handler: [`await miro.exchangeCodeForAccessToken(someUserId, req.query.code)`](https://miroapp.github.io/api-clients/classes/index.Miro.html#exchangeCodeForAccessToken)
4. Use the API as a specific user: [`await miro.as(someUserId).getBoards()`](https://miroapp.github.io/api-clients/classes/index.Miro.html#as)

Here is a simple implementation of an App using the [fastify](https://www.fastify.io/) framework:

```javascript
import {Miro} from '@mirohq/miro-node'
import Fastify from 'fastify'
import fastifyCookie from '@fastify/cookie'

const miro = new Miro()

const app = Fastify()
app.register(fastifyCookie)

// Generate user ids for new sessions
app.addHook('preHandler', (request, reply, next) => {
  if (!request.cookies.userId) {
    const userId = Math.random()
    reply.setCookie('userId', userId)
    request.cookies.userId = userId
  }
  next()
})

// Exchange the code for a token in the OAuth2 redirect handler
app.get('/auth/miro/callback', async (req, reply) => {
  await miro.exchangeCodeForAccessToken(req.cookies.userId, req.query.code)
  reply.redirect('/')
})

app.get('/', async (req, reply) => {
  // If user did not authorize the app, then redirect them to auth url
  if (!(await miro.isAuthorized(req.cookies.userId))) {
    reply.redirect(miro.getAuthUrl())
    return
  }

  // Initialize the API for the current user
  const api = miro.as(req.cookies.userId)

  // Print the info of the first board
  for await (const board of api.getAllBoards()) {
    return board
  }
})

await app.listen({port: 4000})
```

Most methods (`isAuthorized`, `exchangeCodeForAccessToken`, `api`) will take `userId` as a first paramters. This is the internal ID of the user in your application, usually stored in session. It can be either a string or a number.

Client library requires a persistent storage so that it can store user's access and refresh tokens. By default it uses filesystem to store this state. For production deployments we recommend using a custom implementation backed by a database. It is passed as an option to Miro contructor:

```typescript
const miro = new Miro({
  storage: new CustomMiroStorage(),
})
```

Storage should implement the following interface:

```typescript
export interface Storage {
  read(userId: ExternalUserId): Promise<State | undefined>
  write(userId: ExternalUserId, state: State): Awaitable<void>
}
```

The client will automatically refresh access tokens before making API calls if they are going to expire soon.

### Methods & Models

[`.as(userId: string)`](https://miroapp.github.io/api-clients/classes/index.Miro.html#as) method returns an instance of the [`Api`](https://miroapp.github.io/api-clients/classes/highlevel.Api.html) class.
This instance provides methods to create and get [`Board`](https://miroapp.github.io/api-clients/classes/highlevel.Board.html) models which has methods to create and get [`Item`](https://miroapp.github.io/api-clients/classes/highlevel.Item.html) model and so forth.

Client provides a few helper methods that make it easy to paginate over all resources. For example [getAllBoards](https://miroapp.github.io/api-clients/classes/highlevel.Api.html#getAllBoards) method returns an async iterator that can be used to iterate over all available boards:

```typescript
for await (const board of api.getAllBoards()) {
  console.log(board.viewLink)
}
```

[Miro Node.js client reference documentation](https://miroapp.github.io/api-clients/index.html)
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
npm install @mirohq/miro-api
```

## Import the clients

The Miro Node.js library makes a stateful high-level client, and stateless low-level client available:

- The `Miro` object is the stateful high-level client. \
  It contains properties and methods to interact with Miro users. For example, to trigger the authorization flow. \
  The [`Miro` methods](https://miroapp.github.io/api-clients/classes/index.Miro.html) are related to authorization and access token management.
- The `MiroApi` object is the stateless low-level client. \
  It contains properties and methods for backend-to-backend communication and to run automation scripts. \
  It enables passing the OAuth access token once, and then reusing it in subsequent calls. \
  The [`MiroApi` methods](https://miroapp.github.io/api-clients/classes/index.MiroApi.html) enable creating and getting boards associated with the current access token, performing CRUD operations on board items, as well as retrieving organization information and managing teams sand users (available on Enterprise API for users on an Enterprise plan.)

To start using the high-level `Miro` client, import it, and then create a new instance:

```typescript
// Import the 'Miro' object
import {Miro} from "@mirohq/miro-api"

// Create a new instance of the Miro object
const miro = new Miro()

/*
 * The 'as' method returns a high-level instance of
 * 'Api' for a specific user.
 * This makes all the methods that enable interacting with
 * boards and board items available to the specified user
 */
miro.as(userId: ExternalUserId): MiroApi
```

To start using the low-level `MiroApi` client, import it, and then create a new instance:

```typescript
// Import the 'MiroApi' object
import {MiroApi} from './index.ts'

// Create a new instance of the 'MiroApi' object,
// and pass the OAuth access token as a parameter
const api = new MiroApi('<access_token>')

// Use the 'MiroApi' instance to send a request to the Miro REST API,
// and to create a new board in the team where the App is installed
const boards = await api.createBoard()
```

## Model hierarchy

- The `Miro` [`.as(userId: string)`](https://miroapp.github.io/api-clients/classes/index.Miro.html#as) method returns an instance of the [`MiroApi`](https://miroapp.github.io/api-clients/classes/highlevel.Api.html) class. \
  This instance provides methods to create and get the [`Board`](https://miroapp.github.io/api-clients/classes/highlevel.Board.html) model.
- `Board` has methods to create and get [`Item`](https://miroapp.github.io/api-clients/classes/highlevel.Item.html) models.
- `Items` includes methods to create connectors, as well as attach and detach tags, for the board items that support these features.

It's possible to access the methods, properties, and objects by traversing the hierarchy. \
For example:

1. Instantiate the `Miro` object, and use its `as` method to access the `MiroApi` object and its methods.
2. Use the `getBoard` method of the the `MiroApi` object to access the `Board` object and its methods.
3. Use the `getCardItem` method of the the `Board` object to access a specific `CardItem` object and its methods.
4. Use the `getAllTags` method of the the `CardItem` object to access instances of the `Tag` object that are attached to the card item.
5. Finally, the `Tag` object has methods to update and delete the card item's tags, as well as to retrieve all board items that have a specific tag.

```text
Miro
 |__ as
     |__ MiroApi
          |__ getBoard
               |__ Board
                    |__ get<item-type>
                    |__ getItem
                         |__ Board items
                              |__ getAllTags
                              |    |__ Tags
                              |__ connectTo
                                   |__ Connectors
```

## Pagination

The client library includes helper methods that make it easy to paginate over all the resources using `for await...of` loops. \
For example, the [`getAllBoards`](https://miroapp.github.io/api-clients/classes/highlevel.Api.html#getAllBoards) method is an [AsyncGenerator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator) that paginates automatically.

Example:

```typescript
for await (const board of api.getAllBoards()) {
  console.log(board.viewLink)
  if (shouldStop()) {
    // Stop requesting additional pages from the API
    break
  }
}
```

## Storage

> 🚧
>
> ⚠️ For production deployments, we recommend using a custom implementation backed by a database.

Most methods take `userId` as their first parameter. For example: [`isAuthorized`](), [`exchangeCodeForAccessToken`](), [`as`]().
`userId` corresponds to the internal ID of the user in your application. It can be either a string or a number. Usually, it's stored in session.

The client library requires persistent storage for user access and refresh tokens. \
The client automatically refreshes access tokens before making API calls, if they are nearing their expiration time.

By default, persistent storage uses an in memory dictionary to store state information. \
Pass `storage` to the `Miro` constructor as an option:

```typescript
const miro = new Miro({
  storage: new CustomMiroStorage(),
})
```

To support the client library storage functionality in your app, implement the following [get and set](https://miroapp.github.io/api-clients/interfaces/index.Storage.html) interface:

```typescript
export interface Storage {
  get(userId: ExternalUserId): Promise<State | undefined>
  set(userId: ExternalUserId, state: State): Awaitable<void>
}
```

## OAuth authorization

`Miro` handles authorization and per-user access token management. \
By default, the client loads the app configuration from the following environment variables:

- `MIRO_CLIENT_ID`
- `MIRO_CLIENT_SECRET`
- `MIRO_REDIRECT_URL`

Alternatively, you can pass these values to the constructor when you create a new `Miro` instance:

```typescript
import {Miro} from '@mirohq/miro-api'

const miro = new Miro({
  clientId: '<your_app_client_id>>',
  clientSecret: '<your_app_client_secret>',
  redirectUrl: 'https://example.com/miro_redirect_url',
})
```

The `Miro` client features all the necessary [methods](https://miroapp.github.io/api-clients/classes/index.Miro.html) and [options](https://miroapp.github.io/api-clients/interfaces/index.MiroOptions.html) to complete Miro authorization flows, and to make API calls:

1. Check if the current user has authorized the app: [`miro.isAuthorized(someUserId)`](https://miroapp.github.io/api-clients/classes/index.Miro.html#isAuthorized)
2. If the user hasn't yet authorized the app, request the user to authorize the app by redirecting them to: [`miro.getAuthUrl()`](https://miroapp.github.io/api-clients/classes/index.Miro.html#getAuthUrl)
3. As part of the authorization flow, exchange the user temporary authorization code for an access token in the return URL request handler: [`await miro.exchangeCodeForAccessToken(someUserId, req.query.code)`](https://miroapp.github.io/api-clients/classes/index.Miro.html#exchangeCodeForAccessToken)
4. Make API calls on behalf of a specific user: [`await miro.as(someUserId).getBoard(boardId)`](https://miroapp.github.io/api-clients/classes/index.Miro.html#as)

For more information about the available options related to authorization, see the [`MiroOptions` interface reference documentation](https://miroapp.github.io/api-clients/interfaces/index.MiroOptions.html).

## Example

This example implements a simple app using the [Fastify](https://www.fastify.io/) framework:

```javascript
import {Miro} from '@mirohq/miro-api'
import Fastify from 'fastify'
import fastifyCookie from '@fastify/cookie'

const miro = new Miro()

const app = Fastify()
app.register(fastifyCookie)

// Generate user IDs for new sessions
app.addHook('preHandler', (request, reply, next) => {
  if (!request.cookies.userId) {
    const userId = Math.random()
    reply.setCookie('userId', userId)
    request.cookies.userId = userId
  }
  next()
})

// Exchange the temp code for an access token in the OAuth2 redirect handler
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

  // Print the detail about first returned board
  for await (const board of api.getAllBoards()) {
    return board
  }
})

await app.listen({port: 4000})
```

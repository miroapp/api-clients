## Goal

This guide features two examples that demonstrate how to implement a custom [`Storage`](https://miroapp.github.io/api-clients/interfaces/index._internal_.Storage.html) interface to add data storage functionality to the `Miro` class. \
The default is a simple in-memory implementation.

> 🚧
>
> For production deployments, we recommend using a custom implementation backed by a database.

## Implement storage with a Redis backend

This example implements storage using:

- The [Redis](https://redis.io/) database as a backend.
- The [Node-Redis library](https://www.npmjs.com/package/redis) library to connect to a Redis instance.

Create a class to handle:

- Connecting to a Redis instance.
- Fetching state from Redis.
- Saving state in Redis.
- Deleting state from Redis.

In the example, the class name is `RedisStorage`:

```javascript
const redis = require('redis')

class RedisStorage {
  // Initiate a connection to the Redis instance.
  // On subsequent calls, it returns the same Redis connection
  async _getClient() {
    if (!this.redisClient) {
      const client = redis.createClient()
      await client.connect()
      this.redisClient = client
    }
    return this.redisClient
  }

  // Return the state from Redis, if this data exists
  async get(userId) {
    const client = await this._getClient()
    const value = await client.get(userId.toString())
    if (!value) return undefined
    return JSON.parse(value)
  }

  // Store the state in Redis.
  // If the state is undefined, the corresponding Redis key is deleted
  async set(userId, state) {
    const client = await this._getClient()

    // Delete the state, if it's undefined
    if (!state) return await client.del(userId.toString())

    // Store the state in Redis
    await client.set(userId.toString(), JSON.stringify(state))
  }
}
```

To use the class, pass it as a parameter in the `Miro` constructor:

```javascript
const miro = new Miro({
  storage: new RedisStorage(),
})
```

## Implement storage with `express-session`

This example implements storage using:

- The [Express](https://expressjs.com/) web framework.
- The [express-session](https://www.npmjs.com/package/express-session) middleware to enable storing `Miro` state information in the session storage.

The following code example:

- Creates a new `Miro` instance for each request.
- Loads the state of the current `Miro` instance from the session storage.
- Saves the state of the current `Miro` instance to the session storage.

```javascript
// Set up session middleware before: 'app.use(session({...}))'
app.use((req, res, next) => {
  // Create a separate 'Miro' instance for each request
  req.miro = new Miro({
    // Define the storage implementation inline
    storage: {
      // Load the 'Miro' state from the session object, if it exists
      get(_userId) {
        return req.session.state
      },

      // Store the 'Miro' state in the session object
      set(_userId, state) {
        req.session.state = state
      },
    },
  })

  next()
})
```

Instead of using a global `miro` variable, each request has a separate `Miro` instance associated with `req.miro`. \
The client endpoints that interact with the [`Miro` API](https://miroapp.github.io/api-clients/classes/index.Miro.html) use `req.miro` to handle session data.

Example:

```javascript
app.get('/', async (req, res) => {
  if (!await req.miro.isAuthorized(req.session.id)) {
    res.redirect(req.miro.getAuthUrl())
    return
  }

  // ...
}
```

## See also

- [`Miro` object reference documentation](https://miroapp.github.io/api-clients/classes/index.Miro.html)
- [`MiroApi` object reference documentation](https://miroapp.github.io/api-clients/classes/index.MiroApi.html)
- [`Storage` interface reference documentation](https://miroapp.github.io/api-clients/interfaces/index._internal_.Storage.html)

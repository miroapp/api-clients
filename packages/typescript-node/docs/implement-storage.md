# Implement storage in the Miro Node.js client

Implement a [`Storage`](https://miroapp.github.io/api-clients/interfaces/index._internal_.Storage.html) interface to enable the [`Miro`](https://miroapp.github.io/api-clients/classes/index.Miro.html) class to automatically manage access and refresh tokens.

## Goal

This guide features a couple of examples that demonstrate how to implement a custom [`Storage`](https://miroapp.github.io/api-clients/interfaces/index._internal_.Storage.html) interface to add persistent storage functionality to the `Miro` class. \
The default is a simple in-memory implementation.

⚠️ For production deployments, we recommend using a custom implementation backed by a database. ⚠️

## Implement storage with a Redis backend

This example implements storage using [Redis](https://redis.io/) as a backend. The [Node-Redis library](https://www.npmjs.com/package/redis) enables connecting to a Redis instance.

Create a class to handle:

- Connecting to a Redis instance
- Fetcing state from Redis
- Storing state in Redis

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

This class can then be used in the `Miro` constructor by passing it as a parameter:

```javascript
const miro = new Miro({
  storage: new RedisStorage(),
})
```

## Implement storage with `express-session`

When using [express framework](https://expressjs.com/) with the [session middleware](https://www.npmjs.com/package/express-session), we can reuse the session storage for storing Miro state.

```javascript
// Setup session middlware before: app.use(session({...}))

app.use((req, res, next) => {
  // Create a separate Miro instance for each request
  req.miro = new Miro({
    // Define storage implementation inline
    storage: {
      // Load Miro state from the session object (if any)
      get(_userId) {
        return req.session.state
      },

      // Store Miro state in the session object
      set(_userId, state) {
        req.session.state = state
      },
    },
  })

  next()
})
```

Instead of using a global miro variable, each request will now have a separate instane attached to it on `req.miro`. Any endpoints that need to interact with Miro api should use `req.miro`:

```javascript
app.get('/', async (req, res) => {
  if (!await req.miro.isAuthorized(req.session.id)) {
    res.redirect(req.miro.getAuthUrl())
    return
  }

  // ...
}
```

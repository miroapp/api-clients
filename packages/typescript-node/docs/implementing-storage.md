# Implementing storage

In order to automatically manage access and refresh token Miro class needs and implementation of a `Storage` interface. The default implementation is a simple in-memory implementation. For production deployments, we recommend using a custom implementation backed by a database.

We will show few examples of custom `Storage` implementations in this guide.

### Redis backend example

In this example we implement a storage that is using Redis as a backend. We use [redis](https://www.npmjs.com/package/redis) node library to connect to a Redis instance

```javascript
//
const redis = require('redis')

class RedisStorage {

  // This method will initiate a connection to redis
  // On subsequent calls it will return the same redis connection
  async _getClient() {
    if (!this.redisClient) {
      const client = redis.createClient()
      await client.connect()
      this.redisClient = client
    }
    return this.redisClient
  }

  // This method will return the state from redis if there is any
  async get(userId) {
    const client = await this._getClient()
    const value = await client.get(userId.toString())
    if (!value) return undefined
    return JSON.parse(value)
  }

  // This method will store the state in redis
  // If state is undefined then the redis key will be deleted
  async set(userId, state) {
    const client = await this._getClient()

    // Delete the state if it's undefined
    if (!state) return await client.del(userId.toString())

    // Store the state in redis
    await client.set(userId.toString(), JSON.stringify(state))
  }
}
```

This class can then be used in the Miro constructor by passing it as a parameter:

```javascript
const miro = new Miro({
  storage: new RedisStorage()
})
```

### Using express-session as storage

When using express framework with the session middleware, we can reuse the session storage for storing Miro state.

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
      }
    }
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

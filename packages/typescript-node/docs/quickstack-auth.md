# Miro Node.js client quickstart guide (Using OAuth 2.0 and Express framework)

In this guide, you will learn how to get started with the Miro REST API by using OAuth 2.0 authorization code flow. We will cover setting up an Express HTTP server that uses Miro client library to implement authorization and token management for users.

At the end of this guide, you will have a simple application that will prompt users for installation and print a list of all boards the user has access to.

### Prerequisites

- Node.js v10+ (check with `node --version`)
- Prepare App data needed for the client:
  1. [Create a Developer team in Miro](https://developers.miro.com/docs/rest-api-build-your-first-hello-world-app#step-1-create-a-developer-team-in-miro)
  2. [Create your app in Miro](https://developers.miro.com/docs/rest-api-build-your-first-hello-world-app#step-2-create-your-app-in-miro)
  3. [Configure your app in Miro](https://developers.miro.com/docs/rest-api-build-your-first-hello-world-app#step-3-configure-your-app-in-miro)
  4. Add `http://127.0.0.1:4000/auth/miro/callback` to the Apps redirect URI list
  5. Save the values of `Client ID` and `Client secret` to use later

#### 1: Create a folder and navigate into it

```bash
mkdir my-miro-app
cd my-miro-app
```

#### 2: Initialize a new node project

```bash
npm init -y
```

#### 3: Install the client and Express dependencies

```bash
npm install @mirohq/miro-node express express-session
```

#### 4: Import the dependencides and initial setup

We start by creating `index.js` file. To work with the Miro client library and Express framework we need to import and initialize the libraries. We will also import crypto library to keep

```javascript
const express = require('express')
const {Miro} = require('@mirohq/miro-node')
const session = require('express-session')
```

Initializing Miro client is done by calling the Miro constructor:

```javascript
const miro = new Miro()
```

This requires `MIRO_CLIENT_ID`, `MIRO_CLIENT_SECRET` and `MIRO_REDIRECT_URL` environment variables to be set when running the app. Alternatively these values can be passed as [parameters](TODO) to the constructor. The values of `MIRO_CLIENT_ID` and `MIRO_CLIENT_SECRET` can be found on the App settings page. `MIRO_REDIRECT_URL` should be the same one that we previously configured: `http://127.0.0.1:4000/auth/miro/callback`.

After that we also initialize our express server and configure the [express-session](https://www.npmjs.com/package/express-session) middleware for session management. For production deployment make sure to replace the secret with a randomly generated string.

```javascript
const app = express()
app.use(
  session({
    secret: 'CHANGE_THIS_TO_A_RANDOM_STRING',
    resave: false,
    saveUninitialized: true,
  }),
)
```

Note: To keep the guide simple we use session ids to identify users. In a production setup we recommend using real user ids that are separate from session ids. This way users will not have to re-install the App that they already installed in a different session.

#### 5: Redirect new users to authorization page

In this step we setup a request handler for our Apps entrypoint. First thing we want to do is to check if the user has installed and authorized the App. We can do this by using `isAuthorized` method. If they haven't installed the App yet then we will redirect the user to Miro's Authorization URL that is generated with `getAuthUrl` method.

```javascript
app.get('/', async (req, res) => {
  if (!(await miro.isAuthorized(req.session.id))) {
    res.redirect(miro.getAuthUrl())
    return
  }

  // TODO: See step 7.
})
```

#### 6. Setup callback route

After a user installs and authorizes our App, they will be redirected back to the redirect URL (`MIRO_REDIRECT_URL`).

In order to store the access token required for using the API we will use `exchangeCodeForAccessToken` method. The method requires an id and the value of `code` parameter from the URL. It associates the token with the id and stores it internally using the `Storage`.

We also redirect the user back to the entrpoint.

```javascript
app.get('/auth/miro/callback', async (req, res) => {
  await miro.exchangeCodeForAccessToken(req.session.id, req.query.code)
  res.redirect('/')
})
```

#### 7. Render a list of boards to the users that installed the app

Now that we have obtained the access token we can start using the API. To do so, we make a call to the `as` method. This method takes a user id as parameter and will return an instance of the `MiroApi` class. It will automatically initialize it with the access token associated with a given user id.

In order to create a list of boards we use `getAllBoards` generator method. For each board we create a list item with the name of the board and a link to it.

```javascript
// Inside `app.get('/', ...` handler

res.contentType('html')
res.write('List of boards in the team:')
res.write('<ul>')

const api = miro.as(req.session.id)

for await (const board of api.getAllBoards()) {
  res.write(`<li><a href="${board.viewLink}">${board.name}</a></li>`)
}

res.write('</ul>')
res.send()
```

#### 8. Configure listener

Finally, we need to instruct the server to start listening to requests on port 4000:

```javascript
app.listen(4000, () => console.log('Started server on http://127.0.0.1:4000'))
```

#### 9. Running the code

To run the code we will use the command line. As mentioned in step 4, we need to configure environment variables with our App metadata:

```
export MIRO_CLIENT_ID="Client id from app settings page"
export MIRO_CLIENT_SECRET="Secret from app settings page"
export MIRO_REDIRECT_URL="http://127.0.0.1:4000/auth/miro/callback"
```

In order to start our App we tell node to execute `index.js` file from the command line:

```bash
node index.js
```

We can now test the App by opening http://127.0.0.1:4000 in the browser.

### Complete example

```javascript
const express = require('express')
const {Miro} = require('@mirohq/miro-node')
const session = require('express-session')

const miro = new Miro()

const app = express()
app.use(
  session({
    secret: 'CHANGE_THIS_TO_A_RANDOM_STRING',
    resave: false,
    saveUninitialized: true,
  }),
)

app.get('/', async (req, res) => {
  if (!(await miro.isAuthorized(req.session.id))) {
    res.redirect(miro.getAuthUrl())
    return
  }

  res.contentType('html')
  res.write('List of boards in the team:')
  res.write('<ul>')

  const api = miro.as(req.session.id)

  for await (const board of api.getAllBoards()) {
    res.write(`<li><a href="${board.viewLink}">${board.name}</a></li>`)
  }
  res.write('</ul>')
  res.send()
})

app.get('/auth/miro/callback', async (req, res) => {
  await miro.exchangeCodeForAccessToken(req.session.id, req.query.code)
  res.redirect('/')
})

app.listen(4000, () => console.log('Started server on http://127.0.0.1:4000'))
```

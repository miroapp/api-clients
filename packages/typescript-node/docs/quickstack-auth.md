# Miro Node.js client quick start guide with OAuth 2.0 and Express

Build a simple app based on the Miro Node.js client library, the OAuth 2.0 code grant flow, and the Express JavaScript web framework.

## Goal

This quick start guide helps you familiarize yourself with the [Miro REST API 2.0](https://developers.miro.com/reference/api-reference) and the [OAuth 2.0 authorization code grant flow](https://www.oauth.com/oauth2-servers/server-side-apps/authorization-code/) by building a simple app that uses the Miro Node.js client library.

The guide also walks you through setting up a web server based on the [Express](https://expressjs.com/) framework. Express uses the Miro Node.js client library to implement authorization and token management for users.

At the end of the guide, you'll have built a simple app that prompts users for installation )this triggers the OAuth authorization flow), and then prints a list of all the boards the current user has access to.

## Prerequisites

Before you begin, make sure that:

- You have a [Miro account](https://miro.com/signup/).
- You're [signed in to Miro](https://miro.com/login/).
- Your Miro account has a [Developer team](https://developers.miro.com/docs/rest-api-build-your-first-hello-world-app#step-1-create-a-developer-team-in-miro).
- Your development environment includes [Node.js 14.15 or a later version](https://nodejs.org/en/download/). \
  To check the Node.js version on your system:
  1. Open a terminal session.
  2. In the terminal, run `node --version`.

It's a good to already go through the following steps in your Miro account settings:  

1. [Create your app in Miro](https://developers.miro.com/docs/rest-api-build-your-first-hello-world-app#step-2-create-your-app-in-miro)
2. [Configure your app in Miro](https://developers.miro.com/docs/rest-api-build-your-first-hello-world-app#step-3-configure-your-app-in-miro)
3. In your app settings, go to **Redirect URI for OAuth2.0**; in the input field, enter the following URL: `http://127.0.0.1:4000/auth/miro/callback`; click **Add** to add it to the app [redirect URI list](https://www.oauth.com/oauth2-servers/redirect-uris/).
4. In your app settings, go to **App Credentials**, and save the values assigned to **Client ID** and **Client secret**. \
   You'll need to use these values later.

## Build the app

After configuring the options in the previous section, you can start building the app.
### Step 1: create the project directory

1. Open a terminal session.
2. If it doesn't yet exist, create the app root directory, and then go to the newly created directory. \
   You can replace the `my-miro-app` placeholder with the name that you want to give to your app.

```bash
mkdir my-miro-app
cd my-miro-app
```

### Step 2: initialize the project

In the app root directory, initialize a new Node.js project:

```bash
npm init -y
```

### Step 3: install client and dependencies

Install the Miro Node.js client library, the Express web framework, and its dependencies:

```bash
npm install @mirohq/miro-node express express-session
```

### Step 4: import and initialize dependencies

Now it's time to take care of the initial setup of your project:

- Create the `index.js` file.
- Import the dependencies that the app needs to run.
- Initialize the imported resources. 

[`index.js`](https://developers.miro.com/docs/app-panels-and-modals#headless) contains the logic that executes after the app is authorized, installed, and loaded on the board. Code in this file runs as long as the board that contains the app is open.

To work with the Miro Node.js client library and the Express web framework, you need to import and initialize the corresponding libraries:

```javascript
const {Miro} = require('@mirohq/miro-node')
const express = require('express')
const session = require('express-session')
```

To initialize the Miro Node.js client, call the `Miro` constructor:

```javascript
const miro = new Miro()
```

By default, the client loads the app configuration from the following environment variables:

- `MIRO_CLIENT_ID`: the app's **Client ID**, generated when [creating the app](#prerequisites) in your Miro account settings.
- `MIRO_CLIENT_SECRET`: the app's **Client secret**, generated when [creating the app](#prerequisites) in your Miro account settings.
- `MIRO_REDIRECT_URL`: the app's **Redirect URI for OAuth2.0**, specified when [creating the app](#prerequisites) in your Miro account settings. Its value is `http://127.0.0.1:4000/auth/miro/callback`.

After initializing the Miro Node.js client, proceed to initialize the Express server, and to configure the [express-session](https://www.npmjs.com/package/express-session) middleware for session management.

```javascript
const app = express()
app.use(
  session({
    secret: '<randomly-generated-secret-string>',
    resave: false,
    saveUninitialized: true,
  }),
)
```

⚠️ In production deployments replace the secret with a randomly generated string. ⚠️

ℹ️ For the sake of simplicity, the quick start guide identifies users with session IDs. \
In production deployments use actual user IDs, separate from session IDs. This avoids repeatedly prompting users to reinstall the app that they already installed in a previous, different session.

### Step 5: redirect new users to the authorization page

In this step, you set up a request handler for the app's entry point. \
First, check if the user has already authorized and installed the app. The [`isAuthorized`](https://miroapp.github.io/api-clients/classes/index.Miro.html#isAuthorized) method helps you do that. \
If they haven't installed the app, they're redirected to the Miro authorization URL. The [`getAuthUrl`](https://miroapp.github.io/api-clients/classes/index.Miro.html#getAuthUrl) method generates this URL for you.

```javascript
app.get('/', async (req, res) => {
  if (!(await miro.isAuthorized(req.session.id))) {
    res.redirect(miro.getAuthUrl())
    return
  }

  // TODO: See step 7.
})
```

### Step 6: set up a callback route

After a user authorizes and installs the app, they're redirected back to the redirect URL assigned to the `MIRO_REDIRECT_URL` environment variable, and specified in the app's **Redirect URI for OAuth2.0** when [creating the app](#prerequisites) in your Miro account settings. \
The callback URL is `http://127.0.0.1:4000/auth/miro/callback`.

The [`exchangeCodeForAccessToken`](https://miroapp.github.io/api-clients/classes/index.Miro.html#exchangeCodeForAccessToken) method enables exchanging the temporary OAuth code for an access token that the app can use to send API requests. \
The method requires passing an ID and the value of the `code` URL parameter:

- It exchanges the code for an access token.
- Then, it associates the token with the ID.
- Lastly, it stores the token internally using the client [`Storage`](https://miroapp.github.io/api-clients/interfaces/index._internal_.Storage.html).

After authorizing the user, they're redirected back to the entry point (see Step 5).

```javascript
app.get('/auth/miro/callback', async (req, res) => {
  await miro.exchangeCodeForAccessToken(req.session.id, req.query.code)
  res.redirect('/')
})
```

### Step 7: render a list of boards

After completing the OAuth 2.0 authorization flow and obtaining an access token, the app can send requests to the API. \
The first call invokes the [`as`](https://miroapp.github.io/api-clients/classes/index.Miro.html#as) method. The `as` method takes a user ID as an argument, and it returns an instance of the [`MiroApi`](https://miroapp.github.io/api-clients/classes/index.MiroApi.html) class. \
The method also automatically initializes `MiroApi` with the access token associated with the specified user ID.

The `MiroApi` instance enables retrieving board information, and the [`Board`](https://miroapp.github.io/api-clients/classes/index._internal_.Board.html) class.

Use the [`getAllBoards`](https://miroapp.github.io/api-clients/classes/index.MiroApi.html#getAllBoards) generator method to fetch a list of boards that the team the app was installed to can access. \
Then, render each entry about a retrieved board as a list item with the name of the board, and a link to it.

```javascript
// Inside the `app.get('/', ...` handler

res.contentType('html')
res.write('List of boards available to the team:')
res.write('<ul>')

const api = miro.as(req.session.id)

for await (const board of api.getAllBoards()) {
  res.write(`<li><a href="${board.viewLink}">${board.name}</a></li>`)
}

res.write('</ul>')
res.send()
```

### Step 8: configure a listener

Finally, we need to instruct the server to start listening to requests on port 4000:

```javascript
app.listen(4000, () => console.log('Started server on http://127.0.0.1:4000'))
```

### Step 9. Running the code

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

## Complete example

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

## See also

- []()
- []()
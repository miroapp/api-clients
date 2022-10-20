# Miro Node.js client quick start guide for task automation

Build a simple app based on the Miro Node.js client library to implement basic task automation on a Miro board.

## Goal

This quick start guide helps you familiarize yourself with the [Miro REST API 2.0](https://developers.miro.com/reference/api-reference) by building a simple app that uses the Miro Node.js client library.

The app enables sending an API request using the Node client library. For the sake of simplicity and to skip the OAuth authorization flow, the app uses a hard-coded access token.

At the end of the guide, you'll have built a simple app that retrieves a list of all the boards you have access to in a specific team.

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
5. [Install the app](https://developers.miro.com/docs/rest-api-build-your-first-hello-world-app#step-4-install-the-app) to generate an access token. This token grants access to the boards associated with the team that the app is installed to. \
   Save the access token: you'll need to use it later.

> 📘
>
> To integrate Miro into an existing app, [start from step 3](#step-3-install-the-client).

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
npm init
```

To set default values, press `Enter` when prompted during the process. \
Alternatively, set appropriate custom values.

### Step 3: install the client

Install the Miro Node.js client library:

```bash
npm install @mirohq/miro-api
```

### Step 4: create the project file

Now it's time to set up your project:

1. Create an `index.js` file.
2. Copy the following code snippet, and paste it to the newly created `index.js` file:

```javascript
const {MiroApi} = require('@mirohq/miro-api')
const api = new MiroApi('<YOUR_APP_ACCESS_TOKEN>')

const app = (async function () {
  for await (const board of await api.getAllBoards()) {
    console.log(board)
  }
})()
```

3. Replace the `YOUR_APP_ACCESS_TOKEN` placeholder with the actual access token that you obtained when you [installed and authorized the app](#prerequisites) in your Miro account settings.

[`index.js`](https://developers.miro.com/docs/app-panels-and-modals#headless) contains the logic that executes after the app is authorized, installed, and loaded on the board. Code in this file runs as long as the board that contains the app is open.

#### Step 5: run the code

You built the app. Now it's time to run it. \
For the sake of simplicity, run it from the command line. \
To start the app, execute `index.js` with Node.js:

```bash
node index.js
```

The response in JSON format lists all the [boards](https://miroapp.github.io/api-clients/classes/index._internal_.Board.html) that the current user can access in the team that the app was installed to.

Example response listing one board:

```typescript
Board {
  _api: MiroApi {
    accessToken: '<YOUR_APP_ACCESS_TOKEN>',
    basePath: 'https://api.miro.com',
    logger: undefined,
    httpTimeout: undefined
  },
  id: 'uZyVOJkVFXk=',
  createdAt: 2022-09-08T15:04:41.000Z,
  createdBy: UserInfoShort {
    id: '3074457351234567890',
    name: 'Keyser Söze',
    type: 'user'
  },
  currentUserMembership: BoardMember {
    id: '3074457351234567890',
    name: 'Keyser Söze',
    role: 'owner',
    type: 'board_member'
  },
  description: 'Public board to test vague plans for world domination',
  modifiedAt: 2022-09-08T15:05:54.000Z,
  modifiedBy: UserInfoShort {
    id: '3074457351234567890',
    name: 'Keyser Söze',
    type: 'user'
  },
  name: 'A very secret public board',
  owner: UserInfoShort {
    id: '3074457351234567890',
    name: 'Keyser Söze',
    type: 'user'
  },
  picture: undefined,
  policy: BoardPolicy {
    permissionsPolicy: BoardPermissionsPolicy {
      collaborationToolsStartAccess: 'all_editors',
      copyAccess: 'team_editors',
      sharingAccess: 'team_members_with_editing_rights'
    },
    sharingPolicy: BoardSharingPolicy {
      inviteToAccountAndBoardLinkAccess: 'editor',
      organizationAccess: 'private',
      access: 'view',
      teamAccess: 'private'
    }
  },
  team: Team {
    id: '3074457359876543210',
    name: 'The usual suspects',
    picture: undefined,
    type: 'team'
  },
  type: 'board',
  viewLink: 'https://miro.com/app/board/uZyVOJkVFXk='
}
```

## Next steps

You can access and use data from each `Board` as needed. \
For more information about the methods that `Board` makes available, see the [reference documentation](https://miroapp.github.io/api-clients/classes/index._internal_.Board.html).

You can also start integrating your data into Miro. For example, add [sticky notes](https://miroapp.github.io/api-clients/classes/index._internal_.StickyNoteItem.html), create [app cards](https://miroapp.github.io/api-clients/classes/index._internal_.AppCardItem.html), and more. \
For more inspiration, see the [example app to manage sticky notes and tags](https://github.com/miroapp/app-examples/tree/main/examples/node-stickies-csv) on our GitHub repo.

# Miro node client quickstart guide

In this guide, you will learn how to get started with the Miro REST API in no time. We will cover how to make your first API call using the Node client library without implementing the authorization process by using a hardcoded access_token.

At the end of this guide, you will have a NodeJs project able to get the list of all the boards you have access to in a specific team.

### Prerequisites

- 1: Have a Miro.com account
- 2: Create a Developer team, create a developer app, configure your app and install it to generate an access token. Please follow steps 2 to 5 on the [Build your first Hello, World app](https://developers.miro.com/docs/build-your-first-hello-world-app#step-2-create-a-developer-team-in-miro) guide. Save the `access_token` to use it later.
- 3: Have node v10+ installed (check with `node --version`)
 
If you want to integrate Miro into an existing app, start at step 3.

#### 1: Create a folder and navigate into it

```bash
mkdir my-miro-app
cd my-miro-app
```

#### 2: Initialize a new node project

```bash
npm init
```

Answer all questions (you can just press enter for all questions to use the default values)

#### 3: Install the client

```bash
npm install @mirohq/miro-node
```

#### 4: In your project, create a `index.js` and paste this snippet:

```js
const {MiroApi} = require('@mirohq/miro-node')
const api = new MiroApi('YOUR_ACCESS_TOKEN')

const app = (async function () {
  const boards = await api.getBoards()
  console.log(boards)
})()
```

Replace `YOUR_ACCESS_TOKEN` with the token you got the the Miro settings page.

#### 5: In your terminal, run the code:

```bash
node index.js
```

You will see a log with an array of all the [boards](https://miroapp.github.io/api-clients/classes/highlevel_Board.Board.html) you have access to in the selected team.

```ts
[
  Board {
    _api: MiroApi,
    _headParams: [ 'uXjVPZcwwIY=' ],
    createdAt: 2022-09-08T14:15:13.000Z,
    createdBy: UserInfoShort,
    currentUserMembership: BoardMember,
    description: '',
    id: 'uXjVPZcwwIY=',
    modifiedAt: 2022-09-22T13:21:41.000Z,
    modifiedBy: UserInfoShort,
    name: 'Node client test board',
    owner: UserInfoShort,
    picture: undefined,
    policy: BoardPolicy,
    team: Team,
    type: 'board',
    viewLink: 'https://miro.com/app/board/uXjVPZcwwIY='
  },
  ...etc
]
```

You can now use the data from `boards` as needed, see the [docs for `Board`](https://miroapp.github.io/api-clients/classes/highlevel_Board.Board.html#getAllItems) to see the methods that are available. I.e. there is a method to get all items on a board `board.getAllItems()`.

Now start integrating your data into Miro, add some [stickies](https://miroapp.github.io/api-clients/classes/highlevel.StickyNoteItem.html), [add app cards](https://miroapp.github.io/api-clients/classes/highlevel.AppCardItem.html) or whatever else you want to do. For more inspiration, see [the example app](https://github.com/miroapp/app-examples/tree/main/examples/rest-stickies-csv) in the example repo.

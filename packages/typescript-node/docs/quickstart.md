# Miro node client quickstart guide
In this guide, we will do the bare minimum to get some data out of the Miro REST API. For authentication we will use a hard-coded access token. In a later guide we will be more thorough and add proper authentication. 

### Prerequisites
  - Go through steps 2-5 on the [create your app](https://developers.miro.com/docs/build-your-first-hello-world-app#step-2-create-a-developer-team-in-miro) docs. In step 5, copy the 'Access token'.


1: Create a folder and navigate into it
```bash
mkdir my-miro-app
cd my-miro-app
```

2: Initialize a new node project, answer all questions (you can just press enter for all questions to use the default values)
```bash
npm init
```

3: Open the created file (`pacakge.json`), and add:
```json
"type": "module"
```

3: Install the client
```bash
npm add @mirohq/miro-node
```

4: In your project, create a `index.js` and paste this snippet:

```js
import {MiroApi} from '@mirohq/miro-node'
const api = new MiroApi('YOUR_ACCESS_TOKEN')

const boards = await api.getBoards()

console.log(boards)
```
5: In your terminal, run the code:
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
# Miro node client quickstart guide

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

5: Go through steps 2-5 on the [create your app](https://developers.miro.com/docs/build-your-first-hello-world-app#step-2-create-a-developer-team-in-miro) docs. In step 5, copy the 'Access token'. Replace YOUR_ACCESS_TOKEN in the snippet with your token.

6: In your terminal, run the code:
```bash
node index.js
```

You should see a log with an array all boards you have access to in the selected team.

```ts
[
  Board {
    _api: MiroApi {
      accessToken: '...',
      basePath: 'https://api.miro.com',
      logger: undefined
    },
    _headParams: [ 'uXjVPZcwwIY=' ],
    createdAt: 2022-09-08T14:15:13.000Z,
    createdBy: UserInfoShort {
      id: '...',
      name: 'Mettin Parzinski',
      type: 'user'
    },
    currentUserMembership: BoardMember {
      id: '...',
      name: 'Mettin Parzinski',
      role: 'owner',
      type: 'board_member'
    },
    description: '',
    id: 'uXjVPZcwwIY=',
    modifiedAt: 2022-09-22T13:21:41.000Z,
    modifiedBy: UserInfoShort {
      id: '...',
      name: 'Mettin Parzinski',
      type: 'user'
    },
    name: 'Node client test board',
    owner: UserInfoShort {
      id: '...',
      name: 'Mettin Parzinski',
      type: 'user'
    },
    picture: undefined,
    policy: BoardPolicy {
      permissionsPolicy: [BoardPermissionsPolicy],
      sharingPolicy: [BoardSharingPolicy]
    },
    team: Team {
      id: '...',
      name: 'My Dev team',
      picture: undefined,
      type: 'team'
    },
    type: 'board',
    viewLink: 'https://miro.com/app/board/uXjVPZcwwIY='
  },
]
```
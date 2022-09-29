import * as dotenv from 'dotenv'

dotenv.config()
import express from 'express'
import ejs from 'ejs'
import {Miro} from '@mirohq/miro-node'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set('view engine', 'ejs')

const miro = new Miro({
  clientId: process.env.MIRO_CLIENT_ID,
  clientSecret: process.env.MIRO_CLIENT_SECRET,
  redirectUrl: process.env.MIRO_REDIRECT_URL,
})

const USER_ID = 'WE_DONT_NEED_A_REAL_ID'

app.get('/login', async (req, res) => {
  if (await miro.isAuthorized(USER_ID)) {
    res.redirect('/')
    return
  }
  res.redirect(miro.getAuthUrl())
})

app.get('/auth/miro/callback/', async (req, res) => {
  try {
    await miro.handleAuthorizationCodeRequest(USER_ID, req)
  } catch (e) {
    console.error(e)
  }
  res.redirect('/')
})

app.get('/', async (req, res) => {
  if (!(await miro.isAuthorized(USER_ID))) {
    res.redirect('/login')
    return
  }
  const api = miro.as(USER_ID)

  let body = `
    <html lang="en">
        <head>
            <title>Node client test</title>
              <link rel="stylesheet" href="https://unpkg.com/mirotone/dist/styles.css" />
        </head>
    </html>
    <body>
    <h1>All boards you have access to</h1><ul>`
  for await (const board of api.getAllBoards()) {
    body += `<li><a href="boards/${board.id}">${board.name} (${board.id})</a></li>`
  }
  body += '</ul></body>'

  res.send(body)
})

app.get('/boards/:boardId/item/:itemId', async (req, res) => {
  if (!(await miro.isAuthorized(USER_ID))) {
    res.redirect('/login')
    return
  }

  const boardId = req.params.boardId
  const itemId = req.params.itemId
  const connectedTo = req.query.connectedTo
  const api = miro.as(USER_ID)
  const board = await api.getBoard(boardId)
  const item = await board.getItem(itemId)

  const boardItemsGenerator = await board.getAllItems()
  const boardItems = []
  for await (const item of boardItemsGenerator) {
    boardItems.push(item)
  }
  res.render('boardItem', {item, board, boardItems, connectedTo})
})

app.get('/boards/:boardId', async (req, res) => {
  if (!(await miro.isAuthorized(USER_ID))) {
    res.redirect('/login')
    return
  }

  const boardId = req.params.boardId
  const api = miro.as(USER_ID)
  const board = await api.getBoard(boardId)
  const boardItemsGenerator = await board.getAllItems()
  const boardItems = []
  for await (const item of boardItemsGenerator) {
    boardItems.push(item)
  }
  res.render('board', {boardItems, board})
})

app.post('/connectTo/:boardId/:itemId', async (req, res) => {
  const api = miro.as(USER_ID)
  const board = await api.getBoard(req.params.boardId)
  const item = await board.getItem(req.params.itemId)

  try {
    await item.connectTo(
      req.body.itemId,
      {
        snapTo: 'left',
      },
      {
        style: {
          color: '#9510ac',
          startStrokeCap: 'erd_zero_or_one',
          strokeColor: '#2d9bf0',
          strokeStyle: 'dotted',
          strokeWidth: '4',
          textOrientation: 'aligned',
        },
        shape: 'elbowed',
        captions: [{content: new Date().toUTCString()}, {content: 'whoa'}],
      },
    )
  } catch (e) {
    console.error(e)
  }

  res.redirect(`/boards/${req.params.boardId}/item/${req.params.itemId}?connectedTo=${req.body.itemId}`)
})

app.listen(3000, () => console.log(`Listening on localhost, port 3000. http://localhost:3000`))

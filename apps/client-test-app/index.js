import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import {Miro} from '@mirohq/miro-node'

const app = express()

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

  let body = '<h1>All boards you have access to</h1><ul>'
  for await (const board of api.getAllBoards()) {
    body += `<li><a href="boards/${board.id}">${board.name} (${board.id})</a></li>`
  }
  body += '</ul>'

  res.send(body)
})

app.get('/boards/:boardId/item/:itemId', async (req, res) => {
  if (!(await miro.isAuthorized(USER_ID))) {
    res.redirect('/login')
    return
  }

  const boardId = req.params.boardId
  const itemId = req.params.itemId
  const api = miro.as(USER_ID)
  const board = await api.getBoard(boardId)
  const item = await board.getItem(itemId)

  let body = `
    <h1><a href="/boards/${boardId}" title="Back to board">${board.name}</a> / ${item.id}</h1>
    <dl>
        <dt>id:</dt>
        <dd>${item.id}</dd>
        <dt>type:</dt>
        <dd>${item.type}</dd>
        <dt>id:</dt>
        <dd>${item.id}</dd>
        <dt>Board id:</dt>
        <dd>${item.boardId}</dd>
        <dt>data.content:</dt>
        <dd>${item.data?.content}</dd>
        <dt>geometry:</dt>
        <dd><pre>${JSON.stringify(item.geometry, null, 2)}</pre></dd>
        <dt>modifiedAt:</dt>
        <dd>${item.modifiedAt}</dd>
        <dt>modifiedBy:</dt>
        <dd><pre>${JSON.stringify(item.modifiedBy, null, 2)}</pre></dd>
        <dt>position:</dt>
        <dd><pre>${JSON.stringify(item.position, null, 2)}</pre></dd>
    </dl>
    `

  res.send(body)
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
  console.log(boardItems)

  let body = `
    <h1>${board.name} / ${boardId}</h1>
    <a href="/">Back to all boards</a>
    <ul>
        ${boardItems
          .map(
            (item) =>
              `<li>ID: <em><a href="/boards/${boardId}/item/${item.id}">${item.id}</a></em>  (${item.type})</li>`,
          )
          .join('')}
    </ul>
  `

  res.send(body)
})
app.listen(3000, () => console.log(`Listening on localhost, port 3000. http://localhost:3000`))

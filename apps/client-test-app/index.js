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

  const page = req.query.page || 1
  const boardsPerPage = 10

  let body = `<h1>Boards you have access to (page ${page})</h1><ul>`
  const boards = await api.getBoardsPaginated({
    teamId: '3458764515148204448',
    limit: boardsPerPage.toString(),
    offset: (page - 1) * boardsPerPage,
  })

  for (const board of boards.body.data) {
    body += `<li><a href="boards/${board.id}">${board.name} (${board.id})</a></li>`
  }
  body += `</ul>`

  const {total} = boards.body
  const pages = Math.ceil(total / boardsPerPage)

  if (pages > 1) {
    body += `
    <h2>Pages</h2>
    <ul>
        ${new Array(pages)
          .fill(null)
          .map((_, i) => `<li><a href="/?page=${i + 1}">${i + 1}</a></li>`)
          .join('')}
    </ul>
    `
  }

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

  await item.connectTo(req.body.itemId)

  res.redirect(`/boards/${req.params.boardId}/item/${req.params.itemId}?connectedTo=${req.body.itemId}`)
})

app.listen(3000, () => console.log(`Listening on localhost, port 3000. http://localhost:3000`))

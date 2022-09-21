import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import ejs from 'ejs'
import {Miro} from '@mirohq/miro-node'

const app = express()
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

  res.render('boardItem', {item, board})
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
app.listen(3000, () => console.log(`Listening on localhost, port 3000. http://localhost:3000`))

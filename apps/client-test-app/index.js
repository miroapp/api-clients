import express from 'express'
import {Miro} from '@mirohq/miro-node'

const app = express()

const miro = new Miro({
  clientId: '3458764532875095934',
  clientSecret: 'SgoAjkPYfF9NaHcVRevnY6GYwzfjtgtU',
  redirectUrl: 'https://plenty-bears-buy-208-127-180-6.loca.lt/auth/miro/callback',
})
const USER_ID = 3458764514451650476
const TEST_BOARD_ID = 'uXjVPZcwwIY='
const TEST_ITEM_ID = '3458764533355792545'

app.get('/login', async (req, res) => {
  if (await miro.isAuthorized(USER_ID)) {
    await miro.handleAuthorizationCodeRequest(USER_ID, req)
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

  let body = ''

  body += await testHighLevelApi(api.getAllBoards())
  body += await testHighLevelBoard(api)
  body += await testHighLevelFrameItem(api)
  body += await testHighLevelItem(api)
  body += await testHighLevelTeam(api)

  res.send(body)
})

app.listen(3000, () => console.log(`Listening on localhost, port 3000. http://localhost:3000`))

const testHighLevelApi = async (allBoards) => {
  // Test if api.getAllBoards() is working
  let response = '<h1>All boards: (fetched by <code>api.getAllBoards()</code>)</h1><ul>'
  for await (const board of allBoards) {
    response += `<li><a href="${board.viewLink}">${board.name} (${board.id})</a></li>`
  }
  response += '</ul>'

  return response
}
const testHighLevelBoard = async (api) => {
  // Test if board.getAllItems() is working
  let response = `<h1>Board items</h1><ul>`
  for await (const board of api.getAllBoards()) {
    if (board.id !== TEST_BOARD_ID) continue
    response += `<li>${board.name} (${board.id})</li><ul>`
    for await (const item of board.getAllItems()) {
      response += `<li>id: <em>${item.id}</em> / type: <em>${item.type}</em></li>`
    }
    response += '</ul>'
  }
  response += '</ul>'

  // Test if board.getItem() is working
  response += `<h1>board.getItem(${TEST_ITEM_ID})</h1>`
  for await (const board of api.getAllBoards()) {
    if (board.id !== TEST_BOARD_ID) continue
    const item = await board.getItem(TEST_ITEM_ID)
    response += `<ul>
        <li>ID: <em>${item.id}</em></li>
        <li>Type: <em>${item.type}</em></li>
        <li>Text: <em>${item.data.content}</em></li>
        <li>Geometry: <em>${JSON.stringify(item.geometry, null, 2)}</em></li>
        <li>Modified at: <em>${new Date(item.modifiedAt)}</em></li>
    </ul>`
  }

  return response
}
const testHighLevelFrameItem = async (api) => ''
const testHighLevelItem = async (api) => ''
const testHighLevelTeam = async (api) => ''

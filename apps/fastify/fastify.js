import {Miro} from '@mirohq/miro-api'
import Fastify from 'fastify'
import fastifyCookie from '@fastify/cookie'

const miro = new Miro()

const app = Fastify()
app.register(fastifyCookie)

// Generate user ids for new sessions
app.addHook('preHandler', (request, reply, next) => {
  if (!request.cookies.userId) {
    const userId = Math.random()
    reply.setCookie('userId', userId)
    request.cookies.userId = userId
  }
  next()
})

// Exchange the code for a token in the OAuth2 redirect handler
app.get('/auth/miro/callback', async (req, reply) => {
  await miro.exchangeCodeForAccessToken(req.cookies.userId, req.query.code)
  reply.redirect('/')
})

app.get('/', async (req, reply) => {

  // If user did not authorize the app, then redirect them to auth url
  if (!await miro.isAuthorized(req.cookies.userId)) {
    reply.redirect(miro.getAuthUrl())
    return
  }

  // Initialize the API for the current user
  const api = miro.as(req.cookies.userId)

  // Print the info of the first board
  for await (const board of api.getAllBoards()) {
    return board
  }
})

await app.listen({port: 4000})

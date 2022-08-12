import Miro from '../index'
import Fastify from 'fastify'

const fastify = Fastify()
const miro = new Miro()

fastify.get('/login', async (_req, reply) => {
  if (await miro.isAuthorized('some_user_id')) {
    reply.redirect('/')
    return
  }
  reply.redirect(miro.getAuthUrl())
})

fastify.get('/auth/miro/callback', async (req, reply) => {
  await miro.handleAuthorizationCodeRequest('some_user_id', req)
  reply.redirect('/')
})

fastify.get('/', async () => {
  const response = await miro.api('some_user_id').getBoards()
  if (!response.body.data) throw { statusCode: 404, message: 'No boards found' }
  return response.body.data[0].viewLink;
})

;(async () => await fastify.listen({port: 4000}))()

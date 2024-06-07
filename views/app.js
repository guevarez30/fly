import { Hono } from 'hono'
import PageController from './controllers/page'

export function views () {
  const app = new Hono()
  app.get('/', PageController)
  return app
}

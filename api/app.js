import { Hono } from 'hono'

export function api () {
  const app = new Hono().basePath('/api')
  app.get('*', () => Response('Hello banana'))
  return app
}

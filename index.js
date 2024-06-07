import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { serveStatic } from 'hono/bun'

import { views } from './views/app'
import { api } from './api/app'

const app = new Hono()

app.use(logger())
app.use('/static/*', serveStatic({ root: './' }))
app.route('/', api()) // Handle /api
app.route('/', views())

export default {
  port: 3000,
  fetch: app.fetch
}

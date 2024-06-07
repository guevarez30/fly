import { Hono } from 'hono'
import { BookingFormController } from './controllers/book'
import NoopController from './controllers/noop'
import PageController from './controllers/page'

export function views () {
  const app = new Hono()
  app.get('/', PageController)
  app.get('/noop', NoopController)
  app.get('/booking-form', BookingFormController)
  return app
}

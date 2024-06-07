import { renderToReadableStream } from 'react-dom/server'
import { BookingForm } from '../ui/components/popup'

export async function BookingFormController () {
  const stream = await renderToReadableStream(<BookingForm />)
  return new Response(stream, {
    headers: { 'Content-Type': 'text/html' }
  })
}

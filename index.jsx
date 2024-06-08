import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'

import Layout from "./views/ui/layout"
import Page from "./views/ui/page"

import {BookingForm} from "./views/ui/components/popup"

const port = process.env.port ?? 3000

try{

new Elysia()
    .use(html())
    .get('/public/style.css', () => Bun.file('public/style.css'))
    .get('/public/images/captain.jpeg', () => Bun.file('public/images/captain.jpeg'))
    .get('/public/images/boat-1.jpeg', () => Bun.file('public/images/boat-1.jpeg'))
    .get('/public/images/boat-2.jpeg', () => Bun.file('public/images/boat-2.jpeg'))
    .get('/public/images/boat-3.jpeg', () => Bun.file('public/images/boat-3.jpeg'))
    .get('/public/images/redfish.webp', () => Bun.file('public/images/redfish.webp'))
    .get('/', () => (
    	<Layout>
    	 <Page/>
    	</Layout>
    ))
    .get('/booking-form', () => (
    	<BookingForm/>
    ))
	.get('/noop', () => (<></>))
	.post('/booking-form', () => (<></>))
    .listen(port)
}catch(err){
	console.error(err)
}

console.log("App started on port: ",port)

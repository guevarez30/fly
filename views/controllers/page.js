import Layout from '../ui/layout'

async function PageController () {
  const stream = await renderToReadableStream(
    <Layout>
      <Page />
    </Layout>
  )
  return new Response(stream, {
    headers: { 'Content-Type': 'text/html' }
  })
}

export default PageController

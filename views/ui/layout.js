// import Page from '../ui/page'

export default function Layout () {
  return (
    <html>
      <head>
        <title>App</title>
        <link href='/static/style.css' rel='stylesheet' />
        <script src='https://unpkg.com/htmx.org@1.9.9' />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' />
      </head>
      <body id='page'>
        <div id='popup' />
      	<div> the basics </div>
      </body>
    </html>
  )
}

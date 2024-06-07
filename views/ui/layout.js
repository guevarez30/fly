export default function Layout ({ children }) {
  return (
    <html>
      <head>
        <title>App</title>
        <link href='/static/style.css' rel='stylesheet' />
        <script src='https://unpkg.com/htmx.org@1.9.9' />
      </head>
      <body id='page' className='bg-red'>
        {children}
      </body>
    </html>
  )
}

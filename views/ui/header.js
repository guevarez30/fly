function Book () {
  return (
    <div className='w-64 flex items-center justify-center'>
      <div className='flex font-bold py-2 px-4 text-lg rounded-xl items-center justify-center bg-primary text-primary-foreground hover:cursor-pointer hover:ring-offset-primary active:bg-primary-foreground active:text-primary'>
        Book  Trip
      </div>
    </div>
  )
}

const socialLinks = [
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/',
    iconClass: 'fab fa-instagram'
  },
  {
    platform: 'YouTube',
    url: 'https://www.youtube.com/',
    iconClass: 'fab fa-youtube'
  },
  {
    platform: 'Facebook',
    url: 'https://www.facebook.com/',
    iconClass: 'fab fa-facebook'
  }
]

function Socials () {
  return (
    <div className='w-64 flex items-center justify-evenly'>
      {socialLinks.map((social, index) => (
        <a className='text-primary' key={index} href={social.url} target='_blank' rel='noreferrer'>
          <i className={`${social.iconClass} text-primary text-2xl`} />
        </a>
      ))}
    </div>
  )
}

export default function Header () {
  return (
    <header className='fixed bg-gray-50 bg-opacity-50 top-0 left-0 w-full shadow-md z-10 h-16 flex'>
      <Socials />
      <div className='flex items-center justify-center gap-6 h-full w-full'>
        <a className='text-gray-500 text-lg font-bold' href='#captain'>Captain</a>
        <a className='text-gray-500 text-lg font-bold' href='#media'>Media</a>
        <a className='text-gray-500 text-lg font-bold' href='#rates'>Rates</a>
        <a className='text-gray-500 text-lg font-bold' href='#skiff'>Skiff</a>
        <a className='text-gray-500 text-lg font-bold' href='#contact'>Contact</a>
      </div>
      <Book />
    </header>

  )
}

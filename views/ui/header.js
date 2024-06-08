function Book () {
  return (
    <div className='w-64 flex items-center justify-center'>
      <button
        className='flex font-bold py-2 px-4 text-lg rounded-xl items-center justify-center bg-primary text-primary-foreground hover:cursor-pointer hover:ring-offset-primary active:bg-primary-foreground active:text-primary'
        type='button'
        hx-trigger='click'
        hx-get='/booking-form'
        hx-swap='innerHTML'
        hx-target='#popup'
      >
        Book Trip
      </button>
    </div>
  )
}

function Socials () {
  return (
	<div class='w-64 flex items-center justify-evenly'>
	  <a class='text-primary' href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
	    <i class='fab fa-instagram text-primary text-2xl'></i>
	  </a>
	  <a class='text-primary' href='https://www.youtube.com/' target='_blank' rel='noreferrer'>
	    <i class='fab fa-youtube text-primary text-2xl'></i>
	  </a>
	  <a class='text-primary' href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
	    <i class='fab fa-facebook text-primary text-2xl'></i>
	  </a>
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
      </div>
      <Book />
    </header>

  )
}

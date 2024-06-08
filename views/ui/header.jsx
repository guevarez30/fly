function Book () {
  return (
    <div className='w-64 flex items-center justify-center'>
      <button
        className='btn btn-primary btn-xs sm:btn-sm md:btn-md '
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
	  <a class='' href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
	    <i class='fab fa-instagram text-primary text-sm sm:text-md md:text-lg lg:text-xl'></i>
	  </a>
	  <a class='' href='https://www.youtube.com/' target='_blank' rel='noreferrer'>
	    <i class='fab fa-youtube text-primary text-sm sm:text-md md:text-lg lg:text-xl'></i>
	  </a>
	  <a class='' href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
	    <i class='fab fa-facebook text-primary text-sm sm:text-md md:text-lg lg:text-xl'></i>
	  </a>
    </div>
  )
}

export default function Header () {
  return (
    <header className='fixed  bg-opacity-50 top-0 left-0 w-full shadow-md z-10 h-4 sm:h-8 md:h-12 lg:h-16 flex'>
      <Socials />
      <div className='flex items-center justify-center gap-2 sm:gap-4 md:gap-6 h-full w-full'>
        <a className='text-sm sm:text-md md:text-lg lg:text-xl font-bold' href='#captain'>Captain</a>
        <a className='text-sm sm:text-md md:text-lg lg:text-xl font-bold' href='#media'>Media</a>
        <a className='text-sm sm:text-md md:text-lg lg:text-xl font-bold' href='#rates'>Rates</a>
        <a className='text-sm sm:text-md md:text-lg lg:text-xl font-bold' href='#skiff'>Skiff</a>
      </div>
      <Book />
    </header>
  )
}

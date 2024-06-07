export default function Page () {
  return (
    <>
      <header className='fixed bg-white-100  top-0 left-0 w-full shadow-md z-10 h-16 flex items-center justify-center gap-2'>
        <a className='text-gray-500 font-bold' href='#captain'>Captain</a>
        <a className='text-gray-500 font-bold' href='#book'>Book</a>
        <a className='text-gray-500 font-bold' href='#media'>Media</a>
        <a className='text-gray-500 font-bold' href='#tesimonials'>Testimonials</a>
        <a className='text-gray-500 font-bold' href='#area'>Area</a>
        <a className='text-gray-500 font-bold' href='#contact'>Contact</a>
      </header>
      <main className='flex flex-col pt-16'>
        <div className='h-[650px] w-full'>
          <img className='w-full' src='/static/images/redfish.webp' alt='Example Image' />
        </div>
        <a className='h-[650px]' name='captain'>
          <div id='captain'> captain </div>
        </a>
        <a className='h-[650px]' name='book'>
          <div id='book'> book </div>
        </a>
        <a className='h-[650px]' name='media'>
          <div id='media'> media </div>
        </a>
        <a className='h-[650px]' name='tesimonials'>
          <div id='testimonials'> testimonials </div>
        </a>
        <a className='h-[650px]' name='area'>
          <div id='area'> area </div>
        </a>
        <a className='h-[650px]' name='contact'>
          <div id='contact'> contact </div>
        </a>
      </main>
    </>
  )
}

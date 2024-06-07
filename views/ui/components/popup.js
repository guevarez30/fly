function Form () {
  return (
    <>
      <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css' />
      <h2 className='text-2xl font-bold mb-4'>Booking Information</h2>
      <form action='#' method='POST'>
        <div className='mb-4'>
          <label className='block text-gray-700 font-semibold mb-2'>Name</label>
          <input type='text' id='name' name='name' className='form-input border-gray-300 bg-gray-100 w-full px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 focus:bg-white' />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 font-semibold mb-2'>Email</label>
          <input type='email' id='email' name='email' className='form-input border-gray-300 bg-gray-100 w-full px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 focus:bg-white' />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 font-semibold mb-2'>Phone</label>
          <input type='tel' id='phone' name='phone' className='form-input border-gray-300 bg-gray-100 w-full px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 focus:bg-white' />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 font-semibold mb-2'>Select a Date</label>
          <input type='text' placeholder='Select Date..' class='flatpickr flatpickr-input active' id='booking' name='date' className='w-full' />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 font-semibold mb-2'>Description</label>
          <textarea id='description' name='description' rows='4' className='form-textarea border-gray-300 bg-gray-100 w-full px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 focus:bg-white' />
        </div>
      </form>

      <script src='https://cdn.jsdelivr.net/npm/flatpickr' />
      <script>
        flatpickr("#booking", {});
      </script>
    </>
  )
}

export function BookingForm () {
  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50'>
      <div className='bg-white rounded-lg p-8 max-w-lg w-full'>
        <Form />
        <div className='flex gap-10 justify-center'>
          <button
            className='flex font-bold py-2 px-4 text-lg rounded-xl items-center justify-center bg-primary-foreground text-primary hover:cursor-pointer active:bg-primary active:text-primary-foreground'
            type='button'
            hx-trigger='click'
            hx-get='/noop'
            hx-swap='innerHTML'
            hx-target='#popup'
          >
            Close
          </button>

          <button
            className='flex font-bold py-2 px-4 text-lg rounded-xl items-center justify-center bg-primary text-primary-foreground hover:cursor-pointer hover:ring-offset-primary active:bg-primary-foreground active:text-primary'
            type='button'
            hx-trigger='click'
            hx-get='/noop'
            hx-swap='innerHTML'
            hx-target='#popup'
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export function noop () {
  return <></>
}

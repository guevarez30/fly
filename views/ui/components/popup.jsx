function Form () {
  return (
    <>
      <h2 className='text-4xl lg:text-2xl font-bold mb-4'>Booking Information</h2>
      <form action='#' method='POST'>
		<label className="input h-24 lg:h-16 input-bordered flex items-center  mb-2 ">
  		  <i className="fas fa-user opacity-70 text-4xl lg:text-lg pr-2"></i>
		  <input type="text" className="grow text-4xl lg:text-lg" placeholder="Name" />
		</label>

		<label className="input h-24 lg:h-16 input-bordered flex items-center  mb-2 ">
  		  <i className="fas fa-envelope opacity-70 text-4xl lg:text-lg pr-2"></i>
		  <input type="text" className="grow text-4xl lg:text-lg" placeholder="Email" />
		</label>

		<label className="input h-24 lg:h-16 input-bordered flex items-center  mb-2 ">
  		  <i className="fas fa-phone opacity-70 text-4xl lg:text-lg pr-2"></i>
		  <input type="tel" className="grow text-4xl lg:text-lg" placeholder="Name" />
		</label>

		<input id="date" datetimepicker className="w-full h-24 lg:h-16  text-4xl lg:text-lg  input input-bordered flex items-center gap-2 mb-2" type="text" placeholder="Please select a date" />

	  	<script>
	  	  	flatpickr("#date", {});
	  	</script>
      </form>
    </>
  )
}

export function BookingForm () {
  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50'>
		<div className="card w-[90%] lg:w-[80%] bg-base-100 shadow-xl">
		  <div className="card-body">
		      <Form />
		  </div>
        	<div className='flex gap-10 justify-center mb-2'>
        	  <button
        	    className='btn h-24 lg:h16 w-48 lg:w-32 text-4xl lg:text-lg'
        	    type='button'
        	    hx-trigger='click'
        	    hx-get='/noop'
        	    hx-swap='innerHTML'
        	    hx-target='#popup'
        	  >
        	    Close
        	  </button>

        	  <button
        	    className='btn btn-primary h-24 lg:h16 w-48 lg:w-32 text-4xl lg:text-lg'
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

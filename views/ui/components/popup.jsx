function Form () {
  return (
    <>
      <h2 className='text-2xl font-bold mb-4'>Booking Information</h2>
      <form action='#' method='POST'>

		<label className="input input-bordered flex items-center gap-2 mb-2">
  		  <i className="fas fa-user w-4 h-4 opacity-70"></i>
		  <input type="text" className="grow" placeholder="Name" />
		</label>

  		<label className="input input-bordered flex items-center gap-2 mb-2">
  		  <i className="fas fa-phone w-4 h-4 opacity-70"></i>
  		  <input id="phone" type="tel" className="grow" placeholder="Phone" />
  		</label>

		<label className="input input-bordered flex items-center gap-2 mb-2">
  		  <i className="fas fa-envelope w-4 h-4 opacity-70"></i>
		  <input type="text" className="grow" placeholder="Email" />
		</label>

		<input id="date" datetimepicker className="w-full input input-bordered flex items-center gap-2 mb-2" type="text" placeholder="Please select a date" />

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
		<div className="card w-96 bg-base-100 shadow-xl">
		  <div className="card-body">
		      <Form />
		  </div>

        	<div className='flex gap-10 justify-center mb-2'>
        	  <button
        	    className='btn'
        	    type='button'
        	    hx-trigger='click'
        	    hx-get='/noop'
        	    hx-swap='innerHTML'
        	    hx-target='#popup'
        	  >
        	    Close
        	  </button>

        	  <button
        	    className='btn btn-primary'
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

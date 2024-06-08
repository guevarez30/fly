export default function Captain () {
  return (
    <a name='captain'>
      <div id='captain' className='flex justify-evenly scroll-my-4 pt-4 sm:pt-8 md:pt-12 lg:pt-16'>
        <div className='flex flex-col w-[50%] lg:w-[25%]'>
          <img className='w-full h-auto rounded-md' src='/public/images/captain.jpeg' alt='Captain' />
          <div className='flex flex-col justify-center w-full items-center'>
            <div className='text-4xl lg:text-lg '> Captain </div>
            <div className='text-2xl lg:text-md font-bold'> Taylor Guevarez</div>
          </div>
        </div>
        <div className='p-6 w-[50%]'>
          <h2 className='text-4xl lg:text-lg font-bold mb-4'>Professional Experience</h2>
          <p className='text-2xl lg:text-lg'>
            Capt. Taylor Guevarez is a fly and light tackle fishing guide working the waters around Tampa Bay and Floridas Gulf Coast. Fishing is not just a career for him, but his life, love and passion. Capt Taylor has over 20 years of fly fishing experience in the waters around Florida. Over the years he has fined tuned his fly fishing skills and developed into a positive fishing guide and fly casting instructor.  Capt. Taylor enjoys teaching and sharing his knowledge of fishing with both novice and experienced anglers. He specializes in fly fishing for giant tarpon and other saltwater inshore species.
          </p>
        </div>

      </div>
    </a>
  )
}

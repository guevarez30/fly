// <div class='bg-white shadow-lg rounded-lg p-6'>
//   <h2 class='text-xl font-bold mb-4'>Charter Services</h2>
//   <ul class='list-disc list-inside'>
//     <li>Guided fishing trips for individuals, families, and groups.</li>
//     <li>Half-day, full-day, and multi-day fishing charters available.</li>
//     <li>Customizable trips tailored to the skill level and preferences of clients.</li>
//     <li>Provision of all necessary fishing gear, tackle, and safety equipment.</li>
//   </ul>
// </div>

export default function Captain () {
  return (
    <a name='captain'>
      <div id='captain' className='flex pt-16 justify-evenly '>
        <div className='flex flex-col w-[25%]'>
          <img className='w-full h-auto rounded-md' src='/static/images/captain.jpeg' alt='Example Image' />
          <div className='flex flex-col justify-center w-full items-center'>
            <div className='text-lg text-gray-500'> Captain </div>
            <div className='text-xl text-gray-500 font-bold'> Taylor Guevarez</div>
          </div>
        </div>
        <div class='p-6 w-[50%]'>
          <h2 class='text-xl text-gray-500 font-bold mb-4'>Professional Experience</h2>
          <p className='text-lg text-gray-500'>
            Capt. Taylor Guevarez is a fly and light tackle fishing guide working the waters around Tampa Bay and Floridas Gulf Coast. Fishing is not just a career for him, but his life, love and passion. Capt Taylor has over 20 years of fly fishing experience in the waters around Florida. Over the years he has fined tuned his fly fishing skills and developed into a positive fishing guide and fly casting instructor.  Capt. Taylor enjoys teaching and sharing his knowledge of fishing with both novice and experienced anglers. He specializes in fly fishing for giant tarpon and other saltwater inshore species.
          </p>
        </div>

      </div>
    </a>
  )
}

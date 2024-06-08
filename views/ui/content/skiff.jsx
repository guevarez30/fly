const skiffDetails = {
  name: 'HELLS BAY MARQUESA',
  description: 'The Hells Bay Marquesa is an incredible skiff that is unparalleled in its abilities to handle a rough chop in open waters comfortably yet still capable of accessing those shallow fishing spots. Stability and a large amount of deck space will make your time on the water more enjoyable allowing you to focus on the matter at hand, catching fish! *Standard casting platform and cage style platforms are available to make your fishing experience more enjoyable.'
}

export default function Skiff () {
  return (
    <a name='skiff'>
      <div className='scroll-my-4 md:scroll-my-8 lg:scroll-my-12 pt-4 sm:pt-8 md:pt-12 lg:pt-16 flex flex-col w-full' id='skiff'>

        <img className='w-full h-auto rounded-md' src='/public/images/boat-1.jpeg' alt='Captain' />

        <div className='flex flex-col w-full items-center'>
          <div className='flex flex-col mx-[10%] p-16'>
            <h3 className='text-4xl lg:text-2xl text-gray-800 font-bold flex justify-center w-full'>{skiffDetails.name}</h3>
            <p className='pt-5 text-4xl lg:text-lg leading-snug'>{skiffDetails.description}</p>
          </div>
        </div>

        <div className='flex w-full'>
          <img className='w-[50%] h-auto rounded-md' src='/public/images/boat-2.jpeg' alt='Captain' />
          <img className='w-[50%] h-auto rounded-md' src='/public/images/boat-3.jpeg' alt='Captain' />
        </div>
      </div>
    </a>
  )
}

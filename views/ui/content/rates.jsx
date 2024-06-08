const rates = [
  {
    name: 'Half Day',
    cost: 500,
    time: 5,
    season: 'year-round',
    description: 'Half day trips start at different times of the day when the fishing is best. This is a good trip if your schedule or the weather will only allow for shorter length of time on the water.'
  },
  {
    name: 'Full Day',
    cost: 700,
    time: 7,
    season: 'year-round',
    description: 'Full day trips offer the best chances at targeting multiple species or just focusing more time on one. We can target Redfish, Snook, Trout and more'
  },
  {
    name: 'Tarpon',
    cost: 800,
    time: 8,
    season: 'April-July',
    description: 'Tampa Bay has one of the best Tarpon fisheries around with bright sand flats and large migratory fish that flood our area during the migration.'
  },
  {
    name: 'Night',
    cost: 500,
    time: 4,
    season: 'year-round',
    description: 'Night trips offer great chances at catching a variety of fish. This is still very much a sight fishing game since we target lighted structures.'
  }
]

export default function Rates () {
  return (
    <a name='rates'>
      <div id='rates' className='mx-2 pt-32 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8'>
        {rates.map((rate, index) => (
          <div key={index} className='shadow-lg rounded-lg p-6'>
            <h3 className='text-2xl text-gray-800 font-bold'>{rate.name}</h3>
            <p className='text-lg text-gray-500'>Cost: ${rate.cost}</p>
            <p className='text-lg text-gray-500'>Time: {rate.time} hours</p>
            <p className='text-lg text-gray-500'>Season: {rate.season}</p>
            <p className='pt-5 text-lg text-gray-500 leading-snug'>{rate.description}</p>
          </div>
        ))}
      </div>
    </a>
  )
}



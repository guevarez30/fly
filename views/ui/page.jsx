import Header from './header'
import MainImage from './content/image-main'
import Captain from './content/captain'
import Rates from './content/rates'
import Skiff from './content/skiff'

export default function Page () {
  return (
    <>
      <Header />
      <main className='flex flex-col pt-32 lg:pt-16'>
        <MainImage />
        <Captain />
        <a className='h-[650px]' name='media'>
          <div id='media'> media </div>
        </a>
        <Rates />
        <Skiff />
      </main>
    </>
  )
}

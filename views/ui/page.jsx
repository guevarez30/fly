import Header from './header'
import MainImage from './content/image-main'
import Captain from './content/captain'
import Rates from './content/rates'
import Skiff from './content/skiff'

export default function Page () {
  return (
    <>
      <Header />
      <main className='flex flex-col scroll-my-4 md:scroll-my-8 lg:scroll-my-12 pt-4 sm:pt-8 md:pt-12 lg:pt-16'>
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

import MainImage from './image-main'
import Captain from './captain'
import Header from './header'
import Rates from './rates'
import Skiff from './skiff'

export default function Page () {
  return (
    <>
      <Header />
      <main className='flex flex-col pt-16'>
        <MainImage />
        <Captain />
        <a className='h-[650px]' name='media'>
          <div id='media'> media </div>
        </a>
        <Rates />
        <Skiff />
        <a className='h-[650px]' name='contact'>
          <div id='contact'> contact </div>
        </a>
      </main>
    </>
  )
}

import { useState } from 'react';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Services from './Components/Services';
import Footer from './Components/Footer';
import Aboutus from './Components/Aboutus';
import Contact from './Components/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='overflow-x-hidden relative'>
    <Nav/>
    <div id='/'>
    <Home/>
    </div>
    <div id='About' className=' bg-[#27272A] text-zinc-200 w-full flex items-center justify-center mt-32 pt-10'>
      <Aboutus/>
    </div>
    <div id='Services' className='px-5'>
    <Services/>
    </div>
    <div id='Callnow' className='h-fit py-5 bg-[#27272A] text-zinc-200 px-5'>
      <h1 className='text-[7vw] sm:text-[5vw] text-center font-bold leading-none tracking-tighter'>WOULD YOU LIKE TO <span className='text-[#ff4032]'>KNOW MORE ?</span></h1>
      <div className='flex flex-col items-center mt-5 '><a className='py-3 px-10 text-sm font-medium bg-[#ffc815f8] text-[#ff4032] transition-all hover:bg-[#ff4032] hover:text-yellow-400 rounded' href="tel:+918421119417">Call now</a></div>
    </div>
    <div>
      <Contact/>
    </div>
    <div className='mt-10'>
    <Footer/>
    </div>
    <div className='fixed bottom-5 right-2 w-fit flex flex-col gap-3'>
      <div className='size-14 text-2xl font-medium rounded-full bg-zinc-100 flex items-center justify-center'>
      <a href="tel:+918421119417" className='w-full h-full animationrotate rounded-full text-center flex items-center justify-center'><i class="ri-phone-line"></i></a>
      </div>
      <div className='size-14 text-2xl font-medium rounded-full bg-zinc-100 flex items-center justify-center'>
      <a href="https://wa.me/+918421119417?text=I%20have%20problem%20with%20my%20LED%20TV" className='w-full h-full animationrotate rounded-full text-center flex items-center justify-center'><i class="ri-whatsapp-line"></i></a>
      </div>
    </div>
    </div>
  )
}

export default App

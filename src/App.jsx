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
    <div className='overflow-x-hidden'>
    <Nav/>
    <div id='/'>
    <Home/>
    </div>
    <div id='About' className=' bg-[#FFD3B6] w-full flex items-center justify-center mt-32 pt-10'>
      <Aboutus/>
    </div>
    <div id='Services' className='px-5'>
    <Services/>
    </div>
    <div id='Callnow' className='h-fit py-5 bg-[#e49e7e] px-5'>
      <h1 className='text-[7vw] sm:text-[5vw] text-center font-bold leading-none tracking-tighter'>WOULD YOU LIKE TO <span className='text-[#ff4032]'>KNOW MORE ?</span></h1>
      <div className='flex flex-col items-center mt-5 '><a className='py-3 px-10 text-sm font-medium bg-[#ffc815f8] text-[#ff4032] transition-all hover:bg-[#ff4032] hover:text-yellow-400 rounded' href="tel:+918421119417">Call now</a></div>
    </div>
    <div>
      <Contact/>
    </div>
    <Footer/>
    </div>
  )
}

export default App

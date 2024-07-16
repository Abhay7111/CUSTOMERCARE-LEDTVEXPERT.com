import { useState } from 'react';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Services from './Components/Services';
import Footer from './Components/Footer';
import Aboutus from './Components/Aboutus';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';
import Motherboard1 from '/Motherboard1.jpg';
import Motherboard2 from '/Motherboard2.jpg';
import Motherboard3 from '/Motherboard3.jpg';
import Motherboard4 from '/Motherboard4.jpg';
import Motherboard5 from '/Motherboard5.jpg';
import Motherboard6 from '/BackLight4on.jpg';

function App() {
  const [count, setCount] = useState(0)

  const gallerydata = [
    {
      image:Motherboard1,
      problems:'problem in motherboard and IC',
      range:'21.4km',
      title:'Motherboard',
      maincardstyle:'maincard1',
      cardhvrstyle:'cardhvr1',
      disc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem accusamus voluptate, praesentium provident doloremque reprehenderit ipsum itaque dolor quae hic.",
    },
    {
      image:Motherboard2,
      problems:'problem in motherboard and IC',
      range:'20.2km',
      title:'Motherboard',
      maincardstyle:'maincard2',
      cardhvrstyle:'cardhvr2',
      disc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem accusamus voluptate, praesentium provident doloremque reprehenderit ipsum itaque dolor quae hic.",
    },
    {
      image:Motherboard3,
      problems:'problem in motherboard and IC',
      range:'26km',
      title:'Motherboard',
      maincardstyle:'maincard3',
      cardhvrstyle:'cardhvr3',
      disc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem accusamus voluptate, praesentium provident doloremque reprehenderit ipsum itaque dolor quae hic.",
    },
    {
      image:Motherboard4,
      problems:'problem in motherboard and IC',
      range:'24km',
      title:'Motherboard',
      maincardstyle:'maincard4',
      cardhvrstyle:'cardhvr4',
      disc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem accusamus voluptate, praesentium provident doloremque reprehenderit ipsum itaque dolor quae hic.",
    },
    {
      image:Motherboard5,
      problems:'problem in motherboard and IC',
      range:'27km',
      title:'Motherboard',
      maincardstyle:'maincard5',
      cardhvrstyle:'cardhvr5',
      disc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem accusamus voluptate, praesentium provident doloremque reprehenderit ipsum itaque dolor quae hic.",
    },
    {
      image:Motherboard6,
      problems:'problem in backlight',
      range:'25km',
      title:'Backlight',
      maincardstyle:'maincard6',
      cardhvrstyle:'cardhvr6',
      disc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem accusamus voluptate, praesentium provident doloremque reprehenderit ipsum itaque dolor quae hic.",
    },
  ]

  return (
    <div className='overflow-x-hidden relative'>
    <Nav/>
    <div id='/'>
    <Home/>
    </div>
    <div id='About' className=' bg-[#27272A] text-zinc-200 w-full flex items-center justify-center mt-32 pt-10'>
      <Aboutus/>
    </div>
      <h2 className='w-full text-center text-5xl py-6 sm:text-4xl sm:py-8 font-bold uppercase 2xl:text-6xl 2xl:py-10 2xl:px-5 2xl:uppercase'>Gallery</h2>
    <div className='px-5 mt-5 flex-wrap flex items-center justify-center gap-3'>
      {gallerydata.map((items, index)=>(
        <Gallery gallerydata={items}/>
      ))}
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

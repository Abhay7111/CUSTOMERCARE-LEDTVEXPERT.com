import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import topimg from '/topimg.jpg'

function Home() {
  return (
    <div className='w-full relative pt-10 z-10 h-fit'>
          <div className='relative z-10 flex sm:flex-row flex-col gap-5 h-full sm:items-center'>
            <div className='w-full sm:w-1/2 h-1/2 sm:h-fit flex-col px-4 flex items-start justify-center'>
              <h1 className=' text-[10vw] leading-tight sm:text-[6vw] text-center font-bold uppercase w-full'><div className='text-[7vw] sm:text-[4.5vw] text-start flex text-nowrap w-96 text-[#ffaf36]'>WELCOME to </div>CUSTOMERCARE LEDTVEXPERT</h1>
              <p className='mt-3 text-center text-sm sm:px-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem molestiae repellendus ipsum quas consectetur neque quisquam quod, itaque ipsam adipisci rem non similique ullam quo praesentium, quasi hic in sunt?</p>
              <div className='mt-5 w-full flex items-start justify-center gap-3'>
                <a href="tel:+918421119417" className='px-3 py-1.5 rounded-md bg-yellow-400 hover:bg-yellow-500 text-sm font-medium '><i class="ri-phone-line"></i> Call now</a>
                <a href="https://wa.me/+918421119417?text=I%20have%20problem%20with%20my%20LED%20TV" className='px-3 py-1.5 rounded-md bg-yellow-400 hover:bg-yellow-500 text-sm font-medium '><i class="ri-whatsapp-line"></i> WhatsApp</a>
              </div>
            </div>
            <div className='w-full sm:w-1/2 h-fit max-h-[60vh] overflow-hidden sm:overflow-visible flex items-center justify-center'>
              <img src={topimg} alt="Sorry not get image" className='w-[90vw] h-auto sm:w-[45vw] sm:h-[65vh] rounded-md sm:object-cover'/>
            </div>
          </div>
     </div>
  )
}

export default Home
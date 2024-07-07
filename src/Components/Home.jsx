import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import topimg from '/topimg.jpg'

function Home() {
  return (
    <div className='w-full relative z-10 h-[100vh]'>
      <div className='w-full h-full animationscroll absolute z-0 overflow-x-hidden overflow-y-visible'>
               <div className='size-40 relative rounded-full blur-3xl top-botom-animation'></div>
               <div className='size-40 relative rounded-full blur-3xl top-left-animation'></div>
               <div className='size-72 relative rounded-full blur-3xl left-right-animation'></div>
          </div>
          <div className='relative z-10 sm:flex h-full sm:items-center'>
            <div className='w-full sm:w-1/2 h-1/2 sm:h-fit flex-col px-4 flex items-start justify-center'>
              <h1 className=' text-[10vw] leading-tight sm:text-[6vw] text-center font-bold'>CUSTOMERCARE LEDTVEXPERT</h1>
              <p className='mt-3 text-center text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem molestiae repellendus ipsum quas consectetur neque quisquam quod, itaque ipsam adipisci rem non similique ullam quo praesentium, quasi hic in sunt?</p>
              <div className='mt-5 w-full flex items-start justify-center gap-3'>
                <a href="tel:+918421119417" className='px-3 py-1.5 rounded-md bg-yellow-400 hover:bg-yellow-500 text-sm font-medium '><i class="ri-phone-line"></i> Call now</a>
                <a href="https://wa.me/+918421119417?text=I%20have%20problem%20with%20my%20LED%20TV" className='px-3 py-1.5 rounded-md bg-yellow-400 hover:bg-yellow-500 text-sm font-medium '><i class="ri-whatsapp-line"></i> WhatsApp</a>
              </div>
            </div>
            <div className='w-full sm:w-1/2 h-fit max-h-[60vh] overflow-hidden flex items-center justify-center'>
              <img src={topimg} alt="Sorry not get image" className='size-[400px] rounded-md'/>
            </div>
          </div>
     </div>
  )
}

export default Home
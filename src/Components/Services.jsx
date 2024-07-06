import React from 'react'
import Backligh from '/BackLight.jpg'
import Motherboard1 from '/Motherboard1.jpg'
import Motherboard2 from '/Motherboard2.jpg'
import Motherboard3 from '/Motherboard5.jpg'
import Ledtv from '/LEDTV.jpg'

function Services() {
  return (
    <div className='flex rounded-xl p-5 pb-10 bg-[#FFD3B6] relative flex-col sm:flex-row items-center sm:justify-center flex-wrap'>
     <h1 className='w-full text-center text-[8vw] sm:text-[4vw] font-bold uppercase mb-5'>Our services</h1>
     <div className='w-full gap-3 h-fit flex items-center justify-center flex-wrap mt-3'>
      <div className='w-80 sm:w-72 min-h-20 bg-[#DCA47C] rounded-lg p-1.5'>
        <img src={Backligh} alt="Not found" className='text-sm font-thin rounded-md h-[200px] w-full object-cover object-top' />
        <div className='mt-2 px-2'>
          <h1 className='text-xl font-bold'>Backlight repair</h1>
          <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla ipsum cumque delectus iste aliquid est eum nobis non! Iure cumque commodi, odio explicabo veritatis sapiente reiciendis sunt laboriosam distinctio eligendi.</p>
          <div className='mt-2 w-full flex items-start justify-center gap-3'>
                <a href="tel:+918421119417" className='px-3 py-1.5 rounded-md bg-[#FFD3B6] hover:bg-transparent text-sm font-medium hover:text-blue-600'><i class="ri-phone-line"></i> Call now</a>
                <a href="https://wa.me/+918421119417?text=I%20have%20problem%20with%20my%20LED%20TV" className='px-3 py-1.5 rounded-md bg-[#FFD3B6] hover:bg-transparent text-sm font-medium hover:text-green-600'><i class="ri-whatsapp-line"></i> WhatsApp</a>
              </div>
        </div>
      </div>
      <div className='w-80 sm:w-72 min-h-20 bg-[#DCA47C] rounded-lg p-1.5'>
        <img src={Motherboard3} alt="Not found" className='text-sm font-thin rounded-md h-[200px] w-full object-cover object-center' />
        <div className='mt-2 px-2'>
          <h1 className='text-xl font-bold'>Motherboard repair</h1>
          <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla ipsum cumque delectus iste aliquid est eum nobis non! Iure cumque commodi, odio explicabo veritatis sapiente reiciendis sunt laboriosam distinctio eligendi.</p>
          <div className='mt-2 w-full flex items-start justify-center gap-3'>
                <a href="tel:+918421119417" className='px-3 py-1.5 rounded-md bg-[#FFD3B6] hover:bg-transparent text-sm font-medium hover:text-blue-600'><i class="ri-phone-line"></i> Call now</a>
                <a href="https://wa.me/+918421119417?text=I%20have%20problem%20with%20my%20LED%20TV" className='px-3 py-1.5 rounded-md bg-[#FFD3B6] hover:bg-transparent text-sm font-medium hover:text-green-600'><i class="ri-whatsapp-line"></i> WhatsApp</a>
              </div>
        </div>
      </div>
      <div className='w-80 sm:w-72 min-h-20 bg-[#DCA47C] rounded-lg p-1.5'>
        <img src={Motherboard2} alt="Not found" className='text-sm font-thin rounded-md h-[200px] w-full object-cover object-center' />
        <div className='mt-2 px-2'>
          <h1 className='text-xl font-bold'>IC repair</h1>
          <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla ipsum cumque delectus iste aliquid est eum nobis non! Iure cumque commodi, odio explicabo veritatis sapiente reiciendis sunt laboriosam distinctio eligendi.</p>
          <div className='mt-2 w-full flex items-start justify-center gap-3'>
                <a href="tel:+918421119417" className='px-3 py-1.5 rounded-md bg-[#FFD3B6] hover:bg-transparent text-sm font-medium hover:text-blue-600'><i class="ri-phone-line"></i> Call now</a>
                <a href="https://wa.me/+918421119417?text=I%20have%20problem%20with%20my%20LED%20TV" className='px-3 py-1.5 rounded-md bg-[#FFD3B6] hover:bg-transparent text-sm font-medium hover:text-green-600'><i class="ri-whatsapp-line"></i> WhatsApp</a>
              </div>
        </div>
      </div>
      <div className='w-80 sm:w-72 min-h-20 bg-[#DCA47C] rounded-lg p-1.5'>
        <img src={Ledtv} alt="Not found" className='text-sm font-thin rounded-md h-[200px] w-full object-cover object-top' />
        <div className='mt-2 px-2'>
          <h1 className='text-xl font-bold'>All tv repair</h1>
          <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla ipsum cumque delectus iste aliquid est eum nobis non! Iure cumque commodi, odio explicabo veritatis sapiente reiciendis sunt laboriosam distinctio eligendi.</p>
          <div className='mt-2 w-full flex items-start justify-center gap-3'>
                <a href="tel:+918421119417" className='px-3 py-1.5 rounded-md bg-[#FFD3B6] hover:bg-transparent text-sm font-medium hover:text-blue-600'><i class="ri-phone-line"></i> Call now</a>
                <a href="https://wa.me/+918421119417?text=I%20have%20problem%20with%20my%20LED%20TV" className='px-3 py-1.5 rounded-md bg-[#FFD3B6] hover:bg-transparent text-sm font-medium hover:text-green-600'><i class="ri-whatsapp-line"></i> WhatsApp</a>
              </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Services
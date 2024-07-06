import React from 'react'

function Services() {
  return (
    <div className='flex relative flex-col sm:flex-row items-center sm:justify-center flex-wrap'>
     <h1 className='w-full text-center text-[6vw] sm:text-[4vw] font-bold uppercase'>Our services</h1>
     <div className='w-full h-fit flex items-center justify-center flex-wrap mt-3'>
      <div className='w-72 min-h-20 bg-yellow-500 rounded-lg px-1'>
        <img src="" alt="Not found" className='text-sm font-thin' />
      </div>
     </div>
    </div>
  )
}

export default Services
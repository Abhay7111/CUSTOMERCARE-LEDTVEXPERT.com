import React from 'react'

function Nav() {
  return (
    <div className='w-full h-14 flex items-center justify-between px-3 bg-red-400'>
     <div className='text-xl font-bold'>CL.</div>
     <div className='w-fit bg-green-400/20'>
          <ul className='flex flex-col sm:flex-row gap-2'>
               <a href="#"><li className='text-sm font-medium px-3 py-1 rounded-md transition-all hover:bg-yellow-400'>Home</li></a>
               <a href="#"><li className='text-sm font-medium px-3 py-1 rounded-md transition-all hover:bg-yellow-400'>About</li></a>
               <a href="#"><li className='text-sm font-medium px-3 py-1 rounded-md transition-all hover:bg-yellow-400'>Our service</li></a>
               <a href="#"><li className='text-sm font-medium px-3 py-1 rounded-md transition-all hover:bg-yellow-400'>Contact us</li></a>
               <a href="#"><li className='text-sm font-medium px-3 py-1 rounded-md transition-all hover:bg-yellow-400'>Gallery</li></a>
          </ul>
     </div>
     </div>
  )
}

export default Nav
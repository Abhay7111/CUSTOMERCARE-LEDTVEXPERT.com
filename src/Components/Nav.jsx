import React, { useEffect } from 'react'

function Nav() {
     useEffect(()=>{
          const menu1 = document.querySelector(".menu1");
          const menu = document.querySelector(".menu");
          const home = document.querySelector("#home");

          menu1.onclick = function(){
               if(menu.style.display =='block'){
                    menu.style.display = 'none';
               }else{
                    menu.style.display = 'block';
               }
          }
     })
  return (
    <div className='w-full h-14 relative z-[99] flex items-center justify-between px-3'>
     <div className='text-xl font-bold'>CL.</div>
     <div className='w-fit relative'>
          <ul className='hidden menu absolute bg-zinc-100 py-2 sm:py-0 mt-3 sm:mt-0 sm:bg-transparent top-full w-fit text-nowrap px-4 sm:px-0 rounded-md sm:rounded-none right-0 sm:relative sm:flex sm:flex-row gap-2'>
               <a href="#"><li className='text-md sm:text-sm font-medium px-3 py-1 rounded-md transition-all hover:bg-yellow-400'>Home</li></a>
               <a href="#About"><li className='text-md sm:text-sm font-medium px-3 py-1 rounded-md transition-all hover:bg-yellow-400'>About</li></a>
               <a href="#"><li className='text-md sm:text-sm font-medium px-3 py-1 rounded-md transition-all hover:bg-yellow-400'>Gallery</li></a>
               <a href="#Services"><li className='text-md sm:text-sm font-medium px-3 py-1 rounded-md transition-all hover:bg-yellow-400'>Our service</li></a>
               <a href="#contactus"><li className='text-md sm:text-sm font-medium px-3 py-1 rounded-md transition-all hover:bg-yellow-400'>Contact us</li></a>
          </ul>
          <span className='text-2xl font-semibold sm:hidden cursor-pointer'><i class="ri-menu-line menu1"></i></span>
     </div>
     </div>
  )
}

export default Nav
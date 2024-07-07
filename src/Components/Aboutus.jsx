import React from 'react';
import Aboutusimg from '/Search-User--Streamline-Tokyo.png';

function Aboutus() {
  return (
     <div className='w-[100vw] z-10 flex flex-wrap items-center justify-center sm:items-start gap-5 px-2'>
          <div className='w-full sm:w-[45%] h-fit'>
          <h1 className='uppercase text-center pb-5 text-[8vw] sm:text-[4vw] font-bold'>About us</h1>
          <p className='text-start'><span className='text-lg font-medium'>WELCOME TO LEDTVEXPERT</span><br /><span className='font-normal text-sm'>Are you trying to find a professional who can fix your LED TV the best way possible? Then call us!</span><br />LED TV Repairing Service Provide in pune <br /> All Types LED,LCD TV SMART TV Repair by expert engineers</p>
          </div>
          <div className='w-80 rounded-xl sm:w-[45%] sm:h-fit flex items-center justify-center'>
               <img src={Aboutusimg} alt="Not found" className='text-sm w-full max-w-[500px] h-auto object-cover' />
          </div>
     </div>
  )
}

export default Aboutus
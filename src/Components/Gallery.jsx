import React, { useEffect } from 'react'

function Gallery({gallerydata}) {
  useEffect(()=>{
    const cardhvr1 = document.querySelector(".cardhvr1")
    const maincard1 = document.querySelector(".maincard1")

    const cardhvr2 = document.querySelector(".cardhvr2")
    const maincard2 = document.querySelector(".maincard2")
    
    const cardhvr3 = document.querySelector(".cardhvr3")
    const maincard3 = document.querySelector(".maincard3")

    const cardhvr4 = document.querySelector(".cardhvr4")
    const maincard4 = document.querySelector(".maincard4")

    const cardhvr5 = document.querySelector(".cardhvr5")
    const maincard5 = document.querySelector(".maincard5")

    const cardhvr6 = document.querySelector(".cardhvr6")
    const maincard6 = document.querySelector(".maincard6")

    maincard1.addEventListener("mousemove", ()=>{
      cardhvr1.style.display = 'block';
    })
    maincard1.addEventListener("mouseleave", ()=>{
      cardhvr1.style.display = 'none';
    })

    maincard2.addEventListener("mousemove", ()=>{
      cardhvr2.style.display = 'block';
    })
    maincard2.addEventListener("mouseleave", ()=>{
      cardhvr2.style.display = 'none';
    })

    maincard3.addEventListener("mousemove", ()=>{
      cardhvr3.style.display = 'block';
    })
    maincard3.addEventListener("mouseleave", ()=>{
      cardhvr3.style.display = 'none';
    })

    maincard4.addEventListener("mousemove", ()=>{
      cardhvr4.style.display = 'block';
    })
    maincard4.addEventListener("mouseleave", ()=>{
      cardhvr4.style.display = 'none';
    })

    maincard5.addEventListener("mousemove", ()=>{
      cardhvr5.style.display = 'block';
    })
    maincard5.addEventListener("mouseleave", ()=>{
      cardhvr5.style.display = 'none';
    })

    maincard6.addEventListener("mousemove", ()=>{
      cardhvr6.style.display = 'block';
    })
    maincard6.addEventListener("mouseleave", ()=>{
      cardhvr6.style.display = 'none';
    })
  })
  return (
    <div className={`relative ${gallerydata.maincardstyle}`}>
     <img src={gallerydata.image} className='w-[220px] max-h-[260px] sm:w-[25vw] sm:max-h-[40vh] border border-zinc-600 object-cover rounded-lg' />
     <div className={`absolute ${gallerydata.cardhvrstyle} bg-gradient-to-b from-zinc-900/80 hidden py-1 px-2 top-0 left-0 w-full h-full rounded-lg`}>
      <h3 className='font-normal text-zinc-100 relative w-full'>{gallerydata.title} <p className='absolute top-0 right-0 text-sm'>{gallerydata.range}</p></h3>
     </div>
    </div>
  )
}

export default Gallery
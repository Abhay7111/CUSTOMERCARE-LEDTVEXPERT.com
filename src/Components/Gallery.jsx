import React from 'react'

function Gallery({gallerydata}) {
  return (
    <div className='relative'>
     <img src={gallerydata.image} className='w-[220px] max-h-[260px] border border-zinc-600 object-cover rounded-lg' />
     <div className='absolute py-1 px-2 top-0 left-0  w-full h-full rounded-lg ' >
      <h3 className='font-medium text-zinc-100 relative w-full'>{gallerydata.title} <p className='absolute top-0 right-0 text-sm'>{gallerydata.range}</p></h3>
     </div>
    </div>
  )
}

export default Gallery
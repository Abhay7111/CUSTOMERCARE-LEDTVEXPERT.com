import React from 'react'

function Gallery({gallerydata}) {
  return (
    <div>
     <img src={gallerydata.image} className='w-[300px] h-96 object-cover rounded-lg' />
    </div>
  )
}

export default Gallery
import React from 'react'

const OfferCard = ({ image, title, description }) => {
  return (
    <>
      <div className='w-[250px] h-[280]  shadow-lg flex flex-col justify-center items-center text-center !p-4 !mt-12'>
        <div className='!pb-4'>
          <img src={image} alt="" />
        </div>
        <div className='!pb-4 text-lg font-bold text-[#16168a] font-[josefin_Sans] !mb-2'>
          <h1>{title}</h1>
        </div>
        <div className='!pb-6 text-gray-400 font-semibold  '>
          <p>{description}</p>
        </div>





      </div>
    </>
  )
}

export default OfferCard
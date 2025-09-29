import React from 'react'
import OfferCard from './OfferCard'

const OfferSection = () => {
  return (
    <>
      <div className='w-auto sm:w-[65%]  !mx-auto !mt-4 !mb-8'>
        <h1 className='text-[#1A0B5B] text-4xl font-bold text-center font-[josefin_Sans] '>What Shopex offer!</h1>
        
        
        <div className='grid grid-cols-1 place-content-center justify-items-center sm:grid-cols-2 lg:grid-cols-4  !mt-12'>


          <OfferCard
            image="./images/free-delivery.png"
            title="24/7 Services"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, ducimus."
          />

          <OfferCard
            image="./images/cashback.png"
            title="24/7 Services"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, ducimus."
          />

          <OfferCard
            image="./images/quality.png"
            title="24/7 Services"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, ducimus."
          />

          <OfferCard
            image="./images/support.png"
            title="24/7 Services"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, ducimus."
          />
        </div>

      </div>
    </>
  )
}

export default OfferSection
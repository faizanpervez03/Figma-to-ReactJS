import React from 'react'
import Card from './HeroSection/Card'


const FeatureSection = ({about_title}) => {
  return (
    <>
      <div className="main !mt-16   !mx-auto">
        <h1 className='text-[#1A0B5B] text-3xl font-bold text-center font-[josefin_Sans] '>Featured Products</h1>

        <div className='flex sm:justify-center sm:items-center  gap-6 flex-wrap justify-center  !mt-16 !mb-16 !py-4 '>
          <Card
            title="Cantilever chair"
            image="./images/chair01.png"
            code="  Code - Y523201"
            price="  Rs 42"
          />

          <Card
            title="Cantilever chair"
            image="./images/chair02.png"
            code="  Code - Y523201"
            price="  Rs 42"
          />

          <Card
            title="Cantilever chair"
            image="./images/chair03.png"
            code="  Code - Y523201"
            price="  Rs 42"
          />

          <Card
            title="Cantilever chair"
            image="./images/chair04.png"
            code="  Code - Y523201"
            price="  Rs 42"
          />

        </div>
      </div>


      <div class="flex justify-center items-center gap-2 !pb-12">

        <span class="w-6 h-1 rounded bg-pink-600"></span>


        <span class="w-6 h-1 rounded bg-pink-300"></span>
        <span class="w-6 h-1 rounded bg-pink-300"></span>
        <span class="w-6 h-1 rounded bg-pink-300"></span>
      </div>

   
    </>
  )
}

export default FeatureSection
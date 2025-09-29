import React from 'react'
import LatestProductCard from './LatestProductCard'
import { Link } from 'react-router'

const LatestProduct = () => {
  return (
    <>
      <div className='w-auto sm:w-[65%]  !mx-auto !mt-4  ' >
           <h1 className='text-[#1A0B5B] text-3xl font-bold text-center !mb-4 font-[josefin_Sans] '>Latest Products</h1>

           <div className='!mb-8'>
            <ul>
              <li className='flex justify-center flex-wrap gap-8 text-blue-900'>
                <Link className='underline text-pink-500'>New Arrival</Link>
                <Link>Best Seller</Link>
                <Link>Featured</Link>
                <Link>Special Offer</Link>
              </li>
            </ul>
           </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0'>


          <LatestProductCard 
          image="./images/latest01.png"
          title="Comfort Handy Craft"
          price="$44.00"
          discount="$65.00"
          />
          <LatestProductCard 
          image="./images/latest02.png"
          title="Comfort Handy Craft"
          price="$44.00"
          discount="$65.00"
          saleImage="./images/sale.png"
          />
          <LatestProductCard 
          image="./images/latest03.png"
          title="Comfort Handy Craft"
          price="$44.00"
          discount="$65.00"
          />
          <LatestProductCard 
          image="./images/latest04.png"
          title="Comfort Handy Craft"
          price="$44.00"
          discount="$65.00"
          />
          <LatestProductCard 
          image="./images/latest05.png"
          title="Comfort Handy Craft"
          price="$44.00"
          discount="$65.00"
          />
          <LatestProductCard 
          image="./images/latest06.png"
          title="Comfort Handy Craft"
          price="$44.00"
          discount="$65.00"
          />
        </div>
      </div>


    </>
  )
}

export default LatestProduct
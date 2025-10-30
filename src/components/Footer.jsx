import React from 'react'
import { Link } from 'react-router'
import { SiFacebook } from "react-icons/si";
import { RiInstagramFill } from 'react-icons/ri';
import { AiFillTwitterCircle } from 'react-icons/ai';
const Footer = () => {
  return (
    <>
      <div className='bg-[#f9f9ff]  flex items-center shadow-lg '>

        <div className=' w-7xl !mx-auto flex flex-wrap justify-center text-center sm:text-start gap-24 !p-4 !mt-8'>
          <div className=''>
            <img src="./images/Hekto.png" alt="" className='!mx-auto sm:!mx-0' />
            <div className=" hidden lg:flex !mt-4 !mb-4 ">
              <input
                type="text"
                className=" bg-white border-2 border-gray-200 w-3xs  outline-none rounded-l-md rounded-r-none placeholder:!p-4"
                placeholder='Enter Email Address'
              />
              <button className="bg-pink-500 text-md rounded-sm text-white flex items-center justify-end  !px-6 !p-2">
                Sign Up
              </button>


            </div>
            <p className='text-gray-400'>Contact Info</p>
            <p className='text-gray-400'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
          </div>

          <div>
            <h1 className='text-black font-semibold text-lg !mb-4'>Categories</h1>
            <div className='flex flex-col text-gray-400'>
              <Link className='!mb-2 '>Laptops & Computers</Link>
              <Link className='!mb-2 '>Cameras & Photography</Link>
              <Link className='!mb-2 '>Smart Phones & Tablets</Link>
              <Link className='!mb-2 '>Video Games & Consoles</Link>
              <Link>Waterproof Headphones</Link>
            </div>
          </div>

          <div>
            <h1 className='text-black font-semibold text-lg !mb-4'>Customer Care</h1>
            <div className='flex flex-col text-gray-400'>
              <Link className='!mb-2 '>My Account</Link>
              <Link className='!mb-2 '>Discount</Link>
              <Link className='!mb-2 '>Returns</Link>
              <Link className='!mb-2 '>Orders History</Link>
              <Link>Order Tracking</Link>
            </div>
          </div>

          <div>
            <h1 className='text-black font-semibold text-lg !mb-4'>Page</h1>
            <div className='flex flex-col text-gray-400'>
              <Link className='!mb-2 '>Blog</Link>
              <Link className='!mb-2 '>CBrowse the Shop</Link>
              <Link className='!mb-2 '>Category</Link>
              <Link className='!mb-2 '>Pre-Built Pages</Link>
              <Link className='!mb-2 '>Visual Composer Elements</Link>
              <Link>WooCommerce Pages</Link>
            </div>
          </div>
        </div>

      </div>


      <div className='bg-[E7E4F8] !p-2'>
        <div className='w-66 sm:w-5xl !mx-auto flex flex-wrap  items-center justify-between !mt-4'>
          <p className='text-gray-400'>©Webecy - All Rights Reserved</p>
          <div className='flex gap-4 !mx-auto sm:!mx-0 text-[#1A0B5B] text-2xl'>
            <Link >
              <SiFacebook  />
            </Link>
            <Link >
              <RiInstagramFill  />
            </Link>
            <Link >
              <AiFillTwitterCircle  />
            </Link>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
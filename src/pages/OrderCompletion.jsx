import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import { FaCheckCircle, FaClipboardList, FaClock } from 'react-icons/fa'
import { Link } from 'react-router'
const OrderCompletion = () => {
    return (
        <>
            <Breadcrumb />


            <div className="flex  items-center justify-center !my-26 bg-white !px-4">
                {/* Main container */}
                <div className="relative   border-l border-b border-dashed border-gray-300 sm:!px-24  text-center sm:max-w-7xl h-98  ">
                    <div className=' sm:max-w-2xl '>
                        {/* Top Icon */}
                        <div className="flex justify-center !mb-6">

                            <img src="/images/check.png" alt="" />

                        </div>

                        {/* Title */}
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#1a0b5b] !mb-6 font-[josefin_Sans]">
                            Your Order Is Completed!
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 !mb-18">
                            Thank you for your order! Your order is being processed and will be completed
                            within <span className="font-semibold text-gray-800">3–6 hours</span>. You will
                            receive an email confirmation when your order is completed.
                        </p>

                        {/* Button */}
                        <Link
                            to="/products"
                            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold !py-2 !px-6  transition"
                        >
                            Continue Shopping
                        </Link>
                    </div>

                    {/* Decorative icons */}

                    <img src="/images/clock.png" alt="" className='absolute sm:left-[-48px] -left-[15px] top-2 w-12 sm:w-22  sm:top-12  transform -translate-y-1/2 text-6xl  sm:block' />

                    <img src="/images/note.png" alt="" className="absolute w-8 right-[-12px] sm:w-14 sm:right-[-60px] top-96 transform -translate-y-1/2 text-6xl text-pink-500  sm:block" />

                </div>


            </div>
            <div className=' !mt-8 !mb-8 flex justify-center !p-2'>

                <img src="./images/companies-image.png" alt="" />
            </div>


        </>
    )
}

export default OrderCompletion
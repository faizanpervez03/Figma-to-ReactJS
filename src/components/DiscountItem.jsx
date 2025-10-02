import React from 'react'
import { Link } from 'react-router'
import { IoCheckmark } from "react-icons/io5";
import { FaCheck } from 'react-icons/fa';

const DiscountItem = () => {



    const items = [
        "Material expose like metals",
        "Clear lines and geomatric figures",
        "Simple neutral colours.",
        "Material expose like metals",
    ];


    return (
        <>

            <div className='sm:w-7xl !mx-auto !mt-24 '>
                <h1 className='text-[#1A0B5B] text-3xl font-bold text-center !mb-4 font-[josefin_Sans] '>Discount Items</h1>

                <div className='!mb-18 sm:!mb-8'>
                    <ul>
                        <li className='flex justify-center flex-wrap gap-8 text-blue-900'>
                            <Link className='underline text-pink-500'>Wood Chair</Link>
                            <Link>Plastic Chair</Link>
                            <Link>Sofa Collection</Link>

                        </li>
                    </ul>
                </div>
                <div className=' !mx-auto sm:!-mr-48 flex justify-center items-center  flex-col !-mt-18 sm:flex-row  '>
                    <div className='!p-8 sm:!p-0'>
                        <h1 className='text-[#1A0B5B] text-center text-lg sm:text-start sm:text-3xl font-bold !mb-12 sm:!mb-4 font-[josefin_Sans] !-ml-6 '>20% Discount Of All Products</h1>
                        <p className=' text-center sm:text-start   font-bold !mb-4 font-[josefin_Sans] !-ml-6 text-pink-500'>Eams Sofa Compact</p>
                        <p className=' text-center sm:text-start   !mb-4 font-[josefin_Sans] !-ml-6 text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, incidunt nulla sit <br /> pariatur asperiores sapiente ullam ab? Similique, quaerat.</p>
                        <div >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#7b7bb4] text-sm">
                                {items.map((item, index) => (
                                    <div key={index} className="flex items-center gap-2 !-ml-6">
                                        <FaCheck className="text-[#7b7bb4]" />
                                        <p>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='flex  flex-col items-center  sm:flex-row    !-ml-14  !p-8'>
                            <button className='bg-pink-500 text-white shadow-gray shadow-lg cursor-pointer rounded-sm !px-12' style={{ padding: "10px 20px ", }}>Shop Now</button>
                           
                        </div>
                    </div>
                    <div>
                        <img src="./images/Discount-image.png" alt="" />
                    </div>

                </div>
            </div>

        </>
    )
}

export default DiscountItem
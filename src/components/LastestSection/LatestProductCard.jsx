import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import { RiZoomInLine } from 'react-icons/ri'

const LatestProductCard = ({ image, title, price, discount, saleImage }) => {
    return (
        <>

            <div className="w-92   !max-w-lg !mx-auto !mb-26 group  ">

                <div className="bg-white shadow-sm rounded-sm overflow-hidden relative">
                    <div className='flex flex-col absolute top-34 left-4  gap-4 opacity-0 group-hover:opacity-100'>

                        <button className='text-[#3b27c7] hover:bg-gray-300 hover:rounded-2xl !p-1 cursor-pointer'><FiShoppingCart /></button>
                        <button className='text-[#3b27c7] hover:bg-gray-300 hover:rounded-2xl !p-1 cursor-pointer'><FaRegHeart /></button>
                        <button className='text-[#3b27c7] hover:bg-gray-300 hover:rounded-2xl !p-1 cursor-pointer'><RiZoomInLine /></button>

                    </div>
                    <div>
                        <img src={saleImage} alt="" className='absolute w-18  top-2 left-6' />
                    </div>
                    <div className="flex justify-center items-center bg-gray-50 hover:bg-white">
                        <img
                            src={image}
                            alt="Comfort Handy Craft"
                            className="w-full h-64 object-contain"
                        />
                    </div>


                    <div className=" flex justify-around items-center">
                        <h3 className="text-sm font-medium text-blue-900 hover:underline cursor-pointer">
                            {title}
                        </h3>

                        <div className=" flex justify-center items-center gap-2">
                            <span className="text-blue-900 font-semibold">{price}</span>
                            <span className="text-red-500 line-through">{discount}</span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LatestProductCard
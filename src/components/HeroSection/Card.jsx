import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { RiZoomInLine } from "react-icons/ri";
const Card = ({ image, title, code, price }) => {
    return (
        <>

            <div className="w-[280px] h-[340px] bg-white rounded-lg shadow-lg relative   group">


                <div className="bg-[#f9f9ff]  flex justify-center items-center p-6">
                    <div className='flex absolute top-4 left-4  gap-4 opacity-0 group-hover:opacity-100'>

                        <button className='text-[#3b27c7] cursor-pointer'><FiShoppingCart /></button>
                        <button className='text-[#189df4] cursor-pointer'><FaRegHeart /></button>
                        <button className='text-[#189df4] cursor-pointer'><RiZoomInLine /></button>

                    </div>
                    <img
                        src={image}
                        alt="Cantilever chair"
                        className="h-60 object-contain"
                    />


                </div>
                <div className="flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-green-500 text-white !px-2 !py-1  font-medium cursor-pointer">
                        View Details
                    </button>
                </div>


                <div className="bg-white group-hover:bg-blue-700 text-center py-5 flex flex-col gap-1 transition-colors duration-300">

                    <h2 className="text-pink-600 font-semibold text-lg mb-2 group-hover:text-white">
                        {title}
                    </h2>


                    <div className="flex items-center justify-center gap-2 mb-3">
                        <span className="w-4 h-1 rounded bg-teal-500"></span>
                        <span className="w-4 h-1 rounded bg-pink-600"></span>
                        <span className="w-4 h-1 rounded bg-indigo-900"></span>
                    </div>

                    <div>
                        <span className="text-indigo-900 font-medium ml-2 group-hover:text-white">

                            {code}
                        </span>
                    </div>


                    <p className="text-gray-800 font-semibold text-lg group-hover:text-white">

                        {price}
                    </p>

                </div>

              

            </div>

            
        </>
    )
}

export default Card
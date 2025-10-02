import React from 'react'

const RightTrendProducts = ({ image, para, price }) => {
    return (
        <>
            <div className='!mt-8'>
                <div className='flex gap-4 items-center '>
                    <div  className='bg-[#e4e4e7] sm:w-[100px] flex justify-center items-center'>
                        <img src={image} alt="" />
                    </div>
                    <div className="flex flex-col">
                        <p className='text-indigo-900 font-semibold'> {para}</p>
                        <p className='text-indigo-900 line-through'>{price}</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default RightTrendProducts
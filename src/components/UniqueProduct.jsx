import React from 'react'

const UniqueProduct = () => {
    return (
        <>
            <div className='w-full !mt-24 bg-[#F1F0FF]'>
                <div className=' !mx-auto flex justify-center items-center flex-col sm:flex-row !pt-8'>
                    <div>
                        <img src="./images/sofa-chair.png" alt="" />
                    </div>
                    <div>
                        <h1 className='text-[#1A0B5B] text-center text-lg sm:text-start sm:text-3xl font-bold !mb-4 font-[josefin_Sans] !-ml-6'>Unique Features Of leatest & <br /> Trending Poducts</h1>
                        <ul className='list-disc text-[#ACABC3] !p-8 sm:!p-0 text-center text-sm sm:text-start'>
                            <li className=' marker:text-2xl marker:text-red-500'>All frames constructed with hardwood solids and laminates</li>
                            <li className=' marker:text-2xl marker:text-blue-800'>Reinforced with double wood dowels, glue, screw - nails corner <br /> blocks and machine nails</li>
                            <li className=' marker:text-2xl marker:text-[#2bf5cc]'>Arms, backs and seats are structurally reinforced</li>
                        </ul>

                        <div className='flex  flex-col items-center  sm:flex-row !-mt-4  sm:!mt-8 !-ml-14 gap-4 !p-8'>
                            <button className='bg-pink-500 text-white shadow-gray shadow-lg cursor-pointer' style={{ padding: "10px 20px ", }}>Add To Cart</button>
                            <div className='text-[#1A0B5B]'>
                                <p><span className='font-semibold'> B&B</span> Italian Sofa</p>
                                <p>$32.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default UniqueProduct
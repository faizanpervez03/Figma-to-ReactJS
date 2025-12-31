import React from 'react'


const TopCategory = () => {
    const Products = [
        {
            id: 1,
            image: "./images/topcategory-1.png",
            title: "Mini LCW Chair",
            price: "Rs 56"

        },
        {
            id: 2,
            image: "./images/topcategory-2.png",
            title: "Mini LCW Chair",
            price: "Rs 56"

        },
        {
            id: 3,
            image: "./images/topcategory-3.png",
            title: "Mini LCW Chair",
            price: "Rs 56"

        },
        {
            id: 4,
            image: "./images/topcategory-1.png",
            title: "Mini LCW Chair",
            price: "Rs 56"

        }
    ]
    return (
        <>

            <div className='!mt-24 !mb-12'>
                <h1 className='text-[#1A0B5B] text-4xl font-bold text-center !mb-4 font-[josefin_Sans] '>Top Categories</h1>


                <div className='w-[65%]  !m-auto !p-8 flex justify-around flex-wrap'>
                    {Products.map((item) => {
                        return (

                            <div className='w-[220px] h-[240px] !mb-4 sm:!mb-4 '>
                                <div className='bg-purple-400 rounded-full   '>
                                    <div className="bg-gray-50 shadow-sm rounded-full !p-12 overflow-hidden relative  flex flex-col justify-center items-center hover:translate-x-2 hover:-translate-y-2 transition duration-100 ">

                                        <div>
                                            <img src={item.image} alt="" />
                                        </div>




                                    </div>
                                </div>
                                <div className="flex flex-col items-center !mt-4 ">
                                    <h3 className="text-lg font-medium text-blue-900 hover:underline cursor-pointer">
                                        {item.title}
                                    </h3>
                                    <p className='text-sm text-blue-900'>{item.price}</p>

                                </div>
                            </div>

                        )
                    })}


                </div>

                <div className="flex justify-center gap-3 !mt-12 ">
                    <div className="w-[10px] h-[10px] rounded-full bg-pink-500 border-2 border-pink-500"></div>
                    
                    <div className="w-[10px] h-[10px] rounded-full border-2 border-pink-500"></div>
                    <div className="w-[10px] h-[10px] rounded-full border-2 border-pink-500"></div>
                </div>
            </div>

        </>
    )
}

export default TopCategory
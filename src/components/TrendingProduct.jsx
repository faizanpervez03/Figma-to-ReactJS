import React from 'react'

const TrendingProduct = () => {


    const products = [
        {
            id: 1,
            title: "Cantilever chair",
            image: "./images/sofa-chair01.png",
            price: "$26.00",
            discount: "$42.00"
        },

        {
            id: 2,
            title: "Cantilever chair",
            image: "./images/sofa-chair02.png",
            price: "$26.00",
            discount: "$42.00"
        },
        {
            id: 3,
            title: "Cantilever chair",
            image: "./images/sofa-chair03.png",
            price: "$26.00",
            discount: "$42.00"
        },

        {
            id: 4,
            title: "Cantilever chair",
            image: "./images/sofa-chair04.png",
            price: "$26.00",
            discount: "$42.00"
        },



      
    ]


    return (
        <>

            <div className='!mt-16 w-full  !mb-16 '>
                <h1 className='text-[#1A0B5B] text-3xl font-bold text-center font-[josefin_Sans] '>Trending Products</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   sm:w-[70%] place-items-center !mx-auto  !mt-8'>
                    {products.map((item) => {

                        return (
                            <div className=''>
                                <div className="w-[280px] h-[340px] bg-white rounded-sm shadow-lg relative  !p-2 group">

                                    <div className="bg-[#e4e4e7]  flex justify-center items-center !mt-2 ">

                                        <img
                                            src={item.image}
                                            alt="Cantilever chair"
                                            className="h-60 object-contain"
                                        />


                                    </div>

                                    <div className="bg-white group-hover:bg-blue-700 text-center py-5 flex flex-col gap-1 transition-colors duration-300">

                                        <h2 className="text-indigo-900 font-semibold text-lg mb-2 group-hover:text-white">
                                            {item.title}
                                        </h2>

                                        <div className='flex justify-center items-center gap-4 !mt-4'>
                                            <span className="text-indigo-900 font-medium ml-2 group-hover:text-white">

                                                <p>{item.price}</p>
                                            </span>

                                            <p className="text-gray-400 line-through text-sm group-hover:text-white">

                                                {item.discount}
                                            </p>
                                        </div>




                                    </div>



                                </div>
                            </div>
                        )
                    })}
                </div>
                    {/* lower trending section start shoo */}

                     
            </div>

        </>
    )
}

export default TrendingProduct
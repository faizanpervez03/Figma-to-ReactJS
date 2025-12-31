import React from 'react'
import { FaStar, FaRegStar } from "react-icons/fa";

const RelatedProduct = () => {
    const products = [
        {
            id: 1,
            title: "Mens Fashion Wear",
            price: "Rs 43",
            rating: 5,
            image: "/images/Products-images/product-7.png",
        },
        {
            id: 2,
            title: "Women's Fashion",
            price: "Rs 67",
            rating: 5,

            image: "/images/Products-images/product-8.png",
        },
        {
            id: 3,
            title: "Wolx Dummy Fashion",
            price: "Rs 67",
            rating: 4,

            image: "/images/Products-images/product-9.png",
        },
        {
            id: 4,
            title: "Top Wall Digital Clock",
            price: "Rs 51",
            rating: 4,

            image: "/images/Products-images/product-10.png",
        },
    ];



    return (

        <>

            <div className=' '>
                <div className=' sm:max-w-7xl !mx-auto'>
                    <h1 className='text-[#1A0B5B] text-4xl font-bold  !mb-4 font-[josefin_Sans] '>Related Products</h1>


                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 !mt-6">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white shadow-md hover:shadow-lg transition duration-300 overflow-hidden "
                            >
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className=" object-cover h-66 !mx-auto hover:scale-105 transition-transform duration-500"
                                />
                                <div className="!p-2  text-center flex justify-between">
                                    <h3 className="text-lg font-medium text-gray-900 hover:text-indigo-600 cursor-pointer">
                                        {product.title}
                                    </h3>
                                    <div className="flex justify-center items-center !mt-2 !mb-2 text-yellow-400">
                                        {[...Array(5)].map((_, i) =>
                                            i < product.rating ? (
                                                <FaStar key={i} />
                                            ) : (
                                                <FaRegStar key={i} />
                                            )
                                        )}
                                    </div>

                                </div>
                                <p className="text-gray-800 !p-2 font-semibold">{product.price}</p>
                            </div>

                        ))}
                    </div>


                </div>
            </div>










            <div className='!mt-8 !mb-8 flex justify-center !p-4 '>

                <img src="../images/companies-image.png" alt="" />
            </div>


        </>
    )
}

export default RelatedProduct
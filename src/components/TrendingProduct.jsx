import React, { useEffect, useState } from 'react'
import TrendBelowProducts from './TrendBelowProducts/TrendBelowProducts'
import RightTrendProducts from './TrendBelowProducts/RightTrendProducts'

const API = 'http://localhost:3000/api'

const TrendingProduct = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchProducts()
    }, [])

    async function fetchProducts() {
        try {
            const res = await fetch(`${API}/products`)
            const data = await res.json()
            if (data && data.length > 0) {
                // Map database products and take first 4
                const mappedProducts = data.slice(0, 4).map((p) => ({
                    id: p._id || p.id,
                    title: p.name,
                    image: p.image ? `http://localhost:3000${p.image}` : './images/placeholder.png',
                    price: `Rs ${p.price?.toFixed(2) || '0.00'}`,
                    discount: `$${(p.price * 1.5)?.toFixed(2) || '0.00'}`,
                }))
                setProducts(mappedProducts)
            }
        } catch (err) {
            console.error('Failed to fetch trending products:', err)
            setProducts([])
        } finally {
            setLoading(false)
        }
    }



    return (
        <>

            <div className='!mt-16 w-full  !mb-16 '>
                <h1 className='text-[#1A0B5B] text-3xl font-bold text-center font-[josefin_Sans] '>Trending Products</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   sm:w-[70%] place-items-center !mx-auto  !mt-8'>
                    {loading ? (
                        <div className="col-span-full text-center text-gray-500">Loading...</div>
                    ) : products.length > 0 ? (
                        products.map((item) => {
                            return (
                                <div className='' key={item.id}>
                                    <div className="w-[280px] h-[340px] bg-white rounded-sm shadow-lg relative  !p-2 group">

                                        <div className="bg-[#e4e4e7]  flex justify-center items-center !mt-2 ">

                                            <img
                                                src={item.image}
                                                alt={item.title}
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
                        })
                    ) : (
                        <div className="col-span-full text-center text-gray-500">No products available</div>
                    )}
                </div>
                {/* lower trending section start shoo */}
                <div className=' !p-2 flex flex-wrap   sm:w-[68%] gap-8 place-items-center !mx-auto  !mt-8'>
                    <TrendBelowProducts
                        bgColor="bg-[#FFF6FB]"
                        title="23% off in all products"
                        btn="Shop Now"
                        image="./images/trend-image-1.png"
                        imgSize="w-44"
                    />
                    <TrendBelowProducts
                        bgColor="bg-[#EEEFFB]"
                        title="23% off in all products"
                        btn="View Collections"
                        image="./images/trend-image-2.png"
                        imgSize="w-72"
                    />
                    <div className='!-mt-8'>
                        <RightTrendProducts
                        image="./images/trend-image-4.png"
                        para="Executive Seat chair"
                        price="Rs 32"
                        
                        />
                        <RightTrendProducts
                        image="./images/trend-image-5.png"
                        para="Executive Seat chair"
                        price="Rs 32"
                        />
                        <RightTrendProducts
                        image="./images/trend-image-5.png"
                        para="Executive Seat chair"
                        price="Rs 32"
                        />
                    </div>
                    

                </div>


            </div>

        </>
    )
}

export default TrendingProduct
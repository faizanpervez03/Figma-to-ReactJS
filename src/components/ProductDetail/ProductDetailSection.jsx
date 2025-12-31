import React, { useState, useEffect } from 'react'
import { FaStar, FaRegHeart, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { useParams, useNavigate } from 'react-router-dom';
import { products as defaultProducts } from '../../productsData/products';
import { useDispatch } from 'react-redux'
import { addToCart as addToCartAction } from '../../store/cartSlice'

const API = 'http://localhost:3000/api'

const ProductDetailSection = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchProduct()
    }, [id])

    async function fetchProduct() {
        try {
            const res = await fetch(`${API}/products`)
            const data = await res.json()
            
            // Find product by MongoDB _id
            const foundProduct = data.find((p) => p._id === id)
            
            if (foundProduct) {
                // Map database product to component format
                const mappedProduct = {
                    id: foundProduct._id,
                    title: foundProduct.name,
                    price: `Rs ${foundProduct.price?.toFixed(2) || '0.00'}`,
                    oldPrice: `Rs ${(foundProduct.price * 1.5)?.toFixed(2) || '0.00'}`,
                    image: foundProduct.image ? `http://localhost:3000${foundProduct.image}` : '/images/placeholder.png',
                    description: foundProduct.description,
                    category: foundProduct.category,
                    colors: ['#EEFF61', '#F3559A', '#755BF9'],
                    countInStock: foundProduct.countInStock,
                }
                setProduct(mappedProduct)
            } else {
                // Fallback to default products
                const fallbackProduct = defaultProducts.find((p) => p.id === parseInt(id))
                setProduct(fallbackProduct)
            }
        } catch (err) {
            console.error('Failed to fetch product:', err)
            // Fallback to default products
            const fallbackProduct = defaultProducts.find((p) => p.id === parseInt(id))
            setProduct(fallbackProduct)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <div className="text-center text-gray-500 mt-20">Loading...</div>;
    }

    if (!product) {
        return <div className="text-center text-gray-500 mt-20">Product not found</div>;
    }

    const handleAddToCart = () => {
        // Create cart item with numeric price for calculations
        const cartProduct = {
            ...product,
            price: typeof product.price === 'string' 
                ? parseFloat(product.price.replace('Rs', '').replace('$', '').trim()) 
                : product.price,
            name: product.title,
        }
        dispatch(addToCartAction({ product: cartProduct, quantity: 1 }))
        navigate('/cart')
    }

    return (
        <>
            <div>


                <div className='sm:w-7xl !mx-auto !mt-18 !mb-24'>
                    <section className="max-w-6xl  !px-6 !py-6 flex flex-col lg:flex-row gap-10 bg-white rounded-xl shadow-[0_0_25px_rgba(0,0,0,0.1)]">

                        {/* LEFT SIDE — Image Gallery */}
                        <div className="flex flex-col sm:flex-row lg:flex-row gap-18 w-full lg:w-1/2">
                            {/* Thumbnails */}
                            <div className="flex sm:flex-col self-center gap-8">
                                <img
                                    src="/images/Products-images/product-1.png"
                                    alt="thumb1"
                                    className="w-24 h-24 object-cover rounded-sm cursor-pointer !p-2 border border-gray-200 bg-[#eaeaea]"
                                />
                                <img
                                    src="/images/Products-images/product-2.png"
                                    alt="thumb2"
                                    className="w-24 h-24 object-cover rounded-sm !p-2 cursor-pointer border border-gray-200 bg-[#eaeaea]"
                                />
                                <img
                                    src="/images/Products-images/product-3.png"
                                    alt="thumb3"
                                    className="w-24 h-24 object-cover rounded-sm !p-2 cursor-pointer border border-gray-200 bg-[#eaeaea]"
                                />
                            </div>

                            {/* Main Image */}
                            <div className="self-center sm:self-end justify-self-end w-[80%]  border !p-2 rounded-sm  border-gray-300 bg-[#eaeaea]">
                                <img
                                    src={product.image}
                                    alt="main product"
                                    className="w-full max-w-sm object-contain rounded-xl "
                                />
                            </div>

                        </div>

                        {/* RIGHT SIDE — Product Details */}
                        <div className=" flex-1   space-y-4 !mt-12 font-[josefin_Sans] ">
                            <h1 className="text-3xl font-bold text-[#1A0B5B] !mb-2">{product.title}</h1>

                            {/* Rating */}
                            <div className="flex items-center gap-2 ">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-400" />
                                ))}
                                <span className="text-gray-500 text-sm">(22)</span>
                            </div>

                            {/* Price */}
                            <div className="flex items-center gap-4 text-md  !mt-4">
                                <span className="text-[#1A0B5B]">{product.price}</span>
                                <span className="line-through text-gray-400">{product.oldPrice}</span>
                            </div>

                            {/* Color */}
                            <div className="flex items-center gap-2 !mt-2">

                                <span className="text-[#1A0B5B] font-medium">Color:</span>
                                {product.colors.map((color, index) => (


                                    <div className="flex gap-2">

                                        <div key={index} className="w-6 h-6 rounded-full border border-gray-300 "   
                                        style={{backgroundColor: color}}
                                        ></div>

                                    </div>
                                ))}
                            </div>

                            {/* Description */}
                            <p className="text-gray-500 leading-relaxed !mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus,
                                et volutpat sit.
                            </p>

                            {/* Buttons */}
                            <div className="flex items-center gap-4 !mt-4">
                                <button onClick={handleAddToCart} className="  !px-6 !py-2 rounded-full text-white cursor-pointer bg-purple-500  ">
                                    Add To Cart
                                </button>
                                <button className="!p-2  rounded-full hover:bg-gray-100 transition">
                                    <FaRegHeart className="text-[#1A0B5B]" />
                                </button>
                            </div>

                            {/* Categories + Tags */}
                            <div className="text-gray-600 space-y-1 text-sm !mt-4">
                                <p>
                                    <span className="font-semibold text-[#1A0B5B] ">Categories:</span> Chair, Furniture 
                                </p>
                                <p className='!mt-4'>
                                    <span className="font-semibold text-[#1A0B5B] ">Tags:</span> Home, Decor
                                </p>
                            </div>

                            {/* Share Icons */}
                            <div className="flex items-center gap-3 !mt-4">
                                <span className="text-[#1A0B5B] font-semibold">Share:</span>
                                <div className="flex gap-3 text-[#1A0B5B]">
                                    <FaFacebookF className="cursor-pointer w-2 hover:text-[#FB2E86]" />
                                    <FaTwitter className="cursor-pointer w-4 hover:text-[#FB2E86]" />
                                    <FaInstagram className="cursor-pointer w-4 hover:text-[#FB2E86]" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
        </>
    )
}

export default ProductDetailSection
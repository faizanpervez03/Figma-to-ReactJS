import React, { useState } from "react";
import { FaShoppingCart, FaSearch, FaHeart, FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { RiZoomInLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { addToWishlist, removeFromWishlist, selectIsInWishlist } from "../../store/wishlistSlice";

const ProductStructure = ({ product }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isInWishlist = useSelector(selectIsInWishlist(product.id))
    const [zoomOpen, setZoomOpen] = useState(false)

    const handleAddToCart = (e) => {
      e.preventDefault()
      dispatch(addToCart({ product, quantity: 1 }))
    }

    const handleZoom = (e) => {
      e.preventDefault()
      setZoomOpen(true)
    }

    const handleWishlist = (e) => {
      e.preventDefault()
      if (isInWishlist) {
        dispatch(removeFromWishlist(product.id))
      } else {
        dispatch(addToWishlist(product))
      }
    }

    return (
        <div className=" rounded-md shadow-sm hover:shadow-lg transition-all duration-300 group !pb-2 !mt-6">
            {/* Image Section */}
            <div className="relative  w-full h-[280px]  flex justify-center items-center hover:bg-[#ebf4f3]  ">
                <Link to={`/productDetail/${product.id}`} >
                <img
                    src={product.image}
                    
                    alt={product.title}
                    className="max-h-[200px] object-contain transition-transform duration-300 group-hover:scale-105"
                />
                </Link>

                {/* Hover Icons */}
                <div className="absolute top-42   left-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button onClick={handleAddToCart} className=" !p-1.5  rounded-full  shadow text-[#250e8b] hover:bg-white hover:text-[#250e8b] transition cursor-pointer">
                        <FiShoppingCart size={14} />
                    </button>
                    <button onClick={handleZoom} className=" !p-1.5  rounded-full shadow text-[#250e8b] hover:bg-white hover:text-[#250e8b] transition cursor-pointer">
                        <RiZoomInLine size={14} />
                    </button>
                    <button onClick={handleWishlist} className=" !p-1.5  rounded-full shadow text-[#250e8b] hover:bg-white hover:text-[#250e8b] transition cursor-pointer">
                        {isInWishlist ? <FaHeart size={14} className="text-pink-500" /> : <FaRegHeart size={14} />}
                    </button>
                </div>

                {/* Zoom Modal */}
                {zoomOpen && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setZoomOpen(false)}>
                    <div className="bg-white p-6 rounded-lg max-w-md" onClick={(e) => e.stopPropagation()}>
                      <img src={product.image} alt={product.title} className="w-full max-h-96 object-contain mb-4" />
                      <h3 className="text-lg font-semibold text-[#1A0B5B] mb-2">{product.title}</h3>
                      <p className="text-gray-600 mb-4">Price: Rs{product.price.toFixed(2)}</p>
                      <button onClick={() => setZoomOpen(false)} className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">Close</button>
                    </div>
                  </div>
                )}
            </div>

            {/* Title */}
            <Link to={`/productDetail/${product.id}`}>
            <h3 className="!mt-4 text-center text-[#1A0B5B] font-semibold text-[15px] hover:text-indigo-600 cursor-pointer">
                {product.title}
            </h3>
            </Link>

            {/* Colors */}
            <div className="flex justify-center gap-2 !mt-2">
                {product.colors.map((color, i) => (
                    <span
                        key={i}
                        className="w-3 h-3 rounded-full "
                        style={{ backgroundColor: color }}
                    ></span>
                ))}
            </div>

            {/* Price */}
            <div className="flex justify-center items-center gap-2 !mt-2">
                <span className="text-[#1A0B5B] font-medium">
                   Rs: {product.price.toFixed(0)}
                </span>
                <span className="text-pink-600 line-through text-sm">
                    Rs: {product.oldPrice.toFixed(0)}
                </span>
            </div>

             
        </div>

        
    );
};

export default ProductStructure;

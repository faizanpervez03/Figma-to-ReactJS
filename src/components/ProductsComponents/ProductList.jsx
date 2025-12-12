import React, { useState } from "react";
import { FaShoppingCart, FaHeart, FaSearch, FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { addToWishlist, removeFromWishlist, selectWishlistItems } from "../../store/wishlistSlice";

const ProductList = ({ products }) => {
    const dispatch = useDispatch()
    const list = products || [];
    const [zoomProduct, setZoomProduct] = useState(null)
    const wishlistItems = useSelector(selectWishlistItems)

    const handleAddToCart = (e, product) => {
      e.preventDefault()
      e.stopPropagation()
      dispatch(addToCart({ product, quantity: 1 }))
    }

    const handleZoom = (e, product) => {
      e.preventDefault()
      e.stopPropagation()
      setZoomProduct(product)
    }

    const handleWishlist = (e, product) => {
      e.preventDefault()
      e.stopPropagation()
      const isInWishlist = wishlistItems.some((i) => i.id === product.id)
      if (isInWishlist) {
        dispatch(removeFromWishlist(product.id))
      } else {
        dispatch(addToWishlist(product))
      }
    }

    return (
        <>
        <div className="flex flex-col gap-6">
                {list.map((product) => {
                  const isInWishlist = wishlistItems.some((i) => i.id === product.id)
                  return (
                    <Link to={`/productDetail/${product.id}`} key={product.id}>
                    <div
                        className="flex flex-col sm:flex-row items-center gap-6 !p-4  shadow-sm hover:shadow-md transition"
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            className="rounded-lg"
                        />

                        <div className="flex flex-col flex-1">

                            <div className="flex gap-4">
                                <h3 className="text-lg font-semibold text-[#1A0B5B]">
                                    {product.title}
                                </h3>

                                <div className="flex justify-center gap-2 !mt-2">
                                    {product.colors.map((color, i) => (
                                        <span
                                            key={i}
                                            className="w-3 h-3 rounded-full "
                                            style={{ backgroundColor: color }}
                                        ></span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-[#1A0B5B] font-semibold">
                                    ${product.price}
                                </span>
                                <span className="line-through text-pink-600">
                                    ${product.oldPrice}
                                </span>
                            </div>

                            <p className="text-gray-500 mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
                                est adipiscing in phasellus in justo.
                            </p>

                            <div className="flex items-center gap-4 !mt-4 text-gray-600">
                                <FiShoppingCart size={14} onClick={(e) => handleAddToCart(e, product)} className="hover:text-[#1A0B5B] cursor-pointer" />
                                <FaSearch className="hover:text-[#1A0B5B] cursor-pointer" onClick={(e) => handleZoom(e, product)} />
                                <button onClick={(e) => handleWishlist(e, product)} className="bg-transparent border-none cursor-pointer">
                                  {isInWishlist ? <FaHeart className="text-pink-500" /> : <FaRegHeart className="hover:text-[#1A0B5B] cursor-pointer" />}
                                </button>
                            </div>
                        </div>
                    </div>
                      </Link>
                  )
                })}
        </div>

        {/* Zoom Modal */}
        {zoomProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setZoomProduct(null)}>
            <div className="bg-white p-6 rounded-lg max-w-md" onClick={(e) => e.stopPropagation()}>
              <img src={zoomProduct.image} alt={zoomProduct.title} className="w-full max-h-96 object-contain mb-4" />
              <h3 className="text-lg font-semibold text-[#1A0B5B] mb-2">{zoomProduct.title}</h3>
              <p className="text-gray-600 mb-4">Price: ${zoomProduct.price.toFixed(2)}</p>
              <button onClick={() => setZoomProduct(null)} className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">Close</button>
            </div>
          </div>
        )}
        </>
    );
};

export default ProductList;

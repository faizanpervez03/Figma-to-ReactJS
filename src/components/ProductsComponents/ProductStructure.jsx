import React from "react";
import { FaShoppingCart, FaSearch, FaHeart, FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { RiZoomInLine } from "react-icons/ri";
import { Link } from "react-router-dom";


const ProductStructure = ({ product }) => {
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
                    <button className=" !p-1.5  rounded-full  shadow text-[#250e8b] hover:bg-white hover:text-[#250e8b] transition cursor-pointer">
                        <FiShoppingCart size={14} />
                    </button>
                    <button className=" !p-1.5  rounded-full shadow text-[#250e8b] hover:bg-white hover:text-[#250e8b] transition cursor-pointer">
                        <RiZoomInLine size={14} />
                    </button>
                    <button className=" !p-1.5  rounded-full shadow text-[#250e8b] hover:bg-white hover:text-[#250e8b] transition cursor-pointer">
                        <FaRegHeart size={14} />
                    </button>
                </div>
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
                    ${product.price.toFixed(2)}
                </span>
                <span className="text-pink-600 line-through text-sm">
                    ${product.oldPrice.toFixed(2)}
                </span>
            </div>

             
        </div>

        
    );
};

export default ProductStructure;

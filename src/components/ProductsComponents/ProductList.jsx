import React from "react";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
    const list = products || [];
    return (
        <div className="flex flex-col gap-6">
                {list.map((product) => (
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
                                <FiShoppingCart size={14} />
                                <FaSearch className="hover:text-[#1A0B5B] cursor-pointer" />
                                <FaHeart className="hover:text-[#1A0B5B] cursor-pointer" />
                            </div>
                        </div>
                    </div>
                      </Link>
                ))}
        </div>
    );
};

export default ProductList;

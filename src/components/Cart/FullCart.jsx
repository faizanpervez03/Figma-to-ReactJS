import React, { useState } from "react";

import CartTotal from "./CartTotal";
import CalculateShipping from "./CalculateShipping";
import { IoClose } from "react-icons/io5";











const FullCart = () => {

  
const cartItems = [
  {
    id: 1,
    name: "Ut diam consequat",
    color: "Brown",
    size: "XL",
    price: 32.0,
    image: "./images/cart-1.png",
    total: 219.0,
  },
  {
    id: 2,
    name: "Vel faucibus posuere",
    color: "Brown",
    size: "XL",
    price: 32.0,
    image: "./images/cart-2.png",
    total: 219.0,
  },
  {
    id: 3,
    name: "Ac vitae vestibulum",
    color: "Brown",
    size: "XL",
    price: 32.0,
    image: "./images/cart-3.png",
    total: 219.0,
  },
  {
    id: 4,
    name: "Eti massa diam",
    color: "Brown",
    size: "XL",
    price: 32.0,
    image: "./images/cart-4.png",
    total: 219.0,
  },
  {
    id: 5,
    name: "Proin pharetra elementum",
    color: "Brown",
    size: "XL",
    price: 32.0,
    image: "./images/cart-5.png",
    total: 219.0,
  },
];


// Create a separate quantity for each product
  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => {
      acc[item.id] = 0; // default quantity = 1 for each
      return acc;
    }, {})
  );

  // Increase quantity of specific item
  const increase = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  // Decrease quantity of specific item
  const decrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0,
    }));
  };


  return (
    <div className=" container sm:max-w-7xl !mx-auto !px-4 !py-10 grid grid-cols-1 lg:grid-cols-3 gap-6 !mb-14">
      {/* Left side - Cart Items */}
      <div className="lg:col-span-2 !mr-14">
        <div className="flex justify-between font-semibold  !pb-3 !mb-4 text-[#1A0B5B] text-xl">
          <span className="w-1/2">Product</span>
          <span className="w-1/4 text-center">Price</span>
          <span className="w-1/4 text-center">Quantity</span>
          <span className="w-1/4 text-right">Total</span>
        </div>

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b border-gray-300 !py-4"
          >
            <div className="flex items-center gap-4 w-1/2 relative">
              <span className="absolute left-14 cursor-pointer top-2 sm:-top-2 bg-black rounded-2xl ">
                <IoClose className="text-white" />
              </span>
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold ">{item.name}</h3>
                <p className="text-sm text-gray-500">Color: {item.color}</p>
                <p className="text-sm text-gray-500">Size: {item.size}</p>
              </div>
            </div>

            <div className="w-1/4 text-center text-[#1A0B5B]">${item.price.toFixed(2)}</div>

             {/* Quantity */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => decrease(item.id)}
              className="bg-gray-200 text-gray-700 !px-2 rounded hover:bg-gray-300"
            >
              −
            </button>
            <span className="text-lg font-semibold w-6 text-center">
              {quantities[item.id]}
            </span>
            <button
              onClick={() => increase(item.id)}
              className="bg-gray-200 text-gray-700 !px-2 rounded hover:bg-gray-300"
            >
              +
            </button>
          </div>

            <div className="w-1/4 text-right font-semibold text-[#1A0B5B]">
              £{item.total.toFixed(2)}
            </div>
          </div>
        ))}

        <div className="flex justify-between !mt-6">
          <button className="bg-pink-500 text-white !px-6 !py-2 rounded hover:bg-pink-600">
            Update Cart
          </button>
          <button className="bg-pink-500 text-white !px-6 !py-2 rounded hover:bg-pink-600">
            Clear Cart
          </button>
        </div>
      </div>

      {/* Right side - Totals & Shipping */}
      <div className="!space-y-8 ">
        <CartTotal />
        <CalculateShipping />
      </div>
    </div>
  );
};

export default FullCart;

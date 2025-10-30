import React from "react";

const CartTotal = () => {
  return (
    <div className=" !p-6 bg-[#F4F4FC] shadow-sm">
      <h2 className="font-bold text-center mb-4 text-[#1A0B5B]">
        Cart Totals
      </h2>
      <div className="flex justify-between border-b border-gray-300 !pb-2 !mb-2 text-[#1A0B5B]">
        <span>Subtotal:</span>
        <span>£219.00</span>
      </div>
      <div className="flex justify-between !pb-2 border-b border-gray-300 !py-8 text-[#1A0B5B]">
        <span>Total:</span>
        <span>£325.00</span>
      </div>
      <p className="text-xs text-gray-500 !mt-2 !py-6">
        * Shipping & taxes calculated at checkout
      </p>
      <button className="w-full !mt-4 bg-green-500 text-white !py-2 rounded hover:bg-green-600">
        Proceed To Checkout
      </button>
    </div>
  );
};

export default CartTotal;

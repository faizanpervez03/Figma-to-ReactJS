import React from "react";

const OrderSummary = () => {
  return (
    <div className="bg-[#f9f9ff] !p-6 rounded-lg shadow-sm">
      <div className="flex justify-between border-b border-gray-300 !pb-2 !mb-12 text-gray-700">
        <p>Subtotals:</p>
        <p className="font-medium">£219.00</p>
      </div>
      <div className="flex justify-between  text-gray-700 font-semibold border-b border-gray-300 !pb-2 !mb-4">
        <p>Total:</p>
        <p>£325.00</p>
      </div>
      <p className="text-sm text-gray-400 !mb-4">
       <input type="checkbox" id="news" className="accent-green-500 " /> Shipping & taxes calculated at checkout
      </p>

      <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold !py-2  transition">
        Proceed To Checkout
      </button>
    </div>
  );
};

export default OrderSummary;

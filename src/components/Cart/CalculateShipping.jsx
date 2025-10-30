import React from "react";

const CalculateShipping = () => {
  return (
    <div className=" !p-6 bg-[#F4F4FC] shadow-sm">
      <h2 className="font-bold text-center mb-4 text-[#1A0B5B]">
        Calculate Shopping
      </h2>
      <div className="!space-y-3">
        <input
          type="text"
          placeholder="Country"
          className="w-full border-b border-gray-300 !p-2 rounded text-sm focus:outline-none"
        />
        <input
          type="text"
          placeholder="City / State"
          className="w-full border-b border-gray-300 !p-2 rounded text-sm focus:outline-none"
        />
        <input
          type="text"
          placeholder="Postal Code"
          className="w-full border-b !py-4 border-gray-300 !p-2 rounded text-sm focus:outline-none"
        />
      </div>
      <button className="w-1/2 !mt-4 bg-pink-500 text-white !py-2 rounded hover:bg-pink-600">
        Calculate Shipping
      </button>
    </div>
  );
};

export default CalculateShipping;

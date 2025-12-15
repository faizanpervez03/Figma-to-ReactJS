import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CalculateShipping = () => {
  const navigate = useNavigate()
  const [shippingData, setShippingData] = useState({
    country: '',
    city: '',
    postalCode: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setShippingData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCalculate = () => {
    if (shippingData.country && shippingData.city && shippingData.postalCode) {
      navigate('/checkout', { state: { shippingData } })
    } else {
      alert('Please fill in all shipping details')
    }
  }

  return (
    <div className=" !p-6 bg-[#F4F4FC] shadow-sm">
      <h2 className="font-bold text-center mb-4 text-[#1A0B5B]">
        Calculate Shipping
      </h2>
      <div className="!space-y-3">
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={shippingData.country}
          onChange={handleChange}
          className="w-full border-b border-gray-300 !p-2 rounded text-sm focus:outline-none"
        />
        <input
          type="text"
          name="city"
          placeholder="City / State"
          value={shippingData.city}
          onChange={handleChange}
          className="w-full border-b border-gray-300 !p-2 rounded text-sm focus:outline-none"
        />
        <input
          type="text"
          name="postalCode"
          placeholder="Postal Code"
          value={shippingData.postalCode}
          onChange={handleChange}
          className="w-full border-b !py-4 border-gray-300 !p-2 rounded text-sm focus:outline-none"
        />
      </div>
      <button onClick={handleCalculate} className="w-1/2 !mt-4 bg-pink-500 text-white !py-2 rounded hover:bg-pink-600">
        Calculate Shipping
      </button>
    </div>
  );
};

export default CalculateShipping;

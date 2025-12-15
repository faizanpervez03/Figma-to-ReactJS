import React from "react";
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectCartTotal } from '../../store/cartSlice'

const CartTotal = () => {
  const navigate = useNavigate()
  const cartTotal = useSelector(selectCartTotal)

  return (
    <div className=" !p-6 bg-[#F4F4FC] shadow-sm">
      <h2 className="font-bold text-center mb-4 text-[#1A0B5B]">
        Cart Totals
      </h2>
      <div className="flex justify-between border-b border-gray-300 !pb-2 !mb-2 text-[#1A0B5B]">
        <span>Subtotal:</span>
        <span>£{cartTotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between !pb-2 border-b border-gray-300 !py-8 text-[#1A0B5B]">
        <span>Total:</span>
        <span>£{cartTotal.toFixed(2)}</span>
      </div>
      <p className="text-xs text-gray-500 !mt-2 !py-6">
        * Shipping & taxes calculated at checkout
      </p>
      <button onClick={() => navigate('/checkout')} className="w-full !mt-4 bg-green-500 text-white !py-2 rounded hover:bg-green-600">
        Proceed To Checkout
      </button>
    </div>
  );
};

export default CartTotal;

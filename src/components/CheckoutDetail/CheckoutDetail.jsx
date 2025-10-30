import React from "react";
import CartSummary from "./CartSummary";
import OrderSummary from "./OrderSummary";
import { Link } from "react-router";

const CheckoutDetail = () => {
  return (
    <div className="min-h-screen bg-white !py-10 !px-4 sm:!px-8">
      {/* Header */}
      <div className="max-w-7xl !mx-auto !mb-8">

        <p className="text-sm text-gray-500">
          Cart / Information / Shipping / Payment
        </p>
      </div>

      {/* Main content grid */}
      <div className="max-w-7xl  !mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left section: Form */}
        <div className="lg:col-span-2 bg-[#f9f9ff]  !p-8 shadow-sm">
          {/* Contact Info */}
          <div className="flex justify-between items-center !mb-12">
            <h2 className="text-lg font-semibold font-[josefin_Sans] text-[#1A0B5B] ">
              Contact Information
            </h2>
            <Link to="" className="text-sm text-gray-400 hover:underline">
              Already have an account? Log in
            </Link>
          </div>

          <input 
            type="text"
            placeholder="Email or mobile phone number"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-pink-500 !mb-8 !pb-2 text-gray-700"
          />
          <div className="flex items-center gap-2 !mb-22">
            <input type="checkbox" id="news" className="accent-green-500 " />
            <label htmlFor="news" className="text-sm text-gray-500">
              Keep me up to date on news and exclusive offers
            </label>
          </div>

          {/* Shipping Address */}
          <h2 className="text-lg font-semibold text-[#1A0B5B] !mb-6">
            Shipping Address
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 !mb-6">
            <input
              type="text"
              placeholder="First name (optional)"
              className="border-b border-gray-300 focus:border-pink-500 focus:outline-none !pb-1 !mb-4"
            />
            <input
              type="text"
              placeholder="Last name"
              className="border-b border-gray-300 focus:border-pink-500 focus:outline-none !pb-1 !mb-4"
            />
          </div>

          <input
            type="text"
            placeholder="Address"
            className="w-full border-b border-gray-300 focus:border-pink-500 focus:outline-none !mb-8 !pb-1 "
          />
          <input
            type="text"
            placeholder="Apartment, suite, etc (optional)"
            className="w-full border-b border-gray-300 focus:border-pink-500 focus:outline-none !mb-8 !pb-1"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 !mb-6">
            <input
              type="text"
              placeholder="City"
              className="border-b border-gray-300 focus:border-pink-500 focus:outline-none !pb-1"
            />
            <input
              type="text"
              placeholder="Postal Code"
              className="border-b border-gray-300 focus:border-pink-500 focus:outline-none !pb-1"
            />
          </div>

          <button className="bg-pink-500 hover:bg-pink-600 text-white !my-12 !py-2 !px-6  font-medium">
            Continue Shipping
          </button>
        </div>

        {/* Right section */}
        <div className="flex flex-col gap-6">
          <CartSummary />
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default CheckoutDetail;

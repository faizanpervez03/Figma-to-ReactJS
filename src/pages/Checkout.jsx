import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../store/cartSlice'
import Breadcrumb from '../components/Breadcrumb'

const Checkout = () => {
  const navigate = useNavigate()
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    postalCode: '',
    address: '',
    companyName: '',
    shippingMethod: 'standard',
  })

  const [shipping, setShipping] = useState(10)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleShippingChange = (method) => {
    setFormData((prev) => ({
      ...prev,
      shippingMethod: method,
    }))
    setShipping(method === 'standard' ? 10 : method === 'express' ? 20 : 5)
  }

  const handlePlaceOrder = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.address || !formData.country || !formData.city) {
      alert('Please fill in all required fields')
      return
    }
    
    navigate('/orderCompletion', {
      state: {
        orderData: formData,
        orderTotal: cartTotal + shipping,
        orderItems: cartItems,
      },
    })
  }

  if (cartItems.length === 0) {
    return (
      <>
        <Breadcrumb />
        <div className="sm:w-7xl !mx-auto !px-4 !py-10 text-center">
          <h2 className="text-2xl font-bold text-[#1A0B5B] mb-4">Your cart is empty</h2>
          <button
            onClick={() => navigate('/products')}
            className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600"
          >
            Continue Shopping
          </button>
        </div>
      </>
    )
  }

  return (
    <>
      <Breadcrumb />
      <div className="sm:w-7xl !mx-auto !px-4 !py-10 !mb-14">
        <h1 className="text-3xl font-bold text-[#1A0B5B] mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Shipping & Billing Info */}
          <div className="lg:col-span-2">
            {/* Shipping Address */}
            <div className="bg-white !p-6 rounded-lg shadow-sm !mb-6">
              <h2 className="text-xl font-bold text-[#1A0B5B] !mb-4">Shipping Address</h2>
              <div className="grid grid-cols-2 gap-4 !mb-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name *"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="border border-gray-300 !px-3 !py-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name *"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="border border-gray-300 !px-3 !py-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border border-gray-300 !px-3 !py-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 !mb-4"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full border border-gray-300 !px-3 !py-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 !mb-4"
              />
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleInputChange}
                className="w-full border border-gray-300 !px-3 !py-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 !mb-4"
              />
              <input
                type="text"
                name="address"
                placeholder="Street Address *"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full border border-gray-300 !px-3 !py-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 !mb-4"
              />
              <div className="grid grid-cols-2 gap-4 !mb-4">
                <input
                  type="text"
                  name="country"
                  placeholder="Country *"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="border border-gray-300 !px-3 !py-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City *"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="border border-gray-300 !px-3 !py-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                value={formData.postalCode}
                onChange={handleInputChange}
                className="w-full border border-gray-300 !px-3 !py-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Shipping Method */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-[#1A0B5B] !mb-4">Shipping Method</h2>
              <div className="!space-y-3">
                <label className="flex items-center cursor-pointer !p-3 border rounded hover:bg-gray-50">
                  <input
                    type="radio"
                    name="shipping"
                    checked={formData.shippingMethod === 'standard'}
                    onChange={() => handleShippingChange('standard')}
                    className="mr-3"
                  />
                  <span className="flex-1">
                    <span className="font-semibold text-[#1A0B5B]">Standard Shipping</span>
                    <p className="text-xs text-gray-500">Delivery in 5-7 business days</p>
                  </span>
                  <span className="text-pink-600 font-semibold">$10.00</span>
                </label>
                <label className="flex items-center cursor-pointer !p-3 border rounded hover:bg-gray-50">
                  <input
                    type="radio"
                    name="shipping"
                    checked={formData.shippingMethod === 'express'}
                    onChange={() => handleShippingChange('express')}
                    className="mr-3"
                  />
                  <span className="flex-1">
                    <span className="font-semibold text-[#1A0B5B]">Express Shipping</span>
                    <p className="text-xs text-gray-500">Delivery in 2-3 business days</p>
                  </span>
                  <span className="text-pink-600 font-semibold">$20.00</span>
                </label>
                <label className="flex items-center cursor-pointer !p-3 border rounded hover:bg-gray-50">
                  <input
                    type="radio"
                    name="shipping"
                    checked={formData.shippingMethod === 'pickup'}
                    onChange={() => handleShippingChange('pickup')}
                    className="mr-3"
                  />
                  <span className="flex-1">
                    <span className="font-semibold text-[#1A0B5B]">Store Pickup</span>
                    <p className="text-xs text-gray-500">Pickup available in 1 business day</p>
                  </span>
                  <span className="text-pink-600 font-semibold">$5.00</span>
                </label>
              </div>
            </div>
          </div>

          {/* Right Side - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-[#F4F4FC] p-6 rounded-lg shadow-sm sticky top-20">
              <h2 className="text-xl font-bold text-[#1A0B5B] !mb-4">Order Summary</h2>

              {/* Order Items */}
              <div className="mb-6 max-h-64 overflow-y-auto border-b !pb-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between !mb-3 text-sm">
                    <span className="text-gray-600">
                      {item.title.length > 20 ? item.title.substring(0, 20) + '...' : item.title} x {item.quantity}
                    </span>
                    <span className="text-[#1A0B5B] font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-2 mb-6 border-b !pb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="text-[#1A0B5B] font-semibold">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping:</span>
                  <span className="text-[#1A0B5B] font-semibold">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-[#1A0B5B]">Total:</span>
                  <span className="text-pink-600">${(cartTotal + shipping).toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                className="w-full bg-pink-500 text-white !py-3 rounded hover:bg-pink-600 font-semibold transition"
              >
                Place Order
              </button>
              <button
                onClick={() => navigate('/cart')}
                className="w-full bg-gray-300 text-[#1A0B5B] !py-2 rounded hover:bg-gray-400 !mt-2 font-semibold"
              >
                Back to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout
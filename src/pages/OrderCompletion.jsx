import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, selectCartItems } from '../store/cartSlice'
import Breadcrumb from '../components/Breadcrumb'
import { Link } from 'react-router-dom'

const OrderCompletion = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    
    const orderData = location.state?.orderData
    const orderTotal = location.state?.orderTotal
    const orderItems = location.state?.orderItems

    useEffect(() => {
      // Clear cart after order
      if (orderData) {
        dispatch(clearCart())
      }
    }, [orderData, dispatch])

    if (!orderData) {
      return (
        <>
          <Breadcrumb />
          <div className="sm:w-7xl !mx-auto !px-4 !py-10 text-center">
            <h2 className="text-2xl font-bold text-[#1A0B5B] !mb-4">No order data</h2>
            <Link to="/products" className="bg-pink-500 text-white !px-6 !py-2 rounded hover:bg-pink-600">
              Continue Shopping
            </Link>
          </div>
        </>
      )
    }

    return (
        <>
            <Breadcrumb />

            <div className="sm:w-7xl !mx-auto !px-4 !py-10 !mb-14">
                <div className="flex flex-col items-center justify-center text-center">
                    {/* Success Icon */}
                    <div className="flex justify-center !mb-6">
                        <img src="/images/check.png" alt="Success" className="w-24 h-24" />
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#1A0B5B] !mb-4 font-[josefin_Sans]">
                        Your Order Is Completed!
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 !mb-8 max-w-2xl">
                        Thank you for your order! Your order is being processed and will be completed
                        within <span className="font-semibold text-gray-800">3–6 hours</span>. You will
                        receive an email confirmation at <span className="font-semibold">{orderData.email}</span> when your order is completed.
                    </p>

                    {/* Order Details */}
                    <div className="bg-[#F4F4FC] !p-6 rounded-lg w-full max-w-2xl !mb-8">
                        <h3 className="text-xl font-bold text-[#1A0B5B] mb-4">Order Details</h3>
                        
                        <div className="grid grid-cols-2 gap-4 text-left !mb-6 border-b !pb-4">
                            <div>
                                <p className="text-gray-600 text-sm">Name</p>
                                <p className="font-semibold text-[#1A0B5B]">{orderData.firstName} {orderData.lastName}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm">Email</p>
                                <p className="font-semibold text-[#1A0B5B]">{orderData.email}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm">Address</p>
                                <p className="font-semibold text-[#1A0B5B]">{orderData.address}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm">Shipping</p>
                                <p className="font-semibold text-[#1A0B5B] capitalize">{orderData.shippingMethod}</p>
                            </div>
                        </div>

                        {/* Order Items */}
                        <h4 className="font-bold text-[#1A0B5B] !mb-3">Items Ordered</h4>
                        <div className="!space-y-2 !mb-6 border-b !b-4">
                            {orderItems && orderItems.map((item) => (
                                <div key={item.id} className="flex justify-between text-sm">
                                    <span className="text-gray-600">{item.title} x {item.quantity}</span>
                                    <span className="text-[#1A0B5B] font-semibold">Rs {(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>

                        {/* Total */}
                        <div className="flex justify-between text-lg font-bold">
                            <span className="text-[#1A0B5B]">Order Total:</span>
                            <span className="text-pink-600">Rs {orderTotal.toFixed(2)}</span>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4">
                        <Link
                            to="/products"
                            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold !py-3 !px-8 transition rounded"
                        >
                            Continue Shopping
                        </Link>
                        <Link
                            to="/"
                            className="bg-[#1A0B5B] hover:bg-[#250e8b] text-white font-semibold !py-3 !px-8 transition rounded"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>

            <div className=' !mt-8 !mb-8 flex justify-center !p-2'>
                <img src="./images/companies-image.png" alt="" />
            </div>
        </>
    )
}

export default OrderCompletion
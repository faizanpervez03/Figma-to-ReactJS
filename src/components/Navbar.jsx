import React, { useState } from 'react'
import { FaEnvelope, FaPhoneAlt, FaHeart, FaShoppingCart, FaBars, FaTimes, FaUser } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { selectCartCount } from '../store/cartSlice'
import { selectWishlistCount, selectWishlistItems, removeFromWishlist } from '../store/wishlistSlice'



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWishlistPopup, setShowWishlistPopup] = useState(false)
  const dispatch = useDispatch()
  const cartCount = useSelector(selectCartCount)
  const wishlistCount = useSelector(selectWishlistCount)
  const wishlistItems = useSelector(selectWishlistItems)
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const doSearch = (e) => {
    if (e && e.preventDefault) e.preventDefault()
    const q = (searchTerm || '').trim()
    if (q) navigate(`/products?q=${encodeURIComponent(q)}`)
    else navigate('/products')
    setIsOpen(false)
  }

  return (
    <>

      <header className="w-full relative z-50">

        <div className="bg-purple-600 text-white text-sm py-4 px-4 flex justify-center items-center" style={{ padding: "20px" }}>
          <div className="  upperHeader flex-col  md:flex-col lg:flex-row w-7xl  flex justify-between items-center">
            <div className="flex items-center gap-6 text-[18px]">
              <span className="flex items-center gap-2">
                <IoMailOutline className='text-lg font-bold' /> mhhasanul@gmail.com
              </span>
              <span className="flex items-center gap-2">
                <FiPhoneCall /> (12345)67890
              </span>
            </div>
            <div className="flex items-center gap-6">
              <select className="bg-purple-600 outline-none">
                <option>English</option>
              </select>
              <select className="bg-purple-600 outline-none">
                <option>USD</option>
              </select>
              <button className="flex items-center gap-1">
                Login <FaUser />
              </button>
              <div className='relative inline-block'>
                <button onClick={() => setShowWishlistPopup(!showWishlistPopup)} className='flex items-center gap-1 cursor-pointer'>
                  Wishlist <FaHeart />
                </button>
                {wishlistCount > 0 && (
                  <span className='absolute -top-2 -right-2 bg-pink-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center'>
                    {wishlistCount}
                  </span>
                )}

                {/* Wishlist Popup */}
                {showWishlistPopup && wishlistCount > 0 && (
                  <div className='absolute right-0 top-12 bg-gray-200 rounded-lg shadow-lg !p-4 w-80 z-50 max-h-96 overflow-y-auto'>
                    <h3 className='text-lg font-semibold text-[#1A0B5B] !mb-4'>My Wishlist</h3>
                    <div className='flex flex-col gap-3'>
                      {wishlistItems.map((product) => (
                        <div key={product.id} className='flex gap-3 border-b !pb-3 hover:bg-gray-50 !p-2 rounded'>
                          <img src={product.image} alt={product.title} className='w-16 h-16 object-contain rounded' />
                          <div className='flex-1'>
                            <p className='text-sm font-semibold text-[#1A0B5B] line-clamp-2'>{product.title}</p>
                            <p className='text-sm text-pink-600 font-semibold'>${product.price.toFixed(2)}</p>
                            <button onClick={() => dispatch(removeFromWishlist(product.id))} className='text-xs text-red-500 hover:text-red-700 !mt-1'>Remove</button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Link to='/wishlist' onClick={() => setShowWishlistPopup(false)} className='!mt-4 block w-full bg-pink-500 text-white text-center !py-2 rounded hover:bg-pink-600 text-sm font-semibold'>
                      View All Wishlist
                    </Link>
                  </div>
                )}
              </div>
              <Link to="/cart">
                <div className='relative inline-block'>
                  <button className='cursor-pointer'>
                    <FaShoppingCart className='text-lg' />
                  </button>
                  {cartCount > 0 && (
                    <span className='absolute -top-2 -right-2 bg-pink-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center'>
                      {cartCount}
                    </span>
                  )}
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center py-4 px-6 shadow-sm" style={{ padding: "20px" }}>
          <div className="main w-7xl flex justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              <Link to="/">
                <img src="./images/Hekto.png" alt="" />
              </Link>
            </h1>
            <nav className="hidden lg:flex items-center gap-6 text-gray-700">

              <NavLink to="/" className={({ isActive }) =>
                `${isActive ? "text-pink-500" : "text-gray-700"}`
              }>
                Home
              </NavLink>
              <NavLink to="/about" className={({ isActive }) =>
                `${isActive ? "text-pink-500" : "text-gray-700"}`
              }>
                About Us
              </NavLink>
              <NavLink to="/products" className={({ isActive }) =>
                `${isActive ? "text-pink-500" : "text-gray-700"}`
              }>
                Products
              </NavLink>
              <NavLink to="/blog" className={({ isActive }) =>
                `${isActive ? "text-pink-500" : "text-gray-700"}`
              }>
                Blog
              </NavLink>
              <NavLink to="/shop" className={({ isActive }) =>
                `${isActive ? "text-pink-500" : "text-gray-700"}`
              }>
                Shop
              </NavLink>
              <NavLink to="/faqs" className={({ isActive }) =>
                `${isActive ? "text-pink-500" : "text-gray-700"}`
              }>
                FAQ's
              </NavLink>

              <NavLink to="/contact" className={({ isActive }) =>
                `${isActive ? "text-pink-500" : "text-gray-700"}`
              }>
                Contact
              </NavLink>
              {/* <Link to="/" className="text-pink-500">Home</Link>
                <Link className='hover:text-pink-500' to="/about" >About Us</Link>
                <Link className='hover:text-pink-500' to="/" >Products</Link>
                <Link className='hover:text-pink-500' to="/" >Blog</Link>
                <Link className='hover:text-pink-500' to="/" >Shop</Link>
                <Link className='hover:text-pink-500' to="/" >Contact</Link> */}


            </nav>
            <div className=" hidden lg:flex">
              <form onSubmit={doSearch} className="flex items-center">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search products..."
                  className="border w-3xs border-gray-300 !px-2 !py-1 outline-none"
                />
                <button type="submit" className="bg-pink-500 text-2xl text-white flex items-center justify-end px-3" style={{ padding: "5px", paddingLeft: "15px" }}>
                  <IoSearchOutline />
                </button>
              </form>
            </div>
            <button className='lg:hidden text-2xl text-gray-700' onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes className='text-pink-500' /> : <FaBars className='text-pink-500' />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="absolute  left-0 w-full bg-white shadow-lg lg:hidden animate-slide-down">
            <nav className="flex flex-col justify-center items-center  gap-4 p-6 text-gray-700">

              <NavLink to="/" onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${isActive ? "text-pink-500" : "text-gray-700"}`
                }>
                Home
              </NavLink>

              <NavLink to="/about" onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${isActive ? "text-pink-500" : "text-gray-700"}`
                }>
                About
              </NavLink>
              <NavLink to="/products" onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${isActive ? "text-pink-500" : "text-gray-700"}`
                }
              >
                Products
              </NavLink>
              <NavLink to="/blog" onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${isActive ? "text-pink-500" : "text-gray-700"}`
                }
              >
                Blog
              </NavLink>
              <NavLink to="/shop" onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${isActive ? "text-pink-500" : "text-gray-700"}`
                }
              >
                Shop
              </NavLink>
              <NavLink to="/contact" onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${isActive ? "text-pink-500" : "text-gray-700"}`
                }
              >
                Contact
              </NavLink>

              {/* Mobile Search */}
              <div className="flex mt-4">
                <form onSubmit={doSearch} className="flex w-full">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border w-full border-gray-300 !px-2 !py-4 outline-none"
                    placeholder="Search..."
                  />
                  <button type="submit" className="bg-pink-500 text-2xl text-white flex items-center justify-center px-3">
                    <IoSearchOutline />
                  </button>
                </form>
              </div>
            </nav>
          </div>
        )}
      </header>

    </>
  )
}

export default Navbar
import React, { useState } from 'react'
import { FaEnvelope, FaPhoneAlt, FaHeart, FaShoppingCart, FaBars, FaTimes, FaUser } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
              <button className="flex items-center gap-1">
                Wishlist <FaHeart />
              </button>
              <Link to="/cart">

                <button className='cursor-pointer'>
                  <FaShoppingCart className='text-lg' />
                  <span className='absolute  top-10 right-2 sm:top-4 sm:right-76   bg-pink-600 text-white text-xs font-semibold rounded-full w-4 h-4 flex items-center justify-center animate-bounce'>10</span>
                </button>

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
              <input
                type="text"
                className="border w-3xs border-gray-300 px-2 py-1 outline-none"
              />
              <button className="bg-pink-500 text-2xl text-white flex items-center justify-end px-3" style={{ padding: "5px", paddingLeft: "15px" }}>
                <IoSearchOutline />
              </button>
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
                <input
                  type="text"
                  className="border w-full border-gray-300 px-2 py-1 outline-none"
                  placeholder="Search..."
                />
                <button className="bg-pink-500 text-2xl text-white flex items-center justify-center px-3">
                  <IoSearchOutline />
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

    </>
  )
}

export default Navbar
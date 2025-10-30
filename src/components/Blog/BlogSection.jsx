import React, { useState } from 'react'
import { FaPenNib } from 'react-icons/fa';
import { GoDotFill } from "react-icons/go";
import { MdDateRange } from 'react-icons/md';

import { blogs } from '../../productsData/blogs';
import { Link } from 'react-router-dom';

const BlogSection = () => {
 

  const buttons = ["1", "2", "3", "4"];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div className=' sm:w-[70%]   !p-2'>

        {blogs.map((blog) => (
          <div
            key={blog.id}
            className=" "
          >
           <Link to={`/singleBlog/${blog.id}`}>
            <img
              src={blog.image}
              alt={blog.title}
              className=" object-cover  !mx-auto !mt-18 "
            />

            </Link>
            <div className="!p-2 !mt-4  text-center flex gap-6 items-center">
              <span><FaPenNib className='text-pink-500 ' /></span>
              <h3 className="text-md rounded-md !p-1 sm:!px-8 bg-[#ffe7f9] font-medium text-gray-900 hover:text-indigo-600 cursor-pointer">
                {blog.title}
              </h3>


              <span><MdDateRange className='text-yellow-400' /></span>
              <h3 className="text-md rounded-md !p-1 !px-8 bg-[#ffece2] font-medium text-gray-900 hover:text-indigo-600 cursor-pointer">
                {blog.date}
              </h3>



            </div>

            <div className='!mt-4 !mb-4'>
              <h2 className="text-2xl font-semibold text-[#1A0B5B] !mb-3 font-[josefin_Sans]">{blog.name}</h2>
              <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
              <Link to={`/singleBlog/${blog.id}`}>
              <button className='flex items-center text-[#1A0B5B] cursor-pointer !mt-4 font-semibold'>Read More <span> <GoDotFill className='text-sm text-red-600' /> </span> </button>
              </Link>
            </div>

          


          </div>

          

        ))}

          <div className="flex justify-center gap-4 !mt-18 !mb-12">
              {buttons.map((btn, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`!px-2 border border-pink-200 text-gray-700  cursor-pointer
            ${activeIndex === index ? "bg-pink-500 text-white" : "bg-transparent"} 
            transition-colors duration-200`}
                >
                  {btn}
                </button>
              ))}
            </div>


           
      </div>

    </>
  )
}

export default BlogSection  
import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaCommentDots, FaEnvelope, FaFacebookF, FaInstagram, FaPenNib, FaPlay, FaRegStar, FaStar, FaTwitter, FaUser } from 'react-icons/fa';
import { GoDotFill } from "react-icons/go";
import { MdDateRange } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import { blogs } from '../../productsData/blogs';
import Breadcrumb from '../Breadcrumb';
import BlogSidebar from './BlogSidebar';



const SingleBlogSection = () => {

    const { id } = useParams()


    const buttons = ["1", "2", "3", "4"];
    const [activeIndex, setActiveIndex] = useState(0);

    const blog = blogs.find((b) => b.id === Number(id))


    const products = [
        {
            id: 1,
            image: "/images/blog-product-1.png",
            title: "Quam sed",
            oldPrice: "$32.00",
            newPrice: "$56.00",
        },
        {
            id: 2,
            image: "/images/blog-product-2.png",
            title: "Tristique sed",
            oldPrice: "$32.00",
            newPrice: "$56.00",
        },
        {
            id: 3,
            image: "/images/blog-product-3.png",
            title: "A etiam",
            oldPrice: "$32.00",
            newPrice: "$56.00",
        },
        {
            id: 4,
            image: "/images/blog-product-4.png",
            title: "Mi nisi",
            oldPrice: "$32.00",
            newPrice: "$56.00",
        },
    ];


    const card = [
        {
            id: 1,
            img: "/images/blog-card-1.png",
            title: "Sapien ac",
            date: "Jan 09 2020",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.",
        },
        {
            id: 2,
            img: "/images/blog-card-2.png",
            title: "Augue conva",
            date: "Aug 18 2020",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.",
        },
    ];
    return (
        <>
            <Breadcrumb />

            <div className='sm:max-w-7xl !mx-auto'>
                <div className='flex sm:flex-nowrap flex-wrap gap-6'>
                    <div className=' sm:w-[70%]   !p-2'>



                        <div
                            key={blog.id}
                            className=" "
                        >

                            <img
                                src={blog.image}
                                alt={blog.title}
                                className=" object-cover  !mx-auto !mt-18 "
                            />

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


                            </div>


                            <div className='text-gray-400 !mt-18'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
                            </div>

                            <div className="border-l-2 border-pink-400 bg-[#fafafb] !mt-8 !p-2   ">
                                <p className="italic text-gray-500 leading-8 font-[josefin_Sans] !ml-4 !p-2 ">
                                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat. <br />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Commodo dictum sapien, amet, consequat <br />
                                    toamk risusu”
                                </p>
                            </div>



                            {/* video and below product area start */}


                            <div className="!mt-12">
                                {/* Top Section */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {/* Left image with play button */}
                                    <div className="relative">
                                        <img
                                            src="/images/video-1.png"
                                            alt="video-thumbnail"
                                            className=""
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <button className="bg-white text-pink-500 rounded-full !p-3 shadow-md hover:scale-105 transition-transform">
                                                <FaPlay size={20} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Right image */}
                                    <div>
                                        <img
                                            src="/images/video-2.png"
                                            alt="model"
                                            className=""
                                        />
                                    </div>
                                </div>

                                {/* Paragraph Section */}
                                <div className="!mt-8 text-[#a7abca] leading-relaxed text-sm sm:text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc,
                                </div>

                                {/* Product Section */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 !mt-18">
                                    {products.map((item) => (
                                        <div key={item.id} className="text-center">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-64 object-cover "
                                            />
                                            <h3 className="!mt-3 font-semibold text-lg text-gray-800">
                                                {item.title}
                                            </h3>

                                            <div className='flex items-center gap-2 !p-2 text-sm'>
                                                <div className="!mt-2 flex items-center justify-center !space-x-2">
                                                    <p className="line-through text-gray-500">{item.oldPrice}</p>
                                                    <p className="text-pink-500 font-semibold">{item.newPrice}</p>
                                                </div>
                                                <div className="flex justify-center !mt-2 text-yellow-400">
                                                    {[...Array(5)].map((_, i) => (
                                                        <FaStar key={i} />
                                                    ))}
                                                    <FaRegStar className='text-gray-500 ' />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>



                                {/* belwo paragraphs */}


                                <div className="!mt-8 text-[#a7abca] leading-relaxed sm:text-[15px] ">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc,
                                </div>

                                <div className="!mt-10 text-[#a7abca] leading-relaxed sm:text-[15px]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc,
                                </div>




                                {/* Follow */}
                                <div className="!mb-2 !mt-18">

                                    <div className="flex gap-3 justify-center">
                                        <Link className="!p-2 bg-purple-600 text-white rounded-full hover:bg-pink-600">
                                            <FaFacebookF />
                                        </Link>
                                        <Link className="!p-2 bg-pink-500 text-white rounded-full hover:bg-pink-600">
                                            <FaInstagram />
                                        </Link>
                                        <Link className="!p-2 bg-[#37daf3] text-white rounded-full hover:bg-pink-600">
                                            <FaTwitter />
                                        </Link>
                                    </div>
                                </div>
                            </div>




                        </div>

                        {/* last nav and two cards area  */}

                        <div className="  !py-10">
                            {/* Navigation */}
                            <div className="flex justify-between items-center !mb-8 text-gray-500 bg-gray-200 !px-2 !py-2 text-sm">
                                <button className="flex items-center gap-2 hover:text-indigo-600 transition">
                                    <FaArrowLeft className="text-xs" /> Previous Post
                                </button>
                                <button className="flex items-center gap-2 hover:text-indigo-600 transition">
                                    Next Post <FaArrowRight className="text-xs" />
                                </button>
                            </div>

                            {/* Blog Cards */}
                            <div className="flex flex-col gap-6">
                                {card.map((blog) => (
                                    <div
                                        key={blog.id}
                                        className="sm:w-[80%] flex flex-col sm:flex-row items-start bg-white rounded-lg shadow-md hover:shadow-lg transition !p-4 sm:!p-6"
                                    >
                                        {/* Image */}
                                        <img
                                            src={blog.img}
                                            alt={blog.title}
                                            className=" !mb-4 sm:!mb-0 sm:!mr-6"
                                        />

                                        {/* Content */}
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <h2 className="text-lg font-semibold text-indigo-700">
                                                    {blog.title}
                                                </h2>
                                                <span className="text-sm text-gray-400">{blog.date}</span>
                                            </div>
                                            <p className="text-gray-400 text-sm leading-relaxed">{blog.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* last nav and two cards area end */}


                        {/* Form area start */}


                        <div className="sm:max-w-[80%]   !py-10">
                            {/* Input fields */}
                            <form className="!space-y-6">
                                {/* Name and Email */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {/* Name */}
                                    <div className="relative">
                                        <FaUser className="absolute left-3 top-3 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Your Name*"
                                            className="w-full border border-indigo-200 text-sm focus:border-pink-500 focus:ring-0  !py-2 !pl-10 !pr-3 outline-none"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="relative">
                                        <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                                        <input
                                            type="email"
                                            placeholder="Write Your Email*"
                                            className="w-full border border-indigo-200 text-sm focus:border-pink-500 focus:ring-0  !py-2 !pl-10 !pr-3 outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Comment */}
                                <div className="relative">
                                    <FaCommentDots className="absolute left-3 top-3 text-gray-400" />
                                    <textarea
                                        placeholder="Write your comment*"
                                        rows="8"
                                        className="w-full border border-indigo-200 text-sm focus:border-pink-500 focus:ring-0  !py-2 !pl-10 !pr-3 outline-none resize-none"
                                    ></textarea>
                                </div>

                                {/* Checkbox */}
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <input type="checkbox" id="saveInfo" className="cursor-pointer" />
                                    <label htmlFor="saveInfo" className="cursor-pointer">
                                        Save my name, email, and website in this browser for the next time I comment.
                                    </label>
                                </div>

                                {/* Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium !py-3  transition"
                                >
                                    Continue Shipping
                                </button>
                            </form>
                        </div>


                        {/* Form area end */}


                    </div>



                    <BlogSidebar />
                </div>
                <div className='!mt-8 !mb-8  flex justify-start !p-4'>

                    <img src="/images/companies-image.png" alt="" />
                </div>

            </div>

        </>
    )
}

export default SingleBlogSection  
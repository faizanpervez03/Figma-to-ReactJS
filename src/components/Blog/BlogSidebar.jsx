import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router";

const BlogSidebar = () => {

  const recentPost = [

    {

      image: "/images/recent-post-1.png",
      des: "It is a long established fact",
      date: "Aug 07 2020"

    },

    {

      image: "/images/recent-post-2.png",
      des: "It is a long established fact",
      date: "Aug 07 2020"

    },

    {

      image: "/images/recent-post-3.png",
      des: "It is a long established fact",
      date: "Aug 07 2020"

    },

    {

      image: "/images/recent-post-4.png",
      des: "It is a long established fact",
      date: "Aug 07 2020"

    },

  ]






  const saleProduct = [

    {

      image: "./images/sale-product-1.png",
      des: "Eli gravida et enim mauris.",
      date: "Aug 09 2020"

    },

    {

      image: "./images/sale-product-2.png",
      des: "Viverra pulvinar et enim.t",
      date: "Aug 07 2020"

    },

    {

      image: "./images/sale-product-3.png",
      des: "Mattis varius donec fdsfd",
      date: "Aug 07 2020"

    },



  ]



  const offerProduct = [

    {

      image: "./images/offer-product-1.png",
      title: "Duis lectus est.",
      price: "Rs 12 - Rs 15"

    },

    {

      image: "./images/offer-product-2.png",
      title: "Sed placerat..",
      price: "Rs 12 - Rs 15"

    },


    {

      image: "./images/offer-product-3.png",
      title: "Netus proin..",
      price: "Rs 12 - Rs 15"

    },


    {

      image: "./images/offer-product-4.png",
      title: "Platea in.",
      price: "Rs 12 - Rs 15"

    },



  ]

  return (
    <div className="w-full sm:w-[30%] !px-4 !mt-18">
      {/* Search */}
      <div className="!mb-10">
        <h2 className="text-2xl font-semibold text-[#1A0B5B] !mb-4 font-[josefin_Sans]">Search</h2>
        <input type="text" placeholder="Search For Posts " className="w-66 !mt-4 border border-gray-300 !px-4 !py-2 text-sm focus:outline-none focus:border-indigo-600" />
      </div>

      {/* Categories */}
      <div className="!mb-10">
        <h2 className="text-2xl font-semibold text-[#1A0B5B] !mb-4 font-[josefin_Sans]">Categories</h2>
        <div className="grid grid-cols-2">
          <p className="text-white !p-2 w-32 rounded-lg bg-pink-500 font-medium">Hobbies (14)</p>
          <p className="text-[#1A0B5B] !p-2  font-medium">Women (21)</p>
          <p className="text-[#1A0B5B] !p-2  font-medium">Women (21)</p>
          <p className="text-[#1A0B5B] !p-2  font-medium">Women (21)</p>
          <p className="text-[#1A0B5B] !p-2  font-medium">Women (21)</p>
          <p className="text-[#1A0B5B] !p-2  font-medium">Women (21)</p>



        </div>
      </div>

      {/* Recent Post */}
      <div className="!mb-10">
        <h2 className="text-2xl font-semibold text-[#1A0B5B] !mb-4 font-[josefin_Sans]" >Recent Post</h2>
        <div className="!space-y-4">
          {recentPost.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <img
                src={item.image}
                alt="post"
                className=" rounded-md object-cover"
              />
              <div>
                <p className="text-sm text-[#1A0B5B]">{item.des}</p>
                <p className="text-xs text-gray-500">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sale Product */}
      <div className="!mb-10 !mt-18">
        <h2 className="text-2xl font-semibold text-[#1A0B5B] !mb-4 font-[josefin_Sans]">Sale Product</h2>
        <div className="!space-y-4">
          {saleProduct.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <img
                src={item.image}
                alt="sale"
                className=" rounded-md object-cover"
              />
              <div>
                <p className="text-sm text-[#1A0B5B]">{item.des}</p>
                <p className="text-xs text-gray-500">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Offer Product */}
      <div className="!mb-10">
        <h2 className="text-2xl font-semibold text-[#1A0B5B] !mb-4 font-[josefin_Sans]">Offer Product</h2>
        <div className="grid grid-cols-2 gap-4">
          {offerProduct.map((item) => (
            <div
              key={item}
              className="flex flex-col items-center  !p-2 rounded-lg hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt="offer"
                className=" object-cover rounded-md"
              />
              <p className="text-sm text-[#1A0B5B] font-semibold !mt-2">{item.title}</p>
              <p className="text-xs text-gray-500">{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Follow */}
      <div className="!mb-10">
        <h2 className="text-lg font-semibold text-[#1A0B5B] !mb-3">Follow</h2>
        <div className="flex gap-3">
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

      {/* Tags */}
      <div>
        <h2 className="text-lg font-semibold text-[#1A0B5B] !mb-3">Tags</h2>
        <div className="flex flex-wrap gap-2">
          {["General", "Atsavel", "Insias", "Bibhas", "Nulla"].map((tag) => (
            <span
              key={tag}
              className="!px-3 !py-1 underline text-md !mr-6 rounded-md text-[#1A0B5B]  hover:text-pink-600 cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;

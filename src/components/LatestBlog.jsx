import React from 'react'
import { FaPenNib } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

const LatestBlog = () => {

    const cards = [
        {

            image: "./images/blog-image-1.png",
            name: "SaberAli",
            date: "21 August,2020",
            title: "Top essential Trend in 2021",
            para: "More off this less hello samlande lied much over tightly circa horse taped mightly",
            btn: "Read More"

        },
        {

            image: "./images/blog-image-2.png",
            name: "SaberAli",
            date: "21 August,2020",
            title: "Top essential Trend in 2021",
            para: "More off this less hello samlande lied much over tightly circa horse taped mightly",
            btn: "Read More"

        },
        {

            image: "./images/blog-image-3.png",
            name: "SaberAli",
            date: "21 August,2020",
            title: "Top essential Trend in 2021",
            para: "More off this less hello samlande lied much over tightly circa horse taped mightly",
            btn: "Read More"

        },
    ]

    return (
        <>
            <div className='!mt-16 !mb-16 '>
                <h1 className='text-[#1A0B5B] text-4xl font-bold text-center !mb-4 font-[josefin_Sans] '>Latest Blog</h1>
                <div className='flex justify-center gap-8 flex-wrap !mt-14 '>
                    {cards.map((itam) => {
                        return (
                            <div className='bg-gray-50 shadow-lg w-88 !pb-8 group '>
                                <div>
                                    <img src={itam.image} alt="" className='rounded-md' />
                                </div>
                                <div className='flex gap-16 !mt-2 !p-2 text-[#1A0B5B] font-[josefin_Sans]'>
                                    <p className='flex items-center  gap-2 text-sm'><span><FaPenNib className='text-pink-500' /></span> {itam.name}</p>
                                    <p className='flex items-center  gap-2 text-lg'><span><MdDateRange className='text-yellow-400' /></span>{itam.date}</p>
                                </div>
                                <div className='!p-4'>
                                    <h1 className='font-[josefin_Sans] text-[#1A0B5B] font-bold text-lg group-hover:text-pink-500 '>{itam.title}</h1>

                                    <p className='!mt-4 text-gray-400'>{itam.para}</p>
                                    <button className='text-[#1A0B5B] underline !mt-4 cursor-pointer group-hover:text-pink-500'>{itam.btn}</button>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    )
}

export default LatestBlog
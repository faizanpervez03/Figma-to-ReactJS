import React from 'react'
import './heroCss.css'
const HeroSection = () => {
    return (
        <>
            <div className="heroSection  w-full h-[600px] bg-[#f2f0ff] ">
                <div>
                    <img src="./images/image32.png" alt="" className='w-[17%] absolute left-24 md:absolute md:-left-2 hidden md:block   sm:absolute sm:-left-8' />


                    <div className=' w-[65%]  flex flex-col !mt-36  text-sm items-center justify-center sm:flex sm:flex-col sm:!mt-32 sm:text-sm md:flex md:flex-row md:!mt-8 lg:flex lg:flex-row  ' style={{ position: "absolute", top: "48%", left: "50%", transform: "translate(-50%, -50%)" }}>
                        <div className='!-mt-8 !-ml-8 text-center sm:text-left'>
                            <h1 className='text-pink-500  font-bold sm:text-lg text-center sm:text-left text-lg'>Best Furniture For Your Castle....</h1>
                            <h1 className='text-lg font-bold font-[josefin_Sans]  leading-8 text-center sm:text-left sm:text-lg md:text-2xl md:leading-8 lg:text-5xl lg:leading-16'>New Furniture Collection <br /> Trends in 2020</h1>
                            <p className='leading-8  text-gray-400' style={{ marginBottom: "10px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolorum dolores in nihil recusandae soluta minima.</p>
                            <button className='bg-pink-500 text-white shadow-gray shadow-lg cursor-pointer' style={{ padding: "8px 20px ", }}>Shop Now</button>
                            <span className='w-3 h-3  bg-pink-500 rounded-2xl  absolute -left-44 top-80 md:absolute md:-left-32 md:top-32 lg:absolute lg:-left-58 lg:top-78'></span>
                        </div>
                        <div className='!-ml-8 !mt-16 sm:!ml-0 sm:!mt-0'>
                            <img src="./images/sofa promotional header.png" className=' flex justify-center items-center sm:w-2xl md:w-full md:!ml-32 lg:w-lg' alt="" />
                        </div>
                    </div>

                </div>

                <div >
                    <div className="flex gap-4 absolute top-[111%] left-[40%] sm:left-6/12 sm:top-[70%] ">
                        <span className="triangle w-2 h-2  "></span>
                        <span className="triangle-outline w-2 h-2  " ></span>
                        <span className="triangle-outline w-2 h-2  " ></span>
                    </div>
                </div>

            </div>

        </>
    )
}

export default HeroSection
import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import AboutWrapper from '../components/AboutOfferWrapper/AboutWrapper'
import AboutTestimonial from '../components/AboutTestimonial'

const About = () => {
  return (
    <>
      <Breadcrumb />

 
      <div className="max-w-7xl !mx-auto !mt-18 !pb-6  flex flex-wrap justify-start gap-8 items-center !mb-32 ">


        <div >
          <img
            src="./images/about.png"
            alt="About Business"
            className=" w-md object-cover "
          />

         
        </div>

        
        <div className='sm:w-[40%] text-center sm:text-start'>
          <h2 className="text-3xl md:text-3xl font-bold text-[#1b1c54] !mb-4 leading-snug font-[josefin_Sans]">
            Know About Our Ecommerce <br /> Business, History
          </h2>
          <p className="text-gray-500 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
            ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique
            amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis
            quis bibendum quam.
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold !py-2 !px-6 rounded !mt-8 cursor-pointer">
            Contact us
          </button>
        </div>
      </div>

      <AboutWrapper />
      <AboutTestimonial />
      
    </>
  )
}

export default About
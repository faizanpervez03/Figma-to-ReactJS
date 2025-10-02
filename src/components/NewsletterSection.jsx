import React from 'react'

const NewsletterSection = () => {
    return (
        <>
            <div
                className="relative bg-[url('./images/newletter-image.png')]  w-full h-[50vh] bg-no-repeat   !mb-16 bg-top py-20 flex items-center justify-center"

            >
                


                {/* Content */}
                <div className="relative text-center !px-4">
                    <h2 className="text-xl !mt-12 md:text-2xl font-[josefin_Sans] lg:text-3xl font-semibold text-[#1A0B5B] leading-relaxed">
                        Get Latest Update By Subscribe <br className="hidden md:block" />
                        Our Newsletter
                    </h2>

                    <div className="mt-6">
                        <button className="bg-pink-500 hover:bg-pink-700 text-white !px-8 !py-2 !mt-4 rounded-sm shadow-md transition duration-300">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>

            <div className='!mt-8 !mb-8 flex justify-center !p-4'>

                <img src="./images/companies-image.png" alt="" />
            </div>
        </>
    )
}

export default NewsletterSection
import React from 'react'

const AboutTestimonial = () => {
    return (
        <>
            <div className='bg-[#fbfbff]'>


                <div className='w-auto sm:w-[65%]  !mx-auto !mb-8 !mt-48 !py-18 '>
                    <h1 className='text-black text-4xl font-bold text-center font-[josefin_Sans] '>Our Client Say!</h1>


                    <div className=' flex justify-center gap-4 !mt-16  '>
                        <img src="./images/about-client-01.png" alt="" className='rounded transform transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl' />
                        <img src="./images/about-client-02.png" alt="" className='rounded transform transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl' />
                        <img src="./images/about-client-03.png" alt="" className='rounded transform transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl' />


                    </div>
                    <div className='!mt-4 text-center'>
                        <h1 className=' text-lg font-semibold'>Selina Gomez</h1>
                        <p className='text-gray-400 text-[10px]'>Ceo At Webecy Digital</p>
                        <p className='text-gray-400 sm:w-xl !mx-auto !mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AboutTestimonial
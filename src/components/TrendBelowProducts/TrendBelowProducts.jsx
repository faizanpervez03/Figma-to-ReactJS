import React from 'react'

const TrendBelowProducts = ({ bgColor, children, title, btn, image, imgSize }) => {
    return (
        <>
            <div className=''>
                <div className={`w-88 sm:w-[470px] sm:h-[280px] ${bgColor} rounded-sm shadow-lg relative  !p-4 group`}>
                    <h1 className='text-indigo-900 font-semibold text-xl font-[josefin_Sans]'>{title}</h1>
                      <button className='underline text-pink-500 font-semibold cursor-pointer'>{btn}</button>
                    <div className="flex justify-end ">

                      


                        <img
                            src={image}
                            alt="Cantilever chair"
                            className={`${imgSize}`}
                        />

                    </div>



                    {children}
                </div>

              
            </div>

        </>
    )
}

export default TrendBelowProducts
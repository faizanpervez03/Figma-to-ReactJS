import React from 'react'

const AboutWrapper = () => {
    const cards = [

        {
            image: "./images/free-delivery.png",
            title: "24/7 Services",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, ducimus."
        },
        {
            image: "./images/cashback.png",
            title: "24/7 Services",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, ducimus."
        },
        {
            image: "./images/quality.png",
            title: "24/7 Services",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, ducimus."
        },
        {
            image: "./images/support.png",
            title: "24/7 Services",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, ducimus."
        },
    ]
    return (
        <>
            <div className='w-auto sm:w-[65%]  !mx-auto !mb-8 '>
                <h1 className='text-black text-4xl font-bold text-center font-[josefin_Sans] '>Our Features</h1>


                <div className='grid grid-cols-1 place-content-center justify-items-center sm:grid-cols-2 lg:grid-cols-4  '>

                    {cards.map((item) => {
                        return (
                            <div className='w-[250px] h-[280]  shadow-lg flex flex-col justify-center items-center text-center !p-4 !mt-12  border-b-2 border-white  hover:border-b-2 hover:border-amber-500'>
                                <div className='!pb-4'>
                                    <img src={item.image} alt="" />
                                </div>
                                <div className='!pb-4 text-lg font-bold text-[#16168a] font-[josefin_Sans] !mb-2'>
                                    <h1>{item.title}</h1>
                                </div>
                                <div className='!pb-6 text-gray-400 font-semibold  '>
                                    <p>{item.description}</p>
                                </div>

                            </div>
                        )
                    })}
                    
                </div>

            </div>

        </>
    )
}

export default AboutWrapper
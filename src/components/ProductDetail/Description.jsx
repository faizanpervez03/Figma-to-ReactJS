import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";


const Description = () => {
     const [activeTab, setActiveTab] = useState("description");
    return (
        <>
            <div className='bg-[#f9f8fe] sm:h-[60vh] !mb-16'>


                <div className=' sm:max-w-7xl !mx-auto !mt-18 font-[josefin_Sans]  '>
                    <div className="">
                        {/* Tabs */}
                        <div className="flex flex-wrap gap-8 border-b border-gray-200 !pb-4  text-[#1A0B5B] font-semibold text-lg">
                            {["description", "additional", "reviews", "video"].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`capitalize hover:text-[#1c0970] sm:!mt-22 !p-2 sm:!p-0 sm:!mr-18 am:!pb-2 border-b-2 transition-all duration-300 ${activeTab === tab
                                            ? "border-blue-600 text-[#200d75]"
                                            : "border-transparent text-gray-500"
                                        }`}
                                >
                                    {tab === "description" && "Description"}
                                    {tab === "additional" && "Additional Info"}
                                    {tab === "reviews" && "Reviews"}
                                    {tab === "video" && "Video"}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div className="!mt-16 text-[#1A0B5B] space-y-5">
                            {activeTab === "description" && (
                                <div>
                                    <h2 className="font-semibold text-xl mb-3">Varius tempor.</h2>
                                    <p className="text-gray-500 leading-relaxed mb-6">
                                        Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
                                        ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
                                        varius ac est bibendum. Scelerisque a, risus ac ante. Velit
                                        consectetur neque, elit, aliquet. Non varius proin sed urna,
                                        egestas consequat laoreet diam tincidunt. Magna eget faucibus
                                        cras justo, tortor sed donec tempus. Imperdiet consequat, quis
                                        diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                                        vulputate nunc nec. Dui, massa viverra.
                                    </p>

                                    <h3 className="font-semibold text-xl !mt-12 !mb-2">More details</h3>
                                    <ul className="space-y-3 text-gray-500">
                                        {Array(4)
                                            .fill()
                                            .map((_, i) => (
                                                <li key={i} className="flex items-center gap-3  text-gray-500">
                                                    <FaArrowRight
                                                        className= " text-black hover:text-[#3c19d4]"                                                    />
                                                    Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                                                    diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                                                    vulputate nunc nec. Dui, massa viverra.
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            )}

                            {activeTab === "additional" && (
                                <div>
                                    <h2 className="font-semibold text-xl mb-3">Additional Information</h2>
                                    <p className="text-gray-500">
                                        Here you can include material, dimensions, or other product-specific
                                        details that customers might find helpful.
                                    </p>
                                </div>
                            )}

                            {activeTab === "reviews" && (
                                <div>
                                    <h2 className="font-semibold text-xl mb-3">Customer Reviews</h2>
                                    <p className="text-gray-500">
                                        No reviews yet. Be the first to write a review about this product!
                                    </p>
                                </div>
                            )}

                            {activeTab === "video" && (
                                <div>
                                    <h2 className="font-semibold text-xl !mb-3">Product Video</h2>
                                    <div className="aspect-video w-7xl h-58 bg-gray-100 flex items-center justify-center text-gray-400">
                                        🎬 Product demo video placeholder
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Description
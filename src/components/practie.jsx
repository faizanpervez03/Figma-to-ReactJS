import React from 'react'

const practie = () => {
    return (
        <>

            <div className="w-[280px] bg-white border border-purple-500 rounded-lg overflow-hidden group relative shadow-md">

                {/* --- Top Icons (hidden until hover) --- */}
                <div className="absolute top-3 right-3 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-purple-100">
                        <CgShoppingCart className="w-4 h-4 text-purple-600" />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-purple-100">
                        <BiHeart className="w-4 h-4 text-purple-600" />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-purple-100">
                        <BiZoomIn className="w-4 h-4 text-purple-600" />
                    </button>
                </div>

                {/* --- Image Section --- */}
                <div className="flex justify-center items-center p-6">
                    <img
                        src="./images/chair02.png" // <-- replace with your image
                        alt="Cantilever chair"
                        className="h-40 object-contain"
                    />
                </div>

                {/* --- View Details Button (hidden until hover) --- */}
                <div className="flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-green-500 text-white px-5 py-2 rounded-lg font-medium">
                        View Details
                    </button>
                </div>

                {/* --- Bottom Info Section --- */}
                <div className="bg-purple-700 text-center py-5">
                    <h2 className="text-white font-semibold text-lg mb-2">
                        Cantilever chair
                    </h2>

                    <div className="flex items-center justify-center gap-2 mb-3">
                        <span className="w-4 h-1 rounded bg-teal-500"></span>
                        <span className="w-4 h-1 rounded bg-pink-600"></span>
                        <span className="w-4 h-1 rounded bg-indigo-900"></span>
                    </div>

                    <p className="text-white font-medium">Code - Y523201</p>
                    <p className="text-white font-semibold text-lg">$42.00</p>
                </div>
            </div>


        </>
    )
}

export default practie
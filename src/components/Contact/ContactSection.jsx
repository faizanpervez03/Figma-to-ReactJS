

const ContactSection = () => {
    return (
        <section className="w-full bg-white py-12 !px-8 md:!px-16 lg:!px-28">
            <div className="sm:max-w-7xl !mx-auto grid md:grid-cols-2 gap-12 items-start !mt-16 !mb-16 ">

                {/* Left Side - About Info */}
                <div className="sm:max-w-lg">
                    <h2 className="text-2xl font-semibold text-[#1A0B5B] !mb-4 font-[josefin_Sans]">
                        Information About us
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed !mb-6 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est.
                        Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
                    </p>
                    {/* Colored dots */}
                    <div className="flex items-center !space-x-3">
                        <span className="w-4 h-4  rounded-full bg-purple-600"></span>
                        <span className="w-4 h-4  rounded-full bg-pink-500"></span>
                        <span className="w-4 h-4   rounded-full bg-cyan-400"></span>
                    </div>
                </div>

                {/* Right Side - Contact Info */}
                <div>
                    <h2 className="text-2xl font-semibold text-[#1A0B5B] font-[josefin_Sans] ">Contact Way</h2>
                    <div className="grid sm:grid-cols-2 gap-6 text-sm text-gray-600 !mt-8">
                        {/* Phone and Email */}
                        <div className="flex items-center !space-x-3  ">
                            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-600 text-white">

                            </span>
                            <div className=" text-gray-400">
                                <p>Tel: 877-67-88-99</p>
                                <p>E-Mail: shop@store.com</p>
                            </div>
                        </div>

                        {/* Support */}
                        <div className="flex items-center !space-x-3">
                            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-pink-500 text-white">

                            </span>
                            <div  className=" text-gray-400">
                                <p>Support Forum</p>
                                <p>For over 24hr</p>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex items-center !space-x-3">
                            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-400 text-white">

                            </span>
                            <div  className=" text-gray-400">
                                <p>20 Margaret st, London</p>
                                <p>Great Britain, 3NM98-LK</p>
                            </div>
                        </div>

                        {/* Shipping */}
                        <div className="flex items-center !space-x-3">
                            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-green-400 text-white">

                            </span>
                            <div  className=" text-gray-400">
                                <p>Free standard shipping</p>
                                <p>on all orders.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ContactSection;

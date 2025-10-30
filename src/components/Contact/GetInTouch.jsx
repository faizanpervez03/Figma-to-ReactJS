import React from "react";

const GetInTouch = () => {
  return (
    <section className="w-full bg-white !py-12 !px-8 md:!px-16 lg:!px-28">
      <div className="max-w-7xl !mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left side - Form */}
        <div>
          <h2 className="text-3xl font-semibold text-[#1A0B5B] !mb-3 font-[josefin_Sans]">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-sm !mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices
            tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
          </p>

          <form className="!space-y-6">
            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full border border-gray-300  !px-4 !py-2 text-sm focus:outline-none focus:border-indigo-600"
              />
              <input
                type="email"
                placeholder="Your E-mail*"
                className="w-full border border-gray-300  !px-4 !py-2 text-sm focus:outline-none focus:border-indigo-600"
              />
            </div>

            {/* Subject */}
            <input
              type="text"
              placeholder="Subject*"
              className="w-full border border-gray-300  !px-4 !py-2 text-sm focus:outline-none focus:border-indigo-600"
            />

            {/* Message */}
            <textarea
              placeholder="Type Your Message*"
              rows="8"
              className="w-full border border-gray-300  !px-4 !py-2 text-sm resize-none focus:outline-none focus:border-indigo-600"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="bg-pink-500 text-white !px-6 !py-2 rounded-sm text-sm font-medium hover:bg-pink-600 transition-all duration-200"
            >
              Send Mail
            </button>
          </form>
        </div>

        {/* Right side - Illustration */}
        <div className="flex justify-center">
          <img
            src="./images/contact-us.png"
            alt="Contact Illustration"
            className="w-full max-w-md h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default GetInTouch;

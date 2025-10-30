import React, { useState } from "react";
import { Link } from "react-router";

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Data:", formData);
    };

    return (
        <>
        <div className="flex justify-center items-center sm:!my-28 sm:!px-4">
            <div className="bg-white shadow-lg !p-8 w-full max-w-md">
                {/* Heading */}
                <h2 className="text-2xl font-bold text-center text-[#1A0B5B] !mb-2">
                    Login
                </h2>
                <p className="text-sm text-gray-500 text-center !mb-6">
                    Please login using account detail below.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <div className="!mb-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-md !px-4 !py-2 focus:outline-none focus:border-pink-500"
                        />
                    </div>

                    <div className="!mb-2">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-md !px-4 !py-2 focus:outline-none focus:border-pink-500"
                        />
                    </div>

                    <div className=" !mb-4">
                        <Link to="#" className="text-sm text-gray-500 hover:text-pink-500">
                            Forgot your password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold !py-2 rounded-sm transition"
                    >
                        Sign In
                    </button>
                </form>

                {/* Footer */}
                <p className="text-center text-sm text-gray-600 !mt-6">
                    Don't have an Account?{" "}
                    <Link to="#" className="text-pink-500 hover:underline">
                        Create account
                    </Link>
                </p>
            </div>
            
        </div>
               <div className=' !mt-8 !mb-8 flex justify-center !p-2'>

                <img src="./images/companies-image.png" alt="" />
            </div>
        </>
    );
};

export default Login;

import React, { useEffect, useState } from "react";
import BannerImage from "../../public/Banner.jpg"

const Banner = () => {
    
    return (
        <>
        
            <div className={`container mx-auto p-4 md:px-12 max-w-screen-2xl mt-24`}>
                <div className="flex md:flex-row justify-between flex-col-reverse">
                    <div className="w-full md:w-2/3 py-12">
                        <h1 className="text-3xl w-full md:w-2/3 font-bold mb-12">Hello, Welcome here to learn something <span className="text-red-200">new everyday!!!</span></h1>
                        <p className="w-3/4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est modi voluptas beatae obcaecati excepturi quos, voluptates nam aspernatur quae totam Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, cum!.</p>
                        <label className="input md:w-2/4 input-bordered flex items-center gap-2 mt-10">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="grow" placeholder="Email" />
                        </label>
                        <button className="bg-red-300 px-6 py-3 mt-12 text-white rounded-lg">Secondary</button>
                    </div>
                    <div className="w-full md:w-1/3 mx-auto bg-white">
                        <img className="w-full md:w-full object-cover" src={BannerImage} alt="" />
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Banner;
"use client";
import React, { useState, useEffect } from "react";

const Banner = () => {
  const images = [
    "https://fathershops.com/storage/2022/09/Build-an-ECommerce-Website-in-2022.png",
    "https://brandroofsolutions.com/wp-content/uploads/2020/12/ezgif.com-video-to-gif.gif",
    "https://brandroofsolutions.com/wp-content/uploads/2020/12/ezgif.com-video-to-gif.gif",
    "https://images.squarespace-cdn.com/content/v1/5b48c29f9f8770367788f244/1611582700101-JMIIX69SHSXK1X96XE91/ke17ZwdGBToddI8pDm48kHKmDLrMZO7HHpcyjMqbzOMUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcBVek0a0L5ZzZO5sIOvWwrqKYA-dXl4sYwgdPtOa0B174TByWOce_SwawEQNsQ9Qi/ecommerce+marketing+strategy",
    // Add more image URLs as needed
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className=" py-10 md:py-40 bg-gradient-to-r from-green-300 via-white to-pink-300 ">
      <div className="container mx-auto ">
        <div className="grid grid-col-10 mx-auto px-5 md:mx-0 md:grid-cols-3 gap-20">
          <div className="">
            <h1 className="mb-2 font-bold text-[30px] md:text-[64px] leading-tight">
              <span className="bg-gradient-to-r from-purple-400 to-indigo-900 via-purple-600 text-transparent bg-clip-text font-bold   mr-1">
                Welcome
              </span>
              to Baba Shop
            </h1>
            <p className="lg:text-[18px] text-[16px] text-[#17603A] mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              delectus quisquam? Eligendi fugiat dolorum nobis, quos cum fugit!
              Nobis, voluptates.
            </p>

            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 flex py-2.5 text-center mr-1 mb-2 "
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5 mr-2 -ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
              </svg>
              Buy now
            </button>
          </div>
          <div className="hidden flex justify-center items-center md:block w   w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 animate-move-right">
          </div>

          <div className="w-full h-[200px] md:h-[350px]">
            <img
              className="w-full h-100 max-w-auto  max-h-full rounded"
              src={images[currentImageIndex]}
              alt="banner-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

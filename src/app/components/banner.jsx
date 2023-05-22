"use client";
import React, { useState, useEffect } from "react";
import {BsMouse} from "react-icons/bs"
const Banner = () => {
  const images = [
    "https://fathershops.com/storage/2022/09/Build-an-ECommerce-Website-in-2022.png",
    "https://discovertemplate.com/wp-content/uploads/2020/11/E-Commerce-Animated-GIF-Icon-Pack-2.gif",
    "https://brandroofsolutions.com/wp-content/uploads/2020/12/ezgif.com-video-to-gif.gif",
    
    // Add more image URLs as needed
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);


  // mosue scroll bottom 
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };
  
  return (
    <section className="bg-gradient-to-r from-green-300 via-white to-pink-300  lg:h-auto">
    <div className="fluid mx-auto ">
      <div className="px-20  py-10  md:py-20 flex items-center flex-wrap md:flex-nowrap gap-10  md:gap-0">
        <div className="w-[450px]">
          <h1 className="mb-2 font-bold text-[30px] md:text-[64px] leading-tight">
            <span className="bg-gradient-to-r from-purple-400 to-indigo-900 via-purple-600 text-transparent bg-clip-text font-bold text-xl text-[40px] md:text-[64px] mr-1">
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
        <div className="hidden md:block  w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 animate-move-right"></div>

        <div className="h-[450px] md:w-[600px] ml-auto">
          <img
            className="w-full h-full object-cover  max-h-full rounded"
            src={images[currentImageIndex]}
            alt="banner-image"
          />
        </div>
      </div>
      <div className="w-full flex justify-center mosue-scroll-div">
      <div className="cursor-pointer relative" onClick={scrollToBottom}>
        <BsMouse className="hidden md:block text-4xl my-5 z-30 text-grey text-[white] cursor-pointer hover:shadow-bottom-to-top" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 transition-transform duration-300 origin-bottom"></div>
      </div>
    </div>
    </div>
    </section>
  );
};

export default Banner;

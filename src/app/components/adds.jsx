"use client"
import React from "react";
import SwiperCore, { Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


SwiperCore.use([Autoplay]);

const Adds = () => {
  const addimages = [
    "https://icms-image.slatic.net/images/ims-web/795496f5-160e-4bc8-a1bf-bfee7024d214.jpg",
    "https://icms-image.slatic.net/images/ims-web/c21c26b1-cb35-45d9-9513-c5062a1031cf.jpg",
    "https://icms-image.slatic.net/images/ims-web/f6dda8b1-c50f-4179-9362-63699119a69e.jpg",
    "https://icms-image.slatic.net/images/ims-web/6a02fc99-009a-437d-b33b-71c72dc17547.jpg",
    "https://icms-image.slatic.net/images/ims-web/795496f5-160e-4bc8-a1bf-bfee7024d214.jpg"
  ];
  return (
    <>
      <section className="container mx-auto my-5 rounded">
        <div>
          <div>
          <div className="relative">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          
        }}
        autoplay={{
            delay: 3000, // Set the autoplay delay (in milliseconds)
            disableOnInteraction: false, // Continue autoplay even when user interacts with the slider
          }}
        className="swiper-container"

      >

        {addimages.map((item,index)=>(
        <SwiperSlide key={index}>
         <div className="w-full h-[300px]">
         <img className="h-auto w-full" src={item} alt="adds_img" />
         </div>
      </SwiperSlide>
        ))}

       

        {/* Add more slides as needed */}
      </Swiper>
    </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Adds;

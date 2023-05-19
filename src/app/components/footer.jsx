"use client";
import React from 'react'
import NextLink from "next/link";
import { usePathname } from 'next/navigation';

const Footer = () => {
    const router = usePathname();

    const navData = [
        { link: "/", title: "Home" },
        { link: "/about", title: "About" },
        { link: "/contact", title: "Contact" },
        { link: "/product", title: "Product" },
      ];
  return (
    <div>
        

        <footer class="bg-gradient-to-r from-green-300 via-white to-pink-300 shadow dark:bg-gray-900 ">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
                <img     src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" class="h-8 mr-3" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ecomerce</span>
            </a>
          
          
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>     {navData.map((item, index) => (
                      <NextLink
                        key={index}
                        href={item.link}
                    
                        className={`${
                          router === item.link
                            ? "bg-gray-900 py-1 px-2 text-white rounded-md md:mr-6  text-sm "
                            : "text-black md:mr-6"
                        }`}
                        aria-current="page"
                      >
                        {item.title}
                      </NextLink>
                    ))}</li>
       
                {/* <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li> */}
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline"> &copy;</a>. All Rights Reserved.</span>
    </div>
</footer>



    </div>
  )
}

export default Footer
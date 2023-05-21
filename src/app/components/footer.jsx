"use client";
import React from 'react'
import NextLink from "next/link";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

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
                        <Link href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
                            <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" class="h-8 mr-3" alt="Flowbite Logo" />
                            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ecomerce</span>
                        </Link>


                        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>     {navData.map((item, index) => (
                                <NextLink
                                    key={index}
                                    href={item.link}

                                    className={`${router === item.link
                                        ? "bg-purple-600 md:text-[18px] px-2 py-2  text-white rounded-md  font-medium	"
                                        : "text-black md:text-[18px] font-medium	  px-2 py-2 "
                                        }`}
                                    aria-current="page"
                                >
                                    {item.title}
                                </NextLink>
                            ))}</li>

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
"use client";
import React from "react";
import Link from "next/link";
import { CiFacebook, CiTwitter, CiLocationOn } from "react-icons/ci";
import { CgInstagram } from "react-icons/cg";
import { FaSnapchatGhost, FaPhoneAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer class="bg-gradient-to-r from-green-300 via-white to-pink-300 shadow dark:bg-gray-900 ">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class=" sm:flex sm:items-center sm:justify-between">
            <Link
              href="https://flowbite.com/"
              class="flex items-center mb-4 sm:mb-0"
            >
              <img
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                class="h-8 mr-3"
                alt="Flowbite Logo"
              />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Ecomerce
              </span>
            </Link>

            <div>
              <h1 className="font-bold text-[20px]">Address</h1>
              <ul class=" mt-3 flex flex-col gap-3 text-sm font-medium text-graysm:mb-0 dark:text-gray-400">
                <li className="cursor-pointer flex gap-3 flex-wrap text-[purple] hover:text-[gray] md:text-[17px]">
                  <CiLocationOn />  <span>935-9940 Tortor. Street
                        Santa Rosa MN</span>
                </li>
                <li className="cursor-pointer  flex gap-3 text-[purple] hover:text-[gray] md:text-[20px]">
                  <FaPhoneAlt />
                   <span>+9233382002802028</span>
                </li>
              </ul>
            </div>

            <ul class="flex flex-wrap mt-3 md:mt-0 gap-10 items-center mb-6 text-sm font-medium text-graysm:mb-0 dark:text-gray-400">
              <li className="cursor-pointer  text-[purple] hover:text-[gray] md:text-[20px]">
            
                <CiFacebook />
              </li>
              <li className="cursor-pointer  text-[purple] hover:text-[gray] md:text-[20px]">
                <CgInstagram />
              </li>
              <li className="cursor-pointer  text-[purple] hover:text-[gray] md:text-[20px]">
                <CiTwitter />
              </li>
              <li className="cursor-pointer  text-[purple] hover:text-[gray] md:text-[20px]">
                <FaSnapchatGhost />
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              {" "}
              &copy;
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;

"use client";
import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isprofileMenu, setprofileMenu] = useState(false);
  const router = usePathname();
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const navData = [
    { link: "/", title: "Home" },
    { link: "/about", title: "About" },
    { link: "/contact", title: "Contact" },
    { link: "/product", title: "Product" },
  ];

// close profile popup
const handleClose=()=>{
       setTimeout(()=>{
                setprofileMenu(false)
       },100)
}

  return (
    <>
      <div
        className="container-fluid w-full  sticky z-50 top-0 bg-gradient-to-r from-green-300 via-white to-pink-300"
 
      >
        <nav>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button
                  type="button"
                  className={`inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-300 transition duration-300 ${
                    isMobileMenu ? "rotate-90" : ""
                  }`}
                  aria-controls="mobile-menu"
                  aria-expanded={isMobileMenu ? "true" : "false"}
                  onClick={() => setIsMobileMenu(!isMobileMenu)}
                >
                  <svg
                    className={`h-6 w-6 ${isMobileMenu ? "block" : "hidden"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <svg
                    className={`h-6 w-6 ${isMobileMenu ? "hidden" : "block"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <span className="font-sans  font-extrabold">Ecomerce</span>
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div
                  className="hidden sm:ml-6 sm:block lg:mx-auto"
                  id="expand-menu"
                >
                  <div className="flex space-x-4"   >
                    {navData.map((item, index) => (
                      <NextLink
                        key={index}
                        href={item.link}
                    
                        className={`${
                          router === item.link
                            ? "bg-gray-900 py-1 px-2 text-white rounded-md  text-sm "
                            : "text-black"
                        }`}
                        aria-current="page"
                      >
                        {item.title}
                      </NextLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-8 sm:pr-0">
              
                <NextLink href="#" className="">
                <button type="button" className="text-white bg-gradient-to-r from-purple-600 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg px-3 py-2" >Register</button>
                </NextLink>
               
                     
                <button
                  type="button"
                  className="rounded-full p-1 text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 "
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </button>
                <div className="relative ml-3">
              
                  <div>
                    <button
                      type="button"
                      onClick={() => setprofileMenu(!isprofileMenu)}
                      className="flex rounded-full bg-white-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </button>
                  </div>
                  {isprofileMenu && (
                    <div
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabindex="-1"
                    >
                      <NextLink
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-0"
                        onClick={()=>handleClose()}
                      >
                        Your Profile
                      </NextLink>
                      <NextLink
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-1"
                        onClick={()=>handleClose()}
                      >
                        Settings
                      </NextLink>
                      <NextLink
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-2"
                        onClick={()=>handleClose()}
                      >
                        Sign out
                      </NextLink>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2 position-absolute" >
              {isMobileMenu &&
                navData.map((item, index) => (
                  <NextLink
                    key={index}
                    onClick={()=>setIsMobileMenu(false)}
                    href={item.link}
                    className={`${
                      router === item.link
                        ? "bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                        : "text-black  block rounded-md px-3 py-2 text-base font-medium"
                    }`}
                    aria-current="page"
                  >
                    {item.title}
                  </NextLink>
                ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;

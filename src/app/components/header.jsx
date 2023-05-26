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
  const handleClose = () => {
    setTimeout(() => {
      setprofileMenu(false)
    }, 100)
  }

  return (
    <>
      <div className=" bg-gradient-to-r from-green-300 via-white to-pink-300 sticky z-40 top-0"
      >
        <nav className="container mx-auto ">
          <div >
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button
                  type="button"
                  className={`inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-300 transition duration-300 ${isMobileMenu ? "rotate-90" : ""
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
              <NextLink href="/" className="flex">
                  <span className=" hidden md:block self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ecomerce</span>
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  </NextLink>
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

                        className={`${router === item.link
                          ? "bg-purple-600 md:text-[18px] px-2 py-2  text-white rounded-md  font-medium	"
                          : "text-black md:text-[18px] font-medium	  px-2 py-2 "
                          }`}
                        aria-current="page"
                      >
                        {item.title}
                      </NextLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center  pr-2 sm:static sm:inset-auto sm:ml-8 sm:pr-0">

                <NextLink href="#" className="">
                  <button type="button" className="text-white bg-gradient-to-r from-purple-600 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg px-3 py-2" >Register</button>
                </NextLink>


                <button
                  type="button"
                  className="rounded-full p-1 text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 "
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 mr-2 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
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
                        onClick={() => handleClose()}
                      >
                        Your Profile
                      </NextLink>
                      <NextLink
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-1"
                        onClick={() => handleClose()}
                      >
                        Settings
                      </NextLink>
                      <NextLink
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-2"
                        onClick={() => handleClose()}
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
                    onClick={() => setIsMobileMenu(false)}
                    href={item.link}
                    className={`${router === item.link
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
        </nav >
      </div >
    </>
  );
};

export default Header;

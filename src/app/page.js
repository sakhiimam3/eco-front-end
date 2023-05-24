
"use client";
import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";
import Banner from "./components/banner";
import Adds from "./components/adds";
import Product from "./product/page";
import Metadata from "./components/metadata";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    setShowButton(window.pageYOffset > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Metadata title="Ecomerce"/>
      <Banner />
      <Adds />
      <Product/>
     

      <div>
        {showButton && (
          <button
            className="fixed bottom-4  z-50 right-4 bg-purple-500 hover:bg-purple-600 text-white rounded-full p-3 shadow-md"
            onClick={scrollToTop}
          >
            <BsArrowUp size={24} />
          </button>
        )}
      </div>
    </>
  );
}

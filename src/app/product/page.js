import React from "react";
import ProductCard from "../components/productCard";
import HeadingAnimation from "../components/headingAnimation";


  const product = {
    _id: "012",
    name: " Blue t-shirt",
    price: "€22",
    images: [{ url: "https://i.ibb.co/DRST11n/1.webp" }],
  };
const Product = () => {
  return (
    <>
     <div className="container mx-auto  md:my-24">
          <HeadingAnimation />
        <div className="flex justify-center items-center flex-wrap  gap-20  mb-20">
         {[1,2,3,4,5,6,7,8,9,10].map((item,index)=>(
                   <ProductCard key={index} product={product} />
         ))
} 
        </div>
      </div>
    </>
  );
};

export default Product;

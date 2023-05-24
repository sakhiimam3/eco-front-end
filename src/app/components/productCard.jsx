"use client"
import Link from "next/link";
import React from "react";
import ReactStars from "react-rating-stars-component";


const ProductCard = ({ product ,img}) => {

  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    value:product.ratings,
    ishalf: true,
    size:20
  };
  return (
    <>
      <Link href="#">
     
        <div className="rounded-2xl   w-[250px]  h-[300px]  md:mb-10">
            <img
            src={img}
            className="w-full h-full object-cover rounded-2xl	 transition-transform duration-300 hover:scale-105"
            alt={product.name}
          />
         

          <div className="flex justify-between items-center my-3">
            
            <div>
            <h5 className="font-bold">{product.name}</h5>
            <span className="text-[tomato] font-semibold" >Rs : {product.price}</span>
            </div>
            <div >
           
              <ReactStars   {...options} />
              <span className="text-[grey] text-[13px]">({product.numOfReviews} Reviews)</span>
           
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;

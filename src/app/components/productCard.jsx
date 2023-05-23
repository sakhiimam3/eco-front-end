"use client"
import Link from "next/link";
import React from "react";
import ReactStars from "react-rating-stars-component";

const options = {
  edit: false,
  color: "rgba(20,20,20,0.1)",
  activeColor: "tomato",
  value: 2.5,
  ishalf: true,
  size:20
};

const ProductCard = ({ product }) => {
  return (
    <>
      <Link href="#">
     
        <div className="rounded-2xl   w-[200px]  h-[300px]  md:mb-0">
            <img
            src={product.images[0].url}
            className="w-full h-full object-cover rounded-2xl	 transition-transform duration-300 hover:scale-105"
            alt={product.name}
          />
         

          <div className="flex justify-between items-center my-3">
            
            <div>
            <h5 className="font-bold">{product.name}</h5>
            <span className="text-[tomato] font-semibold" >Price : {product.price}</span>
            </div>
            <div >
           
              <ReactStars   {...options} />
              <span className="text-[grey]">(256 reviews)</span>
           
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;

"use client";
import Link from "next/link";
import React from "react";
import ReactStars from "react-rating-stars-component";
import RatingComponents from "./ratingComponents";

const ProductCard = ({ product, img }) => {

  return (
    <>
      <Link href={`/${product._id}`}>
        <div className="rounded-2xl   w-[250px]  h-[300px]  md:mb-10">
          <img
            src={img}
            className="w-full h-full object-cover rounded-2xl	 transition-transform duration-300 hover:scale-105"
            alt={product.name}
          />

          <div className="flex justify-between items-center my-3">
            <div>
              <h5 className="font-bold">{product.name}</h5>
              <span className="text-[tomato] font-semibold">
                Rs : {product.price}
              </span>
            </div>
            <div>
              <RatingComponents rating={product.ratings} />
              <span className="text-[grey] text-[13px]">
                ({product.numOfReviews} Reviews)
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;

"use client"
import React, { useEffect } from "react";
import {getProductDetails} from "@/redux/reducers/getProductDetails";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = ({params}) => {
  const {productDetails}=params
  const dispatch=useDispatch()
  const data=useSelector((state)=>state)
  console.log(data,"data")


useEffect(()=>{
   dispatch(getProductDetails(+params.productDetails))

},[dispatch])

  return (
    <div>
      <h1>ID: {productDetails}</h1>
    </div>
  );
};

export default ProductDetails;

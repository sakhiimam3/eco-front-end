"use client";
import React, { useEffect } from "react";
import { useAlert } from "react-alert";

import ProductCard from "../components/productCard";
import HeadingAnimation from "../components/headingAnimation";
import { useDispatch, useSelector } from "react-redux";
import { GetAllProducts } from "../../redux/reducers/getallPrdouctReducer";
import Metadata from "../components/metadata";
import Loader from "../components/Loader";

const product = {
  _id: "012",
  name: " Blue t-shirt",
  price: "€22",
  images: [{ url: "https://i.ibb.co/DRST11n/1.webp" }],
};
const Product = () => {
  const alert = useAlert();

  const dispatch = useDispatch();
  const data = useSelector((state) => state?.allprdoucts?.products?.data?.data);
  const isFetching = useSelector((state) => state?.allprdoucts?.isFetching);
  const error = useSelector((state) => state?.allprdoucts?.error);

  useEffect(() => {
    dispatch(GetAllProducts());
    if (error) {
      alert.error(error);
    }
  }, [dispatch, error, alert]);

  return (
    <>
      <div className="container mx-auto md:my-24">
        <HeadingAnimation />
        <div
          className={`flex justify-center items-center flex-wrap gap-20 mb-20 ${
            isFetching ? "shadow" : ""
          }`}
        >
          {isFetching ? (
            <Loader />
          ) : data && data.length > 0 ? (
            data.map((item, index) => (
              <ProductCard
                key={index}
                product={item}
                img="https://i.ibb.co/DRST11n/1.webp"
              />
            ))
          ) : (
            <div className="text-center">No data available</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;

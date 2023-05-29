"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactImageZoom from "react-image-zoom";
import { GetProDetails } from "../../redux/reducers/getProductDetails";
import RatingComponents from "../components/ratingComponents";
import Loader from "../components/Loader";

const ProductDetails = ({ params }) => {
  const { productDetails } = params;
  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state?.productDetails?.productsDetails?.data?.data
  );
  const Loading = useSelector((state) => state?.productDetails?.isFetching);



  const images = [
    "https://i.ibb.co/DRST11n/1.webp",
    "https://fathershops.com/storage/2022/09/Build-an-ECommerce-Website-in-2022.png",
    "https://i.ibb.co/DRST11n/1.webp",
    "https://discovertemplate.com/wp-content/uploads/2020/11/E-Commerce-Animated-GIF-Icon-Pack-2.gif",
    "https://brandroofsolutions.com/wp-content/uploads/2020/12/ezgif.com-video-to-gif.gif",
    // Add more image URLs as needed
  ];

  useEffect(() => {
    dispatch(GetProDetails(productDetails));
  }, [dispatch, productDetails]);







  return (
    <section className="w-full md:py-24 bg-black-300">
      {Loading ? (
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="border-[1px] rounded-s-lg border-300-gray py-5 relative">

                <Carousel>
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="h-[400px] rounded w-[350px] mx-auto cursor-pointer"

                    >
                      <img
                        className="h-full w-full object-cover cursor-pointer rounded"
                        src={image}
                        alt={`Product Image ${index + 1}`}
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
              <div className="w-full flex flex-col border-[1px] border-300-grayk px-2 py-2">
                <h1 className="font-bold text-4xl capitalize text-slate-400">
                  subscribtion
                </h1>

                <h2>Name: {data?.name}</h2>
                <p className="py-1 text-slate-600">
                  Product #{productDetails}
                </p>
                <hr className="py-2" />

                <div>
                  <RatingComponents rating={data?.ratings} />
                  <span className="text-[grey] text-[13px]">
                    ({data?.numOfReviews} Reviews)
                  </span>
                </div>
                <hr className="py-2" />
                <div className="py-2 md:py-5">
                  <span className="text-[tomato] text-2xl font-semibold">
                    {`₹ ${data?.price}`}
                  </span>
                </div>

                <div>
                  <form action="">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-3">
                        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                          +
                        </button>
                        <span className="font-bold">0</span>
                        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                          -
                        </button>
                      </div>
                      <div>
                        <button className="bg-[#f45c1b] hover:bg-orange-300 text-white font-semibold py-2 px-4 border-gray-400 rounded shadow">
                          Add to cart
                        </button>
                      </div>
                    </div>
                    <div className="py-1 md:py-3">
                      <p className="text-lg font-bold">
                        Status:
                        <span
                          className={
                            data?.Stock > 0 ? "text-[green]" : "text-[black]"
                          }
                        >
                          Stock
                        </span>
                      </p>
                    </div>
                    <label
                      htmlFor="description"
                      className="block text-slate-500 font-bold mb-2"
                    >
                      Description:
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      placeholder="comment here"
                      className="border block w-full focus:outline-none bg-transparent rounded-md p-2"
                      rows={4}
                    />

                    <div className="my-5">
                      <button className="bg-green-600 outline-none border-none text-white capitalize hover:bg-gray-100 hover:text-black font-bold py-2 px-4 border border-gray-400 rounded shadow">
                        submit review
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </>
      )}
    </section>
  );
};

export default ProductDetails;

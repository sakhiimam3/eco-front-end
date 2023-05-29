"use client"
import React from 'react'
import ReactStars from "react-rating-stars-component";

const RatingComponents = ({ rating }) => {
    const options = {
        edit: false,
        color: "rgba(20,20,20,0.1)",
        activeColor: "tomato",
        value: rating || 0,
        isHalf: true,
        size: 20,
    };
    return (
        <ReactStars {...options} />
    )
}

export default RatingComponents
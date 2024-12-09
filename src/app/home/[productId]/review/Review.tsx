"use client";
import React, { useState } from "react";
import { dummy } from "../dummy";
import ReviewAccordent from "./reviewAccordent";

function Review() {
  const [showReview, setShowReview] = useState<boolean>(false);
  return (
    <section className="mt-[40px]">
      <h3 className="text-[2.8rem] font-bold ">Reviews</h3>

      {showReview ? (
        <>
          {dummy.map((i, index) => (
            <ReviewAccordent key={index} i={i} />
          ))}
          <button
            className="bg-color2 hover:bg-color1 hover:text-color3  rounded-lg py-2 px-5 mr-2"
            onClick={() => setShowReview(false)}
          >
            hide Review
          </button>
        </>
      ) : (
        <button
          className="bg-color2 hover:bg-color1 hover:text-color3  rounded-lg py-2 px-5 mr-2"
          onClick={() => setShowReview(true)}
        >
          Show Reviews
        </button>
      )}
    </section>
  );
}

export default Review;

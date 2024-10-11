"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import cardimage1 from "@/assets/artist/cardimg1.png";
import star from "@/assets/artist/Star.png";
import likebtn from "@/assets/artist/likebutton3.png";

const Card = ({ singleartist }) => {

  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  // Destructure properties safely with default values to avoid errors
  const {
    image = cardimage1, // Provide default image in case it's undefined
    songName = "Unknown Song",
    songDescription = "Unknown Description",
    stars = 0,
    starCount = 0,
    reviewscount = 0,
  } = singleartist || {}; // Destructure with default values

  return (
    <>
      <div className="card mr-3 md:mr-0">
        <div className="imageplace mb-1 hoverup hover:shadow-lg transition-all ease-out duration-200 relative">
          <Image
            src={image}
            alt={songName}
            className="rounded-2xl relative w-full" />
          <div className="likebutton absolute bottom-[3%] right-[3%]">
            <div
              onClick={toggleLike}
              className={`rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${liked ? "bg-red-500" : ""
                }`}
            >
              <Image src={likebtn} className="rounded-full" alt="Like Button" />
            </div>
          </div>
        </div>
        <div className="text-box my-2">
          <p className="text-textColor font-semibold">{songName}</p>
          <p className="text-sm text-textColor">{songDescription}</p>
        </div>
        <div className="ratingbox flex flex-col lg:flex-row justify-between items-start lg:items-center mr-1">
          <div className="rating flex items-center gap-1">
            <p className="text-sm text-textColor font-semibold">{stars}</p>
            <div>
              <Image src={star} alt="star" />
            </div>
            <p className="text-sm text-textColor">({starCount})</p>
          </div>
          <div className="ratingtext flex items-center">
            <p className="text-sm text-textColor">
              <span className="font-semibold">{reviewscount}</span> reviews
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

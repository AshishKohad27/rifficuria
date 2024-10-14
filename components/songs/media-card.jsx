"use client";
import React, { useState } from "react";
import Image from "next/image";
import star from "@/public/artist/Star.png";
import likebtn from "@/public/artist/likebutton3.png";
import defaultArtistImage from "@/public/artist/cardimg1.png"; // Default artist image

const MediaCard = ({ singleartist }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  // Destructure properties safely with default values to avoid errors
  const {
    image = defaultArtistImage, // Provide default image in case it's undefined
    songName = "Unknown Song",
    songDescription = "Unknown Description",
    stars = 0,
    starCount = 0,
    reviewscount = 0,
  } = singleartist || {}; // Destructure with default values

  return (
    <>
      <div className="card mr-3 md:mr-0">
        <div className="mb-1 relative rounded-2xl overflow-hidden">
          <img
            src={image}
            alt={songName}
            className="rounded-2xl relative w-full hover:scale-110 transition-all ease-out duration-500 aspect-square"
          />

          <div className="likebutton absolute bottom-[3%] right-[3%]">
            <div
              onClick={toggleLike}
              className={`w-6 h-6 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${liked ? "bg-red-500" : ""
                }`}
            >
              <Image
                src={likebtn}
                className="w-full h-full rounded-full"
                alt="Like Button"
              />
            </div>
          </div>
        </div>
        <div className="text-box mt-3 mb-2 md:mb-1 flex flex-col gap-1 md:gap-0">
          <p className="text-textColor text-sm md:font-base leading-4.5 md:leading-5.5 font-bold capitalize">
            {songName}
          </p>
          <p className="text-textColor text-sm leading-4.5 font-normal capitalize">
            {songDescription}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-1.25 md:gap-2 mr-2">
          <div className="rating flex items-center gap-1">
            <p className="text-textColor text-sm leading-4.5 font-bold">
              {stars}
            </p>
            <div className="flex justify-center items-center">
              <Image src={star} alt="star" />
            </div>
            <p className="text-textColor text-sm leading-4.5 font-bold">
              ({starCount})
            </p>
          </div>
          <div className="ratingtext flex items-center">
            <p className="text-textColor text-sm leading-4.5 font-normal">
              <span className="font-bold">{reviewscount}</span> Reviews
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MediaCard;

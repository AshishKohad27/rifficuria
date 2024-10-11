"use client";
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Albumcard from "@/components/albumcard";
import cardimage2 from "@/assets/artist/cardimg2.png";
import cardimage5 from "@/assets/artist/cardimg5.png";
import cardimage6 from "@/assets/artist/cardimg6.png";

const Albumby = () => {
  let albumtlist = [
    {
      image: cardimage2,
      songName: "Hit me hard and soft",
      stars: 4,
      starCount: 4521,
      reviewscount: 9972,
    },
    {
      image: cardimage5,
      songName: "happier than ever",
      stars: 3,
      starCount: 41,
      reviewscount: 271,
    },
    {
      image: cardimage6,
      songName: "when we all fall asleep, where do we go?",
      stars: 4,
      starCount: 3241,
      reviewscount: 2356,
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  // Function to detect screen width
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); // Changed to strictly less than 768
  };

  useEffect(() => {
    handleResize(); // Set initial screen size
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2.1,
    slidesToScroll: 2.1,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 2.1,
        },
      },
    ],
  };

  return (
    <>
      <div>
        <div className="flex justify-between items-center mb-8 px-[30px] md:px-[0]">
          <p className="text-[16px] md:text-2xl  text-textColor font-semibold">
            ALBUMS BY BILLIE EILISH
          </p>
        </div>

        {/* Conditional rendering for mobile vs desktop */}
        {isMobile ? (
          <div className="cardcontainer">
            <Slider
              {...settings}
              className="overflow-hidden flex pl-[30px] md:pl-[0]"
            >
              {/* Render cards in the slider */}
              {albumtlist.length !== 0 &&
                albumtlist.map((item, index) => (
                  <Albumcard key={index} albumtlist={item} /> // Now it passes singleartist prop correctly
                ))}
            </Slider>
          </div>
        ) : (
          <div className="cardcontainer grid grid-cols-5 gap-4 lg:gap-y-[70px]">
            {/* Render cards in a grid for larger screens */}
            {albumtlist.length !== 0 &&
              albumtlist.map((item, index) => (
                <Albumcard key={index} albumtlist={item} /> // Now it passes singleartist prop correctly
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Albumby;

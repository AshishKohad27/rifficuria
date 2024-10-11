// "use client";
// import React, { useState, useEffect } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import Card from "@/components/card";
// import cardimage1 from "@/assets/artist/cardimg1.png";
// import cardimage2 from "@/assets/artist/cardimg2.png";
// import cardimage3 from "@/assets/artist/cardimg3.png";
// import cardimage4 from "@/assets/artist/cardimg4.png";
// import cardimage5 from "@/assets/artist/cardimg5.png";
// import cardimage6 from "@/assets/artist/cardimg6.png";

// const Songsby = () => {
//   let artistlist = [
//     {
//       image: cardimage1,
//       songName: "What was i made for",
//       songDescription: "Barbie (OST)",
//       stars: 4,
//       starCount: 4521,
//       reviewscount: 9972
//     },
//     {
//       image: cardimage2,
//       songName: "bad guy",
//       songDescription: "when we all fall asleep, where do we go?",
//       stars: 3,
//       starCount: 41,
//       reviewscount: 271
//     },
//     {
//       image: cardimage3,
//       songName: "Birds of a feather",
//       songDescription: "hit me hard and soft",
//       stars: 4,
//       starCount: 3241,
//       reviewscount: 2356
//     },
//     {
//       image: cardimage4,
//       songName: "Chihiro",
//       songDescription: "hit me hard and soft",
//       stars: 5,
//       starCount: 412,
//       reviewscount: 6956
//     },
//     {
//       image: cardimage5,
//       songName: "happier than ever",
//       songDescription: "happier than ever",
//       stars: 4,
//       starCount: 412,
//       reviewscount: 956
//     },
//     {
//       image: cardimage2,
//       songName: "billie bossa nova",
//       songDescription: "happier than ever",
//       stars: 2,
//       starCount: 331,
//       reviewscount: 9972
//     },
//     {
//       image: cardimage3,
//       songName: "bittersuite",
//       songDescription: "hit me hard and soft",
//       stars: 3,
//       starCount: 41,
//       reviewscount: 92
//     },
//     {
//       image: cardimage6,
//       songName: "bury a friend",
//       songDescription: "when we all fall asleep, where do we go?",
//       stars: 3,
//       starCount: 41,
//       reviewscount: 2356
//     },
//     {
//       image: cardimage5,
//       songName: "getting older",
//       songDescription: "happier than ever",
//       stars: 4,
//       starCount: 471,
//       reviewscount: 932
//     },
//     {
//       image: cardimage6,
//       songName: "listen before i go",
//       songDescription: "when we all fall asleep, where do we go?",
//       stars: 5,
//       starCount: 441,
//       reviewscount: 956
//     }
//   ];

//   const [isMobile, setIsMobile] = useState(false);

//   // Function to detect screen width
//   const handleResize = () => {
//     setIsMobile(window.innerWidth < 768); // Changed to strictly less than 768
//   };

//   useEffect(() => {
//     handleResize(); // Set initial screen size
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 2.1,
//     slidesToScroll: 2.1,
//     centerPadding: "20px",
//     responsive: [
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 2.1,
//           slidesToScroll: 2.1,
//         },
//       },
//     ],
//   };

//   return (
//     <>
//       <div>
//         <div className="flex justify-between items-center mb-8 px-[30px] md:px-[0]">
//           <p className="text-[16px] md:text-2xl  text-textColor font-semibold">
//             SONGS BY BILLIE EILISH
//           </p>
//           <p className="hidden md:inline-block text-xs text-textColor underline">
//             View more
//           </p>
//         </div>

//         {/* Conditional rendering for mobile vs desktop */}
//         {isMobile ? (
//           <div className="cardcontainer">
//             <Slider {...settings} className="overflow-hidden flex pl-[30px] md:pl-[0]">
//               {/* Render cards in the slider */}
//               {artistlist.length !== 0 &&
//                 artistlist.map((item, index) => (
//                   <Card key={index} singleartist={item} />  // Now it passes singleartist prop correctly
//                 ))}
//             </Slider>
//           </div>
//         ) : (
//           <div className="cardcontainer grid grid-cols-5 gap-4 lg:gap-y-[70px]">
//             {/* Render cards in a grid for larger screens */}
//             {artistlist.length !== 0 &&
//               artistlist.map((item, index) => (
//                 <Card key={index} singleartist={item} />  // Now it passes singleartist prop correctly
//               ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Songsby;


const Songsby = () => {
  return <div>
    Songsby
  </div>
};
export default Songsby;
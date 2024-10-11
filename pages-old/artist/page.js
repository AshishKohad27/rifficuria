// import React from "react";
// import artistbanner from "@/assets/artist/artist-cover.png";
// import Image from "next/image";
// import Artisinfo from "@/components/artisinfo";
// import Ratingbox from "@/components/ratingbox";
// import Filter from "@/components/filter";
// import Reviews from "@/components/topreviews";
// import Songsby from "@/components/songsby";
// import Albumby from "@/components/albumby";

// // Components
// import MediaSection from "@/components/songs/media-section";
// import Newsletter from "@/components/site/newsletter";

// // Json
// import ArtistData from "@/json/artist.json";

// const page = () => {
//   return (
//     <>
//       <div className="bg-background">
//         <Image src={artistbanner} alt="artistbanner" className="w-full"></Image>
//         {/* artist information */}
//         <div className="artistinformation bg-background mx-w-[1300px] m-auto px-[0px] md:px-[148px] pb-[40px] md:pb-[60px]">
//           <div className=" flex justify-between flex-col md:flex-row md:items-end">
//             <div className="relative bottom-[2rem] md:bottom-[5rem]">
//               <Artisinfo />
//             </div>
//             <div>
//               <Ratingbox />
//             </div>
//             <div className=" mx-8 bg-[#AA98FE] text-[#FBF0EC80] text-center p-3 my-10 rounded-3xl block md:hidden">
//               Sign in to rate and review
//             </div>
//           </div>

//           {/* close  */}
//           {/* top revivews */}
//           <div className="max-w-[800px] px-[30px] md:px-[0] py-[40px] md:py-[0]">
//             <div className="pt-12 flex justify-between items-center">
//               <p className="text-textColor text-[16px] sm:text-2xl font-semibold">
//                 TOP REVIEWS
//               </p>
//               <div className="hidden sm:inline-block">
//                 <Filter />
//               </div>
//               <p className="text-textColor text-xs underline inline-block sm:hidden">
//                 View latest reviews
//               </p>
//             </div>
//             <div>
//               <Reviews />
//             </div>
//           </div>

//           <div>
//             <MediaSection
//               Title="songs by billie eilish"
//               ViewMoreLink="haveLink"
//               DesktopLimits={10}
//               MobileLimits={10}
//               ArtistData={ArtistData}
//             />
//           </div>

//           <div className="mt-22">
//             <MediaSection
//               Title="albums by billie eilish"
//               ViewMoreLink="haveLink"
//               DesktopLimits={3}
//               MobileLimits={3}
//               ArtistData={ArtistData}
//             />
//           </div>
//         </div>
//         <div className="mt-22">
//           <Newsletter />
//         </div>
//       </div>
//     </>
//   );
// };

// export default page;

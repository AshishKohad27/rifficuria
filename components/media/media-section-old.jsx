// "use client";
// import React, { useState, useEffect } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import MediaCard from "@/components/media/media-card";
// import SubSectionHeading from "@/components/site/sub-section-heading";

// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Grid, Pagination } from "swiper/modules";
// // Import Swiper styles
// import "swiper/css/grid";
// import 'swiper/css';
// import 'swiper/css/pagination';

// const MediaSection = ({
//     MediaType,
//     ArtistData,
//     ViewMoreLink,
//     Title,
//     GridClass,
//     DesktopLimits,
//     MobileLimits,
//     isLoadMore,
// }) => {
//     const [visibleItems, setVisibleItems] = useState(DesktopLimits);
//     useEffect(() => { }, [visibleItems])
//     const loadMoreItems = () => {
//         setVisibleItems((prev) => prev + 10); // Increase by 10 items (2 more rows)
//     };

//     const settings = {
//         dots: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 2.1,
//         slidesToScroll: 2.1,
//         centerPadding: "20px",
//         responsive: [
//             {
//                 breakpoint: 320,
//                 settings: {
//                     slidesToShow: 2.3,
//                     slidesToScroll: 2.3,
//                     centerPadding: "20px",
//                 },
//             },
//         ],
//     };

//     return (
//         <div data-media-type={MediaType}>
//             <article className="flex justify-between items-center gap-7.5 mb-6 md:mb-8">
//                 <SubSectionHeading SectionTitle={Title && Title} />
//                 {ViewMoreLink ? (
//                     <button
//                         className="text-textColor text-xs font-normal underline"
//                         type="button"
//                     >
//                         View all
//                     </button>
//                 ) : (
//                     ""
//                 )}
//             </article>

//             <div className="block md:hidden">
//                 {/* <Slider
//                     {...settings}
//                     className="overflow-hidden flex w-[calc(100%+2*32px)] -ml-8 md:ml-0"
//                 >
//                     {ArtistData &&
//                         ArtistData.slice(0, `${MobileLimits ? MobileLimits : "20"}`).map(
//                             (item, index) => (
//                                 <MediaCard key={index} singleartist={item} MediaType={MediaType && MediaType} />
//                             )
//                         )}
//                 </Slider> */}

//                 {/* <Swiper
//                     spaceBetween={15}
//                     slidesPerView={2.1}
//                     pagination={{ clickable: true }}
//                     breakpoints={{
//                         320: {
//                             slidesPerView: 2.3,
//                             spaceBetween: 16,
//                         },
//                     }}
//                     className="overflow-hidden flex w-[calc(100%+2*32px)] !ml-[-32px] md:ml-0 !pl-8 md:pl-0"
//                 >
//                     {ArtistData &&
//                         ArtistData.slice(0, `${MobileLimits ? MobileLimits : "20"}`).map(
//                             (item, index) => (
//                                 <SwiperSlide key={index}>
//                                     <MediaCard singleartist={item} MediaType={MediaType && MediaType} />
//                                 </SwiperSlide>
//                             )
//                         )}
//                 </Swiper> */}
//             </div>

//             <Swiper
//                 spaceBetween={16}
//                 slidesPerView={1} // Default slidesPerView for mobile
//                 breakpoints={{
//                     320: {
//                         slidesPerView: 2.3,
//                         spaceBetween: 16,
//                     },
//                     // Grid layout above 1024px
//                     1024: {
//                         slidesPerView: 5, // Set the number of columns to 5
//                         grid: {
//                             rows: visibleItems, // Calculate rows based on visible items
//                             fill: 'row',
//                         },
//                     },
//                 }}
//                 modules={[Grid, Pagination]}
//                 className="overflow-hidden flex w-[calc(100%+2*32px)] lg:w-full !ml-[-32px] lg:ml-0 !pl-8 lg:pl-0"
//             >
//                 {ArtistData &&
//                     ArtistData.slice(0, visibleItems).map((item, index) => (
//                         <SwiperSlide key={index}>
//                             <MediaCard singleartist={item} MediaType={MediaType && MediaType} />
//                         </SwiperSlide>
//                     ))}
//             </Swiper>


//             {/* <div
//                 className={`hidden md:grid gap-4 lg:gap-y-[72px] ${GridClass ? GridClass : "grid-cols-5"
//                     }`}
//             >
//                 {ArtistData &&
//                     ArtistData.slice(0, `${DesktopLimits ? DesktopLimits : "20"}`).map(
//                         (item, index) => (
//                             <MediaCard key={index} singleartist={item} MediaType={MediaType && MediaType} />
//                         )
//                     )}
//             </div> */}
//             {/* <div className="hidden md:block"> */}
//             <div>
//                 {isLoadMore ? (
//                     <div className="py-4 flex flex-col gap-8 my-20 md:my-22">
//                         <button
//                             onClick={loadMoreItems}
//                             className="px-4 py-2 w-full rounded-3xl border-2 border-aquamarine text-aquamarine text-base font-bold leading-5.5 uppercase">
//                             LOAD more
//                         </button>
//                     </div>
//                 ) : (
//                     ""
//                 )}
//             </div>
//         </div>
//     );
// };

// export default MediaSection;

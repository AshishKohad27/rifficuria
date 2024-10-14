// import React from "react";

// // Components
// import Header from "@/components/site/site-header";
// import AlbumInfo from "@/components/album/album-info";
// import Newsletter from "@/components/site/newsletter";
// import TopReviews from "@/components/reviews/top-review";
// import MoreReviews from "@/components/reviews/more-reviews";

// // Json
// import ReviewsData from "@/json/reviews.json";

// const Reviews = () => {
//   return (
//     <>
//       <Header />
//       <main className="mt-20 lg:mt-16">
//         <div className="site-container">
//           <div>
//             <AlbumInfo hideRating={false} />
//           </div>

//           <div className="grid grid-cols-10">
//             <div className="col-span-10 lg:col-span-7">
//               <div className="lg:max-w-[794px] flex flex-col-reverse md:flex-col">
//                 <TopReviews
//                   ReviewsData={ReviewsData && ReviewsData}
//                   hasQuotes={false}
//                   ReviewFor="album"
//                   showReviewResponses={true}
//                 />
//               </div>
//             </div>
//             <div className="hidden lg:block col-span-12 lg:col-span-3">
//               <div className="w-100 max-w-[216px] ml-auto">
//                 <MoreReviews
//                   ReviewsData={ReviewsData && ReviewsData}
//                   Limits={3}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="mt-[136px]">
//           <Newsletter />
//         </div>
//       </main>
//     </>
//   );
// };

// export default Reviews;
export default function Reviews() {
  return (
    <div>Reviews Page</div>
  )
}
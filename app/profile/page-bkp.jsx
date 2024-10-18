// "use client";
// import { useEffect, useState } from "react";

// // components
// import UserConnectionsDesk from "@/components/profile/user-connections-desk";
// import UserConnectionsMobile from "@/components/profile/user-connections-mob";
// import SubSectionHeading from "@/components/site/sub-section-heading";
// import TopReviews from "@/components/reviews/top-review";
// import TopRated from "@/components/profile/top-rated";
// import RatingsHistory from "@/components/profile/ratings-history";
// import Favourites from "@/components/profile/favourites";
// import MediaSection from "@/components/media/media-section";
// import Newsletter from "@/components/site/newsletter";
// import Header from "@/components/site/site-header";
// import ProfileDetails from "@/components/profile/profile-details";

// // json (local storage data or fallback if API not available)
// import UserConnectionsData from "@/json/user-connection.json";
// import ReviewsData from "@/json/reviews.json";
// import TopRatedData from "@/json/top-rated.json";
// import RatingsHistoryData from "@/json/top-rated.json";
// import ArtistData from "@/json/artist.json";

// const TABS = {
//     TOP_REVIEWS: 'top reviews',
//     PAST_REVIEWS: 'past_reviews',
//     RATINGS_HISTORY: 'ratings_history',
//     FAVOURITES: 'favourites',
// };

// const tabButtons = [
//     { label: 'Past Reviews', value: TABS.PAST_REVIEWS },
//     { label: 'Ratings History', value: TABS.RATINGS_HISTORY },
//     { label: 'Favourites', value: TABS.FAVOURITES },
// ];

// export default function Profile() {
//     const [tabs, setTabs] = useState(TABS.TOP_REVIEWS);

//     // State to store data for each tab
//     const [reviewsData, setReviewsData] = useState(null);
//     const [ratingsHistoryData, setRatingsHistoryData] = useState(null);
//     const [favouritesData, setFavouritesData] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);

//     // Helper function to simulate fetching from API/local JSON
//     const fetchData = async (key, localData, setStateFunction) => {
//         setIsLoading(true);
//         try {
//             // Check if data exists in localStorage
//             const storedData = localStorage.getItem(key);
//             if (storedData) {
//                 setStateFunction(JSON.parse(storedData));
//             } else {
//                 // Simulate API fetch or use local JSON
//                 // Replace this with actual API call in the future
//                 const data = await new Promise((resolve) =>
//                     setTimeout(() => resolve(localData), 500)
//                 );
//                 localStorage.setItem(key, JSON.stringify(data));
//                 setStateFunction(data);
//             }
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     // UseEffect to load data when the tab changes
//     useEffect(() => {
//         switch (tabs) {
//             case TABS.TOP_REVIEWS:
//                 if (!reviewsData) fetchData("top_reviews", ReviewsData, setReviewsData);
//                 break;
//             case TABS.PAST_REVIEWS:
//                 if (!reviewsData) fetchData("past_reviews", ReviewsData, setReviewsData);
//                 break;
//             case TABS.RATINGS_HISTORY:
//                 if (!ratingsHistoryData) fetchData("ratings_history", RatingsHistoryData, setRatingsHistoryData);
//                 break;
//             case TABS.FAVOURITES:
//                 if (!favouritesData) fetchData("favourites", ArtistData, setFavouritesData);
//                 break;
//             default:
//                 break;
//         }
//     }, [tabs]);

//     const handleTabs = (val) => {
//         setTabs(val);
//     };

//     const renderTabContent = () => {
//         if (isLoading) {
//             return <div>Loading...</div>;
//         }

//         switch (tabs) {
//             case TABS.PAST_REVIEWS:
//                 return (
//                     <TopReviews
//                         ReviewsData={reviewsData}
//                         hasQuotes="true"
//                         ReviewFor="profile"
//                         showReviewResponses={true}
//                         isDataAvailable={reviewsData && reviewsData.length > 0}
//                     />
//                 );
//             case TABS.RATINGS_HISTORY:
//                 return (
//                     <RatingsHistory
//                         RatingsHistoryData={ratingsHistoryData}
//                         isDataAvailable={ratingsHistoryData && ratingsHistoryData.length > 0}
//                     />
//                 );
//             case TABS.FAVOURITES:
//                 return (
//                     <>
//                         <div className="mt-22">
//                             <MediaSection
//                                 GridClass="grid-cols-3 lg:gap-x-[72px]"
//                                 Title="Favourite SONGS"
//                                 ViewMoreLink=""
//                                 ArtistData={favouritesData}
//                                 isLoadMore="true"
//                                 DesktopLimits={6}
//                                 MobileLimits={20}
//                             />
//                         </div>
//                         <div className="mt-22">
//                             <MediaSection
//                                 GridClass="grid-cols-3 lg:gap-x-[72px]"
//                                 Title="Favourite Albums"
//                                 ViewMoreLink=""
//                                 ArtistData={favouritesData}
//                                 isLoadMore="true"
//                                 DesktopLimits={6}
//                                 MobileLimits={20}
//                             />
//                         </div>
//                     </>
//                 );
//             default:
//                 return (
//                     <TopReviews
//                         ReviewsData={reviewsData}
//                         hasQuotes="true"
//                         ReviewFor="profile"
//                         showReviewResponses={true}
//                         isDataAvailable={reviewsData && reviewsData.length > 0}
//                     />
//                 );
//         }
//     };
//     return (
//         <>
//             <Header />
//             <main className="mt-20">
//                 <div className="site-container">
//                     <div className="grid grid-cols-10">
//                         <div className="col-span-10 lg:col-span-7">
//                             <div className="lg:max-w-[794px]">
//                                 <ProfileDetails />

//                                 {/* Followers and Followings in Mobile View */}
//                                 <div className="flex lg:hidden flex-col gap-11 mt-8 mb-20">
//                                     <UserConnectionsMobile
//                                         isDataAvailable={UserConnectionsData.length > 0}
//                                         connectionsTitle="followers"
//                                         UserConnectionsData={UserConnectionsData}
//                                         limit={16}
//                                         isLoadMore={true}
//                                     />
//                                     <UserConnectionsMobile
//                                         isDataAvailable={UserConnectionsData.length > 0}
//                                         connectionsTitle="followings"
//                                         UserConnectionsData={UserConnectionsData}
//                                         limit={16}
//                                         isLoadMore={true}
//                                     />
//                                 </div>

//                                 {/* Profile Tabs */}
//                                 <div className="hidden md:block mt-8.125">
//                                     <div className="bg-lavender flex justify-center items-center gap-10 p-2 rounded-lg">
//                                         {tabButtons.map((tab) => (
//                                             <button
//                                                 key={tab.value}
//                                                 onClick={() => handleTabs(tab.value)}
//                                                 className={`px-4 pt-1.875 pb-1.375 flex justify-center 
//                                                             items-center text-white text-base font-bold leading-5.5 uppercase ${tabs === tab.value ? 'active' : ''}`}
//                                             >
//                                                 {tab.label}
//                                             </button>
//                                         ))}
//                                     </div>
//                                 </div>

//                                 {/* Section of Tabs for Reviews, Ratings History, Favourites */}
//                                 <div>
//                                     <div className={`mt-16 pb-4 ${tabs === TABS.FAVOURITES ? "hidden" : ""}`}>
//                                         <SubSectionHeading SectionTitle={tabs} />
//                                     </div>
//                                     {renderTabContent()}
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-span-12 lg:col-span-3">
//                             <div className="w-100 lg:max-w-[230px] ml-auto">
//                                 {/* Followers, Following, Top Rated,Favourites */}
//                                 <div className="hidden lg:flex flex-col gap-12" >
//                                     <UserConnectionsDesk
//                                         isDataAvailable={UserConnectionsData.length > 0}
//                                         connectionsTitle="followers"
//                                         UserConnectionsData={
//                                             UserConnectionsData && UserConnectionsData
//                                         }
//                                         limit={16}
//                                     />
//                                     <UserConnectionsDesk
//                                         isDataAvailable={UserConnectionsData.length > 0}
//                                         connectionsTitle="following"
//                                         UserConnectionsData={
//                                             UserConnectionsData && UserConnectionsData
//                                         }
//                                         limit={16}
//                                     />
//                                 </div>
//                                 <div className="hidden md:block mt-22 lg:max-w-[216px]">
//                                     {(tabs === TABS.TOP_REVIEWS || tabs === TABS.PAST_REVIEWS) && (
//                                         <TopRated
//                                             title="Top Rated"
//                                             isDataAvailable={TopRatedData.length > 0}
//                                             TopRatedData={TopRatedData}
//                                         />
//                                     )}
//                                 </div>
//                                 <div className="hidden md:block mt-22">
//                                     {tabs === TABS.RATINGS_HISTORY && (
//                                         <Favourites
//                                             title="Favourites"
//                                             limit={12}
//                                             isDataAvailable={TopRatedData.length > 0}
//                                             FavouritesData={TopRatedData}
//                                         />
//                                     )}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className={`${tabs === TABS.TOP_REVIEWS ? "flex" : "hidden"} flex-col gap-20 mb:gap-22`}>
//                         <MediaSection
//                             Title="Favourite songs"
//                             ViewMoreLink="haveLink"
//                             ArtistData={ArtistData}
//                             DesktopLimits={10}
//                             MobileLimits={20}
//                         />
//                         <MediaSection
//                             Title="Favourite albums"
//                             ViewMoreLink=""
//                             ArtistData={ArtistData}
//                             DesktopLimits={3}
//                             MobileLimits={20}
//                         />
//                     </div>

//                     <div className="block md:hidden">
//                         {
//                             tabs && tabs === TABS.TOP_REVIEWS || tabs === TABS.PAST_REVIEWS ? (
//                                 <div
//                                     className={`mb-[136px] ${tabs === TABS.PAST_REVIEWS ? "mt-0" : "mt-20"} md:mt-0`}
//                                 >
//                                     <TopRated
//                                         title="Top Rated"
//                                         isDataAvailable={TopRatedData.length > 0}
//                                         TopRatedData={TopRatedData}
//                                     />
//                                 </div>
//                             ) : null
//                         }
//                     </div>
//                 </div>
//                 <div className="mt-[136px]">
//                     <Newsletter />
//                 </div>
//             </main>
//         </>
//     );
// }

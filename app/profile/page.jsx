"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import DefaultProfileImage from "@/public/profile/profile_img-1.png";
import ProfileImage from "@/public/profile/profile-image.png";

// components
import UserConnectionsDesk from "@/components/profile/user-connections-desk";
import UserConnectionsMobile from "@/components/profile/user-connections-mob";
import SubSectionHeading from "@/components/site/sub-section-heading";
import TopReviews from "@/components/reviews/top-review";
import TopRated from "@/components/profile/top-rated";
import RatingsHistory from "@/components/profile/ratings-history";
import Favourites from "@/components/profile/favourites";
import MediaSection from "@/components/media/media-section";
import Newsletter from "@/components/site/newsletter";
import Header from "@/components/site/site-header";

// json
import ProfileNumber from "@/json/profile-numbers.json";
import UserConnectionsData from "@/json/user-connection.json";
import ReviewsData from "@/json/reviews.json";
import TopRatedData from "@/json/top-rated.json";
import RatingsHistoryData from "@/json/top-rated.json";
import ArtistData from "@/json/artist.json";

export default function Profile() {
    const [tabs, setTabs] = useState("top reviews");

    useEffect(() => {
        // console.log("ReviewsData:", ReviewsData);
    }, [tabs]);

    const handleTabs = (val) => {
        setTabs(val);
    };

    return (
        <>
            <Header />
            <main className="mt-20">
                <div className="site-container">
                    <div className="">
                        <div className="grid grid-cols-10">
                            <div className="col-span-10 lg:col-span-7">
                                <div className="lg:max-w-[794px]">
                                    {/* Profile Details */}
                                    <div className="flex gap-5 md:gap-8.75 flex-col md:flex-row items-center">
                                        <div className="w-[216px] h-[216px] rounded-full">
                                            <Image
                                                src={ProfileImage || DefaultProfileImage}
                                                className="w-full h-full rounded-full object-cover"
                                                alt="Profle Image"
                                                title="Profle Image"
                                            />
                                        </div>

                                        <div className="flex-grow w-full md:w-[calc(100%-216px-35px)] flex justify-center items-start flex-col">
                                            <article className="md:gap-4 flex flex-wrap justify-center md:justify-start items-center">
                                                <h2 className="text-textColor text-2xl md:text-5xl font-bold leading-7.5 md:leading-13 capitalize">
                                                    Benjamin Tillman
                                                </h2>
                                                <article className="lg:pr-10 flex justify-center items-center flex-col md:hidden">
                                                    <p className="text-indigo text-base md:text-2.5xl leading-6 md:leading-7 font-normal mt-2.625 md:mt-3.375">
                                                        @benti
                                                    </p>
                                                    <p className="text-textColor text-sm md:text-base font-normal mt-4 md:mt-3.875 text-center md:text-left">
                                                        he/him
                                                    </p>
                                                    <p className="text-textColor text-sm md:text-base font-normal mt-4 md:mt-2.625 text-center md:text-left">
                                                        I like a lot of different music and I hope that I
                                                        can get more people to listen to some of these
                                                        albums I like so they can get more attention.
                                                    </p>
                                                </article>
                                                <button className="w-full md:w-auto mt-10 md:mt-0 px-4 py-2 bg-textColor rounded-3xl transition ease-in-out hover:bg-btn1">
                                                    <span className="text-seashell text-base font-normal capitalize">
                                                        Follow
                                                    </span>
                                                </button>
                                            </article>
                                            <article className="lg:pr-10 hidden md:flex flex-col items-start">
                                                <p className="text-indigo text-2.5xl leading-7 font-normal mt-3.375">
                                                    @benti
                                                </p>
                                                <p className="text-textColor text-base font-normal mt-3.875">
                                                    he/him
                                                </p>
                                                <p className="text-textColor text-base font-normal mt-2.625">
                                                    I like a lot of different music and I hope that I can
                                                    get more people to listen to some of these albums I
                                                    like so they can get more attention.
                                                </p>
                                            </article>
                                        </div>
                                    </div>

                                    {/* Profile Number */}
                                    <div className="w-[calc(100%+2*32px)] md:w-auto -ml-8 md:ml-0 overflow-auto sm:flex justify-center">
                                        <div className="bg-seashell w-[580px] md:w-full mt-10 md:mt-8.625 -ml-8 sm:ml-0 py-6 px-4 sm:px-8 grid grid-cols-5 rounded-2xl">
                                            {ProfileNumber &&
                                                ProfileNumber.map(({ title, number }, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex justify-center items-center flex-col md:gap-2 border-r border-indigo last:border-r-0"
                                                    >
                                                        <h5 className="text-indigo text-base md:text-2xl leading-6 md:leading-7.5 font-bold uppercase">
                                                            {number}
                                                        </h5>
                                                        <p className="text-textColor text-xs md:text-base font-normal leading-4 md:leading-5.25 capitalize">
                                                            {title}
                                                        </p>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>

                                    {/* Followers and Followings in Mobile View */}
                                    <div className="flex lg:hidden flex-col gap-11 mt-8 mb-20">
                                        <div className="">
                                            <UserConnectionsMobile
                                                isDataAvailable={UserConnectionsData.length > 0}
                                                connectionsTitle="followers"
                                                UserConnectionsData={
                                                    UserConnectionsData && UserConnectionsData
                                                }
                                                limit={16}
                                                isLoadMore={true}
                                            />
                                        </div>
                                        <div className="">
                                            <UserConnectionsMobile
                                                isDataAvailable={UserConnectionsData.length > 0}
                                                connectionsTitle="followings"
                                                UserConnectionsData={
                                                    UserConnectionsData && UserConnectionsData
                                                }
                                                limit={16}
                                                isLoadMore={true}
                                            />
                                        </div>
                                    </div>

                                    {/* Prolile Tabs */}
                                    <div className="hidden md:block mt-8.125">
                                        <div className="bg-lavender flex justify-center items-center gap-10 p-2 rounded-lg">
                                            <button
                                                onClick={() => handleTabs("past_reviews")}
                                                className="px-4 pt-1.875 pb-1.375 flex justify-center 
                                            items-center text-white text-base font-bold leading-5.5 uppercase"
                                            >
                                                past reviews
                                            </button>
                                            <button
                                                onClick={() => handleTabs("ratings_history")}
                                                className="px-4 pt-1.875 pb-1.375 flex justify-center 
                                            items-center text-white text-base font-bold leading-5.5 uppercase"
                                            >
                                                ratings history
                                            </button>
                                            <button
                                                onClick={() => handleTabs("favourites")}
                                                className="px-4 pt-1.875 pb-1.375 flex justify-center 
                                            items-center text-white text-base font-bold leading-5.5 uppercase"
                                            >
                                                favourites
                                            </button>
                                        </div>
                                    </div>

                                    {/* Section of Tabs for Reviews, Ratings History, Favourties */}
                                    <div>
                                        <div
                                            className={`mt-16 pb-4 ${tabs === "favourites" ? "hidden" : ""
                                                }`}
                                        >
                                            <SubSectionHeading SectionTitle={`${tabs && tabs}`} />
                                        </div>

                                        <div
                                            className={`${tabs === "top reviews" ? "block" : "hidden"
                                                }`}
                                        >
                                            <TopReviews
                                                ReviewsData={ReviewsData && ReviewsData}
                                                hasQuotes="true"
                                                ReviewFor="profile"
                                                showReviewResponses={true}
                                                isDataAvailable={ReviewsData && ReviewsData.length > 0}
                                            />
                                        </div>
                                        <div
                                            className={`${tabs === "past_reviews" ? "block" : "hidden"
                                                }`}
                                        >
                                            <TopReviews
                                                ReviewsData={ReviewsData && ReviewsData}
                                                hasQuotes="true"
                                                ReviewFor="profile"
                                                showReviewResponses={true}
                                                isDataAvailable={ReviewsData && ReviewsData.length > 0}
                                            />
                                        </div>
                                        <div
                                            className={`${tabs === "ratings_history" ? "block" : "hidden"
                                                }`}
                                        >
                                            <RatingsHistory
                                                RatingsHistoryData={RatingsHistoryData}
                                                isDataAvailable={RatingsHistoryData.length > 0}
                                            />
                                        </div>

                                        {tabs === "favourites" ? (
                                            <>
                                                <div className="mt-16">
                                                    <MediaSection
                                                        GridClass="grid-cols-3 lg:gap-x-[72px]"
                                                        Title="Favourite SONGS"
                                                        ViewMoreLink=""
                                                        ArtistData={ArtistData}
                                                        isLoadMore="true"
                                                        DesktopLimits={6}
                                                        MobileLimits={20}
                                                    />
                                                </div>
                                                <div className="mt-22">
                                                    <MediaSection
                                                        GridClass="grid-cols-3 lg:gap-x-[72px]"
                                                        Title="Favourite Albums"
                                                        ViewMoreLink=""
                                                        ArtistData={ArtistData}
                                                        isLoadMore="true"
                                                        DesktopLimits={6}
                                                        MobileLimits={20}
                                                    />
                                                </div>
                                            </>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-3">
                                <div className="w-100 lg:max-w-[225px] ml-auto">
                                    {/* Follower, Following, Top Rated, favourites */}
                                    <div className="hidden lg:block">
                                        <UserConnectionsDesk
                                            isDataAvailable={UserConnectionsData.length > 0}
                                            connectionsTitle="followers"
                                            UserConnectionsData={
                                                UserConnectionsData && UserConnectionsData
                                            }
                                            limit={16}
                                        />
                                    </div>
                                    <div className="hidden lg:block mt-12">
                                        <UserConnectionsDesk
                                            isDataAvailable={UserConnectionsData.length > 0}
                                            connectionsTitle="following"
                                            UserConnectionsData={
                                                UserConnectionsData && UserConnectionsData
                                            }
                                            limit={16}
                                        />
                                    </div>
                                    <div className="hidden md:block">
                                        {
                                            tabs && tabs === "top reviews" || tabs === "past_reviews" ? (
                                                <div
                                                    className="mb-[136px] md:mb-0 mt-22"
                                                >
                                                    <TopRated
                                                        title="Top Rated"
                                                        isDataAvailable={TopRatedData.length > 0}
                                                        TopRatedData={TopRatedData}
                                                    />
                                                </div>
                                            ) : null
                                        }
                                    </div>
                                    <div
                                        className={`mt-22 ${tabs === "ratings_history" ? "hidden md:block" : "hidden"
                                            }`}
                                    >
                                        <Favourites
                                            title="Favourites"
                                            limit={12}
                                            isDataAvailable={TopRatedData.length > 0}
                                            FavouritesData={TopRatedData}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${tabs === "top reviews" ? "block" : "hidden"}`}>
                        <MediaSection
                            Title="Favourite songs"
                            ViewMoreLink="haveLink"
                            ArtistData={ArtistData}
                        />
                    </div>
                    <div
                        className={`mt-20 mb:mt-22 ${tabs === "top reviews" ? "block" : "hidden"
                            }`}
                    >
                        <MediaSection
                            Title="Favourite albums"
                            ViewMoreLink=""
                            ArtistData={ArtistData}
                        />
                    </div>

                    <div className="block md:hidden">
                        {
                            tabs && tabs === "top reviews" || tabs === "past_reviews" ? (
                                <div
                                    className={`mb-[136px] ${tabs === "past_reviews" ? "mt-0" : "mt-20"} md:mt-0`}
                                >
                                    <TopRated
                                        title="Top Rated"
                                        isDataAvailable={TopRatedData.length > 0}
                                        TopRatedData={TopRatedData}
                                    />
                                </div>
                            ) : null
                        }
                    </div>
                </div>
                <div className="mt-[136px]">
                    <Newsletter />
                </div>
            </main>
        </>
    );
}

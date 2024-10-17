"use client";
import { useEffect, useState } from "react";

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
import ProfileDetails from "@/components/profile/profile-details";

// json
import UserConnectionsData from "@/json/user-connection.json";
import ReviewsData from "@/json/reviews.json";
import TopRatedData from "@/json/top-rated.json";
import RatingsHistoryData from "@/json/top-rated.json";
import ArtistData from "@/json/artist.json";

const TABS = {
    TOP_REVIEWS: "top reviews",
    PAST_REVIEWS: "past_reviews",
    RATINGS_HISTORY: "ratings_history",
    FAVOURITES: "favourites",
};

const tabButtons = [
    { label: "Past Reviews", value: TABS.PAST_REVIEWS },
    { label: "Ratings History", value: TABS.RATINGS_HISTORY },
    { label: "Favourites", value: TABS.FAVOURITES },
];

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
                                    <ProfileDetails />

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
                                            {tabButtons.map((tab) => (
                                                <button
                                                    key={tab.value}
                                                    onClick={() => handleTabs(tab.value)}
                                                    className={`px-4 pt-1.875 pb-1.375 flex justify-center 
                                                            items-center text-white text-base font-bold leading-5.5 uppercase ${tabs === tab.value
                                                            ? "active"
                                                            : ""
                                                        }`}
                                                >
                                                    {tab.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Section of Tabs for Reviews, Ratings History, Favourties */}
                                    <div>
                                        <div
                                            className={`mt-16 pb-4 ${tabs === TABS.FAVOURITES ? "hidden" : ""
                                                }`}
                                        >
                                            <SubSectionHeading SectionTitle={`${tabs && tabs}`} />
                                        </div>

                                        <div
                                            className={`${tabs === TABS.TOP_REVIEWS || tabs === TABS.PAST_REVIEWS
                                                    ? "block"
                                                    : "hidden"
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
                                            className={`${tabs === TABS.RATINGS_HISTORY ? "block" : "hidden"
                                                }`}
                                        >
                                            <RatingsHistory
                                                RatingsHistoryData={RatingsHistoryData}
                                                isDataAvailable={RatingsHistoryData.length > 0}
                                            />
                                        </div>
                                        {tabs === TABS.FAVOURITES ? (
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
                                        {(tabs && tabs === TABS.TOP_REVIEWS) ||
                                            tabs === TABS.PAST_REVIEWS ? (
                                            <div className="mb-[136px] md:mb-0 mt-22">
                                                <TopRated
                                                    title="Top Rated"
                                                    isDataAvailable={TopRatedData.length > 0}
                                                    TopRatedData={TopRatedData}
                                                />
                                            </div>
                                        ) : null}
                                    </div>
                                    <div
                                        className={`mt-22 ${tabs === TABS.RATINGS_HISTORY
                                                ? "hidden md:block"
                                                : "hidden"
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

                    <div>
                        {(tabs && tabs === TABS.TOP_REVIEWS) ||
                            tabs === TABS.PAST_REVIEWS ? (
                            <div className="flex flex-col gap-20 md:gap-22">
                                <MediaSection
                                    GridClass=""
                                    Title="Favourite songs"
                                    ViewMoreLink="haveLink"
                                    ArtistData={ArtistData}
                                    isLoadMore={false}
                                    DesktopLimits={10}
                                    MobileLimits={10}
                                />
                                <MediaSection
                                    GridClass=""
                                    Title="Favourite albums"
                                    ViewMoreLink=""
                                    ArtistData={ArtistData}
                                    isLoadMore={false}
                                    DesktopLimits={3}
                                    MobileLimits={10}
                                />
                            </div>
                        ) : null}
                    </div>

                    <div className="block md:hidden">
                        {(tabs && tabs === TABS.TOP_REVIEWS) ||
                            tabs === TABS.PAST_REVIEWS ? (
                            <div
                                className={`mb-[136px] ${tabs === TABS.PAST_REVIEWS ? "mt-0" : "mt-20"
                                    } md:mt-0`}
                            >
                                <TopRated
                                    title="Top Rated"
                                    isDataAvailable={TopRatedData.length > 0}
                                    TopRatedData={TopRatedData}
                                />
                            </div>
                        ) : null}
                    </div>
                </div>
                <div className="mt-[136px]">
                    <Newsletter />
                </div>
            </main>
        </>
    );
}

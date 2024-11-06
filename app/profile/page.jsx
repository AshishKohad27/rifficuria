"use client";
import { useEffect } from "react";

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
import ProfileDetailsSkeleton from "@/components/profile/profile-details-skeleton";
import ProfileDetails from "@/components/profile/profile-details";
import ProfileTabsButton from "@/components/profile/profile-tabs-btn";

// Redux
import { GetUser } from "@/redux/user/user-action";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

// json
import UserConnectionsData from "@/json/user-connection.json";
import ReviewsData from "@/json/reviews.json";
import TopRatedData from "@/json/top-rated.json";
import RatingsHistoryData from "@/json/top-rated.json";
import ArtistData from "@/json/artist.json";
import TABS from "@/json/profile";

export default function Profile() {
    const { profileTabs } = useAppSelector((state) => state.global);
    const { loading } = useAppSelector((store) => store.auth);
    const {
        userData,
        isUserLoading,
        // isUserError,
        // userSuccessMessage,
        // userErrorMessage
    } = useAppSelector((store) => store.user);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(GetUser());
    }, [loading]);

    useEffect(() => {
        console.log("profileTabs:", profileTabs);
    }, [profileTabs]);

    useEffect(() => {
        console.log("userData:", userData);
    }, [isUserLoading]);

    return (
        <>
            <Header />
            <main className="mt-20">
                <div className="site-container">
                    <div className="">
                        <div className="grid grid-cols-10">
                            <div className="col-span-10 lg:col-span-7">
                                <div className="lg:max-w-[794px]">
                                    {
                                        isUserLoading ?
                                            <ProfileDetailsSkeleton /> :
                                            <ProfileDetails />
                                    }

                                    {/* Followers and Followings in Mobile View */}
                                    <div className="flex lg:hidden flex-col gap-11 mt-8 mb-20">
                                        <div className="">
                                            {/* {
                                                (userData && userData?.followers?.length == 0) && (
                                                    <div className="">
                                                        <div className="py-4 pb-15 px-3 flex flex-col gap-8">
                                                            <div className="d">No followers found</div>
                                                        </div>
                                                    </div>

                                                )
                                            } */}
                                            <UserConnectionsMobile
                                                isDataAvailable={userData ? (userData?.followers?.length) : UserConnectionsData.length > 0}
                                                connectionsTitle="followers"
                                                UserConnectionsData={
                                                    userData ? (userData.followers) :
                                                        (UserConnectionsData)
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
                                        <ProfileTabsButton location="profile" />
                                    </div>

                                    {/* Section of Tabs for Reviews, Ratings History, Favourties */}
                                    <div>
                                        <div
                                            className={`mt-16 pb-4 ${profileTabs === TABS.FAVOURITES ? "hidden" : ""
                                                }`}
                                        >
                                            <SubSectionHeading SectionTitle={`${profileTabs && profileTabs}`} />
                                        </div>

                                        <div
                                            className={`${profileTabs === TABS.TOP_REVIEWS || profileTabs === TABS.PAST_REVIEWS
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
                                            className={`${profileTabs === TABS.RATINGS_HISTORY ? "block" : "hidden"
                                                }`}
                                        >
                                            <RatingsHistory
                                                RatingsHistoryData={RatingsHistoryData}
                                                isDataAvailable={RatingsHistoryData.length > 0}
                                            />
                                        </div>
                                        {profileTabs === TABS.FAVOURITES ? (
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
                                        {/* {
                                            (userData && userData?.followers?.length == 0) && (
                                                <div className="">
                                                    <div className="py-4 pb-15 px-3 flex flex-col gap-8">
                                                        <div className="d">No followers found</div>
                                                    </div>
                                                </div>

                                            )
                                        } */}
                                        <UserConnectionsDesk
                                            isDataAvailable={userData ? userData?.followers?.length : UserConnectionsData.length > 0}
                                            connectionsTitle="followers"
                                            UserConnectionsData={userData ? userData.followers :
                                                UserConnectionsData
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
                                        {(profileTabs && profileTabs === TABS.TOP_REVIEWS) ||
                                            profileTabs === TABS.PAST_REVIEWS ? (
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
                                        className={`mt-22 ${profileTabs === TABS.RATINGS_HISTORY
                                            ? "hidden lg:block"
                                            : "hidden"
                                            }`}
                                    >
                                        <Favourites
                                            title="Favourites"
                                            limit={12}
                                            isDataAvailable={ArtistData.length > 0}
                                            FavouritesData={ArtistData}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        {(profileTabs && profileTabs === TABS.TOP_REVIEWS) ||
                            profileTabs === TABS.PAST_REVIEWS ? (
                            <div className="flex flex-col gap-20 md:gap-22">
                                <MediaSection
                                    GridClass=""
                                    Title="Favourite songs"
                                    ViewMoreLink="haveLink"
                                    ArtistData={userData?(userData?.tracks??[]):ArtistData}
                                    isLoadMore={false}
                                    DesktopLimits={10}
                                    MobileLimits={10}
                                />
                                {
                                    (userData && userData?.followers?.length == 0) && (
                                        <div className="">
                                            <div className=" pb-15 px-3 flex flex-col gap-8">
                                                <div className="d">No Favourite Songs found</div>
                                            </div>
                                        </div>

                                    )
                                }
                                <MediaSection
                                    GridClass=""
                                    Title="Favourite albums"
                                    ViewMoreLink=""
                                    ArtistData={userData?(userData?.albums??[]):ArtistData}
                                    isLoadMore={false}
                                    DesktopLimits={3}
                                    MobileLimits={10}
                                />

{
                                    (userData && userData?.followers?.length == 0) && (
                                        <div className="">
                                            <div className=" px-3 flex flex-col gap-8">
                                                <div className="d">No Favourite Albums found</div>
                                            </div>
                                        </div>

                                    )
                                }
                            </div>
                        ) : null}
                    </div>

                    <div className="block md:hidden">
                        {(profileTabs && profileTabs === TABS.TOP_REVIEWS) ||
                            profileTabs === TABS.PAST_REVIEWS ? (
                            <div
                                className={`mb-[136px] ${profileTabs === TABS.PAST_REVIEWS ? "mt-0" : "mt-20"
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

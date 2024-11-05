"use client";
import { useEffect, useState } from "react";

// components
import TopReviews from "@/components/reviews/top-review";
import MediaSection from "@/components/media/media-section";
import Newsletter from "@/components/site/newsletter";
import MediaInfo from "@/components/media/media-info";
import Dropdown from "@/components/site/dropdown";
import Header from "@/components/site/site-header";

// json
// import ReviewsData from "@/json/reviews.json";
// import ArtistData from "@/json/artist.json";
import DropDownListItem from "@/json/dropdown-listitem.json";

// Context
import { useVisibility } from '@/context/artist-visibility-reducer';
import { useParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { GetTrackProfile } from "@/redux/track/track-action";
import MediaInfoSkeleton from "@/components/media/media-info-skeleton";

export default function Songs() {

    const { state } = useVisibility();
    const [generFilter, setGenerFilter] = useState(DropDownListItem ? DropDownListItem["genre"] : []);
    const {
        trackData,
        isTrackDataLoading,
        // isTrackDataError,
        // trackDataSuccessMessage,
    } = useAppSelector((store) => store.track);

    const params = useParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (params.id) {
            dispatch(GetTrackProfile({ trackId: params.id }));
        }
        // console.log("generFilter:", generFilter);
    }, [generFilter, params]);

    useEffect(() => {
        // console.log("generFilter:", generFilter);
    }, [generFilter]);

    const handleGetSelectedItems = (dropDownItems, type) => {
        if (type === "genre") {
            setGenerFilter(dropDownItems);
        }
    };

    // console.log("trackData",trackData)

    return (
        <>
            <Header />
            <main className="mt-20 lg:mt-16">
                <div className="site-container">
                    <div>
                        {
                            isTrackDataLoading
                                ? <MediaInfoSkeleton hideRating={true} /> :
                                <MediaInfo  mediaData={trackData} hideRating={true} mediaInfoFor="songs" />
                        }
                        {/* <MediaInfo mediaType="songs" mediaData={trackData} hideRating={true} mediaInfoFor="songs" /> */}
                    </div>

                    {state && state.isComponentVisible ? (
                        <>
                            <div className="grid grid-cols-10">
                                <div className="col-span-10 lg:col-span-7">
                                    <div className="lg:max-w-[794px] flex flex-col-reverse md:flex-col">
                                        <div>
                                            <div className="pb-4 flex justify-between items-center">
                                                <p className="text-textColor text-[16px] sm:text-2xl font-semibold">
                                                    TOP REVIEWS
                                                </p>
                                                <div className="hidden sm:inline-block">
                                                    <Dropdown
                                                        Title="filter"
                                                        Variant="Outline"
                                                        DropDownId="GenreId"
                                                        DropDownListItem={
                                                            DropDownListItem && DropDownListItem["genre"]
                                                        }
                                                        getSelectedItems={(items) =>
                                                            handleGetSelectedItems(items, "genre")
                                                        }
                                                    />
                                                </div>
                                                <p className="text-textColor text-xs underline inline-block sm:hidden">
                                                    View latest reviews
                                                </p>
                                            </div>

                                            <div className="">
                                            {
                                                ((trackData) && trackData?.reviews?.length == 0) ? (
                                                    <div className="">
                                                        <div className="py-4 pb-15 px-3 flex flex-col gap-8">
                                                            <div className="d">No Reviews found</div>
                                                        </div>
                                                    </div>

                                                ):(
                                                    <div className="">
                                                        <div className="py-4 pb-15 px-3 flex flex-col gap-8">
                                                            <div className="d">No Reviews found</div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                                <TopReviews
                                                    ReviewsData={((trackData ?? null) && trackData?.reviews) ?? []}
                                                    hasQuotes="false"
                                                    ReviewFor="album"
                                                    showReviewResponses={true}
                                                    isDataAvailable={(trackData ?? null) && (trackData?.reviews ?? []).length > 0}
                                                />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-20 mb:gap-22">

                            <MediaSection
                                MediaType="artists"
                                ArtistData={trackData?.artists}
                                ViewMoreLink="havelink"
                                Title={trackData?.name ? "Artists" : "songs by billie eilish"}
                                GridClass=""
                                DesktopLimits={10}
                                MobileLimits={10}
                                isLoadMore={false}
                            />
                                {/* <MediaSection
                                    MediaType="songs"
                                    ArtistData={ArtistData}
                                    ViewMoreLink="havelink"
                                    Title="songs by billie eilish"
                                    GridClass=""
                                    DesktopLimits={10}
                                    MobileLimits={10}
                                    isLoadMore={false}
                                />
                                <MediaSection
                                    MediaType="albums"
                                    ArtistData={ArtistData}
                                    ViewMoreLink=""
                                    Title="albums by billie eilish"
                                    GridClass=""
                                    DesktopLimits={3}
                                    MobileLimits={3}
                                    isLoadMore={false}
                                /> */}
                            </div>
                        </>
                    ) : null}

                </div>
                <div className="mt-[136px]">
                    <Newsletter />
                </div>
            </main>
        </>
    );
}
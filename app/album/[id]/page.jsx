"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

// components
import TopReviews from "@/components/album/top-review";
import MediaSection from "@/components/media/media-section";
import Newsletter from "@/components/site/newsletter";
import MediaInfo from "@/components/media/media-info";
import MediaInfoSkeleton from "@/components/media/media-info-skeleton";
import Dropdown from "@/components/site/dropdown";
import Header from "@/components/site/site-header";
import AlbumTrackList from "@/components/album/album-track-list";

// Context
import { useVisibility } from "@/context/artist-visibility-reducer";

// Redux
import { GetAlbum } from "@/redux/album/album-action";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

// json
import ReviewsData from "@/json/reviews.json";
// import ArtistData from "@/json/artist.json";
import DropDownListItem from "@/json/dropdown-listitem.json";
// import AlbumTrackListData from "@/json/album-track-list.json";

export default function Album() {
    const { state } = useVisibility();
    const [generFilter, setGenerFilter] = useState(DropDownListItem ? DropDownListItem["genre"] : []);

    const {
        albumData,
        isAlbumLoading,
        // isAlbumError,
        // albumSuccessMessage,
        // albumErrorMessage,
    } = useAppSelector((store) => store.album);

    const params = useParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (params.id) {
            dispatch(GetAlbum({ albumId: params.id }));
        }
        // console.log("generFilter:", generFilter);
    }, [generFilter, params]);

    useEffect(() => {
        console.log({
            albumData,
        });
    }, [isAlbumLoading])

    const handleGetSelectedItems = (dropDownItems, type) => {
        if (type === "genre") {
            setGenerFilter(dropDownItems);
        }
    };
    return (
        <>
            <Header />
            <main className="mt-20 lg:mt-16">
                <div className="site-container">
                    <div>
                        {
                            isAlbumLoading
                                ? <MediaInfoSkeleton hideRating={true} /> :
                                <MediaInfo  mediaData={albumData} hideRating={true} mediaInfoFor="albums" />
                        }
                    </div>

                    <div className="grid grid-cols-10">
                        <div className="col-span-10 lg:col-span-7">
                            <div className="lg:max-w-[794px] flex flex-col-reverse md:flex-col">
                                {state && state.isComponentVisible ? (
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
                                                (albumData ?? null) && albumData?.reviews?.length == 0 && (
                                                    <div className="">
                                                        <div className="py-4 pb-15 px-3 flex flex-col gap-8">
                                                            <div className="d">No Reviews found</div>
                                                        </div>
                                                    </div>

                                                )
                                            }
                                            <TopReviews
                                                ReviewsData={albumData? (albumData?.reviews?? []):ReviewsData}
                                                hasQuotes="true"
                                                ReviewFor="artist"
                                                showReviewResponses={true}
                                                isDataAvailable={(albumData ?? null) && (albumData?.reviews ?? []).length > 0}
                                            />
                                        </div>
                                    </div>
                                ) : null}

                                <div className="w-full">
                                    <AlbumTrackList
                                        Title="Album Track List"
                                        AlbumTrackListData={
                                            albumData && albumData.tracks
                                        }
                                        Limit={10}
                                        isDataAvailable={
                                            albumData && albumData?.tracks?.length
                                        }
                                    />
                                    {/* <AlbumTrackList
                                        Title="Album Track List"
                                        AlbumTrackListData={
                                            AlbumTrackListData && AlbumTrackListData
                                        }
                                        Limit={10}
                                        isDataAvailable={
                                            AlbumTrackListData && AlbumTrackListData.length
                                        }
                                    /> */}

                                </div>
                            </div>
                        </div>
                    </div>

                    {state && state.isComponentVisible ? (
                        <div className="flex flex-col gap-20 mb:gap-22">
                            {/* <MediaSection
                                MediaType="songs"
                                ArtistData={albumData?.tracks}
                                ViewMoreLink="havelink"
                                Title={albumData?.name ? "Songs by " + albumData.name : "songs by billie eilish"}
                                GridClass=""
                                DesktopLimits={10}
                                MobileLimits={10}
                                isLoadMore={false}
                            /> */}

                            <MediaSection
                                MediaType="artists"
                                ArtistData={albumData?.artists}
                                ViewMoreLink="havelink"
                                Title={albumData?.name ? "Artists" : "songs by billie eilish"}
                                GridClass=""
                                DesktopLimits={10}
                                MobileLimits={10}
                                isLoadMore={false}
                            />
                            {/* <MediaSection
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
                    ) : null}
                </div>
                <div className="mt-[136px]">
                    <Newsletter />
                </div>
            </main>
        </>
    );
}

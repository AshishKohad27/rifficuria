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
import ReviewsData from "@/json/reviews.json";
import ArtistData from "@/json/artist.json";
import DropDownListItem from "@/json/dropdown-listitem.json";

// Context
import { useVisibility } from '@/context/artist-visibility-reducer';

export default function Songs() {
    const { state } = useVisibility();
    const [generFilter, setGenerFilter] = useState(DropDownListItem ? DropDownListItem["genre"] : []);

    useEffect(() => {
        console.log("generFilter:", generFilter);
      }, [generFilter]);

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
                        <MediaInfo hideRating={true} mediaInfoFor="songs" />
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
                                                <TopReviews
                                                    ReviewsData={ReviewsData && ReviewsData}
                                                    hasQuotes="false"
                                                    ReviewFor="album"
                                                    showReviewResponses={true}
                                                    isDataAvailable={ReviewsData && ReviewsData.length > 0}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-20 mb:gap-22">
                                <MediaSection
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
                                />
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
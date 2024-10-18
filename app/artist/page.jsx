"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import ArtistBanner from "@/public/artist/artist-cover.png";

// components
import TopReviews from "@/components/reviews/top-review";
import MediaSection from "@/components/media/media-section";
import Newsletter from "@/components/site/newsletter";
import ArtisInfo from "@/components/artist/artist-info";
import Dropdown from "@/components/site/dropdown";
import Header from "@/components/site/site-header";

// Context
import { useVisibility } from '@/context/artist-visibility-reducer';

// json
import ReviewsData from "@/json/reviews.json";
import ArtistData from "@/json/artist.json";
import DropDownListItem from "@/json/dropdown-listitem.json";

export default function Artist() {
  const { state } = useVisibility();
  const [generFilter, setGenerFilter] = useState(DropDownListItem ? DropDownListItem["genre"] : []);

  useEffect(() => {
    // console.log("generFilter:", generFilter);
  }, [generFilter]);

  const handleGetSelectedItems = (dropDownItems, type) => {
    if (type === "genre") {
      setGenerFilter(dropDownItems);
    }
  };

  return (
    <>
      <Header />
      <main className="mt-15.5">
        <div className="h-[456px]">
          <Image src={ArtistBanner} alt="ArtistBanner" className="w-full h-full object-cover" />
        </div>
        <div className="site-container">
          <div>
            <ArtisInfo />
          </div>

          {
            state && state.isComponentVisible ? (
              <>
                <div className="grid grid-cols-10">
                  <div className="col-span-10 lg:col-span-7">
                    <div className="lg:max-w-[794px]">

                      <div className="pb-2 md:pb-4 flex justify-between items-center">
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
                          hasQuotes="true"
                          ReviewFor="artist"
                          showReviewResponses={true}
                          isDataAvailable={ReviewsData && ReviewsData.length > 0}
                        />
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
            ) : null
          }


        </div>
        <div className={`${state && state.isComponentVisible ? "mt-[136px]" : ""}`}>
          <Newsletter />
        </div>
      </main>
    </>
  );
}
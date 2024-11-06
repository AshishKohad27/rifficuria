"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import ArtistBanner from "@/public/artist/artist-cover.png";

// components
import TopReviews from "@/components/artist/top-review";
import MediaSection from "@/components/media/media-section";
import Newsletter from "@/components/site/newsletter";
import ArtisInfo from "@/components/artist/artist-info";
import Dropdown from "@/components/site/dropdown";
import Header from "@/components/site/site-header";

// Context
import { useVisibility } from "@/context/artist-visibility-reducer";

// Redux
import { GetArtistProfile } from "@/redux/artist/artist-action";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

// json
// import ReviewsData from "@/json/reviews.json";
// import ArtistData from "@/json/artist.json";
import DropDownListItem from "@/json/dropdown-listitem.json";

export default function Artist() {
  const { state } = useVisibility();
  const [generFilter, setGenerFilter] = useState(
    DropDownListItem ? DropDownListItem["genre"] : []
  );

  const {
    artistProfileData,
    isArtistProfileLoading,
    // isArtistProfileError,
    // artistProfileSuccessMessage,
    // artistProfileErrorMessage,
  } = useAppSelector((store) => store.artist);

  const params = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (params.id) {
      dispatch(GetArtistProfile({ artistId: params.id }));
    }
    // console.log("generFilter:", generFilter);
  }, [generFilter, params]);

  useEffect(() => {
    console.log({
      artistProfileData,
    });
  }, [isArtistProfileLoading])

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
          {
            artistProfileData?.cover_pic_url ? (
              <img
                src={artistProfileData?.cover_pic_url}
                alt="ArtistBanner"
                className="w-full h-full object-cover"
              />
            ) : (

              <Image
                src={ArtistBanner}
                alt="ArtistBanner"
                className="w-full h-full object-cover"
              />
            )
          }
        </div>
        <div className="site-container">
          <div>
            <ArtisInfo />
          </div>

          {state && state.isComponentVisible ? (
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
                      {
                        (artistProfileData ?? null) && artistProfileData?.reviews?.length == 0 && (
                          <div className="">
                            <div className="py-4 pb-15 px-3 flex flex-col gap-8">
                              <div className="d">No Reviews found</div>
                            </div>
                          </div>

                        )
                      }

                      <TopReviews
                        ReviewsData={((artistProfileData ?? null) && artistProfileData?.reviews) ?? []}
                        hasQuotes="true"
                        ReviewFor="artist"
                        showReviewResponses={true}
                        isDataAvailable={(artistProfileData ?? null) && (artistProfileData?.reviews ?? []).length > 0}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-20 mb:gap-22">
                <MediaSection
                  MediaType="songs"
                  ArtistData={artistProfileData && artistProfileData?.tracks}
                  ViewMoreLink="havelink"
                  Title={artistProfileData? "Songs by "+artistProfileData.name:"songs by billie eilish"}
                  GridClass=""
                  DesktopLimits={10}
                  MobileLimits={10}
                  isLoadMore={false}
                />
                <MediaSection
                  MediaType="albums"
                  ArtistData={artistProfileData && artistProfileData?.albums}
                  ViewMoreLink=""
                  Title={artistProfileData? "Albums by "+artistProfileData.name:"songs by billie eilish"}
                  GridClass=""
                  DesktopLimits={5}
                  MobileLimits={5}
                  isLoadMore={false}
                />
              </div>
            </>
          ) : null}
        </div>
        <div
          className={`${state && state.isComponentVisible ? "mt-[136px]" : ""}`}
        >
          <Newsletter />
        </div>
      </main>
    </>
  );
}

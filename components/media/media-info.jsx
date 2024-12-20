"use client";
import React from "react";
import Image from "next/image";
import AlbumBanner from "@/public/review/reviewhero.png";
import SongBanner from "@/public/artist/cardimg1.png";
// import ArtistProfile from "@/public/review/reviewheroavtar.png";
import ArtistPhoto from "@/public/artist/ArtistPhoto.png";

// Components
import Login from "@/components/site/authentication/login";
import WriteReviewForAlbum from "@/components/album/write-review-for-album";

// Context
import { useVisibility } from "@/context/artist-visibility-reducer";

// Redux
import { useAppSelector } from "@/redux/hooks";
import moment from "moment";

const MediaInfo = ({ mediaData, hideRating, mediaInfoFor }) => {
    const { isAuth, loading } = useAppSelector((state) => state.auth);
    const { state } = useVisibility();

   


    const ArtistInfoData = {
        BannerImage: mediaInfoFor === "songs" ? SongBanner : AlbumBanner,
        artist: {
            name: "Billie Eilish",
            photo: ArtistPhoto,
            description:
                "With the release of her highly anticipated sophomore album Happier Than Ever, the 21-year-old Los Angeles native remains one of the biggest stars to emerge in the 21st century. Since the release of her debut single 'ocean eyes' in 2015, Eilish continues to shatter the ceiling of music with her genre-defying sound. Fast forward from her humble breakout, her album WHEN WE ALL FALL ASLEEP, WHERE DO WE GO? debuted at No. 1 on the Billboard 200 in the U.S. as well as 17 additional countries around the world upon release in 2019, and was the most streamed album of that year.",
            artistRatings: [
                { value: "4521", label: "Total Ratings" },
                { value: "4.5/5", label: "Avg. Ratings" },
                { value: "956", label: "Reviews" },
            ],
        },
        cta: {
            signInText: "Sign in to rate and review",
            readMoreText: "Read more",
        },
    };


    return (
        <div className="flex flex-col gap-8 md:gap-22">
            <div className="flex gap-6 md:gap-8 flex-col lg:flex-row">
                <div className="hidden lg:flex justify-center items-center w-full lg:max-w-[448px] aspect-square rounded-2xl">
                    {
                        mediaInfoFor === 'albums' ? (
                            mediaData?.cover_pic_url ? (
                                <img
                                    src={mediaData.cover_pic_url}
                                    alt="Album Banner"
                                    className="w-full h-full rounded-2xl"
                                />
                            ) : (
                                <Image
                                    src={ArtistInfoData.BannerImage}
                                    alt="Album Banner"
                                    className="w-full h-full rounded-2xl"
                                />
                            )
                        ) : null // Use null instead of an empty string for better readability
                    }

                    {
                        mediaInfoFor === 'songs' ? (
                            mediaData?.track_img_url ? (
                                <img
                                    src={mediaData.track_img_url}
                                    alt="Album Banner"
                                    className="w-full h-full rounded-2xl"
                                />
                            ) : (
                                <Image
                                    src={ArtistInfoData.BannerImage}
                                    alt="Album Banner"
                                    className="w-full h-full rounded-2xl"
                                />
                            )
                        ) : null // Use null instead of an empty string for better readability
                    }

                    
                </div>

                <div className="lg:w-[calc(100%-448px-32px)]">
                    <div className="flex items-center gap-4 md:gap-3">
                        <div className="w-8 md:w-12.5 h-8 md:h-12.5 rounded-full">
                            {/* <Image
                                src={ArtistProfile}
                                alt="Artist Profile"
                                className="w-full h-full rounded-full"
                            /> */}
                        </div>
                        <p className="text-textColor text-base md:text-2xl font-bold leading-5.5 md:leading-8 uppercase">
                            {
                                mediaData && mediaData?.artists?.map((item, index) => {
                                    return item.name + (index < mediaData?.artists?.length - 1 ? ", " : "");
                                }).join('')
                            }
                            {/* billie eilish */}
                        </p>
                    </div>
                    <div className="mt-2 md:mt-4">
                        <h2 className="text-textColor text-2xl md:text-5xl font-bold leading-7.5 md:leading-13 capitalize">
                            {mediaData?.name ?? "Name"}
                        </h2>
                        {mediaInfoFor && mediaInfoFor === "songs" ? (
                            <h2 className="text-indigo text-base md:text-2xl font-bold leading-5.5 md:leading-7.5 uppercase mt-2 md:mt-4">
                                {/* From The Motion Picture &quot;Barbie&quot; */}
                            </h2>
                        ) : null}
                    </div>
                    <div className="mt-8 flex lg:hidden justify-center items-center w-full lg:max-w-[448px] aspect-square rounded-2xl">
                        <Image
                            src={ArtistInfoData['BannerImage']}
                            alt="Album Banner"
                            className="w-full h-full rounded-2xl"
                        />
                    </div>
                    <div className="mt-8 md:mt-4 text-textColor text-base font-normal flex flex-col gap-2 md:gap-0.75">
                        {mediaInfoFor && mediaInfoFor === "album" || mediaInfoFor === "review" ? (
                            <p className="">{mediaData?.tracks?.length ?? 0} Tracks</p>
                        ) : null}
                        <div className="flex gap-1">
                            <p className="font-semibold">Release Date :</p>
                            <p className="font-normal"> {mediaData?.release_date ? (moment(mediaData?.release_date).format('MMMM Do YYYY')) : "NA"}</p>
                        </div>
                        <div className="flex gap-1">
                            <p className="font-semibold">Format :</p>
                            <p className="font-normal">{mediaData?.format}</p>
                        </div>
                        <div className="flex gap-1">
                            <p className="font-semibold">Genre :</p>
                            <p className="font-normal">
                                {/* {
                                albumData && albumData?.genres.map((item, index) => {
                                    return item.name + (index < albumData.length - 1 ? ", " : "");
                                }).join('')
                            } */}
                                genre
                            </p>
                        </div>

                        <div className="flex gap-1">
                            <p className="font-semibold">Duration : </p>
                            <p className="font-normal">{mediaData?.duration}</p>
                        </div>
                    </div>
                    <div className="mt-7 md:mt-6">
                        <p className="text-textColor text-base font-normal">
                            {mediaData?.description ? (mediaData?.description) : (
                                "NA"
                            )
                            }
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-10">
                <div className={`col-span-10 lg:col-span-7 ${state && state.isComponentVisible ? "mb-22" : ""}`}>
                    {hideRating ? (
                        <div className="col-span-12 lg:col-span-3 flex lg:hidden items-end justify-end -ml-8 lg:ml-0 w-[calc(100%+2*32px)] lg:w-full">
                            <div className="overflow-auto w-full lg:max-w-[248px]">
                                <ul className="w-[500px] lg:w-full mx-auto lg:ml-auto mb-10 lg:mb-7.5 bg-seashell md:rounded-2xl px-4 py-6 lg:py-8 flex lg:flex-col justify-center items-center lg:gap-[23px]">


                                    {ArtistInfoData.artist.artistRatings.map(
                                        ({ value, label }, index) => (
                                            <li
                                                key={index}
                                                className="px-7.5 lg:px-0 lg:pb-4 w-auto lg:max-w-[104px] flex flex-col justify-center items-center lg:gap-4 border-r lg:border-r-0 lg:border-b last:border-b-0 last:border-r-0 last:pb-0 border-indigo"
                                            >
                                                <h4 className="text-indigo text-2xl font-bold leading-7.5">
                                                    {value}
                                                </h4>
                                                <p className="text-textColor text-base font-normal capitalize">
                                                    {label}
                                                </p>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>
                    ) : null}

                    <div className="lg:max-w-[800px]">
                        <div>
                            {
                                !loading && isAuth ? (
                                    <WriteReviewForAlbum
                                        ReviewFor="album"
                                        Title="WRITE A REVIEW"
                                        ButtonClass="w-full text-seashell bg-indigo uppercase"
                                    />) : (
                                    <Login
                                        Title="Sign in to rate and review"
                                        ButtonClass="w-full bg-lavender text-[#FBF0EC80]"
                                    />
                                )}
                        </div>
                    </div>
                </div>
                {hideRating ? (
                    <div className="col-span-12 lg:col-span-3 hidden lg:flex items-end justify-end -ml-8 lg:ml-0 w-[calc(100%+2*32px)] lg:w-full relative">
                        <div className="overflow-auto w-full lg:max-w-[248px] md:absolute top-0">
                            <ul className="w-[458px] lg:w-full mx-auto lg:ml-auto mb-10 lg:mb-7.5 bg-seashell rounded-2xl px-4 py-6 lg:py-8 flex lg:flex-col justify-center items-center lg:gap-[23px]">

                                <li
                                    className="px-7.5 lg:px-0 lg:pb-4 w-auto lg:max-w-[104px] flex flex-col justify-center items-center lg:gap-4 border-r lg:border-r-0 lg:border-b last:border-b-0 last:border-r-0 last:pb-0 border-indigo"
                                >
                                    <h4 className="text-indigo text-2xl font-bold leading-7.5">
                                        {mediaData?.total_ratings ?? 0}
                                    </h4>
                                    <p className="text-textColor text-base font-normal capitalize">
                                        Total Ratings
                                    </p>
                                </li>

                                <li
                                    className="px-7.5 lg:px-0 lg:pb-4 w-auto lg:max-w-[104px] flex flex-col justify-center items-center lg:gap-4 border-r lg:border-r-0 lg:border-b last:border-b-0 last:border-r-0 last:pb-0 border-indigo"
                                >
                                    <h4 className="text-indigo text-2xl font-bold leading-7.5">
                                        {mediaData?.avg_ratings ?? 0}

                                    </h4>
                                    <p className="text-textColor text-base font-normal capitalize">
                                        Avg. Ratings
                                    </p>
                                </li>

                                <li
                                    className="px-7.5 lg:px-0 lg:pb-4 w-auto lg:max-w-[104px] flex flex-col justify-center items-center lg:gap-4 border-r lg:border-r-0 lg:border-b last:border-b-0 last:border-r-0 last:pb-0 border-indigo"
                                >
                                    <h4 className="text-indigo text-2xl font-bold leading-7.5">
                                        {mediaData?.total_reviews ?? 0}

                                    </h4>
                                    <p className="text-textColor text-base font-normal capitalize">
                                        Reviews
                                    </p>
                                </li>
                                {/* {ArtistInfoData.artist.artistRatings.map(
                                    ({ value, label }, index) => (
                                        <li
                                            key={index}
                                            className="px-7.5 lg:px-0 lg:pb-4 w-auto lg:max-w-[104px] flex flex-col justify-center items-center lg:gap-4 border-r lg:border-r-0 lg:border-b last:border-b-0 last:border-r-0 last:pb-0 border-indigo"
                                        >
                                            <h4 className="text-indigo text-2xl font-bold leading-7.5">
                                                {value}
                                            </h4>
                                            <p className="text-textColor text-base font-normal capitalize">
                                                {label}
                                            </p>
                                        </li>
                                    )
                                )} */}
                            </ul>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default MediaInfo;

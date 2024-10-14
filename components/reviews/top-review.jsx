"use client";
import React, { useState } from "react";
import reviewsmodal from "@/public/artist/Mask group.png";
import star from "@/public/artist/Star.png";
import Image from "next/image";
import { MdOutlineIosShare } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { TbMessageCircleFilled } from "react-icons/tb";
import { IoFlag } from "react-icons/io5";
import Commentbox from "@/components/commentbox";

const TopReviews = ({
    ReviewsData,
    hasQuotes,
    ReviewFor,
    showReviewResponses,
    isDataAvailable,
}) => {
    // State to control the number of reviews shown
    const [visibleReviews, setVisibleReviews] = useState(4);

    // Handler to load more reviews
    const loadMore = () => {
        setVisibleReviews((prev) => prev + 4);
    };

    return isDataAvailable ? (
        <div className="">
            <div className="py-4 flex flex-col gap-8">
                {ReviewsData &&
                    ReviewsData.slice(0, visibleReviews).map((item, index) => (
                        <div key={index} className="border-b border-indigo last:border-b-0">
                            <div className="flex flex-col gap-6">
                                {/* Quotes */}
                                <div className={`${hasQuotes === "false" ? "hidden" : ""}`}>
                                    <p className="text-textColor text-base font-bold leading-5.5 capitalize">
                                        {item?.quote}
                                    </p>
                                    <p className="text-textColor text-sm font-normal leading-4.5 capitalize">
                                        {item?.quoteMessage}
                                    </p>
                                </div>
                                {ReviewFor === "album" ? (
                                    <div className="flex my-0 gap-4">
                                        <div className="flex-grow">
                                            <p className="text-textColor text-xs font-normal">
                                                {item.date}
                                            </p>
                                            <div className="w-10 h-10 rounded-full mt-2">
                                                <Image
                                                    className="w-full h-full rounded-full"
                                                    src={reviewsmodal}
                                                    alt="reviewmodal"
                                                />
                                            </div>
                                            <p className="text-textColor text-base font-normal mt-2">
                                                Reviewed by{" "}
                                                <span className="text-indigo">{item.authorname}</span>
                                            </p>
                                            <div className="flex gap-1.25 mt-3">
                                                <Image src={star} alt="star"></Image>
                                                <Image src={star} alt="star"></Image>
                                                <Image src={star} alt="star"></Image>
                                                <Image src={star} alt="star"></Image>
                                                <Image src={star} alt="star"></Image>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex my-0 gap-4">
                                        <div className="w-16 h-16  rounded-lg">
                                            <Image
                                                className="w-full h-full rounded-lg"
                                                src={reviewsmodal}
                                                alt="reviewmodal"
                                            />
                                        </div>
                                        <div className="flex-grow">
                                            <p className="text-textColor text-xs font-normal">
                                                {item.date}
                                            </p>
                                            <p
                                                className={`text-textColor text-base font-normal ${hasQuotes === "false" ? "hidden" : ""
                                                    }`}
                                            >
                                                Reviewed by{" "}
                                                <span className="text-indigo">{item.authorname}</span>
                                            </p>
                                            <p
                                                className={`text-textColor text-base font-bold capitalize ${hasQuotes === "true" ? "hidden" : ""
                                                    }`}
                                            >
                                                {item?.quote}
                                            </p>

                                            <div className="flex gap-1.25 mt-2">
                                                <Image src={star} alt="star"></Image>
                                                <Image src={star} alt="star"></Image>
                                                <Image src={star} alt="star"></Image>
                                                <Image src={star} alt="star"></Image>
                                                <Image src={star} alt="star"></Image>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="flex flex-col gap-5">
                                    <p className="text-textColor text-base font-normal">
                                        {item.specialmsg}
                                    </p>
                                    <p className="text-textColor text-base font-normal">
                                        {item.message}
                                    </p>
                                </div>

                                <div className="flex gap-2.5 mb-6">
                                    <div>
                                        <MdOutlineIosShare className="w-[18px] h-[18px]" />
                                    </div>
                                    <div className="flex justify-center items-center gap-0.5">
                                        <IoMdHeart className="w-[18px] h-[18px]" />
                                        <p className="text-xs text-textColor">{item.likecount}</p>
                                    </div>
                                    <div className="flex justify-center items-center gap-0.5">
                                        <TbMessageCircleFilled className="w-[18px] h-[18px]" />
                                        <p className="text-xs text-textColor">{item.msgcount}</p>
                                    </div>
                                    <div>
                                        <IoFlag className="w-[18px] h-[18px]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            {showReviewResponses ? <Commentbox /> : ""}

            <div className="py-4 flex flex-col gap-8 my-[88px]">
                {visibleReviews < ReviewsData.length && (
                    <button
                        onClick={loadMore}
                        className="px-4 py-2 w-full rounded-3xl border-2 border-aquamarine text-aquamarine text-base font-bold leading-5.5 uppercase"
                    >
                        LOAD more
                    </button>
                )}
            </div>
        </div>
    ) : null;
};

export default TopReviews;

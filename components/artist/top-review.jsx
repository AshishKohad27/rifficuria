"use client";
import React, { useState } from "react";
import reviewsmodal from "@/public/artist/Mask group.png";
import star from "@/public/artist/Star.png";
import Image from "next/image";
import { MdOutlineIosShare } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { TbMessageCircleFilled } from "react-icons/tb";
import { IoFlag } from "react-icons/io5";
import SubSectionHeading from "@/components/site/sub-section-heading";
import { useAppSelector } from "@/redux/hooks";
import moment from 'moment';


const TopReviews = ({
    ReviewsData,
    hasQuotes,
    ReviewFor,
    showReviewResponses,
    isDataAvailable,
}) => {
    const [visibleReviews, setVisibleReviews] = useState(4);
    const [commentBoxes, setCommentBoxes] = useState({}); // Track comment box visibility
    const [comments, setComments] = useState({}); // Track comments for each review
    const [newComment, setNewComment] = useState(""); // Store new comment input

    const {
        artistProfileData,
        // isArtistProfileLoading,
        // isArtistProfileError,
        // artistProfileSuccessMessage,
        // artistProfileErrorMessage,
      } = useAppSelector((store) => store.artist);

    // Handler to load more reviews
    const loadMore = () => {
        setVisibleReviews((prev) => prev + 4);
    };

    const handelSubCommentBox = (index) => {
        setCommentBoxes((prev) => ({
            ...prev,
            [index]: !prev[index], // Toggle comment box visibility
        }));
    };

    // console.log("ReviewsData",artistProfileData?.reviews)

    // Handler for submitting a new comment
    const handleSubmitComment = (index) => {
        if (newComment.trim() === "") return; // Prevent empty comments

        setComments((prev) => ({
            ...prev,
            [index]: [...(prev[index] || []), newComment], // Add new comment to existing ones
        }));

        setNewComment(""); // Clear input after submission
    };

    return isDataAvailable ? (
        <div className="">
            <div className="py-4 flex flex-col gap-8">
                {ReviewsData &&
                    ReviewsData?.slice(0, visibleReviews).map((item, index) => (
                        <div key={index} className="border-b border-indigo last:border-b-0">
                            <div className="flex flex-col gap-6">
                                {/* Quotes */}
                                <div className={`${hasQuotes === "false" ? "hidden" : ""}`}>
                                    <p className="text-textColor text-base font-bold leading-5.5 capitalize">
                                        {artistProfileData?.name??''}
                                    </p>
                                    <p className="text-textColor text-sm font-normal leading-4.5 capitalize">
                                         {/* {item?.quoteMessage}  */}
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
                                        <div className="w-16 h-16 rounded-lg">

                                        
                                        {(item?.user && item?.user?.profile_pic)?(
                                            <img
                                                className="w-full h-full rounded-lg"
                                                src={item?.user?.profile_pic}
                                                alt="reviewmodal"
                                            />
                                        ):(

                                            <Image
                                                className="w-full h-full rounded-lg"
                                                src={reviewsmodal}
                                                alt="reviewmodal"
                                            />
                                        )}
                                        </div>
                                        <div className="flex-grow">
                                            <p className="text-textColor text-xs font-normal">
                                                {item.created_at?(moment(item.created_at).format('MMMM Do YYYY')):item.date}
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
                                        {item.review_text??item.message}
                                    </p>
                                </div>

                                <div className="flex gap-2.5 mb-6">
                                    <div>
                                        <MdOutlineIosShare className="w-[18px] h-[18px]" />
                                    </div>
                                    <div className="flex justify-center items-center gap-0.5">
                                        <IoMdHeart className="w-[18px] h-[18px]" />
                                        <p className="text-xs text-textColor">{item.likes_count??item.likecount}</p>
                                    </div>

                                    {showReviewResponses ? (
                                        <button
                                            onClick={() => handelSubCommentBox(index)}
                                            className="flex justify-center items-center gap-0.5 cursor-pointer"
                                        >
                                            <TbMessageCircleFilled className="w-[18px] h-[18px]" />
                                            <p className="text-xs text-textColor">{item.comment_count??item.msgcount}</p>
                                        </button>
                                    ) : (
                                        <div className="flex justify-center items-center gap-0.5 cursor-pointer">
                                            <TbMessageCircleFilled className="w-[18px] h-[18px]" />
                                            <p className="text-xs text-textColor">{item.comment_count??item.msgcount}</p>
                                        </div>
                                    )}

                                    <div>
                                        <IoFlag className="w-[18px] h-[18px]" />
                                    </div>
                                </div>
                            </div>

                            {commentBoxes[index] ? (
                                <div className="w-full pt-12 pb-9 border-t border-indigo">
                                    <SubSectionHeading SectionTitle="comments" />
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            handleSubmitComment(index); // Handle comment submission
                                        }}
                                        className="mt-7.5 flex flex-col gap-10"
                                    >
                                        <textarea
                                            value={newComment}
                                            onChange={(e) => setNewComment(e.target.value)}
                                            id="comment"
                                            rows="8"
                                            className="text-textColor text-sm font-normal leading-4.5 rounded-2xl bg-seashell py-2.75 md:py-3.75 px-5 w-full"
                                        ></textarea>

                                        <div className="w-full flex flex-col justify-center items-start gap-2 md:gap-4">
                                            <input
                                                className="w-full px-6 py-3.25 lg:py-2 bg-indigo rounded-full flex justify-center items-center text-seashell text-base font-normal uppercase"
                                                type="submit"
                                                value="SEND"
                                            />
                                        </div>
                                    </form>
                                </div>
                            ) : null}

                            {/* Render comments */}
                            {showReviewResponses && comments[index] &&
                                comments[index].map((comment, i) => (
                                    <div key={i} className="w-[calc(100%-114px)] ml-auto">
                                        <div className="py-4 flex flex-col gap-4">
                                            <div className="flex flex-col gap-2">
                                                <div className="w-8 h-8 rounded-full">
                                                    <Image
                                                        className="w-full h-full rounded-full"
                                                        src={reviewsmodal}
                                                        alt="reviewmodal"
                                                    />
                                                </div>
                                                <p className="text-textColor text-base font-normal leading-5.5">
                                                    <span className="text-indigo">User</span> replied:
                                                </p>
                                            </div>
                                            <p className="text-textColor text-base font-normal leading-5.5">
                                                {comment}
                                            </p>
                                            <div className="flex gap-4 mb-6">
                                                <MdOutlineIosShare className="w-[18px] h-[18px]" />
                                                <div className="flex justify-center items-center gap-0.5">
                                                    <IoMdHeart className="w-[18px] h-[18px]" />
                                                    <p className="text-xs text-textColor">{item.likecount}</p>
                                                </div>
                                                <IoFlag className="w-[18px] h-[18px]" />
                                                <div className="w-[18px] h-[18px] flex justify-center items-center">
                                                    <svg
                                                        className="w-[18px] h-[18px]"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                    >
                                                        <path
                                                            d="M6.67188 2.23982C6.97136 2.37264 7.16667 2.67211 7.16667 3.00024V4.66691H10.0833C12.6146 4.66691 14.6667 6.71899 14.6667 9.25024C14.6667 12.2008 12.5443 13.5185 12.0573 13.7841C11.9922 13.8206 11.9193 13.8336 11.8464 13.8336C11.5625 13.8336 11.3333 13.6018 11.3333 13.3206C11.3333 13.1252 11.4453 12.9456 11.5885 12.8127C11.8333 12.5836 12.1667 12.1252 12.1667 11.3362C12.1667 9.95597 11.0469 8.83618 9.66667 8.83618H7.16667V10.5028C7.16667 10.831 6.97396 11.1304 6.67188 11.2633C6.36979 11.3961 6.02084 11.3414 5.77604 11.1226L1.60938 7.37264C1.4349 7.21118 1.33334 6.98722 1.33334 6.75024C1.33334 6.51326 1.4349 6.2893 1.60938 6.13045L5.77604 2.38045C6.02084 2.15909 6.3724 2.10441 6.67188 2.23982Z"
                                                            fill="#221C3D"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    ))}
                
            </div>

            <div className="md:py-4 flex flex-col gap-8 mt-10 mb-20 md:my-[88px]">
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

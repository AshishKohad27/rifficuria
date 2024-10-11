"use client";
import React, { useState } from "react";
import reviewsmodal from "@/assets/artist/Mask group.png";
import star from "@/assets/artist/Star.png";
import Image from "next/image";
import { MdOutlineIosShare } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { TbMessageCircleFilled } from "react-icons/tb";
import { IoFlag } from "react-icons/io5";

const Reviews = () => {
  const dummyobj = [
    {
      quote: "Therefore I Am",
      quoteMessage: "happier than ever",
      date: "May 1, 2024",
      authorname: "benti",
      starcount: 4,
      specialmsg: "Oh damn, this was a surprise treat.",
      message:
        "The new Billie Eilish track is really good. Like really good. Myfavorite moments off of WWAFAWDWG were the ones that were just raw and visceral like all the good girls go to hell as well as some of the better mellow ballads but m getting off track and this takes that to a whole another level. Some of my issues with those moments were that they felt like they couldve went harder, and this doubled down on the vigorous production. Its super gritty and I think FINNEAS has improved even more on here. Great stuff.",
      likecount: 123,
      msgcount: 45,
    },
    {
      quote: "when we all fall asleep, where do we go?",
      quoteMessage: "",
      date: "May 1, 2024",
      authorname: "laura_564",
      starcount: 4,
      specialmsg: "Oh damn, this was a surprise treat.",
      message:
        "The new Billie Eilish track is really good. Like really good. Myfavorite moments off of WWAFAWDWG were the ones that were just raw and visceral like all the good girls go to hell as well as some of the better mellow ballads but m getting off track and this takes that to a whole another level. Some of my issues with those moments were that they felt like they couldve went harder, and this doubled down on the vigorous production. Its super gritty and I think FINNEAS has improved even more on here. Great stuff.",
      likecount: 123,
      msgcount: 45,
    },
    {
      quote: "Oxytocin",
      quoteMessage: "happier than ever",
      date: "May 1, 2024",
      authorname: "benti",
      starcount: 4,
      specialmsg: "Oh damn, this was a surprise treat.",
      message:
        "The new Billie Eilish track is really good. Like really good. Myfavorite moments off of WWAFAWDWG were the ones that were just raw and visceral like all the good girls go to hell as well as some of the better mellow ballads but m getting off track and this takes that to a whole another level. Some of my issues with those moments were that they felt like they couldve went harder, and this doubled down on the vigorous production. Its super gritty and I think FINNEAS has improved even more on here. Great stuff.",
      likecount: 123,
      msgcount: 45,
    },
    {
      quote: "hit me hard and soft",
      quoteMessage: "happier than ever",
      date: "May 1, 2024",
      authorname: "laura_564",
      starcount: 4,
      specialmsg: "Oh damn, this was a surprise treat.",
      message:
        "The new Billie Eilish track is really good. Like really good. Myfavorite moments off of WWAFAWDWG were the ones that were just raw and visceral like all the good girls go to hell as well as some of the better mellow ballads but m getting off track and this takes that to a whole another level. Some of my issues with those moments were that they felt like they couldve went harder, and this doubled down on the vigorous production. Its super gritty and I think FINNEAS has improved even more on here. Great stuff.",
      likecount: 103,
      msgcount: 15,
    },
    {
      quote: "hit me hard and soft",
      quoteMessage: "happier than ever",
      date: "May 1, 2024",
      authorname: "benti",
      starcount: 4,
      specialmsg: "Oh damn, this was a surprise treat.",
      message:
        "The new Billie Eilish track is really good. Like really good. Myfavorite moments off of WWAFAWDWG were the ones that were just raw and visceral like all the good girls go to hell as well as some of the better mellow ballads but m getting off track and this takes that to a whole another level. Some of my issues with those moments were that they felt like they couldve went harder, and this doubled down on the vigorous production. Its super gritty and I think FINNEAS has improved even more on here. Great stuff.",
      likecount: 123,
      msgcount: 45,
    },
    {
        quote: "hit me hard and soft",
        quoteMessage: "happier than ever",
        date: "May 1, 2024",
        authorname: "benti",
        starcount: 4,
        specialmsg: "Oh damn, this was a surprise treat.",
        message:
          "The new Billie Eilish track is really good. Like really good. Myfavorite moments off of WWAFAWDWG were the ones that were just raw and visceral like all the good girls go to hell as well as some of the better mellow ballads but m getting off track and this takes that to a whole another level. Some of my issues with those moments were that they felt like they couldve went harder, and this doubled down on the vigorous production. Its super gritty and I think FINNEAS has improved even more on here. Great stuff.",
        likecount: 123,
        msgcount: 45,
      },
      {
        quote: "hit me hard and soft",
        quoteMessage: "happier than ever",
        date: "May 1, 2024",
        authorname: "benti",
        starcount: 4,
        specialmsg: "Oh damn, this was a surprise treat.",
        message:
          "The new Billie Eilish track is really good. Like really good. Myfavorite moments off of WWAFAWDWG were the ones that were just raw and visceral like all the good girls go to hell as well as some of the better mellow ballads but m getting off track and this takes that to a whole another level. Some of my issues with those moments were that they felt like they couldve went harder, and this doubled down on the vigorous production. Its super gritty and I think FINNEAS has improved even more on here. Great stuff.",
        likecount: 123,
        msgcount: 45,
      },
  ];

  // State to control the number of reviews shown
  const [visibleReviews, setVisibleReviews] = useState(4);

  // Handler to load more reviews
  const loadMore = () => {
    setVisibleReviews((prev) => prev + 4);
  };

  return (
    <>
      {dummyobj.slice(0, visibleReviews).map((item, index) => (
        <div key={index}>
          <div className="my-4">
            <p className="font-semibold">{item.quote}</p>
            <p className="text-sm">{item?.quoteMessage}</p>
          </div>
          <div className="flex my-4 gap-5">
            <div>
              <Image src={reviewsmodal} alt="reviewmodal"></Image>
            </div>
            <div>
              <p className="text-xs text-textColor">{item.date}</p>
              <p>
                Reviewed by{" "}
                <span className="text-btn1">{item.authorname}</span>{" "}
              </p>
              <div className="flex gap-2 my-2">
                <Image src={star} alt="star"></Image>
                <Image src={star} alt="star"></Image>
                <Image src={star} alt="star"></Image>
                <Image src={star} alt="star"></Image>
                <Image src={star} alt="star"></Image>
              </div>
            </div>
          </div>
          <div>
            <p className="text-textColor my-2">{item.specialmsg}</p>
            <p className="text-textColor my-4">{item.message}</p>
            <div className="flex gap-3 my-3 mb-6">
              <div>
                <MdOutlineIosShare className="w-[18px] h-[18px]" />
              </div>
              <div className="flex items-center gap-1">
                <IoMdHeart className="w-[18px] h-[18px]" />
                <p className="text-xs text-textColor">{item.likecount}</p>
              </div>
              <div className="flex items-center gap-1">
                <TbMessageCircleFilled className="w-[18px] h-[18px]" />
                <p className="text-xs text-textColor">{item.msgcount}</p>
              </div>
              <div>
                <IoFlag className="w-[18px] h-[18px]" />
              </div>
            </div>
          </div>
          <p className="border border-btn1"></p>
        </div>
      ))}

      {visibleReviews < dummyobj.length && (
        <button
          onClick={loadMore}
          className="my-[80px] px-4 py-2 w-full rounded-3xl border-2 border-loadmorebtn text-loadmorebtn rounded font-semibold"
        >
          LOAD MORE
        </button>
      )}
    </>
  );
};

export default Reviews;

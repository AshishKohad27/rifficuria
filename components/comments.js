import React from "react";
import singlereviewavtar from "@/assets/review/singlereviewavtar.png";
import Image from "next/image";
import { MdOutlineIosShare } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { IoFlag } from "react-icons/io5";
import { BiSolidShare } from "react-icons/bi";

const Comments = () => {
  return (
    <div className="comments py-16">
      <div className="comment ">
        <div className="comment1">
          <p>
            <span className="text-btn1">selecta19</span> commented:
          </p>
          <p className="py-4">
            taylor will win but only because it&apos;s a popularity contest
          </p>
          <div className="flex gap-3 my-3 mb-6">
            <div>
              <MdOutlineIosShare className="w-[18px] h-[18px]" />
            </div>
            <div className="flex items-center gap-1">
              <IoMdHeart className="w-[18px] h-[18px]" />
              <p className="text-xs text-textColor">130</p>
            </div>
            <div>
              <IoFlag className="w-[18px] h-[18px]" />
            </div>
            <div className="flex items-center gap-1">
              <BiSolidShare className="w-[18px] h-[18px]" />
            </div>
          </div>
        </div>
        <div className="reply ml-20 md:ml-32">
          <p>
            <span className="text-btn1">keane </span> replied:
          </p>
          <p className="py-4">@selecta19 i don&apos;t think so tbh</p>
          <div className="flex gap-3 my-3 mb-6">
            <div>
              <MdOutlineIosShare className="w-[18px] h-[18px]" />
            </div>
            <div className="flex items-center gap-1">
              <IoMdHeart className="w-[18px] h-[18px]" />
              <p className="text-xs text-textColor">130</p>
            </div>
            <div>
              <IoFlag className="w-[18px] h-[18px]" />
            </div>
            <div className="flex items-center gap-1">
              <BiSolidShare className="w-[18px] h-[18px]" />
            </div>
          </div>
        </div>
        <p className="border border-btn1 my-3"></p>
      </div>

      {/* comment 2 */}
      <div className="comment pt-16">
        <div className="comment1">
          <p>
            <span className="text-btn1">jerryjo</span> commented:
          </p>
          <p className="py-4">
            Do you think any male artists are gonna get nominated for AotY 😆
            For some reason I can&apos;t think of any that would
          </p>
          <div className="flex gap-3 my-3 mb-6">
            <div>
              <MdOutlineIosShare className="w-[18px] h-[18px]" />
            </div>
            <div className="flex items-center gap-1">
              <IoMdHeart className="w-[18px] h-[18px]" />
              <p className="text-xs text-textColor">130</p>
            </div>
            <div>
              <IoFlag className="w-[18px] h-[18px]" />
            </div>
            <div className="flex items-center gap-1">
              <BiSolidShare className="w-[18px] h-[18px]" />
            </div>
          </div>
        </div>
        <div className="reply ml-20 md:ml-32">
          <p>
            <span className="text-btn1">nick05 </span> replied:
          </p>
          <p className="py-4">
            <span className="text-btn1">@jerryjo</span> probably would be
            futures we don&apos;t trust you but even then idk
          </p>
          <div className="flex gap-3 my-3 mb-6">
            <div>
              <MdOutlineIosShare className="w-[18px] h-[18px]" />
            </div>
            <div className="flex items-center gap-1">
              <IoMdHeart className="w-[18px] h-[18px]" />
              <p className="text-xs text-textColor">130</p>
            </div>
            <div>
              <IoFlag className="w-[18px] h-[18px]" />
            </div>
            <div className="flex items-center gap-1">
              <BiSolidShare className="w-[18px] h-[18px]" />
            </div>
          </div>

          <p className="border border-btn1 my-3"></p>
          {/* again reply  */}
          {/* box 2 */}
          <div className="box">
            <div className="my-4">
              <div>
                <Image src={singlereviewavtar} alt="singlereviewavtar"></Image>
              </div>
            </div>
            <div className="flex my-4 gap-5">
              <div>
                <p>
                  <span className="text-btn1">jerryjo</span> replied:
                </p>
              </div>
            </div>
            <div>
              <p className="text-textColor text-sm my-4">
                <span className="text-btn1">@nick05</span> yeah that&apos;s what I
                thought. But it will probs just get nominated for best rap album
                and not of the year{" "}
              </p>
              <div className="flex gap-3 my-3 mb-6">
                <div>
                  <MdOutlineIosShare className="w-[18px] h-[18px]" />
                </div>
                <div className="flex items-center gap-1">
                  <IoMdHeart className="w-[18px] h-[18px]" />
                  <p className="text-xs text-textColor">130</p>
                </div>
                <div>
                  <IoFlag className="w-[18px] h-[18px]" />
                </div>
                <div className="flex items-center gap-1">
                  <BiSolidShare className="w-[18px] h-[18px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;

import React from 'react'
import star from "@/assets/artist/Star.png";
import singlereviewavtar from "@/assets/review/singlereviewavtar.png"
import Image from "next/image";
import { MdOutlineIosShare } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { TbMessageCircleFilled } from "react-icons/tb";
import { IoFlag } from "react-icons/io5";
const Singlereview = () => {
  return (
    <>
      <div className='py-8'>
          <div className="my-4">
            <p className="text-xs mb-2">May 1, 2024</p>
            {/* <p className="text-sm">dfsdf</p> */}
            <div>
                <Image src={singlereviewavtar} alt="singlereviewavtar"></Image>
            </div>
          </div>
          <div className="flex my-4 gap-5">
            <div>
              <p>
                Reviewed by{" "}
                <span className="text-btn1"> benti</span>{" "}
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
            <p className="text-textColor my-2">Oh damn, this was a surprise treat.
            </p>
            <p className="text-textColor my-4">The new Billie Eilish track is really good. Like really good. My favorite moments off of WWAFAWDWG were the ones that were just raw and visceral, like all the good girls go to hell (as well as some of the better mellow ballads but I’m getting off track), and this takes that to a whole another level. Some of my issues with those moments were that they felt like they could’ve went harder, and this doubled down on the vigorous production. It’s super gritty and I think FINNEAS has improved even more on here. Great stuff.</p>
            <div className="flex gap-3 my-3 mb-6">
              <div>
                <MdOutlineIosShare className="w-[18px] h-[18px]" />
              </div>
              <div className="flex items-center gap-1">
                <IoMdHeart className="w-[18px] h-[18px]" />
                <p className="text-xs text-textColor">130</p>
              </div>
              <div className="flex items-center gap-1">
                <TbMessageCircleFilled className="w-[18px] h-[18px]" />
                <p className="text-xs text-textColor">425</p>
              </div>
              <div>
                <IoFlag className="w-[18px] h-[18px]" />
              </div>
            </div>
          </div>
          <p className="border border-btn1"></p>
        </div>
    </>
  )
}

export default Singlereview

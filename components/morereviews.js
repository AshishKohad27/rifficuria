import React from 'react'
import star from "@/assets/artist/Star.png";
import reviewsmodal from "@/assets/artist/Mask group.png";
import singlereviewavtar from "@/assets/review/singlereviewavtar.png"
import Image from "next/image";
import { MdOutlineIosShare } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { TbMessageCircleFilled } from "react-icons/tb";
import { IoFlag } from "react-icons/io5";

const Morereviews = () => {
  return (
    <>

       <div className=' w-[248px]'>
         <p className='uppercase text-2xl text-textColor leading-[30px] mt-10 font-bold'>more reviews</p>
         <div className='box'>
          <div className="my-4">
            <p className="text-xs mb-2">May 1, 2024</p>
            {/* <p className="text-sm">dfsdf</p> */}
            <div>
                <Image src={singlereviewavtar}></Image>
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
            <p className="text-textColor text-sm my-4">The new Billie Eilish track is really good. Like really good. My favorite moments off of WWAFAWDWG were the ones that were just raw and visceral, like all the good girls go to hell (as well as some of the better mellow ballads but I’m getting off track), and this takes that to a whole another level. </p>
            <div className="flex my-3 mb-6">
                <p className='text-xs text-textColor underline'>Read more</p>
            </div>
          </div>
          <p className="border border-btn1"></p>
          </div>
          {/* box 2 */}
          <div className='box'>
          <div className="my-4">
            <p className="text-xs mb-2">May 1, 2024</p>
            {/* <p className="text-sm">dfsdf</p> */}
            <div>
                <Image src={singlereviewavtar}></Image>
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
            <p className="text-textColor text-sm my-4">The new Billie Eilish track is really good. Like really good. My favorite moments off of WWAFAWDWG were the ones that were just raw and visceral, like all the good girls go to hell (as well as some of the better mellow ballads but I’m getting off track), and this takes that to a whole another level. </p>
            <div className="flex my-3 mb-6">
                <p className='text-xs text-textColor underline'>Read more</p>
            </div>
          </div>
          <p className="border border-btn1"></p>
          </div>
          {/* box 3 */}
          <div className='box'>
          <div className="my-4">
            <p className="text-xs mb-2">May 1, 2024</p>
            {/* <p className="text-sm">dfsdf</p> */}
            <div>
                <Image src={singlereviewavtar}></Image>
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
            <p className="text-textColor text-sm my-4">The new Billie Eilish track is really good. Like really good. My favorite moments off of WWAFAWDWG were the ones that were just raw and visceral, like all the good girls go to hell (as well as some of the better mellow ballads but I’m getting off track), and this takes that to a whole another level. </p>
            <div className="flex my-3 mb-6">
                <p className='text-xs text-textColor underline'>Read more</p>
            </div>
          </div>
          <p className="border border-btn1"></p>
          </div>
        </div>
    </>
  )
}

export default Morereviews

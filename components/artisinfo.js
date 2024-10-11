import React from "react";
import artistphoto from "@/assets/artist/ArtistPhoto.png";
import Image from "next/image";

const Artisinfo = () => {
  return (
    <div className="grid grid-cols-10">
      <div className="col-span-10 lg:col-span-7">
        <div className="max-w-[800px]">
          <div className="flex items-center flex-col md:flex-row md:items-end gap-8">
            <Image src={artistphoto} alt="artistphoto" className="w-[148px] md:w-auto"></Image>
            <h3 className="text-2xl md:text-5xl text-textColor font-bold">Billie Eilish</h3>
          </div>
          <div className="mb-0 md:my-[4rem] mx-8 md:mx-0 ">
            <p className="text-textColor my-4 md:mx-4 lg:mx-0 ">
              With the release of her highly anticipated sophomore album ‘Happier
              Than Ever,’ the 21-year-old Los Angeles native remains one of the
              biggest stars to emerge in the 21st century. Since the release of her
              debut single “ocean eyes” in 2015, Eilish continues to shatter the
              ceiling of music with her genre-defying sound. Fast forward from her
              humble breakout, her album WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?
              debuted at No. 1 on the Billboard 200 in the U.S as well as 17
              additional countries around the world upon release in 2019, and was
              the most streamed album of that year.
            </p>
            <p className="text-textColor text-xs underline md:mx-4 lg:mx-0">Read more</p>
          </div>
          <div className="hidden md:block bg-[#AA98FE] text-[#FBF0EC80] text-center p-3 rounded-3xl md:mx-4 lg:mx-0">
            Sign in to rate and review
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-3">
        <div className="w-100 max-w-[225px] ml-auto">
          <div className='bg-background2 w-full md:w-[248px] flex justify-center flex-row md:flex-col p-4 text-center pb-6 rounded-none md:rounded-2xl'>
            <div className=' max-w-[100px] mx-auto my-4'>
              <p className='text-lg sm:text-2xl text-btn1 font-semibold my-3'>4521</p>
              <p className='my-3 text-[14px] sm:text-[16px] text-textColor'>Total Ratings</p>
            </div>
            <p className='md:mx-auto flex justify-center items-center border-r md:border-b md:border-r-0 border-btn1 w-0 md:w-[120px] md:h-0 h-[80px] mx-0 md:my-0 my-auto'></p>
            <div className=' max-h-[60px] md:max-h-full max-w-[100px] mx-auto my-4 '>
              <p className='text-lg sm:text-2xl text-btn1 font-semibold my-3'>4.5/5</p>
              <p className='my-3 text-[14px] sm:text-[16px] text-textColor'>Avg. Ratings</p>
            </div>
            <p className='md:mx-auto flex justify-center items-center border-r md:border-b md:border-r-0 border-btn1 w-0 md:w-[120px] md:h-0 h-[80px] mx-0 md:my-0 my-auto'></p>
            <div className='max-w-[100px] mx-auto my-4'>
              <p className='text-lg sm:text-2xl text-btn1 font-semibold my-3'>956</p>
              <p className='my-3 text-[14px] sm:text-[16px] text-textColor'>Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artisinfo;

import React from 'react'
import Link from 'next/link'
const Subscribeform = () => {
  return (
    <div className='sfBg w-full py-12 bg-no-repeat bg-cover'>
      <div className='mx-w-[1300px] m-auto px-[0px] md:px-[148px] h-full'>
        <div className='flex gap-[2rem] text-center lg:text-justify lg:gap-[8rem] items-center h-full flex-col lg:flex-row'>
            <p className='text-background text-3xl md:text-5xl font-bold leading-[42px] md:leading-[52px]'>Stay updated <br /> with the latest in the <br /> independent music scene</p>
            <div className=''>
            <form className="space-y-4 md:space-y-6" action="#">
                <div className='w-[300px] sm:w-[350px]'>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-textColor dark:text-white"
                  >
                    Enter your email address
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="bg-background2 border-gray-300 text-gray-900 rounded-[80px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                    required=""
                  />
                </div>

                <Link
                  href="#"
                  className=" inline-block  px-6  text-background2  rounded-[80px] bg-btn1 dark:text-primary-500"
                >
                  <div className="flex items-center justify-center p-3">SUBSCRIBE</div>
                </Link>
                
              </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribeform

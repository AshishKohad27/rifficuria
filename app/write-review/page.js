"use client";
import Richtexteditor from "@/components/richtexteditor";
import Image from "next/image";
import Link from "next/link";
import { HiXMark } from "react-icons/hi2";
import star from "@/assets/artist/Star.png";
import writereviewavtar from "@/assets/write-review/write-rivew-avtar.png";
import { useState } from "react";
const page = () => {
  const [ismodalopen, setismodalopen] = useState(false);
  const modalopen = () => {
    setismodalopen(true);
  };
  const modalclose = () => {
    setismodalopen(false);
  };

  return (
    <>
      <div className="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-8 fixed inset-0 z-50 overflow-x-hidden overflow-y-auto justify-center backdrop-blur bg-background2 bg-opacity-50">
        <div className="w-full bg-background rounded-2xl shadow border md:mt-[325px] sm:max-w-[912px] px-14 py-10 bg-gray-800 border-gray-700 border border-textColor">
          <div className="float-right">
            {/* onClick={closePopup} */}

            <Link href="/review">
              {" "}
              <HiXMark className="w-6 h-6 text-textColor cursor-pointer" />
            </Link>
          </div>
          <div className="flex items-center gap-6 ">
            <div>
              <Image src={writereviewavtar} alt="writereviewavtar" className="rounded-2xl"></Image>
            </div>
            <div>
              <p className="text-textColor">Billie Eillish</p>
              <p className="uppercase text-textColor font-bold text-2xl">
                Hit Me Hard And Soft
              </p>
            </div>
          </div>
          <div className="rating py-10">
            <p className="text-sm text-textColor">Rating</p>
            <div className="star-box flex gap-4 items-center">
              <div className="flex gap-2 my-2">
                <Image src={star} alt="star"></Image>
                <Image src={star} alt="star"></Image>
                <Image src={star} alt="star"></Image>
                <Image src={star} alt="star"></Image>
                <Image src={star} alt="star"></Image>
              </div>
              <div className="text-success text-xs">
                <p>You have rated this album 3.5/5!</p>
              </div>
            </div>
          </div>
          <div className="review-title w-[550px]">
            <form action="#">
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-textColor text-white"
                >
                  Review Title
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-background2 border-gray-300 text-gray-900 rounded-[80px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  required=""
                />
              </div>
            </form>
          </div>
          <div className="pt-10">
            <p className="text-sm text-textColor py-2">Add a review</p>
            <Richtexteditor />
            <div className="flex justify-center pt-10">
              <button
                onClick={modalopen}
                id="deleteButton"
                className="block w-[447px] text-background2  rounded-[80px] bg-btn1 text-primary-500"
              >
                <div className="flex items-center uppercase justify-center p-3">
                  log review
                </div>
              </button>
            </div>
            {/* modal box  */}
            {ismodalopen &&(
                <div
              id="deleteModal"
              tabindex="-1"
              aria-hidden="true"
              className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
            >
              <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                {/*  Modal content  */}
                <div className="relative p-4 text-center bg-white rounded-lg shadow bg-gray-800 sm:p-5">
                  <button
                    type="button"
                    className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white"
                    data-modal-toggle="deleteModal"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                  <svg
                    className="text-gray-400 text-gray-500 w-11 h-11 mb-3.5 mx-auto"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <p className="mb-4 text-gray-500 text-gray-300">
                    Are you sure you want to delete this item?
                  </p>
                  <div className="flex justify-center items-center space-x-4">
                    <button
                      data-modal-toggle="deleteModal"
                      type="button"
                      onClick={modalclose}
                      className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600"
                    >
                      No, cancel
                    </button>
                    <button
                      type="submit"
                      className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 bg-red-500 hover:bg-red-600 focus:ring-red-900"
                    >
                      Yes, I'm sure
                    </button>
                  </div>
                </div>
              </div>
            </div>
            )}
            {/* modal box close  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

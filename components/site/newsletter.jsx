"use client";
import { useEffect, useState } from "react";

const Newsletter = () => {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => { }, []);

  const handleOnChange = (e) => {
    const email = e.target.value;
    setUserEmail(email);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log("Subscribe:", userEmail);
  };

  return (
    <div className="sfBg w-full py-12 lg:py-12.5 bg-no-repeat bg-cover">
      <div className="site-container">
        <div className="flex text-center lg:text-justify gap-[2rem] lg:gap-5 xl:gap-[72px] items-center h-full flex-col lg:flex-row ">
          <article>
            <p className="text-seashell text-3.5xl md:text-5xl font-bold leading-9.5  md:leading-13 lg:capitalize">
              Stay updated
              <br className="hidden md:block" /> with the latest in the
              <br className="hidden md:block" /> independent music scene
            </p>
          </article>
          <form
            onSubmit={handleOnSubmit}
            className="space-y-4 md:space-y-6 flex justify-center items-center lg:items-start flex-col"
            action="#"
          >
            <div className="w-[300px] sm:w-[350px]">
              <label
                htmlFor="email"
                className="text-textColor text-base font-normal hidden lg:block mb-3.25 "
              >
                Enter your email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                className="bg-seashell border-gray-300 rounded-[80px]
                 focus:ring-primary-600 focus:border-primary-600 
                 block w-full p-2 px-4
                 placeholder:text-center
                placeholder-textColor
                lg:placeholder-transparent 
                focus:ring-blue-500
                focus:border-blue-500 
                text-textColor text-base font-normal"
                required={true}
                value={userEmail}
                onChange={handleOnChange}
              />
            </div>
            <input
              className="px-6 pt-3.75 pb-3.25 rounded-3xl bg-indigo flex justify-center items-center text-seashell text-base font-normal uppercase"
              type="submit"
              value="SUBSCRIBE"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

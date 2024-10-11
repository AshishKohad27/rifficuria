import React from "react";
import Reviewhero from "@/components/reviewhero";
import Ratingbox from "@/components/ratingbox";
import Singlereview from "@/components/singlereview";
import Morereviews from "@/components/morereviews";
import Commentbox from "@/components/commentbox";
import Comments from "@/components/comments";
import Subscribeform from "@/components/subscribeform"
const page = () => {
  return (
    <>
      <div className="bg-background">
        <div className=" mx-w-[1300px] m-auto px-[33px] md:px-[148px] ">
          <div className="pb-[40px] md:pb-[60px]">
            <Reviewhero />
          </div>
        </div>
        <div className="block lg:hidden">
          <Ratingbox />
        </div>
        <div className=" mx-w-[1300px] m-auto px-[33px] md:px-[148px] flex justify-between">
          <div className="max-w-[800px] px-[30px] md:px-[0] py-[40px] md:py-[0]">
            <div className=" mx-0 bg-[#AA98FE] text-[#FBF0EC80] text-center p-3 my-10 rounded-3xl block ">
              Sign in to rate and review
            </div>
            <div>
              <Singlereview />
            </div>
            <div>
                {/* comment box  */}
                <Commentbox />
            </div>
            <div>
                {/* comments  */}
                <Comments />
            </div>
          </div>
          <div className="lg:block hidden">
            <Morereviews />
          </div>
        </div>
        <div>
            <Subscribeform />
        </div>
      </div>
    </>
  );
};

export default page;

"use client";
import React from "react";

const SceneCard = ({ SingleScene }) => {


  return (
    <div className="rounded-2xl h-[373px] lg:h-[352px] bg-center bg-no-repeat bg-cover flex flex-col justify-end px-5 lg:px-4 py-5"
      style={{
        backgroundImage: `url(${SingleScene && SingleScene.image})`,
      }}
    >
      <article className="p-4 rounded-xl backdrop-blur-5 bg-Lace-50">
        <h6 className="text-textColor text-xs md:text-base font-bold leading-3 lg:leading-5.5 capitalize" >
          {SingleScene && SingleScene.title}
        </h6>
      </article>
    </div>
  );
};

export default SceneCard;

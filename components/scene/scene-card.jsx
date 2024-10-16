"use client";
import React from "react";

const SceneCard = ({ SingleScene }) => {


  return (
    <div className="rounded-2xl h-[352px] bg-center bg-no-repeat bg-cover flex flex-col justify-end px-4 py-5 bg-red-500"
      style={{
        backgroundImage: `url(${SingleScene && SingleScene.image})`,
      }}
    >
      <article className="p-4 rounded-xl backdrop-blur-5 bg-Lace-50">
        <h6 className="text-textColor text-base font-bold leading-5.5 capitalize" >
          {SingleScene && SingleScene.title}
        </h6>
      </article>
    </div>
  );
};

export default SceneCard;

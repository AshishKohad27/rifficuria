"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SceneCard from "@/components/scene/scene-card";
import SubSectionHeading from "@/components/site/sub-section-heading";

const SceneSection = ({
    SceneData,
    ViewMoreLink,
    Title,
    DesktopLimits = 5,
    MobileLimits = 5,
    isLoadMore = false,
}) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2.1,
        slidesToScroll: 2.1,
        centerPadding: "20px",
        responsive: [
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 2.3,
                    slidesToScroll: 2.3,
                },
            },
        ],
    };

    return (
        <div>
            <article className="flex justify-between items-center gap-7.5 mb-8">
                <SubSectionHeading SectionTitle={Title && Title} />
                {ViewMoreLink ? (
                    <button
                        className="text-textColor text-xs font-normal underline"
                        type="button"
                    >
                        View all
                    </button>
                ) : (
                    ""
                )}
            </article>

            <div className="block md:hidden">
                <Slider
                    {...settings}
                    className="overflow-hidden flex w-[calc(100%+2*32px)] -ml-8 md:ml-0"
                >
                    {SceneData &&
                        SceneData.slice(0, `${MobileLimits ? MobileLimits : "20"}`).map(
                            (item, index) => (
                                <SceneCard key={index} SingleScene={item} />
                            )
                        )}
                </Slider>
            </div>

            <div
                className={`hidden md:grid gap-4 grid-cols-5`}
            >
                {SceneData &&
                    SceneData.slice(0, `${DesktopLimits ? DesktopLimits : "20"}`).map(
                        (item, index) => (
                            <SceneCard key={index} SingleScene={item} />
                        )
                    )}
            </div>
            <div className="hidden md:block">
                {isLoadMore ? (
                    <div className="py-4 flex flex-col gap-8 my-[88px]">
                        <button className="px-4 py-2 w-full rounded-3xl border-2 border-aquamarine text-aquamarine text-base font-bold leading-5.5 uppercase">
                            LOAD more
                        </button>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default SceneSection;
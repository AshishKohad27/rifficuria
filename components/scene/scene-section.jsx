"use client";
import React from "react";

// Components
import SceneCard from "@/components/scene/scene-card";
import SubSectionHeading from "@/components/site/sub-section-heading";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css/grid";
import "swiper/css";
import "swiper/css/pagination";

const SceneSection = ({
    SceneData,
    ViewMoreLink,
    Title,
    DesktopLimits = 5,
    MobileLimits = 5,
    isLoadMore = false,
}) => {

    return (
        <div>
            <article className="flex justify-between items-center gap-7.5 mb-6 md:mb-8">
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

            <div className="block lg:hidden">
                <Swiper
                    spaceBetween={16}
                    slidesPerView={1}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.47,
                            spaceBetween: 16,
                        },
                        768: {
                            slidesPerView: 3.3,
                            spaceBetween: 16,
                        },
                    }}
                    modules={[Grid, Pagination]}
                    className="overflow-hidden flex w-[calc(100%+2*32px)] lg:w-full !ml-[-32px] lg:!ml-0 !px-8 lg:!px-0"
                >
                    {SceneData &&
                        SceneData.slice(0, `${MobileLimits ? MobileLimits : "20"}`).map(
                            (item, index) => (
                                <SwiperSlide key={index}>
                                    <SceneCard SingleScene={item} />
                                </SwiperSlide>
                            )
                        )}
                </Swiper>
            </div>

            <div
                className={`hidden lg:grid gap-4 grid-cols-5`}
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

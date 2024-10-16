"use client";
import React, { useState, useEffect, useRef } from "react";

// Components
import MediaCard from "@/components/media/media-card";
import SubSectionHeading from "@/components/site/sub-section-heading";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css/grid";
import "swiper/css";
import "swiper/css/pagination";

export default function MediaSection({
    MediaType,
    ArtistData,
    ViewMoreLink,
    Title,
    GridClass = "",
    DesktopLimits = 10,
    MobileLimits = 10,
    isLoadMore = false,
}) {
    const swiperRef = useRef(null);
    const [visibleItems, setVisibleItems] = useState(DesktopLimits);

    useEffect(() => {
    }, [visibleItems]);

    const loadMoreItems = () => {
        setVisibleItems((prev) => prev + 10); // Increase by 10 items (2 more rows)
    };

    return (
        <div data-media-type={MediaType}>
            <article className="flex flex-wrap justify-between items-center gap-7.5 mb-6 md:mb-8">
                <SubSectionHeading SectionTitle={Title} />
                {ViewMoreLink && (
                    <button className="text-textColor text-xs font-normal underline" type="button">
                        View all
                    </button>
                )}
            </article>

            <div className="block lg:hidden">
                <Swiper
                    ref={swiperRef}
                    spaceBetween={16}
                    slidesPerView={1}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.3,
                            spaceBetween: 16,
                        },
                        768: {
                            slidesPerView: 2.3,
                            spaceBetween: 16,
                        }, 
                    }}
                    modules={[Grid, Pagination]}
                    className="overflow-hidden flex w-[calc(100%+2*32px)] lg:w-full !ml-[-32px] lg:!ml-0 !pl-8 lg:!pl-0"
                >
                    {ArtistData &&
                        ArtistData.slice(0, `${MobileLimits ? MobileLimits : "20"}`).map((item, index) => (
                            <SwiperSlide key={index}>
                                <MediaCard singleartist={item} MediaType={MediaType} />
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>

            <div
                className={`hidden md:grid gap-4 lg:gap-y-[72px] ${GridClass ? GridClass : "grid-cols-5"
                    }`}
            >
                {ArtistData &&
                    ArtistData.slice(0, visibleItems).map(
                        (item, index) => (
                            <MediaCard key={index} singleartist={item} MediaType={MediaType && MediaType} />
                        )
                    )}
            </div>

            <div className="hidden md:block">
                {isLoadMore && (
                    <div className="py-4 flex flex-col gap-8 my-20 md:my-22">
                        <button
                            onClick={loadMoreItems}
                            className="px-4 py-2 w-full rounded-3xl border-2 border-aquamarine text-aquamarine text-base font-bold leading-5.5 uppercase"
                        >
                            LOAD more
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
import defaultProfileImage from "@/public/profile/top-rated-1.png";

// Components
import Stars from "@/components/site/stars";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

export default function FeaturedItemsSongs({
    FeaturedItemsData,
    limit,
    ParentClass,
    ChildClass,
    ImgClass,
}) {
    return (
        <>
            <div className={`w-full hidden lg:flex flex-col ${ParentClass && ParentClass}`}>
                {FeaturedItemsData &&
                    FeaturedItemsData.slice(0, `${limit ? limit : "1000"}`).map(
                        ({ track_img_url, name, subtitle }, index) => (
                            <div
                                key={index}
                                className="flex flex-col gap-[14px] pr-5"
                            >
                                <article className={`w-full flex gap-4 ${ChildClass && ChildClass}`}>
                                    <div className={`${ImgClass} rounded-xl`}>
                                        <img
                                            className="w-full h-full rounded-xl object-cover"
                                            src={
                                                track_img_url ||
                                                defaultProfileImage.src
                                            }
                                            alt={name}
                                        />
                                    </div>
                                    <div className="flex-grow flex items-start justify-center flex-col">
                                        <div className="w-auto rounded-[18px] mb-2 pt-[5px] pb-[3px] px-2 bg-indigo">
                                            <p className="text-seashell text-[10px] font-semibold leading-3.5 uppercase">
                                                Pop
                                            </p>
                                        </div>
                                        <p
                                            className={`text-textColor text-base font-bold leading-5.5 capitalize`}
                                        >
                                            {name && name}
                                        </p>
                                        <p className="text-textColor text-sm font-normal leading-4.5 capitalize">
                                            {subtitle && subtitle}
                                        </p>
                                        <div className="flex justify-start items-center gap-2 mt-2">
                                            <Stars
                                                StarCount={3}
                                                ChildClass="w-3.25 h-3.25"
                                                ParentClass="mt-1.5 md:mt-2"
                                            />
                                            <p className="text-textColor text-xs font-normal">
                                                by
                                                <span className="text-indigo ml-1">
                                                    benti
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                                <p className="text-sm font-normal leading-4.5 px-6">
                                    Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex
                                </p>
                            </div>
                        )
                    )}
            </div>

            <div className={`w-full flex lg:hidden flex-col ${ParentClass && ParentClass}`}>
                <Swiper
                    spaceBetween={16}
                    slidesPerView={1}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 16,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 16,
                        },
                    }}
                    modules={[Autoplay]}
                    autoplay={{ delay: 3000 }}
                    className="w-full"
                >
                    {FeaturedItemsData &&
                        FeaturedItemsData.slice(0, `${limit ? limit : "1000"}`).map(
                            ({ image, title, subtitle }, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className="flex flex-col gap-3 lg:gap-3.5 lg:pr-5 py-4 lg:py-0"
                                    >
                                        <article className={`w-full flex gap-4 ${ChildClass && ChildClass}`}>
                                            <div className={`${ImgClass} rounded-xl`}>
                                                <img
                                                    className="w-full h-full rounded-xl object-cover"
                                                    src={
                                                        image ||
                                                        defaultProfileImage
                                                    }
                                                    alt={title}
                                                />
                                            </div>
                                            <div className="flex-grow flex items-start justify-center flex-col">
                                                <div className="w-auto rounded-[18px] mb-2 pt-[5px] pb-[3px] px-2 bg-indigo">
                                                    <p className="text-seashell text-[10px] font-semibold leading-3.5 uppercase">
                                                        Pop
                                                    </p>
                                                </div>
                                                <p
                                                    className={`text-textColor text-sm md:text-base font-bold leading-4.5 md:leading-5.5 capitalize`}
                                                >
                                                    {title && title}
                                                </p>
                                                <p className="text-textColor text-sm font-normal leading-4.5 capitalize">
                                                    {subtitle && subtitle}
                                                </p>
                                                <div className="hidden lg:flex justify-start items-center gap-2 mt-2">
                                                    <Stars
                                                        StarCount={3}
                                                        ChildClass="w-3.25 h-3.25"
                                                        ParentClass="mt-1.5 md:mt-2"
                                                    />
                                                    <p className="text-textColor text-xs font-normal">
                                                        by
                                                        <span className="text-indigo ml-1">
                                                            benti
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                        <p className="text-sm font-normal leading-4.5 lg:px-6">
                                            Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex
                                        </p>
                                        <div className="flex lg:hidden justify-start items-center gap-2 lg:mt-2">
                                            <Stars
                                                StarCount={3}
                                                ChildClass="w-3.25 h-3.25"
                                                ParentClass="md:mt-2"
                                            />
                                            <p className="text-textColor text-xs font-normal">
                                                by
                                                <span className="text-indigo ml-1">
                                                    benti
                                                </span>
                                            </p>
                                        </div>

                                    </div>
                                </SwiperSlide>
                            )
                        )}
                </Swiper>
            </div>


        </>
    );
}

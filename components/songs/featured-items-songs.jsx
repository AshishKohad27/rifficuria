import defaultProfileImage from "@/assets/profile/top-rated-1.png";
import star from "@/assets/artist/Star.png";
import Image from "next/image";

export default function FeaturedItemsSongs({
    FeaturedItemsData,
    limit,
    ParentClass,
    ChildClass,
    ImgClass,
}) {
    return (
        <div className={`w-full flex flex-col ${ParentClass && ParentClass}`}>
            {FeaturedItemsData &&
                FeaturedItemsData.slice(0, `${limit ? limit : "1000"}`).map(
                    ({ image, title, subtitle }, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-[14px] pr-5"
                        >
                            <article className={`w-full flex gap-4 ${ChildClass && ChildClass}`}>
                                <div className={`${ImgClass} rounded-xl`}>
                                    <Image
                                        className="w-full h-full rounded-xl object-cover"
                                        src={
                                            require(`@/assets/profile/${image}`).default ||
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
                                        className={`text-textColor text-base font-bold leading-5.5 capitalize`}
                                    >
                                        {title && title}
                                    </p>
                                    <p class="text-textColor text-sm font-normal leading-4.5 capitalize">
                                        {subtitle && subtitle}
                                    </p>
                                    <div className="flex justify-start items-center gap-2 mt-2">
                                        <div className="flex gap-1.25">
                                            <Image src={star} alt="star"></Image>
                                            <Image src={star} alt="star"></Image>
                                            <Image src={star} alt="star"></Image>
                                            <Image src={star} alt="star"></Image>
                                            <Image src={star} alt="star"></Image>
                                        </div>
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
    );
}

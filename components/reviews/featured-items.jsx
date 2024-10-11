import defaultProfileImage from "@/assets/profile/top-rated-1.png";
import star from "@/assets/artist/Star.png";
import Image from "next/image";

export default function FeaturedItems({
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
                            className={`w-full flex gap-4 ${ChildClass && ChildClass}`}
                        >
                            <div className={`${ImgClass} rounded-xl`}>
                                <Image
                                    className="w-full h-full rounded-xl object-cover"
                                    src={
                                        // require(`@/assets/profile/${image}`).default ||
                                        defaultProfileImage
                                    }
                                    data-src-next={image}
                                    alt={title}
                                />
                            </div>
                            <div className="flex-grow">
                                <p
                                    className={`text-textColor text-base font-bold leading-5.5 capitalize`}
                                >
                                    {title && title}
                                </p>
                                <p class="text-textColor text-sm font-normal leading-4.5 capitalize">
                                    {subtitle && subtitle}
                                </p>

                                <div className="flex gap-1.25 mt-2">
                                    <Image src={star} alt="star"></Image>
                                    <Image src={star} alt="star"></Image>
                                    <Image src={star} alt="star"></Image>
                                    <Image src={star} alt="star"></Image>
                                    <Image src={star} alt="star"></Image>
                                </div>
                            </div>
                        </div>
                    )
                )}

        </div>
    );
}

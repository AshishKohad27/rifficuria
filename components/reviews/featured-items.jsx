import defaultProfileImage from "@/public/profile/top-rated-1.png";
import Stars from "@/components/site/stars";

export default function FeaturedItems({
    FeaturedItemsData,
    limit,
    ParentClass,
    ChildClass,
    ImgClass,
}) {
    return (
        <div className={`flex flex-col ${ParentClass && ParentClass}`}>
            {FeaturedItemsData &&
                FeaturedItemsData.slice(0, `${limit ? limit : "1000"}`).map(
                    ({ image, title, subtitle }, index) => (
                        <div
                            key={index}
                            className={`w-full flex gap-4 ${ChildClass && ChildClass}`}
                        >
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
                            <div className="flex-grow">
                                <p
                                    className={`text-textColor text-base font-bold leading-5.5 capitalize`}
                                >
                                    {title && title}
                                </p>
                                <p className="text-textColor text-sm font-normal leading-4.5 capitalize">
                                    {subtitle && subtitle}
                                </p>
                                <Stars StarCount={3} ChildClass="w-3.25 h-3.25" ParentClass="mt-1.5 md:mt-2"/>
                            </div>
                        </div>
                    )
                )}

        </div>
    );
}

import { useState, useEffect } from "react";
import defaultProfileImage from "@/public/profile/top-rated-1.png";
import Stars from "@/components/site/stars";

export default function FeaturedItems({
    FeaturedItemsData,
    DesktopLimit,
    MobileLimit,
    ParentClass,
    ChildClass,
    ImgClass,
}) {
    const [limit, setLimit] = useState(DesktopLimit || 1000);

    // Update limit based on screen width
    useEffect(() => {
        const updateLimit = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 1024) {
                setLimit(MobileLimit || 4); // Set MobileLimit or fallback to 4
            } else {
                setLimit(DesktopLimit || 1000); // Set DesktopLimit or fallback to 1000
            }
        };

        updateLimit(); // Initial check on load
        window.addEventListener("resize", updateLimit); // Update on resize

        return () => window.removeEventListener("resize", updateLimit); // Cleanup on unmount
    }, [DesktopLimit, MobileLimit]);

    return (
        <div className={`flex flex-col ${ParentClass && ParentClass}`}>
            {FeaturedItemsData &&
                FeaturedItemsData.slice(0, limit).map(
                    ({ track_img_url, name, subtitle }, index) => (
                        <div
                            key={index}
                            className={`w-full flex gap-4 ${ChildClass && ChildClass}`}
                        >
                            <div className={`${ImgClass} rounded-xl`}>
                              {
                                track_img_url?(
                                    <img
                                    className="w-full h-full rounded-xl object-cover"
                                    src={track_img_url}
                                    alt={name}
                                />
                                ):(
                                <img
                                    className="w-full h-full rounded-xl object-cover"
                                    src={defaultProfileImage.src}
                                    alt={name}
                                />
                                )
                              }
                            </div>
                            <div className="flex-grow">
                                <p className="text-textColor text-sm md:text-base font-bold leading-4.5 md:leading-5.5 capitalize">
                                    {name && name}
                                </p>
                                <p className="mt-1 md:mt-0 text-textColor text-sm md:text-base font-normal leading-4.5 md:leading-5.5 capitalize">
                                    {subtitle && subtitle}
                                </p>
                                <Stars
                                    StarCount={3}
                                    ChildClass="w-3.25 h-3.25"
                                    ParentClass="mt-1.5 md:mt-2"
                                />
                            </div>
                        </div>
                    )
                )}
        </div>
    );
}

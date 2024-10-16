import defaultProfileImage from "@/public/profile/top-rated-1.png";
import Stars from "@/components/site/stars";
import Image from "next/image";

export default function RatingsHistory({ RatingsHistoryData, isDataAvailable }) {
    return isDataAvailable && isDataAvailable ? (
        <div className="w-[calc(100%+2*32px)] -ml-8 md:ml-0 md:w-full">
            {RatingsHistoryData &&
                RatingsHistoryData.map(({ image, title, subtitle }, index) => (
                    <div
                        key={index}
                        className="w-full flex justify-between gap-6 p-4 even:bg-seashell"
                    >
                        <div className="flex justify-center items-center gap-6">
                            <div className="rounded-lg w-16 h-16 py-2 px-3.5 border-0.5 border-textColor">
                                <p className="text-textColor font-base font-bold leading-5.5 text-center -mt-1.5">
                                    27
                                </p>
                                <p className="text-textColor font-base font-bold leading-5.5 text-center -mt-0.5">
                                    Nov
                                </p>
                                <p className="text-textColor font-sm font-normal leading-4.5 text-center -mt-0.5">
                                    2024
                                </p>
                            </div>
                            <div className="rounded-lg w-16 h-16">
                                <Image
                                    width={64}
                                    height={64}
                                    className="w-full h-full rounded-lg object-cover"
                                    src={image || defaultProfileImage}
                                    alt=""
                                />
                            </div>
                            <article>
                                <p
                                    className={`text-textColor text-sm md:text-base font-bold leading-4.5 md:leading-5.5 capitalize`}
                                >
                                    {title && title}
                                </p>
                                <p className="text-textColor text-sm md:text-base font-normal leading-4.5 md:leading-5.5 capitalize">
                                    {subtitle && subtitle}
                                </p>

                                <div className="mt-1 flex md:hidden">
                                    <Stars StarCount={5} ParentClass="!gap-1.25" ChildClass="w-3.5 h-3.5" />
                                </div>
                            </article>
                        </div>
                        <div className="hidden md:flex justify-center items-center">
                            <Stars StarCount={5} ParentClass="!gap-1.25" ChildClass="w-3.5 h-3.5" />
                        </div>
                    </div>
                ))}
        </div>
    ) : null;
}

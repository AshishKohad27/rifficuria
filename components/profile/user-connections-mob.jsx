import { useState } from "react";
import Image from "next/image";
import defaultProfileImage from "@/assets/profile/profile_img-1.png";
import Link from "next/link";
import SubSectionHeading from "@/components/site/sub-section-heading";

export default function UserConnectionsMobile({
    isDataAvailable,
    UserConnectionsData,
    connectionsTitle,
    limit,
    isLoadMore
}) {
    const [viewMore, setViewMore] = useState(true);

    const handleViewMore = () => {
        setViewMore(!viewMore);
    };
    return (
        <>
            {isDataAvailable ? (
                <div className="w-full">
                    <article className="flex justify-between items-center gap-7.5">
                        <SubSectionHeading
                            SectionTitle={connectionsTitle && connectionsTitle}
                        />
                        <button
                            onClick={handleViewMore}
                            className="text-textColor text-xs font-normal underline"
                            type="button"
                        >
                            View all
                        </button>
                    </article>
                    {viewMore ? (
                        <div className="overflow-auto w-[calc(100%+2*32px)] lg:w-auto -ml-8 lg:ml-0">
                            <div className="w-[calc(768px+240px+16px)] lg:w-auto mt-8 flex lg:grid grid-cols-4 gap-x-4 lg:gap-x-7.5 gap-y-4">
                                {UserConnectionsData &&
                                    UserConnectionsData.slice(0, `${limit ? limit : 16}`).map(
                                        ({ profileImage, name }, index) => {
                                            return (
                                                <div
                                                    className="w-12 lg:w-8 h-12 lg:h-8 rounded-full"
                                                    key={index}
                                                >
                                                    <Image
                                                        className="w-full h-full rounded-full"
                                                        src={
                                                            // require(`@/assets/profile/${profileImage}`)
                                                            //     .default || 
                                                            defaultProfileImage
                                                        }
                                                        data-src-next={profileImage}
                                                        alt={name}
                                                    />
                                                </div>
                                            );
                                        }
                                    )}
                            </div>
                        </div>
                    ) : (
                        <div>

                            <ul className="flex flex-col gap-10 pt-4.625 pb-10">
                                {UserConnectionsData &&
                                    UserConnectionsData.map(
                                        ({ profileImage, name, isFollowing }, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="flex justify-between items-center gap-10"
                                                >
                                                    <article className="flex justify-start items-center gap-4">
                                                        <div className="w-10 h-10">
                                                            <Image
                                                                className="w-full h-full rounded-full"
                                                                src={
                                                                    // require(`@/assets/profile/${profileImage}`)
                                                                    //     .default ||
                                                                    defaultProfileImage
                                                                }
                                                                data-src-next={profileImage}
                                                                alt={name}
                                                            />
                                                        </div>
                                                        <p>{name}</p>
                                                    </article>
                                                    <Link
                                                        href=""
                                                        title="View Profile"
                                                        className={`py-2 px-4 border-2 border-textColor rounded-3xl hover:text-seashell hover:bg-textColor transition-all ${isFollowing
                                                            ? "text-seashell bg-textColor"
                                                            : "text-textColor bg-seashell"
                                                            }`}
                                                    >
                                                        <span className="text-sm font-normal leading-4.5">
                                                            {isFollowing ? "Follow Back" : "View Profile"}
                                                        </span>
                                                    </Link>
                                                </li>
                                            );
                                        }
                                    )}
                            </ul>

                            <div className="block md:hidden">
                                {isLoadMore ? (
                                    <div className="py-4 flex flex-col gap-8">
                                        <button className="px-4 py-2 w-full rounded-3xl border-2 border-aquamarine text-aquamarine text-base font-bold leading-5.5 uppercase">
                                            LOAD more
                                        </button>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                ""
            )}
        </>
    );
}

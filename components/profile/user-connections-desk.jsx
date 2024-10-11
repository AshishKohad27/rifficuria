import { useEffect } from "react";
import Image from "next/image";
import defaultProfileImage from "@/assets/profile/profile_img-1.png";
import SubSectionHeading from "@/components/site/sub-section-heading";
import UserConnectionsModal from "@/components/profile/user-connections-modal";

export default function UserConnectionsDesk({
    isDataAvailable,
    UserConnectionsData,
    connectionsTitle,
    limit,
}) {
    useEffect(() => {
        // console.log("UserConnectionsData:", UserConnectionsData);
    }, []);

    return (
        <>
            {isDataAvailable ? (
                <div className="w-full">
                    <article className="flex justify-between items-center gap-7.5">
                        <SubSectionHeading
                            SectionTitle={connectionsTitle && connectionsTitle}
                        />
                        <div className="">
                            <UserConnectionsModal
                                ButtonTitle="View all"
                                ModalTitle={connectionsTitle && connectionsTitle}
                                UserConnectionsData={UserConnectionsData && UserConnectionsData}
                            />
                        </div>
                    </article>
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
                </div>
            ) : (
                ""
            )}
        </>
    );
}

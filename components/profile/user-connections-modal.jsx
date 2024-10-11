import { useState } from "react";
import { HiXMark } from "react-icons/hi2";
import Image from "next/image";
import defaultProfileImage from "@/assets/profile/profile_img-1.png";
import SubSectionHeading from "@/components/site/sub-section-heading";
import Link from "next/link";

const UserConnectionsModal = ({
    ButtonTitle,
    ModalTitle,
    UserConnectionsData,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const closeModal = (e) => {
        // Close the modal if the click is outside the modal content
        if (e.target.id === "modal-overlay") {
            setIsOpen(false);
        }
    };

    return (
        <>
            <button
                onClick={toggleModal}
                className="text-textColor text-xs font-normal underline"
                type="button"
            >
                {ButtonTitle}
            </button>

            {isOpen && (
                <div
                    id="modal-overlay"
                    className="fixed inset-0 bg-seashell bg-opacity-50 backdrop-blur-5 flex items-center justify-center z-[100]"
                    onClick={closeModal}
                >
                    <div
                        className="bg-snow pt-10 px-14 pb-9 rounded-2xl shadow-lg w-full max-w-[551px] lg:h-auto max-h-[80%] flex flex-col gap-9 border border-textColor"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center">
                            <SubSectionHeading SectionTitle={ModalTitle && ModalTitle} />
                            <button onClick={toggleModal}>
                                <HiXMark className="w-4 h-4 text-gray-700 hover:text-gray-900" />
                            </button>
                        </div>

                        <ul className="flex flex-col gap-10 h-[80%] max-h-[520px] overflow-auto scrollbar-hide py-4">
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
                    </div>
                </div>
            )}
        </>
    );
};

export default UserConnectionsModal;

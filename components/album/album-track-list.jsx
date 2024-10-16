import { useState, useEffect } from "react";
import { HiXMark } from "react-icons/hi2";
import Image from "next/image";

// Images
import star from "@/public/artist/Star.png";
import writereviewavtar from "@/public/write-review/write-rivew-avtar.png";

// Components
import SubSectionHeading from "@/components/site/sub-section-heading";
import Stars from "@/components/site/stars";
// import Richtexteditor from "@/components/richtexteditor";

export default function AlbumTrackList({
    Title,
    AlbumTrackListData,
    Limit,
    isDataAvailable = false,
}) {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => { }, []);

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
            {isDataAvailable ? (
                <section className="mb-20 md:mb-22 -ml-2.625 md:ml-0 w-[calc(100%+2*10.5px)] md:w-full lg:max-w-[616px]">
                    <div className="mb-6 md:mb-8">
                        <SubSectionHeading SectionTitle={Title} />
                    </div>
                    <div className="rounded-2xl border border-indigo">
                        {AlbumTrackListData &&
                            AlbumTrackListData.slice(0, Limit ? Limit : "").map(
                                ({ title, time, stars }, index) => (
                                    <button
                                        onClick={toggleModal}
                                        key={index}
                                        className="w-full pl-8 pr-6.75 md:px-8 py-4 flex justify-start gap-10 cursor-pointer transition-all
                                 hover:bg-lavender border-b border-indigo last:border-b-0 first:rounded-t-2xl 
                                 last:rounded-b-2xl text-textColor text-xs md:text-sm font-normal md:leading-4.5"
                                    >
                                        <div className="w-4 flex justify-center items-center">
                                            <p className="w-4 flex justify-center items-center">
                                                {index + 1}
                                            </p>
                                        </div>
                                        <div className="w-full max-w-[400px] text-start">{title}</div>
                                        <div className="hidden md:block">{time}</div>
                                        <div className="col-span-2 md:col-span-2 flex justify-start items-center">
                                            <Stars StarCount={stars} ParentClass="" ChildClass="" />
                                        </div>
                                    </button>
                                )
                            )}
                    </div>
                </section>
            ) : null}

            {/* Modal for Trackllist */}
            {isOpen && (
                <div
                    id="modal-overlay"
                    className="mt-10 md:mt-0 md:fixed inset-0 bg-seashell md:bg-opacity-50 md:backdrop-blur-5 flex items-center justify-center z-[100]"
                    onClick={closeModal}
                >
                    <div
                        className="bg-snow md:py-10 md:px-5.625 lg:rounded-2xl md:shadow-lg w-full lg:max-w-[912px] h-[90%] max-h-[890px]
                    border-0 lg:border border-textColor relative flex justify-center items-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="hidden md:flex justify-center items-center absolute top-6 right-5.625 z-10">
                            <button onClick={toggleModal}>
                                <HiXMark className="w-4 h-4 text-gray-700 hover:text-gray-900" />
                            </button>
                        </div>
                        <section className="w-full h-full max-h-[890px] overflow-auto cust-scrollbar">
                            <div className="md:px-8.375 flex flex-col gap-10">
                                <div className="hidden md:flex items-center gap-6">
                                    <div className="w-22 h-22 rounded-2xl">
                                        <Image
                                            src={writereviewavtar}
                                            alt="writereviewavtar"
                                            className="w-full h-full rounded-2xl" />
                                    </div>
                                    <div>
                                        <p className="text-textColor text-base font-noraml">
                                            Billie Eillish
                                        </p>
                                        <p className="text-textColor text-2xl font-bold leading-7.5 uppercase">
                                            Birds of a Feather
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-textColor text-sm font-normal leading-4.5">
                                        Rating
                                    </p>
                                    <div className="star-box flex gap-4 items-center">
                                        <div className="flex gap-2 my-2">
                                            <Image src={star} alt="star"></Image>
                                            <Image src={star} alt="star"></Image>
                                            <Image src={star} alt="star"></Image>
                                            <Image src={star} alt="star"></Image>
                                            <Image src={star} alt="star"></Image>
                                        </div>
                                        <div className="text-aquamarine text-xs font-normal hidden md:block">
                                            <p>
                                                You have rated this album <span>3.5/5!</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full max-w-[550px]">
                                    <form action="#">
                                        <div className="flex flex-col gap-2">
                                            <label
                                                htmlFor="username"
                                                className="text-textColor text-sm font-normal leading-4.5"
                                            >
                                                Review Title
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                name="email"
                                                // value={email}
                                                // onChange={handleOnChange}
                                                className="text-textColor text-sm font-normal leading-4.5 rounded-full bg-seashell py-2.75 md:py-3.75 px-5 w-full"
                                                required
                                            />
                                        </div>
                                    </form>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-textColor text-sm font-normal leading-4.5">
                                        Add a review
                                    </p>
                                    {/* <Richtexteditor /> */}
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        id="deleteButton"
                                        className="block w-[447px] text-background2  rounded-[80px] bg-btn1 text-primary-500"
                                    >
                                        <div className="flex items-center uppercase justify-center p-3">
                                            log review
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </section>
                    </div >
                </div >
            )}
        </>
    )
}

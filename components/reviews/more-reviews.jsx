import React from "react";
import star from "@/assets/artist/Star.png";
import singlereviewavtar from "@/assets/review/singlereviewavtar.png";
import Image from "next/image";
import SubSectionHeading from "@/components/site/sub-section-heading";
import Link from "next/link";

const MoreReviews = ({ ReviewsData, Limits }) => {
    return (
        <div className="w-full mt-10 lg:-mt-[130px]">
            <div>
                <SubSectionHeading SectionTitle="more reviews" />
            </div>
            {
                ReviewsData && ReviewsData.slice(0, `${Limits ? Limits : 0}`).map((_, index) => (
                    <div key={index} className="flex flex-col gap-6 pb-6 mt-6 border-b border-indigo last:border-b-0">
                        <div className="flex my-0 gap-4">
                            <div className="flex-grow">
                                <div className="w-10 h-10 rounded-full mt-2">
                                    <Image
                                        className="w-full h-full rounded-full"
                                        src={singlereviewavtar}
                                        alt="reviewmodal"
                                    />
                                </div>
                                <p className="text-textColor text-base font-normal mt-2">
                                    Reviewed by <span className="text-indigo">benti</span>
                                </p>
                                <div className="flex gap-1.25 mt-3">
                                    <Image src={star} alt="star"></Image>
                                    <Image src={star} alt="star"></Image>
                                    <Image src={star} alt="star"></Image>
                                    <Image src={star} alt="star"></Image>
                                    <Image src={star} alt="star"></Image>
                                </div>
                            </div>
                        </div>

                        <p className="text-textColor text-sm font-normal leading-4.5">
                            The new Billie Eilish track is really good. Like really good. My
                            favorite moments off of WWAFAWDWG were the ones that were just raw and
                            visceral, like all the good girls go to hell (as well as some of the
                            better mellow ballads but Im getting off track), and this takes that
                            to a whole another level.
                        </p>

                        <Link
                            href=""
                            className="text-textColor text-xs font-normal underline"
                            title="Read more"
                        >
                            Read more
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default MoreReviews;

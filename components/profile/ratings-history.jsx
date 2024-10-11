import defaultProfileImage from "@/assets/profile/top-rated-1.png";
import star from "@/assets/artist/Star.png";
import Image from "next/image";

export default function RatingsHistory({ RatingsHistoryData }) {
    return (
        <div className="">
            {
                RatingsHistoryData && RatingsHistoryData.map(({ image, title, subtitle }) => (

                    <div className="w-full flex justify-between gap-6 p-4 even:bg-seashell">
                        <div className="flex justify-center items-center gap-6">
                            <div className="rounded-lg w-16 h-16 py-2 px-3.5 border-0.5 border-textColor">
                                <p className="text-textColor font-base font-bold leading-5.5 text-center -mt-1.5">27</p>
                                <p className="text-textColor font-base font-bold leading-5.5 text-center -mt-0.5">Nov</p>
                                <p className="text-textColor font-sm font-normal leading-4.5 text-center -mt-0.5">2024</p>
                            </div>
                            <div className="rounded-lg w-16 h-16">
                                <Image
                                    className="w-full h-full rounded-lg object-cover"
                                    src={
                                        require(`@/assets/profile/${image}`).default ||
                                        defaultProfileImage
                                    }
                                    alt=""
                                />
                            </div>
                            <article>
                                <p
                                    className={`text-textColor text-base font-bold leading-5.5 capitalize`}
                                >
                                    {title && title}
                                </p>
                                <p class="text-textColor text-sm font-normal leading-4.5 capitalize">
                                    {subtitle && subtitle}
                                </p>
                            </article>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="flex gap-1.25">
                                <Image src={star} alt="star"></Image>
                                <Image src={star} alt="star"></Image>
                                <Image src={star} alt="star"></Image>
                                <Image src={star} alt="star"></Image>
                                <Image src={star} alt="star"></Image>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
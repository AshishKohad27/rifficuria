import Image from "next/image";
import DefaultProfileImage from "@/public/profile/profile_img-1.png";
import ProfileImage from "@/public/profile/profile-image.png";

// Json
import ProfileNumber from "@/json/profile-numbers.json";

export default function ProfileDetails() {
    return (
        <>
            {/* Profile Details */}
            <div className="flex gap-5 md:gap-8.75 flex-col md:flex-row items-center">
                <div className="w-[216px] h-[216px] rounded-full">
                    <Image
                        src={ProfileImage || DefaultProfileImage}
                        className="w-full h-full rounded-full object-cover"
                        alt="Profle Image"
                        title="Profle Image"
                    />
                </div>

                <div className="flex-grow w-full md:w-[calc(100%-216px-35px)] flex justify-center items-start flex-col">
                    <article className="md:gap-4 flex flex-wrap justify-center md:justify-start items-center">
                        <h2 className="text-textColor text-2xl md:text-5xl font-bold leading-7.5 md:leading-13 capitalize">
                            Benjamin Tillman
                        </h2>
                        <article className="lg:pr-10 flex justify-center items-center flex-col md:hidden">
                            <p className="text-indigo text-base md:text-2.5xl leading-6 md:leading-7 font-normal mt-2.625 md:mt-3.375">
                                @benti
                            </p>
                            <p className="text-textColor text-sm md:text-base font-normal mt-4 md:mt-3.875 text-center md:text-left">
                                he/him
                            </p>
                            <p className="text-textColor text-sm md:text-base font-normal mt-4 md:mt-2.625 text-center md:text-left">
                                I like a lot of different music and I hope that I
                                can get more people to listen to some of these
                                albums I like so they can get more attention.
                            </p>
                        </article>
                        <button className="w-full md:w-auto mt-10 md:mt-0 px-4 py-2 bg-textColor rounded-3xl transition ease-in-out hover:bg-btn1">
                            <span className="text-seashell text-base font-normal capitalize">
                                Follow
                            </span>
                        </button>
                    </article>
                    <article className="lg:pr-10 hidden md:flex flex-col items-start">
                        <p className="text-indigo text-2.5xl leading-7 font-normal mt-3.375">
                            @benti
                        </p>
                        <p className="text-textColor text-base font-normal mt-3.875">
                            he/him
                        </p>
                        <p className="text-textColor text-base font-normal mt-2.625">
                            I like a lot of different music and I hope that I can
                            get more people to listen to some of these albums I
                            like so they can get more attention.
                        </p>
                    </article>
                </div>
            </div>

            {/* Profile Number */}
            <div className="w-[calc(100%+2*32px)] md:w-auto -ml-8 md:ml-0 overflow-auto sm:flex justify-center">
                <div className="bg-seashell w-[580px] md:w-full mt-10 md:mt-8.625 -ml-8 sm:ml-0 py-6 px-4 sm:px-8 grid grid-cols-5 rounded-2xl">
                    {ProfileNumber &&
                        ProfileNumber.map(({ title, number }, index) => (
                            <div
                                key={index}
                                className="flex justify-center items-center flex-col md:gap-2 border-r border-indigo last:border-r-0"
                            >
                                <h5 className="text-indigo text-base md:text-2xl leading-6 md:leading-7.5 font-bold uppercase">
                                    {number}
                                </h5>
                                <p className="text-textColor text-xs md:text-base font-normal leading-4 md:leading-5.25 capitalize">
                                    {title}
                                </p>
                            </div>
                        ))}
                </div>
            </div>
        </>
    )
}
// Context
import { useVisibility } from "@/context/artist-visibility-reducer";

// Redux
import { useAppSelector } from "@/redux/hooks";

const MediaInfoSkeleton = ({ hideRating = true }) => {
    const { isAuth, loading } = useAppSelector((state) => state.auth);
    const { state } = useVisibility();
    return (
        <div className="flex flex-col gap-8 md:gap-22">
            <div className="flex gap-6 md:gap-8 flex-col lg:flex-row">
                {/* Skeleton Loader for Banner Image */}
                <div className="hidden lg:flex justify-center items-center w-full lg:max-w-[448px] aspect-square rounded-2xl">
                    <div className="bg-gray-300 animate-pulse w-full h-full rounded-2xl" />
                </div>

                <div className="lg:w-[calc(100%-448px-32px)]">
                    <div className="flex items-center gap-4 md:gap-3">
                        <div className="w-8 md:w-12.5 h-8 md:h-12.5 rounded-full">
                            <div className="bg-gray-300 animate-pulse w-full h-full rounded-full" />{" "}
                            {/* Skeleton for Artist Profile */}
                        </div>
                        <p className="bg-gray-300 animate-pulse h-6 w-40 rounded-md" />{" "}
                        {/* Skeleton for Artist Name */}
                    </div>

                    <div className="mt-2 md:mt-4">
                        <h2 className="bg-gray-300 animate-pulse h-8 w-full rounded-md" />{" "}
                        {/* Skeleton for Album Title */}
                        <h2 className="bg-gray-300 animate-pulse h-6 w-64 rounded-md mt-2 md:mt-4" />{" "}
                        {/* Skeleton for Subtitle */}
                    </div>

                    <div className="mt-8 flex lg:hidden justify-center items-center w-full lg:max-w-[448px] aspect-square rounded-2xl">
                        <div className="bg-gray-300 animate-pulse w-full h-full rounded-2xl" />{" "}
                        {/* Skeleton for Mobile Banner Image */}
                    </div>

                    <div className="mt-8 md:mt-4 text-textColor text-base font-normal flex flex-col gap-2 md:gap-0.75">
                        <p className="bg-gray-300 animate-pulse h-6 w-32 rounded-md" />{" "}
                        {/* Skeleton for Track Count */}
                        <div className="flex gap-1">
                            <p className="font-semibold">Release Date :</p>
                            <p className="bg-gray-300 animate-pulse h-6 w-32 rounded-md" />{" "}
                            {/* Skeleton for Release Date */}
                        </div>
                        <div className="flex gap-1">
                            <p className="font-semibold">Format :</p>
                            <p className="bg-gray-300 animate-pulse h-6 w-24 rounded-md" />{" "}
                            {/* Skeleton for Format */}
                        </div>
                        <div className="flex gap-1">
                            <p className="font-semibold">Genre :</p>
                            <p className="bg-gray-300 animate-pulse h-6 w-64 rounded-md" />{" "}
                            {/* Skeleton for Genre */}
                        </div>
                        <div className="flex gap-1">
                            <p className="font-semibold">Duration : </p>
                            <p className="bg-gray-300 animate-pulse h-6 w-24 rounded-md" />{" "}
                            {/* Skeleton for Duration */}
                        </div>
                    </div>

                    <div className="mt-7 md:mt-6">
                        <p className="bg-gray-300 animate-pulse h-6 w-full rounded-md" />{" "}
                        {/* Skeleton for Album Description */}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-10">
                <div
                    className={`col-span-10 lg:col-span-7 ${state && state.isComponentVisible ? "mb-22" : ""
                        }`}
                >
                    {hideRating ? (
                        <div className="col-span-12 lg:col-span-3 flex lg:hidden items-end justify-end -ml-8 lg:ml-0 w-[calc(100%+2*32px)] lg:w-full">
                            <div className="overflow-auto w-full lg:max-w-[248px]">
                                <ul className="w-[500px] lg:w-full mx-auto lg:ml-auto mb-10 lg:mb-7.5 bg-seashell md:rounded-2xl px-4 py-6 lg:py-8 flex lg:flex-col justify-center items-center lg:gap-[23px]">
                                    {Array.from({ length: 3 }).map(
                                        (
                                            _,
                                            index // Skeleton for ratings
                                        ) => (
                                            <li
                                                key={index}
                                                className="bg-gray-300 animate-pulse h-20 w-auto lg:max-w-[104px] flex flex-col justify-center items-center lg:gap-4 border-r lg:border-r-0 lg:border-b last:border-b-0 last:border-r-0 last:pb-0 border-indigo"
                                            />
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>
                    ) : null}

                    <div className="lg:max-w-[800px]">
                        <div>
                            {!loading && isAuth ? (
                                <div className="bg-gray-300 animate-pulse h-10 w-full rounded-md" />
                            ) : (
                                <div className="bg-gray-300 animate-pulse h-10 w-full rounded-md" />
                            )}
                        </div>
                    </div>
                </div>

                {hideRating ? (
                    <div className="col-span-12 lg:col-span-3 hidden lg:flex items-end justify-end -ml-8 lg:ml-0 w-[calc(100%+2*32px)] lg:w-full relative">
                        <div className="overflow-auto w-full lg:max-w-[248px] md:absolute top-0">
                            <ul className="w-[458px] lg:w-full mx-auto lg:ml-auto mb-10 lg:mb-7.5 bg-seashell rounded-2xl px-4 py-6 lg:py-8 flex lg:flex-col justify-center items-center lg:gap-[23px]">
                                {Array.from({ length: 3 }).map(
                                    (
                                        _,
                                        index // Skeleton for ratings
                                    ) => (
                                        <li
                                            key={index}
                                            className="bg-gray-300 animate-pulse h-20 w-auto lg:max-w-[104px] flex flex-col justify-center items-center lg:gap-4 border-r lg:border-r-0 lg:border-b last:border-b-0 last:border-r-0 last:pb-0 border-indigo"
                                        />
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default MediaInfoSkeleton;

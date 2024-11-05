export default function ArtistInfoLoader() {
    return (
        <div className="col-span-10 lg:col-span-7 mb-20 lg:mb-22 -mt-16">
            <div className="lg:max-w-[800px]">
                {/* Skeleton Loader for Image and Name */}
                <div className="flex items-center flex-col md:flex-row md:items-end gap-6 md:gap-8">
                    <div className="bg-gray-300 animate-pulse w-[148.5px] md:w-[216px] rounded-2xl h-[216px]" /> {/* Image Skeleton */}
                    <div className="bg-gray-300 animate-pulse h-10 w-full rounded-md" /> {/* Name Skeleton */}
                </div>

                {/* Skeleton Loader for Description and Button */}
                <div className="flex flex-col justify-start items-start gap-6 md:gap-4 mt-6 md:mt-13 mb-8 md:mb-22">
                    <div className="bg-gray-300 animate-pulse h-6 w-full rounded-md" /> {/* Description Skeleton */}
                    <div className="bg-gray-300 animate-pulse h-6 w-32 rounded-md" /> {/* Button Skeleton */}
                </div>

                {/* Skeleton Loader for Ratings */}
                <div className="col-span-12 lg:col-span-3 flex lg:hidden items-end justify-end -ml-8 lg:ml-0 w-[calc(100%+2*32px)] lg:w-full">
                    <div className="overflow-auto w-full lg:max-w-[248px]">
                        <ul className="w-[458px] lg:w-full mx-auto lg:ml-auto mb-10 lg:mb-7.5 bg-seashell rounded-2xl px-4 py-6 lg:py-8 flex lg:flex-col justify-center items-center lg:gap-[23px]">
                            {Array.from({ length: 3 }).map((_, index) => ( // Skeleton for ratings
                                <li
                                    key={index}
                                    className="flex flex-col justify-center items-center lg:gap-4 border-b last:border-b-0 pb-4 w-auto lg:max-w-[104px] bg-gray-300 animate-pulse h-20 rounded-md mb-4" // Skeleton for each rating item
                                />
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Skeleton Loader for Review/Login Button */}
                <div>
                    <div className="bg-gray-300 animate-pulse h-10 w-full rounded-md" /> {/* Button Skeleton */}
                </div>
            </div>
        </div>

    )
}
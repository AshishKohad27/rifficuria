export default function ProfileDetailsSkeleton() {
    return (
        <>
            {/* Profile Details Skeleton */}
            <div className="flex gap-5 md:gap-8.75 flex-col md:flex-row items-center">
                <div className="w-[216px] h-[216px] rounded-full bg-gray-300 animate-pulse"></div>

                <div className="flex-grow w-full md:w-[calc(100%-216px-35px)] flex justify-center items-start flex-col">
                    <article className="md:gap-4 flex flex-wrap justify-center md:justify-start items-center">
                        <div className="h-8 md:h-12 w-3/4 md:w-1/2 bg-gray-300 animate-pulse mb-4 rounded"></div>
                        <article className="lg:pr-10 flex justify-center items-center flex-col md:hidden">
                            <div className="h-6 w-1/3 bg-gray-300 animate-pulse mt-3 rounded"></div>
                            <div className="h-4 w-1/4 bg-gray-300 animate-pulse mt-4 rounded"></div>
                            <div className="h-4 w-full bg-gray-300 animate-pulse mt-4 rounded"></div>
                        </article>
                        <div className="w-full md:w-auto mt-10 md:mt-0 px-4 py-2 bg-gray-300 rounded-3xl animate-pulse">
                            <span className="invisible">Follow</span>
                        </div>
                    </article>
                    <article className="lg:pr-10 hidden md:flex flex-col items-start">
                        <div className="h-6 w-1/4 bg-gray-300 animate-pulse mt-4 rounded"></div>
                        <div className="h-4 w-1/5 bg-gray-300 animate-pulse mt-3 rounded"></div>
                        <div className="h-4 w-full bg-gray-300 animate-pulse mt-3 rounded"></div>
                    </article>
                </div>
            </div>

            {/* Profile Number Skeleton */}
            <div className="w-[calc(100%+2*32px)] md:w-auto -ml-8 md:ml-0 overflow-auto sm:flex justify-center">
                <div className="bg-seashell w-[580px] md:w-full mt-10 md:mt-8.625 -ml-8 sm:ml-0 py-6 px-4 sm:px-8 grid grid-cols-5 rounded-2xl">
                    {Array(5).fill("").map((_, index) => (
                        <div
                            key={index}
                            className="flex justify-center items-center flex-col md:gap-2 border-r border-indigo last:border-r-0"
                        >
                            <div className="h-6 md:h-8 w-8 bg-gray-300 animate-pulse rounded"></div>
                            <div className="h-4 w-12 bg-gray-300 animate-pulse mt-2 rounded"></div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}
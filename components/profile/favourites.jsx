import defaultProfileImage from "@/public/profile/profile-image.png";

// Components
import SubSectionHeading from "@/components/site/sub-section-heading";
import MediaCard from "@/components/media/media-card";

export default function Favourites({
    isDataAvailable,
    FavouritesData,
    title,
    limit,
}) {
    const getPositionContainer = (index) => {
        if ((index + 1) % 3 === 0) {
            return "top-[52px] -right-7 translate-x-[0%]";
        } else {
            return "top-[52px] left-[50%] translate-x-[-50%]";
        }

    };
    const getPositionPointer = (index) => {
        if ((index + 1) % 3 === 0) {
            return "right-[50px]";
        } else {
            return "left-[50%] translate-x-[-50%]";
        }
    };

    return (
        <div className="w-full">
            {isDataAvailable ? (
                <>
                    <article className="flex justify-between items-center gap-7.5">
                        <SubSectionHeading SectionTitle={title && title} />
                        <button
                            className="text-textColor text-xs font-normal underline"
                            type="button"
                        >
                            View all
                        </button>
                    </article>

                    <div className="grid grid-cols-3 gap-3 mt-8">
                        {FavouritesData &&
                            FavouritesData.slice(0, `${limit ? limit : 12}`).map(
                                (item, index) => (
                                    <div
                                        key={index}
                                        className="w-full h-full rounded-lg relative cursor-pointer group"
                                    >
                                        <img
                                            className="w-full h-full rounded-lg object-cover"
                                            src={item.image || defaultProfileImage}
                                            alt={item.songName}
                                        />
                                        <div className={`${getPositionContainer(index)} absolute p-4 z-[100] w-[216px] rounded-2xl bg-seashell hidden transition-all group-hover:block`}>
                                            <MediaCard
                                                singleartist={item}
                                                MediaType="songs"
                                            />
                                            <div className={`${getPositionPointer(index)} absolute -top-2.5`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="11" viewBox="0 0 20 11" fill="none">
                                                    <path d="M10 0L19.5263 10.125H0.473721L10 0Z" fill="#FBF0EC" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                    </div>
                </>
            ) : (
                ""
            )}
        </div>
    );
}

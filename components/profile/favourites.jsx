import defaultProfileImage from "@/assets/profile/profile-image.png"
import SubSectionHeading from "@/components/site/sub-section-heading";
import Image from "next/image";

export default function Favourites({
    isDataAvailable,
    FavouritesData,
    title,
    limit,
}) {
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
                                ({ image }, index) => (
                                    <div key={index} className="w-full h-full rounded-lg">
                                        <Image
                                            className="w-full h-full rounded-lg object-cover"
                                            src={
                                                // require(`@/assets/profile/${image}`).default ||
                                                defaultProfileImage
                                            }
                                            alt={title}
                                        />
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

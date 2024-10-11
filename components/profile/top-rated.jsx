import SubSectionHeading from "@/components/site/sub-section-heading";
import FeaturedItems from "@/components/reviews/featured-items";

export default function TopRated({ isDataAvailable, TopRatedData, title }) {
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
                    <div className="mt-4">
                        <FeaturedItems
                            FeaturedItemsData={TopRatedData}
                            limit={4}
                            ParentClass="gap-0"
                            ChildClass="p-4 flex-col even:bg-seashell"
                            ImgClass="w-16 h-16"
                        />
                    </div>
                </>
            ) : (
                ""
            )}
        </div>
    );
}

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
                            DesktopLimit={4}
                            MobileLimit={4}
                            ParentClass="gap-0 -ml-8 lg:ml-0 w-[calc(100%+2*32px)] lg:w-full"
                            ChildClass="px-8 py-4 lg:p-4 md:flex-col even:bg-seashell"
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

"use client";

// components
import FeaturedItems from "@/components/reviews/featured-items";
import FeaturedItemsSongs from "@/components/songs/featured-items-songs";
import SubSectionHeading from "@/components/site/sub-section-heading";

// json
import TopRatedData from "@/json/top-rated.json";

export default function WeeksTop10() {
    return (
        <div className="site-container">
            <div className="mt-22 grid grid-cols-12 gap-4">
                <div className="col-span-12 lg:col-span-5 bg-seashell h-[600px] rounded-2xl pb-6 relative">
                    <div className="px-6 pt-8">
                        <SubSectionHeading SectionTitle="this week's top 10 songs" />
                    </div>
                    <div className="absolute cust-scrollbar-track"></div>
                    <div className="mt-6 h-[calc(100%-62px-24px)] overflow-auto cust-scrollbar mr-6">
                        <FeaturedItems
                            FeaturedItemsData={TopRatedData}
                            limit=""
                            ParentClass="gap-6"
                            ChildClass="px-6 py-4 flex-row"
                            ImgClass="w-24 h-24 rounded-4"
                        />
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-7 bg-seashell h-[600px] rounded-2xl pb-6 relative">
                    <div className="px-6 pt-8">
                        <SubSectionHeading SectionTitle="this week's top 10 songs" />
                    </div>

                    <div className="absolute cust-scrollbar-track"></div>

                    <div className="mt-6 h-[calc(100%-62px-24px)] overflow-auto cust-scrollbar mr-6">
                        <FeaturedItemsSongs
                            FeaturedItemsData={TopRatedData}
                            limit=""
                            ParentClass="gap-6"
                            ChildClass="px-6 py-4 flex-row"
                            ImgClass="w-24 h-24 rounded-4"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
"use client";

// components
import Newsletter from "@/components/site/newsletter";
import FeaturedItems from "@/components/reviews/featured-items";
import FeaturedItemsSongs from "@/components/songs/featured-items-songs";
import SubSectionHeading from "@/components/site/sub-section-heading";

// json
import TopRatedData from "@/json/top-rated.json";

export default function WeeksTop10() {
    return (
        <div className="site-container">
            <div className="mt-20 lg:mt-22 lg:grid grid-cols-12 gap-4">
                <div className="w-[calc(100%+2*32px)] -ml-8 mb-10 lg:mb-0 lg:col-span-5 lg:bg-seashell lg:h-[600px] lg:rounded-2xl lg:pb-6 relative">
                    <div className="px-8 lg:px-6 lg:pt-8">
                        <SubSectionHeading SectionTitle="this week's top 10 songs" />
                    </div>
                    <div className="absolute cust-scrollbar-track hidden lg:block"></div>
                    <div className="mt-2 lg:mt-6 lg:h-[calc(100%-62px-24px)] lg:overflow-auto cust-scrollbar lg:mr-6">
                        <FeaturedItems
                            FeaturedItemsData={TopRatedData}
                            DesktopLimit={10}
                            MobileLimit={5}
                            ParentClass="lg:gap-6"
                            ChildClass="px-8 lg:px-6 py-4 flex-row even:bg-seashell"
                            ImgClass="w-16 md:w-24 h-16 md:h-24 rounded-lg"
                        />
                    </div>
                </div>
                <div className="block lg:hidden col-span-12 w-[calc(100%+2*32px)] -ml-8">
                    <Newsletter />
                </div>
                <div className="lg:col-span-7 lg:bg-seashell lg:h-[600px] lg:rounded-2xl mb-20 md:mb-0 lg:pb-6 relative">
                    <div className="px-0 lg:px-6 pt-6 lg:pt-8">
                        <SubSectionHeading SectionTitle="this week's top 10 songs" />
                    </div>

                    <div className="absolute cust-scrollbar-track hidden lg:block"></div>
                    <div className="mt-2 lg:mt-6 lg:h-[calc(100%-62px-24px)] lg:overflow-auto cust-scrollbar lg:mr-6">
                        <FeaturedItemsSongs
                            FeaturedItemsData={TopRatedData}
                            limit=""
                            ParentClass="lg:gap-6"
                            ChildClass="lg:px-6 lg:py-4 flex-row"
                            ImgClass="w-16 md:w-24 h-16 md:h-24 rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
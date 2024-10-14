import SubSectionHeading from "@/components/site/sub-section-heading";
import Stars from "@/components/site/stars";

export default function AlbumTrackList({
    Title,
    AlbumTrackListData,
    Limit,
    isDataAvailable = false,
}) {
    return isDataAvailable ? (
        <section className="mb-20 md:mb-22 -ml-2.625 md:ml-0 w-[calc(100%+2*10.5px)] md:w-full lg:max-w-[616px]">
            <div className="mb-6 md:mb-8">
                <SubSectionHeading SectionTitle={Title} />
            </div>
            <div className="rounded-2xl border border-indigo">
                {AlbumTrackListData &&
                    AlbumTrackListData.slice(0, Limit ? Limit : "").map(
                        ({ title, time, stars }, index) => (
                            <div
                                key={index}
                                className="pl-8 pr-6.75 md:px-8 py-4 flex justify-start gap-10 cursor-pointer transition-all
                                 hover:bg-lavender border-b border-indigo last:border-b-0 first:rounded-t-2xl 
                                 last:rounded-b-2xl text-textColor text-xs md:text-sm font-normal md:leading-4.5"
                            >
                                <div className="w-4 flex justify-center items-center">
                                    <p className="w-4 flex justify-center items-center">
                                        {index + 1}
                                    </p>
                                </div>
                                <div className="w-full max-w-[400px]">{title}</div>
                                <div className="hidden md:block">{time}</div>
                                <div className="col-span-2 md:col-span-2 flex justify-start items-center">
                                    <Stars StarCount={stars} ParentClass="" ChildClass="" />
                                </div>
                            </div>
                        )
                    )}
            </div>
        </section>
    ) : null;
}

"use client";

// Components
import Newsletter from "@/components/site/newsletter";
import MediaSection from "@/components/media/media-section";
import WeeksTop10 from "@/components/site//weeks-top-10";
import Header from "@/components/site/site-header";
import SceneSection from "@/components/scene/scene-section";

// json
import ArtistData from "@/json/artist.json";
import SceneData from "@/json/scene.json";

export default function Home() {
  return (
    <div className="">
      <div
        className="flex justify-center items-center h-screen w-full bg-cover bg-no-repeat bg-center bg-textColor 
        before:bg-black-40 before:absolute before:top-0 before:left-0 before:w-full before:h-full
        "
        style={{
          backgroundImage: `url(https://achieveee.com/riffcuria/home_banner.png)`,
        }}
      >
        <article
          className="hidden md:flex justify-center items-center relative z-[10]
        text-seashell text-6xl font-bold leading-[80px] uppercase text-center"
        >
          Tune in with Riffcuria
          <br className="hidden lg:block" />
          to Discover the hottest tracks
          <br className="hidden lg:block" />
          and latest music reviews.
        </article>
      </div>
      <div>
        <Header svgClass="text-white md:text-textColor" ParentClass="absolute md:static top-0 left-0" />
      </div>

      <div className="site-container">
        <div className="mt-20 lg:mt-16">
          <MediaSection
            MediaType="songs"
            Title="new songs on riffcuria"
            ViewMoreLink="haveLink"
            ArtistData={ArtistData}
            GridClass=""
            DesktopLimits={5}
            MobileLimits={5}
            isLoadMore={false}
          />
        </div>
      </div>

      <div className="mt-22 hidden md:block">
        <Newsletter />
      </div>

      <div className="mb-22">
        <WeeksTop10 />
      </div>

      <div className="site-container mb-[156px]">
        <SceneSection
          SceneData={SceneData}
          ViewMoreLink="/"
          Title="The scene"
          DesktopLimits={5}
          MobileLimits={5}
          isLoadMore={false}
        />
      </div>
    </div>
  );
}

"use client";
import Newsletter from "@/components/site/newsletter";
import BannerImage from "@/assets/home_banner.png";

// Components
import MediaSection from "@/components/songs/media-section";
import WeeksTop10 from "@/components/site//weeks-top-10";
import Header from "@/components/site/site-header";

// json
import ArtistData from "@/json/artist.json";

export default function Home() {
  return (
    <div className="">
      <div
        className="flex justify-center items-center h-screen w-full bg-cover bg-no-repeat bg-center bg-textColor "
        style={{
          backgroundImage: `url(${BannerImage})`,
        }}
      >
        <article
          className="flex justify-center items-center 
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
        <Header />
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

      <div className="mt-22">
        <Newsletter />
      </div>
      <div className="mb-22">
        <WeeksTop10 />
      </div>
    </div>
  );
}

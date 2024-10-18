import { useEffect, useState } from "react";
import ArtistPhoto from "@/public/artist/ArtistPhoto.png";
import Image from "next/image";
import { HiXMark } from "react-icons/hi2";
import Login from "@/components/site/authentication/login";
import WriteReview from "@/components/artist/write-review";

// Redux
import { useAppSelector } from "@/redux/hooks";

const ArtistInfo = () => {
  const { isAuth, loading } = useAppSelector((state) => state.auth);
  useEffect(() => {

  }, [loading]);

  const ArtistInfoData = {
    artist: {
      name: "Billie Eilish",
      photo: ArtistPhoto,
      description:
        "With the release of her highly anticipated sophomore album &lsquo;Happier Than Ever,&rsquo; the 21-year-old Los Angeles native remains one of the biggest stars to emerge in the 21st century. Since the release of her debut single &lsquo;ocean eyes&rsquo; in 2015, Eilish continues to shatter the ceiling of music with her genre-defying sound. Fast forward from her humble breakout, her album WHEN WE ALL FALL ASLEEP, WHERE DO WE GO? debuted at No. 1 on the Billboard 200 in the U.S as well as 17 additional countries around the world upon release in 2019, and was the most streamed album of that year.",
      artistRatings: [
        { value: "4521", label: "Total Ratings" },
        { value: "4.5/5", label: "Avg. Ratings" },
        { value: "956", label: "Reviews" },
      ],
    },
    cta: {
      signInText: "Sign in to rate and review",
      readMoreText: "Read more",
    },
  };
  const { artist, cta } = ArtistInfoData;
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = (e) => {
    if (e.target.id === "modal-overlay") {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className="grid grid-cols-10">
        <div className="col-span-10 lg:col-span-7 mb-20 lg:mb-22 -mt-16">
          <div className="lg:max-w-[800px]">
            <div className="flex items-center flex-col md:flex-row md:items-end gap-6 md:gap-8">
              <Image
                src={artist.photo}
                alt={artist.name}
                className="w-[148.5px] md:w-[216px] rounded-2xl"
              />

              <h3 className="text-textColor text-2xl md:text-5xl font-bold leading-7.5 md:leading-13 capitalize">
                {artist.name}
              </h3>
            </div>
            <div className="flex flex-col justify-start items-start gap-6 md:gap-4 mt-6 md:mt-13 mb-8 md:mb-22">
              <p className="text-textColor text-base font-normal">
                {artist.description}
              </p>

              <button
                onClick={toggleModal}
                type="button"
                className="text-textColor text-xs font-normal underline"
              >
                {cta.readMoreText}
              </button>
            </div>
            <div className="col-span-12 lg:col-span-3 flex lg:hidden items-end justify-end -ml-8 lg:ml-0 w-[calc(100%+2*32px)] lg:w-full">
              <div className="overflow-auto w-full lg:max-w-[248px]">
                <ul className="w-[458px] lg:w-full mx-auto lg:ml-auto mb-10 lg:mb-7.5 bg-seashell rounded-2xl px-4 py-6 lg:py-8 flex lg:flex-col justify-center items-center lg:gap-[23px]">
                  {artist.artistRatings.map(({ value, label }, index) => (
                    <li
                      key={index}
                      className="px-7.5 lg:px-0 lg:pb-4 w-auto lg:max-w-[104px] flex flex-col justify-center items-center lg:gap-4 border-r lg:border-r-0 lg:border-b last:border-b-0 last:border-r-0 last:pb-0 border-indigo"
                    >
                      <h4 className="text-indigo text-2xl font-bold leading-7.5">
                        {value}
                      </h4>
                      <p className="text-textColor text-base font-normal capitalize">
                        {label}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              {
                !loading && isAuth ? (
                  <WriteReview
                    ReviewFor="album/song"
                    Title="Write Review"
                    ButtonClass="w-full text-seashell bg-indigo uppercase"
                  />
                ) : (
                  <Login
                    Title={cta.signInText}
                    ButtonClass="w-full bg-lavender text-[#FBF0EC80]"
                  />
                )
              }
            </div>

          </div>
        </div>
        <div className="col-span-12 lg:col-span-3 hidden lg:flex items-end justify-end -ml-8 lg:ml-0 w-[calc(100%+2*32px)] lg:w-full">
          <div className="overflow-auto w-full lg:max-w-[248px]">
            <ul className="w-[458px] lg:w-full mx-auto lg:ml-auto mb-10 lg:mb-7.5 bg-seashell rounded-2xl px-4 py-6 lg:py-8 flex lg:flex-col justify-center items-center lg:gap-[23px]">
              {artist.artistRatings.map(({ value, label }, index) => (
                <li
                  key={index}
                  className="px-7.5 lg:px-0 lg:pb-4 w-auto lg:max-w-[104px] flex flex-col justify-center items-center lg:gap-4 border-r lg:border-r-0 lg:border-b last:border-b-0 last:border-r-0 last:pb-0 border-indigo"
                >
                  <h4 className="text-indigo text-2xl font-bold leading-7.5">
                    {value}
                  </h4>
                  <p className="text-textColor text-base font-normal capitalize">
                    {label}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-seashell bg-opacity-50 backdrop-blur-5 flex items-center justify-center z-[100]"
          onClick={closeModal}
        >
          <div
            className="bg-snow py-8 md:py-10 px-4 md:px-6 lg:rounded-2xl shadow-lg w-full lg:max-w-[557px] h-[calc(100vh-2*32px)] max-h-[715px]
            border-0 lg:border border-textColor relative flex justify-center items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center items-center absolute top-6 right-5.625">
              <button onClick={toggleModal}>
                <HiXMark className="w-4 h-4 text-gray-700 hover:text-gray-900" />
              </button>
            </div>
            <div className="absolute cust-scrollbar-track top-[32px] md:top-[40px] block lg:hidden"></div>
            <article className="h-[100%] overflow-auto cust-scrollbar">
              <p className="text-textColor text-base font-normal px-4 md:px-8">
                With the release of her highly anticipated sophomore album
                &lsquo;Happier Than Ever,&rsquo; the 21-year-old Los Angeles native remains
                one of the biggest stars to emerge in the 21st century. Since
                the release of her debut single &lsquo;ocean eyes&rsquo; in 2015, Eilish
                continues to shatter the ceiling of music with her genre-defying
                sound. Fast forward from her humble breakout, her album WHEN WE
                ALL FALL ASLEEP, WHERE DO WE GO? debuted at No. 1 on the
                Billboard 200 in the U.S as well as 17 additional countries
                around the world upon release in 2019, and was the most streamed
                album of that year. WHEN WE ALL FALL ASLEEP, WHERE DO WE GO? was
                written, produced and recorded entirely by Billie Eilish and
                brother FINNEAS in their childhood home of Los Angeles. Billie
                Eilish went on to make history as the youngest artist to receive
                nominations and win in all the major categories at the 62nd
                GRAMMY® Awards, receiving an award for Best New Artist, Album of
                the Year, Record of the Year, Song of the Year, and Best Pop
                Vocal Album. Billie Eilish is also the youngest artist to write
                and record an official James Bond theme song, &lsquo;No Time To Die.&rsquo;
                Most recently, Billie Eilish was nominated for four additional
                awards at the 63rd Annual GRAMMY Awards in 2021, and took home
                both Record of the Year for &lsquo;everything i wanted,&rsquo; and Best Song
                Written For Visual Media for &lsquo;No Time To Die.&rsquo; Billie Eilish
                released her latest single, &lsquo;Your Power,&rsquo; in April 2021.
              </p>
            </article>
          </div>
        </div>
      )}
    </>
  );
};

export default ArtistInfo;

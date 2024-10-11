import Newsletter from "@/components/site/newsletter";
import AboutImage from "@/assets/about/about.png";
import InstagramIcon from "@/assets/social-icon/instagram.png";
import LinkedinIcon from "@/assets/social-icon/linkedin.png";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <main className="mt-20">
            <div className="site-container">
                <article className="flex flex-col justify-center items-center gap-10 md:gap-8 mb-20 md:mb-22">
                    <h2 className="text-textColor text-center text-3.5xl font-bold leading-9.5 lg:tracking-[-0.5px]">
                        Riffcuria is a diverse community of music fans.
                        <br className="hidden xl:block" /> Its mission will always be to
                        provide a platform to those who do not shy away from voicing their
                        opinion about any song, album, or artist.
                    </h2>
                    <p className="text-indigo text-center text-base font-semibold">
                        Are you an active music listener (meticulously curate your own
                        playlists, and think you are better than the “algorithm”)?
                        <br className="hidden lg:block" /> Are some of your favourite topics
                        of debate “Is Badshah a genius?” or “The house believes Arijit Singh
                        is an average vocalist”?
                        <br className="hidden lg:block" />
                        Do you think you have a better opinion than all the Fantanos of the
                        world?
                        <br className="hidden lg:block" />
                        <br className="hidden lg:block" />
                        If the answer to even one of the above is yes, then you are at the
                        right place.
                    </p>
                </article>
                <div className="flex flex-col lg:grid grid-cols-12 gap-8 lg:gap-0 mb-[136px]">
                    <div className="lg:col-span-3 flex justify-center lg:justify-start">
                        <article className="max-w-[194px] flex justify-start items-center flex-col gap-4">
                            <div className="w-[194px] h-[194px] rounded-[194px]">
                                <Image
                                    className="w-full h-full rounded-[194px]"
                                    src={AboutImage}
                                    alt="about"
                                />
                            </div>
                            <h3 className="text-textColor text-center text-base font-bold leading-5.5 uppercase">
                                Joseph Sebastian
                            </h3>
                            <ul className="flex justify-center items-center gap-2">
                                <li>
                                    <Link
                                        href=""
                                        title="Instagram"
                                        className="w-6 h-6 flex justify-center items-center"
                                    >
                                        <Image
                                            className="w-full h-full"
                                            src={InstagramIcon}
                                            alt="Instagram"
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href=""
                                        title="=Linkedin"
                                        className="w-6 h-6 flex justify-center items-center"
                                    >
                                        <Image
                                            className="w-full h-full"
                                            src={LinkedinIcon}
                                            alt="LinkedIn"
                                        />
                                    </Link>
                                </li>
                            </ul>
                        </article>
                    </div>
                    <div className="lg:col-span-9 lg:px-8 border-t lg:border-t-0 lg:border-l border-indigo">
                        <article className="flex justify-center items-start flex-col gap-4.5 pt-8 lg:pt-0">
                            <p className="text-textColor text-base font-normal capitalize">
                                It started with watching Almost Famous in high-school and
                                wishing my mum someday would utter the words
                                <span className="font-bold">
                                    “Rock stars have kidnapped my son".
                                </span>
                            </p>
                            <p className="text-textColor text-base font-normal capitalize">
                                Post-college, I got to work in the scene for seven years. I ran
                                a music publication, got hit by a curveball, and then shut it
                                down. But the bug to talk about music never died.
                            </p>
                            <p className="text-textColor text-base font-normal capitalize">
                                The need to rave about that killer riff, rant about those
                                off-putting lyrics, or write about that perfect performance
                                which deserved a bigger venue - it never went away. So here we
                                are. Riffcuria.
                            </p>
                            <p className="text-textColor text-base font-normal capitalize">
                                Come dive in, dissect every note, and keep the conversation
                                loud. And remember Cameron Crowe's immortalised words, “The only
                                true currency in this bankrupt world is what you share with
                                someone else when you're uncool.”
                            </p>
                        </article>
                    </div>
                </div>
            </div>
            <Newsletter />
        </main>
    );
}

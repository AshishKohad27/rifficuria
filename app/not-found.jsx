"use client";
import { FaArrowRightLong } from "react-icons/fa6";

// Components
import Header from "@/components/site/site-header";

export default function NotFound() {
    return (
        <>
            <Header />
            <main className="mt-20 py-22 bg-seashell">
                <div className="site-container">
                    <article className="flex flex-col justify-center items-center gap-10 md:gap-8">
                        <h2 className="text-textColor text-center text-7xl sm:text-7xl md:text-8xl font-bold lg:tracking-[-0.5px]">
                            <span class="pr-7.5 border-r-8 border-textColor">404</span> Not Found
                        </h2>
                        <a
                            href="/"
                            className="px-4 pt-2.25 pb-1.75 rounded-3xl flex justify-center items-center text-seashell bg-indigo uppercase transition-all hover:opacity-80
                            "
                        >
                            <span className="text-base font-normal flex items-center gap-2">
                                Back to Home
                                <FaArrowRightLong />
                            </span>
                        </a>
                    </article>
                </div>
            </main>
        </>
    );
}

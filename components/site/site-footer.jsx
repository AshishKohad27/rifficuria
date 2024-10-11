"use client";
import React from "react";
import FooterLogo from "@/assets/mobile-logo.png";
import Image from "next/image";
import Link from "next/link";
import InstagramIcon from "@/assets/social-icon/instagram.png"

import FooterData from "@/json/footer.json";

const Footer = () => {
    return (
        <footer className="bg-seashell relative">
            <div className="site-container">
                <div className="pt-6 pb-13 md:pb-9.25 flex flex-col justify-center items-center gap-6">
                    <Link href="/" className="flex justify-center items-center w-auto h-[41px] absolute top-[-20.5px] left-[50%] translate-x-[-50%]">
                        <Image src={FooterLogo} alt="logo" className="w-full h-full" />
                    </Link>
                    <p className="text-textColor text-xs font-normal text-center mt-6">
                        © 2024 • Riffcuria • All Rights Reserved
                    </p>
                    <div className="social-icons flex justify-center gap-6 lg:gap-2">
                        {FooterData &&
                            FooterData["socialMedia"].map(
                                ({ platform, icon, url, isVisible }, index) =>
                                    isVisible ? (
                                        <Link className="w-4 h-4 block" href={url} key={index} title={`${platform}`} target="_blank">
                                            <Image
                                                src={
                                                    // require(`@/assets/social-icon/${icon}`).default ||
                                                    InstagramIcon
                                                }
                                                alt={`${platform}`}
                                                className="w-full h-full"
                                            />
                                        </Link>
                                    ) : (
                                        ""
                                    )
                            )}
                    </div>
                    <div className="flex justify-center">
                        <ul className="social-media flex flex-wrap justify-center">
                            {FooterData &&
                                FooterData["pages"].map(({ title, url, isVisible }, index) =>
                                    isVisible ? (
                                        <li key={index}>
                                            <Link
                                                href={`${url}`}
                                                title={`${title}`}
                                                className="text-textColor text-xs font-semibold leading-6 md:leading-4 uppercase"
                                            >
                                                {title}
                                            </Link>
                                        </li>
                                    ) : (
                                        ""
                                    )
                                )}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

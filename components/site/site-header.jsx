"use client";
import Link from "next/link";
import { useState } from "react";
import DesktopLogo from "@/assets/Logo.png";
import MobileLogo from "@/assets/mobile-logo.png";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import HeaderData from "@/json/header.json";
import Login from "@/components/site/authentication/login";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className="mt-0 md:mt-10 lg:mt-16">
                <div className="site-container">
                    <div className="flex justify-between items-center gap-4">
                        <Link href="/" className="block w-[66px] sm:w-[150px] lg:w-[332px] h-auto py-8 md:py-4 lg:py-0">
                            <Image
                                src={DesktopLogo}
                                alt="logo"
                                title="logo"
                                className="w-full h-full hidden md:block"
                            />
                            <Image
                                src={MobileLogo}
                                alt="logo"
                                title="logo"
                                className="w-full h-full md:hidden"
                            />
                        </Link>

                        <div className="hidden lg:flex gap-4 xl:gap-7.5 ">
                            <nav className="flex gap-4 xl:gap-7.5">
                                {HeaderData &&
                                    HeaderData.map(
                                        ({ title, url, isVisible, hasXPadding }, index) =>
                                            isVisible ? (
                                                <Link
                                                    key={index}
                                                    href={`${url}`}
                                                    className={`text-textColor text-base font-bold leading-5.5 uppercase py-2 block w-auto ${hasXPadding ? "px-4" : "px-0"
                                                        }`}
                                                    title={`${title}`}
                                                >
                                                    {title}
                                                </Link>
                                            ) : (
                                                ""
                                            )
                                    )}
                            </nav>

                            {/* <div>
                                {isUserLogin ? (
                                    <Link href="/profile" className="px-4 w-auto block">
                                        <Image
                                            src={UserIcon}
                                            alt="logo"
                                            title="logo"
                                            className="w-[37px] h-[37px]"
                                        />
                                    </Link>
                                ) : (
                                    <button
                                        type="button"
                                        className="px-4 pt-2.25 pb-1.75 rounded-3xl bg-indigo flex justify-center items-center"
                                    >
                                        <span className="text-seashell text-base font-normal uppercase">
                                            LOGIN / SIGN UP
                                        </span>
                                    </button>
                                )}
                            </div> */}
                            <Login Title="LOGIN / SIGN UP" ButtonClass="text-seashell bg-indigo uppercase" />
                        </div>

                        {/* Hamburger */}
                        <div className="block lg:hidden" onClick={toggleMenu}>
                            {isMenuOpen ? (
                                <HiX className="w-6 h-6" />
                            ) : (
                                <HiMenu className="w-6 h-6" />
                            )}
                        </div>
                    </div>
                </div>

                {/* Dropdown menu for mobile view */}
                {isMenuOpen && (
                    <div className="site-container">
                        <div className="flex flex-col gap-16 mt-11">
                            <nav className="flex flex-col gap-16">
                                {HeaderData &&
                                    HeaderData.map(
                                        ({ title, url, isVisible }, index) =>
                                            isVisible ? (
                                                <Link
                                                    key={index}
                                                    href={`${url}`}
                                                    className={`text-textColor text-2xl font-semibold leading-7.5 uppercase block w-auto`}
                                                    title={`${title}`}
                                                >
                                                    {title}
                                                </Link>
                                            ) : (
                                                ""
                                            )
                                    )}
                            </nav>

                            {/* <div>
                                {isUserLogin ? (
                                    <Link href="/profile" className="w-auto flex justify-start items-center gap-4">
                                        <Image
                                            src={UserIcon}
                                            alt="logo"
                                            title="logo"
                                            className="w-8 h-8"
                                        />
                                        <span className="text-indigo text-2xl font-medium leading-6.5">
                                            Benjamin Tillman
                                        </span>
                                    </Link>
                                ) : (
                                    <button
                                        type="button"
                                        className="px-4 pt-2.25 pb-1.75 rounded-3xl bg-indigo flex justify-center items-center"
                                    >
                                        <span className="text-white text-base font-normal uppercase">
                                            LOGIN / SIGN UP
                                        </span>
                                    </button>
                                )}
                            </div> */}
                            <Login />
                        </div>
                    </div>
                )}

                <div className="mt-10 lg:mt-16">
                    <div className="site-container">
                        <div className="gredient-btn h-[64px] p-2.5 md:p-0 px-6 md:px-0 rounded-[60px] bg-[#FBF0EC] bg-gradient-to-r from-[#FF8EA066] to-[#AA98FE99] flex items-center justify-center">
                            <p className="text-textColor text-xs md:text-base font-bold underline text-center">
                                Missing Your Favourite Artist or Album? Submit it here!
                            </p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;

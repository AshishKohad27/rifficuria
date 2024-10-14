"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import DesktopLogo from "@/public/Logo.png";
import MobileLogo from "@/public/mobile-logo.png";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import HeaderData from "@/json/header.json";
import Login from "@/components/site/authentication/login";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => { }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const HandelCloseBtnOfMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <header className="mt-0 lg:mt-16">
                <div className="site-container">
                    <div className="flex justify-between items-center gap-4">
                        <Link
                            href="/"
                            className="block w-[66px] sm:w-[150px] lg:w-[332px] h-auto py-8 lg:py-0 z-[1]"
                        >
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
                            <Login
                                Title="LOGIN / SIGN UP"
                                ButtonClass="text-seashell bg-indigo uppercase"
                                ChildToggleMenu={HandelCloseBtnOfMenu}
                            />
                        </div>

                        {/* Hamburger */}
                        <div className="block lg:hidden z-[1]" onClick={toggleMenu}>
                            {isMenuOpen ? (
                                <HiX className="w-4 md:w-6 h-4 md:h-6" />
                            ) : (
                                <HiMenu className="w-6 h-6" />
                            )}
                        </div>
                    </div>
                </div>

                {/* Dropdown menu for mobile view */}
                {isMenuOpen && (
                    <section className="absolute h-[100vh] w-full left-0 top-[91px] md:top-[123.33px] bg-[#FBF0ECCC] z-[1]">
                        <div className="site-container">
                            <div className="flex flex-col gap-16 mt-11">
                                <nav className="flex flex-col gap-16">
                                    {HeaderData &&
                                        HeaderData.map(({ title, url, isVisible }, index) =>
                                            isVisible ? (
                                                <Link
                                                    onClick={toggleMenu}
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
                                <Login
                                    Title="LOGIN / SIGN UP"
                                    ButtonClass="text-seashell bg-indigo uppercase"
                                    ChildToggleMenu={HandelCloseBtnOfMenu}
                                />
                            </div>
                        </div>
                    </section>
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

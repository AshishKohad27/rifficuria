"use client";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'
import Link from "next/link";
import Image from "next/image";
import DesktopLogo from "@/public/Logo.png";
import MobileLogo from "@/public/mobile-logo.png";
import UserIcon from "@/public/icon/user-icon.png";
import { HiMenu, HiX } from "react-icons/hi";

// Components
import Login from "@/components/site/authentication/login";
import Logout from "@/components/site/authentication/logout";
import ProfileTabsButton from "@/components/profile/profile-tabs-btn";

// Redux
import { useAppSelector } from "@/redux/hooks";

// Json
import HeaderData from "@/json/header.json";

const Header = ({ svgClass = "", ParentClass = "" }) => {
    const { isAuth, loading } = useAppSelector((state) => state.auth);
    const pathname = usePathname()

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => { }, [isMenuOpen, isAuth]);

    useEffect(() => {
        // Function to update maxWidth based on window width
        const handleResize = () => {
            // setIsMenuOpen(false);
        };

        // Initialize on component mount
        handleResize();

        // Update maxWidth when the window is resized
        window.addEventListener('resize', handleResize);
        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const HandelCloseBtnOfMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <Logout />
            <header className="mt-0 lg:mt-16">
                <div className={`site-container ${ParentClass}`}>
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
                                                    className={`text-textColor text-base font-bold leading-5.5 uppercase py-2 block w-auto hover:text-indigo ${hasXPadding ? "px-4" : "px-0"
                                                        } ${pathname === url ? "!text-indigo underline underline-offset-[6px] decoration-2" : ""}}`}
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

                        <div className="flex lg:hidden gap-4">
                            <Link href="/profile" className={`w-auto justify-center items-center ${!loading && isAuth && pathname !=="/" ? "flex lg:hidden" : "hidden"}`}>
                                <Image
                                    src={UserIcon}
                                    alt="logo"
                                    title="logo"
                                    className="w-6 h-6"
                                />
                            </Link>

                            {/* Hamburger */}
                            <div className="block lg:hidden z-[1] cursor-pointer" onClick={toggleMenu}>
                                {isMenuOpen ? (
                                    <HiX className="w-4 md:w-6 h-4 md:h-6" />
                                ) : (
                                    <HiMenu className={`w-6 h-6 ${svgClass}`} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dropdown menu for mobile view */}
                {isMenuOpen && (

                    <section className="lg:hidden fixed h-[100vh] w-full left-0 top-0 bg-[#FBF0ECCC] z-[100] backdrop-blur-5">
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
                                {/* 
                                <div className="hidden lg:flex gap-4 xl:gap-7.5 ">
                                    <nav className="flex gap-4 xl:gap-7.5">
                                        {HeaderData &&
                                            HeaderData.map(
                                                ({ title, url, isVisible, hasXPadding }, index) =>
                                                    isVisible ? (
                                                        <Link
                                                            key={index}
                                                            href={`${url}`}
                                                            className={`text-textColor text-base font-bold leading-5.5 uppercase py-2 block w-auto hover:text-indigo ${hasXPadding ? "px-4" : "px-0"
                                                                } ${pathname === url ? "!text-indigo underline underline-offset-[6px] decoration-2" : ""}`}
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
                                </div> */}

                                {/* Hamburger */}
                                <div className="block lg:hidden z-[1] cursor-pointer" onClick={toggleMenu}>
                                    {isMenuOpen ? (
                                        <HiX className="w-4 md:w-6 h-4 md:h-6" />
                                    ) : (
                                        <HiMenu className={`w-6 h-6 ${svgClass}`} />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="site-container pb-16 lg:pb-0 h-[calc(100%-92px)] md:h-[calc(100%-126px)] lg:h-auto overflow-auto">
                            <div className="flex flex-col gap-16 mt-11 pb-8">
                                <nav className="flex flex-col gap-16">
                                    {HeaderData &&
                                        HeaderData.map(({ title, url, isVisible }, index) =>
                                            isVisible ? (
                                                <Link
                                                    onClick={toggleMenu}
                                                    key={index}
                                                    href={`${url}`}
                                                    className={`text-textColor text-2xl font-semibold leading-7.5 uppercase block w-auto hover:text-indigo
                                                        ${pathname === url ? "!text-indigo underline underline-offset-[6px] decoration-2" : ""}
                                                        `}
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
                                <div className={`block md:hidden -mt-6 ${pathname !== "/profile" ? "!hidden" : ""}`}>
                                    <ProfileTabsButton location="header" />
                                </div>
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

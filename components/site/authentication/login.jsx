import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

// Images and Icons
import { HiX } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import UserIcon from "@/public/icon/user-icon.png";
import DesktopLogo from "@/public/Logo.png";
import MobileLogo from "@/public/mobile-logo.png";

// Components
import LoginForm from "@/components/site/authentication/login-form";
import SignUpForm from "@/components/site/authentication/signup-form";
import ForgetPasswordForm from "@/components/site/authentication/forget-password-form";
import ForgetPasswordMessage from "@/components/site/authentication/forget-password-message";
import EmailVerification from "@/components/site/authentication/email-verification";

// Redux
import { stopLoading } from "@/redux/auth/auth-slice";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";

export default function Login({ Title, ButtonClass, ChildToggleMenu = null }) {
    const { isAuth, loading } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [tabs, setTabs] = useState("login_tab");
    const [maxWidth, setMaxWidth] = useState("445px");

    useEffect(() => {
        dispatch(stopLoading());
        // console.log("Initial Load");
    }, []);

    // useEffect(() => {
    //     console.log("State:", "L:", loading);
    // }, []);

    useEffect(() => {
        if (isAuth) {
            setIsOpen(false);
        }
    }, [isAuth]);

    useEffect(() => { }, [tabs, maxWidth]);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const closeModalOnCrossBtn = () => {
        // console.log("closeModalOnCrossBtn:", closeModalOnCrossBtn);
        setIsOpen(false);
        if (ChildToggleMenu) {
            ChildToggleMenu();
        };
    };

    const closeModal = (e) => {
        // Close the modal if the click is outside the modal content
        if (e.target.id === "modal-overlay") {
            setIsOpen(false);
        }
    };

    const handleTabs = (val) => {
        setTabs(val);

        const maxWidthMap = {
            login_tab: "445px",
            signup_tab: "674px",
            forgetpassword_tab: "557px",
            forgetpasswordmessage_tab: "674px",
            emailverification_tab: "674px",
        };

        const newMaxWidth = maxWidthMap[val];
        if (newMaxWidth) {
            setMaxWidth(newMaxWidth); // Fixed the typo here
        }
    };

    return (
        <>
            <div>
                {!loading && isAuth ? (
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
                        onClick={() => {
                            toggleModal();
                            handleTabs("login_tab");
                        }}
                        type="button"
                        className={`px-4 pt-2.25 pb-1.75 rounded-3xl flex justify-center items-center ${ButtonClass}`}
                    >
                        <span className="text-base font-normal">{Title && Title}</span>
                    </button>
                )}
            </div>

            {isOpen && (
                <div
                    id="modal-overlay"
                    className="fixed inset-0 bg-seashell bg-opacity-50 backdrop-blur-5 flex items-center justify-center z-[100]"
                    onClick={closeModal}
                >
                    <div
                        className={`bg-snow pb-8 lg:py-10 px-8 lg:px-14 lg:rounded-2xl shadow-lg w-full
                            h-[100vh] lg:h-auto border-0 lg:border border-textColor relative flex flex-col
                           justify-center items-center`}
                        style={{ maxWidth: maxWidth }} // Using inline styles for maxWidth
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="hidden lg:flex justify-center items-center absolute top-6 right-5.625">
                            <button onClick={closeModalOnCrossBtn}>
                                <HiXMark className="w-4 h-4 text-gray-700 hover:text-gray-900" />
                            </button>
                        </div>

                        <div className="w-full lg:hidden absolute top-0 left-0">
                            <div className="site-container">
                                <div className="flex lg:hidden justify-between items-center gap-4 w-full">
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
                                    {/* Hamburger */}
                                    <div
                                        className="block lg:hidden z-[1]"
                                        onClick={closeModalOnCrossBtn}
                                    >
                                        <HiX className="w-4 md:w-6 h-4 md:h-6" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            {tabs === "login_tab" ? (
                                <LoginForm childHandleTabs={handleTabs} />
                            ) : null}
                            {tabs === "signup_tab" ? (
                                <SignUpForm childHandleTabs={handleTabs} />
                            ) : null}
                            {tabs === "forgetpassword_tab" ? (
                                <ForgetPasswordForm childHandleTabs={handleTabs} />
                            ) : null}
                            {tabs === "forgetpasswordmessage_tab" ? (
                                <ForgetPasswordMessage />
                            ) : null}
                            {tabs === "emailverification_tab" ? <EmailVerification /> : null}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

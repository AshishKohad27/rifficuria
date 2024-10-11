import Link from "next/link";
import { useState } from "react";
import { HiXMark } from "react-icons/hi2";

export default function EmailVerification() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const closeModal = (e) => {
        // Close the modal if the click is outside the modal content
        if (e.target.id === "modal-overlay") {
            setIsOpen(false);
        }
    };

    return (
        <>
            <button
                onClick={toggleModal}
                type="button"
                className="px-4 pt-2.25 pb-1.75 rounded-3xl bg-indigo flex justify-center items-center"
            >
                <span className="text-seashell text-base font-normal uppercase">
                    EmailVerification
                </span>
            </button>

            {isOpen && (
                <div
                    id="modal-overlay"
                    className="fixed inset-0 bg-seashell bg-opacity-50 backdrop-blur-5 flex items-center justify-center z-[100]"
                    onClick={closeModal}
                >
                    <div
                        className="bg-snow py-8 md:py-10 px-8 md:px-14 lg:rounded-2xl shadow-lg w-full lg:max-w-[674px] h-[100vh] lg:h-auto border-0 lg:border border-textColor relative flex justify-center items-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-center items-center absolute top-6 right-5.625">
                            <button onClick={toggleModal}>
                                <HiXMark className="w-4 h-4 text-gray-700 hover:text-gray-900" />
                            </button>
                        </div>
                        <article className="flex flex-col justify-center items-center gap-4">
                            <h3 className="text-textColor text-sm font-bold leading-4.5 text-center">
                                To complete your registration, please verify your email address.
                            </h3>
                            <p className="text-textColor text-sm font-normal leading-4.5 text-center">
                                We've sent a verification email to <span className="font-bold">user@gmail.com</span>. Please check
                                your inbox and click on the verification link provided in the
                                email. If you don't see the email in your inbox, please check
                                your spam or junk folder.
                            </p>
                            <p className="text-textColor text-sm font-normal leading-4.5 flex gap-1">
                                <Link href="" title="Didn't receive the email?" className="text-coral underline">
                                    Didn't receive the email?
                                </Link>
                                <Link href="" title="Click here to resend" className="underline">
                                    Click here to resend.
                                </Link>
                            </p>
                        </article>
                    </div>
                </div>
            )}
        </>
    );
}

import Link from "next/link";
import { useState, useEffect } from "react";
import { HiXMark } from "react-icons/hi2";
import UserIcon from "@/assets/icon/user-icon.png";

const initialState = {
    email: "",
};

export default function Login() {
    const [formData, setFormData] = useState(initialState);
    const [isUserLogin, setIsUserLogin] = useState(false);
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => { }, [formData]);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const closeModal = (e) => {
        // Close the modal if the click is outside the modal content
        if (e.target.id === "modal-overlay") {
            setIsOpen(false);
        }
    };

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log("Login Form Submitted!", formData);
    };

    const { email } = formData;

    return (
        <>
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
                        onClick={toggleModal}
                        type="button"
                        className="px-4 pt-2.25 pb-1.75 rounded-3xl bg-indigo flex justify-center items-center"
                    >
                        <span className="text-seashell text-base font-normal uppercase">
                            LOGIN / SIGN UP
                        </span>
                    </button>
                )}
            </div> */}

            {isOpen && (
                <div
                    id="modal-overlay"
                    className="fixed inset-0 bg-seashell bg-opacity-50 backdrop-blur-5 flex items-center justify-center z-[100]"
                    onClick={closeModal}
                >
                    <div className="bg-snow py-8 md:py-10 px-8 md:px-14 lg:rounded-2xl shadow-lg w-full lg:max-w-[557px] h-[100vh] lg:h-auto border-0 lg:border border-textColor relative flex justify-center items-center"
                        onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-center items-center absolute top-6 right-5.625">
                            <button onClick={toggleModal}>
                                <HiXMark className="w-4 h-4 text-gray-700 hover:text-gray-900" />
                            </button>
                        </div>
                        <form
                            onSubmit={handleOnSubmit}
                            action=""
                            className="w-full flex flex-col gap-6"
                        >

                            <div className="w-full flex flex-col justify-center items-start gap-2 md:gap-4">
                                <label
                                    htmlFor="#email"
                                    className="text-textColor text-sm font-normal leading-4.5 capitalize"
                                >
                                    email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={handleOnChange}
                                    className="text-textColor text-sm font-normal leading-4.5 rounded-full bg-seashell py-2.75 md:py-3.75 px-5 w-full"
                                    required
                                />
                            </div>
                            <div className="w-full flex flex-col justify-center items-start gap-2 md:gap-4">
                                <input
                                    className="w-full px-6 py-3.25 lg:py-3.5 bg-indigo rounded-full flex justify-center items-center text-seashell text-base font-normal uppercase cursor-pointer"
                                    type="submit"
                                    value="send password reset link"
                                />
                            </div>

                            <div className="w-full flex justify-center items-center">
                                <p className="text-textColor text-sm font-normal leading-4.5 flex justify-center items-center gap-0.5" >
                                    <span>New to Riffcuria?</span>
                                    <Link href="" title="Forgot Password?"
                                        className="text-indigo underline"
                                    >
                                        Click here to create account
                                    </Link>
                                </p>
                            </div>

                        </form>
                    </div>
                </div>
            )}
        </>
    )
}
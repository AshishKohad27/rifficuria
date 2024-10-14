import Link from "next/link";
import { useState, useEffect } from "react";

const initialState = {
    full_name: "",
    email: "",
    password: "",
    subscribeToNewsletter: false,
    agreeToTerms: false,
};

export default function SignUpForm({ childHandleTabs }) {
    const [formData, setFormData] = useState(initialState);
    const { full_name, email, password } = formData;

    useEffect(() => { }, [formData]);

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

    const handleTabsButton = (val) => {
        console.log("val from login:", val);
        childHandleTabs(val);
    }
    return (
        <form
            onSubmit={handleOnSubmit}
            action=""
            className="w-full flex flex-col gap-6 mt-20 lg:mt-0"
        >
            <div className="w-full flex flex-col justify-center items-start gap-2 md:gap-4">
                <label
                    htmlFor="#full_name"
                    className="text-textColor text-sm font-normal leading-4.5 capitalize"
                >
                    full name
                </label>
                <input
                    id="full_name"
                    type="text"
                    name="full_name"
                    value={full_name}
                    onChange={handleOnChange}
                    className="text-textColor text-sm font-normal leading-4.5 rounded-full bg-seashell py-2.75 md:py-3.75 px-5 w-full"
                    required
                />
            </div>
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
                <label
                    htmlFor="#password"
                    className="text-textColor text-sm font-normal leading-4.5 capitalize"
                >
                    password
                </label>
                <input
                    id="password"
                    type="text"
                    name="password"
                    value={password}
                    onChange={handleOnChange}
                    className="text-textColor text-sm font-normal leading-4.5 rounded-full bg-seashell py-2.75 md:py-3.75 px-5 w-full"
                    required
                />
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-2 md:gap-4">
                <label className="flex items-start gap-2 hover:bg-seahell cursor-pointer">
                    <input
                        id="subscribeToNewsletter"
                        className="custom-checkbox w-3.5 h-3.5 mt-0.75"
                        type="checkbox"
                    />
                    <p className="flex flex-wrap gap-1 flex-grow w-[calc(100%-8px-14px)] text-textColor text-sm font-normal leading-4.5">
                        Sign up for our newsletters and updates
                    </p>
                </label>

                <p className="text-textColor text-sm font-normal leading-4.5 mt-0 md:-mt-2">
                    If you check this box, Riffcuria will send you cool and useful emails
                    now and then. You can unsubscribe anytime.{" "}
                </p>

                <label className="flex items-start gap-2 hover:bg-seahell cursor-pointer">
                    <input
                        id="subscribeToNewsletter"
                        className="custom-checkbox w-3.5 h-3.5 mt-0.75"
                        type="checkbox"
                    />
                    <p className="flex flex-wrap gap-1 flex-grow w-[calc(100%-8px-14px)] text-textColor text-sm font-normal leading-4.5">
                        I have read and agree to the
                        <Link href="/terms" title="Terms" className="underline">
                            Terms
                        </Link>
                        &
                        <Link href="/terms" title="Privacy Policy" className="underline">
                            Privacy Policy
                        </Link>
                    </p>
                </label>
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-2 md:gap-4">
                <input
                    className="w-full px-6 py-3.25 lg:py-3.5 bg-indigo rounded-full flex justify-center items-center text-seashell text-base font-normal uppercase cursor-pointer"
                    type="submit"
                    value="create account"
                />
            </div>
            <div className="w-full flex justify-center items-center">
                <p className="text-textColor text-sm font-normal leading-4.5 flex justify-center items-center gap-0.5">
                    <span>Already have an account?</span>
                    <button
                        onClick={() => handleTabsButton("login_tab")}
                        title="Login"
                        className="text-indigo underline"
                    >
                        Login
                    </button>
                </p>
            </div>
        </form>
    );
}

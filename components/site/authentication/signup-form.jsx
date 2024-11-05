import { useState, useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { RegisterAuth } from "@/redux/auth/auth-action";

const initialState = {
    name: "test-name",
    username: "test-username",
    email: "test@gmail.com",
    password: "123456789",
    // subscribeToNewsletter: false,
    // agreeToTerms: false,
};

export default function SignUpForm({ childHandleTabs }) {
    const [formData, setFormData] = useState(initialState);
    const { name, username, email, password } = formData;
    const dispatch = useAppDispatch();

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
        // console.log("Register Form Submitted!", formData);
        dispatch(RegisterAuth({ payload: formData }));
    };

    const handleTabsButton = (val) => {
        // console.log("val from login:", val);
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
                    htmlFor="#name"
                    className="text-textColor text-sm font-normal leading-4.5 capitalize"
                >
                    full name
                </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleOnChange}
                    className="text-textColor text-sm font-normal leading-4.5 rounded-full bg-seashell py-2.75 md:py-3.75 px-5 w-full"
                    required
                />
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-2 md:gap-4">
                <label
                    htmlFor="#name"
                    className="text-textColor text-sm font-normal leading-4.5 capitalize"
                >
                    username
                </label>
                <input
                    id="username"
                    type="text"
                    name="username"
                    value={username}
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
            {/* <div className="w-full flex flex-col justify-center items-start gap-2 md:gap-4">
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
            </div> */}
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

import { useState, useEffect } from "react";

// Redux
import { useAppDispatch } from "@/redux/hooks";
import { LoginAuth } from "@/redux/auth/auth-action";

const initialState = {
    email: "ashishkohad@gmail.com",
    password: "ashishkohad",
};

export default function LoginForm({ childHandleTabs }) {
    const dispatch = useAppDispatch();
    const [formData, setFormData] = useState(initialState);
    const { email, password } = formData;

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
        dispatch(LoginAuth({ payload: formData }));
    };

    const handleTabsButton = (val) => {
        childHandleTabs(val)
    }

    return (
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
            <div className="w-full flex justify-center items-center gap-2 md:gap-4">
                <div
                    onClick={() => handleTabsButton("forgetpassword_tab")}
                    title="Forgot Password?"
                    className="text-coral text-sm font-normal leading-4.5 underline cursor-pointer"
                >
                    Forgot Password?
                </div>
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-2 md:gap-4">
                <input
                    className="w-full px-6 py-3.25 lg:py-3.5 bg-indigo rounded-full flex justify-center items-center text-seashell text-base font-normal uppercase cursor-pointer"
                    type="submit"
                    value="LOGIN"
                />
            </div>

            <div className="w-full flex justify-center items-center">
                <p className="text-textColor text-sm font-normal leading-4.5 flex justify-center items-center gap-0.5">
                    <span>New to Riffcuria?</span>
                    <button
                        onClick={() => handleTabsButton("signup_tab")}
                        title="Forgot Password?"
                        className="text-indigo underline"
                    >
                        Click here to create account
                    </button>
                </p>
            </div>
        </form>
    );
}

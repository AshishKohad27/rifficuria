import { useState, useEffect } from "react";

const initialState = {
    email: "",
};

export default function ForgetPasswordForm({ childHandleTabs }) {
    const [formData, setFormData] = useState(initialState);
    const { email } = formData;

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
        // console.log("Login Form Submitted!", formData);
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
                <input
                    className="w-full px-6 py-3.25 lg:py-3.5 bg-indigo rounded-full flex justify-center items-center text-seashell text-base font-normal uppercase cursor-pointer"
                    type="submit"
                    value="send password reset link"
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

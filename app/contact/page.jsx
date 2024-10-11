"use client";
import { useEffect, useState } from "react";
import Newsletter from "@/components/site/newsletter";

const initialState = {
    first_name: "",
    last_name: "",
    email: "",
    query: "",
};

export default function Contact() {
    const [formData, setFormData] = useState(initialState);

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
        console.log("Form Submitted!", formData);
    };

    const { first_name, last_name, email, query } = formData;

    return (
        <main className="mt-20">
            <div className="site-container">
                <article className="flex flex-col justify-center items-center gap-10 md:gap-8 mb-28 md:mb-20">
                    <h2 className="text-textColor text-center text-3.5xl font-bold leading-9.5">
                        Have a question, suggestion, or just want to chat about music?
                        <br className="hidden xl:block" /> We’re all ears! Whether you’re an
                        artist, a music lover, or just exploring new tunes, we’d love to
                        hear from you.
                    </h2>
                    <p className="text-textColor text-center text-base font-normal">
                        Drop us a line, share your thoughts, or ask about the latest
                        reviews, playlists, or upcoming features.
                        <br className="hidden lg:block" /> Fill out the form below, or reach
                        out directly at
                        <span>
                            {" "}
                            <a className="text-indigo" href="mailto:info@riffcuria.com" title="">
                                info@riffcuria.com
                            </a>
                        </span>
                        .
                        <br className="hidden lg:block" /> We’ll get back to you faster than
                        the next beat drops!
                    </p>
                </article>
                <form
                    onSubmit={handleOnSubmit}
                    className="mb-[168px] md:mb-[136px] mx-auto w-full max-w-[445px] flex justify-center items-center flex-col gap-12"
                >
                    <div className="w-full flex flex-col justify-center items-start gap-2 md:gap-4">
                        <label
                            htmlFor="#first_name"
                            className="text-textColor text-sm font-normal leading-4.5"
                        >
                            First Name
                        </label>
                        <input
                            id="first_name"
                            type="text"
                            name="first_name"
                            value={first_name}
                            onChange={handleOnChange}
                            className="text-textColor text-sm font-normal leading-4.5 rounded-full bg-seashell py-2.75 md:py-3.75 px-5 w-full"
                            required
                        />
                    </div>
                    <div className="w-full flex flex-col justify-center items-start gap-2 md:gap-4">
                        <label
                            htmlFor="#last_name"
                            className="text-textColor text-sm font-normal leading-4.5"
                        >
                            Last Name
                        </label>
                        <input
                            id="last_name"
                            type="text"
                            name="last_name"
                            value={last_name}
                            onChange={handleOnChange}
                            className="text-textColor text-sm font-normal leading-4.5 rounded-full bg-seashell py-2.75 md:py-3.75 px-5 w-full"
                            required
                        />
                    </div>
                    <div className="w-full flex flex-col justify-center items-start gap-2 md:gap-4">
                        <label
                            htmlFor="#email"
                            className="text-textColor text-sm font-normal leading-4.5"
                        >
                            Email
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
                            htmlFor="#query"
                            className="text-textColor text-sm font-normal leading-4.5"
                        >
                            Query
                        </label>
                        <textarea
                            id="query"
                            type="text"
                            name="query"
                            value={query}
                            onChange={handleOnChange}
                            rows="10"
                            className="text-textColor text-sm font-normal leading-4.5 rounded-2xl bg-seashell py-2.75 md:py-3.75 px-5 w-full"
                            required
                        />
                    </div>
                    <div className="w-full flex flex-col justify-center items-start gap-2 md:gap-4">
                        <input
                            className="w-full px-6 py-3.25 lg:py-3.5 bg-indigo rounded-full flex justify-center items-center text-seashell text-base font-normal uppercase"
                            type="submit"
                            value="SEND"
                        />
                    </div>
                </form>
            </div>
            <Newsletter />
        </main>
    );
}

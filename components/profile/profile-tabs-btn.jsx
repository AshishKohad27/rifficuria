import { useEffect, useState } from "react";

// redux
import { setProfileTab } from "@/redux/global/global-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import TABS from "@/json/profile";

const tabButtons = [
    { label: "Past Reviews", value: TABS.PAST_REVIEWS },
    { label: "Ratings History", value: TABS.RATINGS_HISTORY },
    { label: "Favourites", value: TABS.FAVOURITES },
];

export default function ProfileTabsButton({ location = "" }) {
    const [containerClass, setContainerClass] = useState(
        "bg-lavender flex justify-center items-center gap-8 lg:gap-10 p-2 rounded-lg"
    );
    const [buttonClass, setButtonClass] = useState(
        "px-4 pt-1.875 pb-1.375 flex justify-center items-center text-white text-base font-bold leading-5.5 uppercase"
    );
    const { profileTabs } = useAppSelector((state) => state.global);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (location === "profile") {
            setContainerClass(
                "bg-lavender justify-center items-center gap-10 p-2 rounded-lg"
            );
            setButtonClass(
                "px-4 pt-1.875 pb-1.375 flex justify-center items-center text-white text-base font-bold leading-5.5 uppercase"
            );
        } else {
            setContainerClass("pl-12 flex-col gap-8");
            setButtonClass(
                "text-textColor text-2xl font-semibold leading-7.5 capitalize text-left"
            );
        }
    }, [profileTabs, location, containerClass, buttonClass]);

    const handleTabs = (val) => {
        console.log("val:", val);
        dispatch(setProfileTab(val));
    };

    return (
        <div className={`flex ${containerClass}`}>
            {tabButtons.map((tab) => (
                <button
                    key={tab.value}
                    onClick={() => handleTabs(tab.value)}
                    className={`${buttonClass}
                        hover:text-indigo ${profileTabs === tab.value
                            ? "!text-indigo underline underline-offset-[6px] decoration-2"
                            : ""
                        }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
}

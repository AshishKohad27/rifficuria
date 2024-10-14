"use client";
import { useEffect, useState } from "react";

export default function SubSectionHeading({ SectionTitle }) {
    const [formattedTitle, setFormattedTitle] = useState(SectionTitle);

    useEffect(() => {
        if (SectionTitle && SectionTitle.includes("_")) {
            setFormattedTitle(SectionTitle.replace(/_/g, " "));
        } else {
            setFormattedTitle(SectionTitle);
        }
    }, [SectionTitle]);

    return (
        <h2 className="text-textColor text-base md:text-2xl font-bold leading-5.5 md:leading-7.5 uppercase">
            {formattedTitle}
        </h2>
    );
}

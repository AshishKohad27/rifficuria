import { useState, useEffect } from "react";
import EmptyStar from "@/public/icon/empty_star.png";
import HalfStar from "@/public/icon/half_star.png";
import FullStar from "@/public/icon/full_star.png";
import Image from "next/image";

export default function Stars({ StarCount, TotalStars = 5, ParentClass, ChildClass = "" }) {
    const [fullStars, setFullStars] = useState(0); // State for full stars
    const [hasHalfStar, setHasHalfStar] = useState(false); // State for half star

    useEffect(() => {
        // Calculate full stars and whether a half star is needed
        const flooredStarCount = Math.floor(StarCount);
        setFullStars(flooredStarCount); // Set full stars based on floored StarCount
        setHasHalfStar(StarCount % 1 !== 0); // Half star check
    }, [StarCount]); // Recalculate whenever StarCount changes

    const emptyStars = TotalStars - (fullStars + (hasHalfStar ? 1 : 0)); // Calculate remaining empty stars

    return (
        <div className={`flex gap-0.75 md:gap-2 ${ParentClass}`}>
            {
                // Render full stars
                Array.from({ length: fullStars }).map((_, index) => (
                    <div key={index} className={`${ChildClass && ChildClass ? ChildClass : "w-2.25 h-2.25"}`}>
                        <Image className="w-full h-full" src={FullStar} alt="Full Star" />
                    </div>
                ))
            }
            {
                // Render half star if needed
                hasHalfStar && (
                    <div className={`${ChildClass && ChildClass ? ChildClass : "w-2.25 h-2.25"}`}>
                        <Image className="w-full h-full" src={HalfStar} alt="Half Star" />
                    </div>
                )
            }
            {
                // Render empty stars for remaining slots
                Array.from({ length: emptyStars }).map((_, index) => (
                    <div key={index} className={`${ChildClass && ChildClass ? ChildClass : "w-2.25 h-2.25"}`}>
                        <Image className="w-full h-full" src={EmptyStar} alt="Empty Star" />
                    </div>
                ))
            }
        </div>
    );
}

import Link from "next/link";

import pagesData from "@/json/all-pages.json";

export default function AllPages() {
    return (
        <div className="container mx-auto my-8">
            <h2 className="text-2xl font-bold mb-4">All Pages</h2>
            <ul className="flex flex-col gap-5">
                {pagesData &&
                    pagesData.map((page, index) => (
                        <li
                            key={page.id}
                            className={`hover:bg-gray-200 transition duration-200 rounded-md ${!page.isAccessible ? "opacity-50 cursor-not-allowed" : ""
                                } ${page.errorComment ? "bg-red-100" : ""} ${page.warningComment ? "bg-yellow-100" : ""
                                }`}
                        >
                            <Link
                                target="_blank"
                                href={page.isAccessible ? page.url : "#"}
                                className="block p-4 text-lg uppercase font-bold"
                            >
                                {index + 1}. {page.title}
                            </Link>
                            {!page.isAccessible && page.errorComment && (
                                <p className="text-red-500 text-sm mt-1">{page.errorComment}</p>
                            )}
                            {page.isAccessible && page.warningComment && (
                                <p className="text-yellow-600 text-sm mt-1">
                                    {page.warningComment}
                                </p>
                            )}
                        </li>
                    ))}
            </ul>
        </div>
    );
}

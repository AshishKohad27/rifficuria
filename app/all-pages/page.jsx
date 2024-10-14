import Link from "next/link";

const pagesData = [
    { id: 1, title: "Home", url: "/", isAccessible: true },
    { id: 2, title: "About", url: "/about", isAccessible: true },
    { id: 3, title: "Album", url: "/album", isAccessible: false, errorComment: "Deployment error occurred" },
    { id: 4, title: "Artist", url: "/artist", isAccessible: false, errorComment: "Deployment error occurred" },
    { id: 5, title: "Contact", url: "/contact", isAccessible: true },
    { id: 6, title: "Profile", url: "/profile", isAccessible: true },
    { id: 7, title: "Review", url: "/review", isAccessible: false, errorComment: "Deployment error occurred" },
    { id: 8, title: "Search", url: "/search", isAccessible: true },
    { id: 9, title: "Terms", url: "/terms", isAccessible: true },
];

export default function AllPages() {
    return (
        <div className="container mx-auto my-8">
            <h2 className="text-2xl font-bold mb-4">All Pages</h2>
            <ul className="flex flex-col gap-5">
                {pagesData.map((page, index) => (
                    <li key={page.id} className={`hover:bg-gray-200 transition duration-200 rounded-md ${!page.isAccessible ? "opacity-50 cursor-not-allowed" : ""}`}>
                        <Link href={page.isAccessible ? page.url : "#"} className="block p-4 text-lg uppercase font-bold">
                            {index + 1}. {page.title}
                        </Link>
                        {!page.isAccessible && page.errorComment && (
                            <p className="text-red-500 text-sm mt-1">{page.errorComment}</p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

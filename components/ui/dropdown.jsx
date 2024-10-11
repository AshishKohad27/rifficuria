import { useState, useEffect, useRef } from "react";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (e) => {
        // Close the dropdown if the click is outside this dropdown
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    const handleItemClick = () => {
        // Close the dropdown when an item is clicked
        setIsOpen(false);
    };

    useEffect(() => {
        // Add event listener to detect clicks outside the dropdown
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            // Clean up the event listener when the component is unmounted
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Options
                <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 01.707 1.707l-4 4a1 1 0 01-1.414 0l-4-4A1 1 0 012.707 4.293l4-4a1 1 0 011.414 0l4 4A1 1 0 0110 3zm0 6a1 1 0 01-.707-1.707l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414l-4-4A1 1 0 0110 9z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <a
                            href="#"
                            onClick={handleItemClick} // Close dropdown on click
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            Account settings
                        </a>
                        <a
                            href="#"
                            onClick={handleItemClick} // Close dropdown on click
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            Support
                        </a>
                        <a
                            href="#"
                            onClick={handleItemClick} // Close dropdown on click
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            License
                        </a>
                        <form method="POST" action="#">
                            <button
                                type="submit"
                                onClick={handleItemClick} // Close dropdown on click
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                Sign out
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;

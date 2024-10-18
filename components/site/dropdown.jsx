import { useState, useEffect, useRef } from "react";

const Dropdown = ({ Title, DropDownId, Variant, DropDownListItem, getSelectedItems }) => {
    const [propClass, setPropClass] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownItems, setDropdownItems] = useState(DropDownListItem);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    const handleItemClick = (name) => {
        setDropdownItems((prevItems) => {
            const updatedItems = prevItems.map((item) =>
                item.name === name ? { ...item, isSelected: !item.isSelected } : item
            );
            return updatedItems; // Return the updated items instead of calling getSelectedItems here
        });
    };

    const clearCheckedItems = () => {
        setDropdownItems((prevItems) => {
            const updatedItems = prevItems.map((item) => ({ ...item, isSelected: false }));
            return updatedItems; // Return the updated items instead of calling getSelectedItems here
        });
    };

    useEffect(() => {
        if (Variant === "Primary") {
            setPropClass("bg-indigo text-seashell");
        } else if (Variant === "Outline") {
            setPropClass("bg-transparent text-indigo");
        } else {
            setPropClass("bg-indigo text-seashell");
        }
    }, [Variant]);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Use useEffect to call getSelectedItems whenever dropdownItems change
    useEffect(() => {
        getSelectedItems(dropdownItems);
    }, [dropdownItems, getSelectedItems]);

    const hasCheckedItems = dropdownItems.some(item => item.isSelected);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className={`flex justify-center items-center gap-2 px-4 py-2 rounded-[80px] border border-indigo box-border ${propClass} ${hasCheckedItems ? "!bg-indigo !text-seashell" : ""}`}
            >
                <span className="text-base font-medium leading-5.25 capitalize">
                    {Title}
                </span>
                {hasCheckedItems ? (
                    <svg
                        onClick={clearCheckedItems}
                        className="w-3 h-3 cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                    >
                        <path
                            d="M11.7209 0.279159C11.542 0.100411 11.2996 0 11.0468 0C10.7939 0 10.5515 0.100411 10.3727 0.279159L6.00006 4.65184L1.62738 0.279159C1.44858 0.100411 1.2061 0 0.953277 0C0.700453 0 0.457974 0.100411 0.279168 0.279159C0.10042 0.457964 0 0.700443 0 0.953267C0 1.2061 0.10042 1.44857 0.279168 1.62737L4.65184 6.00006L0.279168 10.3727C0.10042 10.5515 0 10.7939 0 11.0468C0 11.2996 0.10042 11.542 0.279168 11.7209C0.457974 11.8996 0.700453 12 0.953277 12C1.2061 12 1.44858 11.8996 1.62738 11.7209L6.00006 7.34827L10.3727 11.7209C10.5515 11.8996 10.7939 12 11.0468 12C11.2996 12 11.542 11.8996 11.7209 11.7209C11.8996 11.542 12.0001 11.2996 12.0001 11.0468C12.0001 10.7939 11.8996 10.5515 11.7209 10.3727L7.34827 6.00006L11.7209 1.62737C11.8996 1.44857 12.0001 1.2061 12.0001 0.953267C12.0001 0.700443 11.8996 0.457964 11.7209 0.279159Z"
                            fill="currentColor"
                        />
                    </svg>
                ) : (
                    <svg
                        className="w-3 h-[7px]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? "M1 5L5 1L9 5" : "M1 1L5 5L9 1"}
                        />
                    </svg>
                )}
            </button>

            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-auto min-w-[119px] rounded-md shadow-lg bg-snow ring-1 ring-black ring-opacity-5 focus:outline-none z-[100]">
                    <ul className="py-4 text-sm text-indigo border border-indigo rounded-lg" aria-labelledby={DropDownId}>
                        {dropdownItems.map(({ name, isSelected }, index) => (
                            <li key={index}>
                                <label className="flex items-center px-4 py-2 hover:bg-background2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="mr-2 custom-checkbox w-3.5 h-3.5"
                                        checked={isSelected}
                                        onChange={() => handleItemClick(name)}
                                    />
                                    {name}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;

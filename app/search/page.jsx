"use client";
import React, { useState, useEffect } from "react";

// Components
import MediaSection from "@/components/media/media-section";
import Newsletter from "@/components/site/newsletter";
import WeeksTop10 from "@/components/site//weeks-top-10";
import Dropdown from "@/components/site/dropdown";
import Header from "@/components/site/site-header";

// Json
import ArtistData from "@/json/artist";
import DropDownListItem from "@/json/dropdown-listitem.json";

export default function Search() {
    const [debounceTimeout, setDebounceTimeout] = useState(null);
    const [searchTerms, setSearchTerms] = useState('');
    const [generFilter, setGenerFilter] = useState(DropDownListItem ? DropDownListItem["genre"] : []);
    const [languageFilter, setLanguageFilter] = useState(DropDownListItem ? DropDownListItem["language"] : []); // Correct the filter to "language"

    useEffect(() => {
        // Clear the existing timeout if any
        if (debounceTimeout) {
            clearTimeout(debounceTimeout);
        }

        // Set up a new debounce timeout
        const timeout = setTimeout(() => {
            // console.log("searchTerms:", searchTerms);
        }, 300);

        setDebounceTimeout(timeout);

        // Cleanup function to clear the timeout on unmount or before the next effect
        return () => {
            // Always clear the timeout to prevent memory leaks
            clearTimeout(timeout);
        };
    }, [searchTerms, debounceTimeout]);

    const handleOnChange = (event) => {
        setSearchTerms(event.target.value);
    }

    const handleGetSelectedItems = (dropDownItems, type) => {
        if (type === "genre") {
            setGenerFilter(dropDownItems);
        } else if (type === "language") {
            setLanguageFilter(dropDownItems);
        }
    };

    return (
        <>
            <Header />
            <main className="mt-10 md:mt-16 overflow-hidden">
                <section className="site-container">
                    <div className="flex flex-col gap-8 lg:gap-[91px]">
                        <div className="flex flex-col lg:grid grid-cols-12 gap-8">
                            <div className="col-span-12 lg:col-span-8">
                                <form
                                    action=""
                                    className="flex justify-start items-center gap-4 lg:max-w-[680px]"
                                >
                                    <label
                                        className="text-textColor text-base font-bold capitalize hidden lg:block"
                                        htmlFor="#search_input"
                                    >
                                        Search
                                    </label>
                                    <input
                                        className="text-textColor text-base font-bold capitalize rounded-4xl bg-seashell 
                                        px-5 py-2 flex-grow placeholder:text-textColor placeholder:text-sm placeholder:leading-4.5 lg:placeholder:text-transparent"
                                        type="text"
                                        id="search_input"
                                        placeholder="Search"
                                        name={searchTerms}
                                        value={searchTerms}
                                        onChange={handleOnChange}
                                    />
                                </form>
                            </div>
                            <div className="col-span-12 lg:col-span-4 flex justify-center lg:justify-end items-center">
                                <div className="max-w-[296px] flex justify-start items-center">
                                    <p className="text-textColor text-base font-bold capitalize hidden lg:block">
                                        Filter
                                    </p>
                                    <div className="ml-4 flex gap-4.75">
                                        <Dropdown
                                            Title="genre"
                                            Variant="Outline"
                                            DropDownId="GenreId"
                                            DropDownListItem={
                                                DropDownListItem && DropDownListItem["genre"]
                                            }
                                            getSelectedItems={(items) =>
                                                handleGetSelectedItems(items, "genre")
                                            }
                                        />
                                        <Dropdown
                                            Title="language"
                                            Variant="Outline"
                                            DropDownId="LanguageId"
                                            DropDownListItem={
                                                DropDownListItem && DropDownListItem["language"]
                                            }
                                            getSelectedItems={(items) =>
                                                handleGetSelectedItems(items, "language")
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center flex-col lg:flex-row gap-8">
                            <div>
                                <p className="text-textColor text-base font-normal">
                                    Search results for “new releases”
                                </p>
                            </div>
                            <div
                                className="flex gap-10 items-center justify-center p-4 lg:p-0
                        w-[calc(100%+2*32px)] lg:w-auto overflow-auto bg-seashell lg:bg-transparent"
                            >
                                <p className="text-textColor text-base font-normal underline hidden lg:block">
                                    Filtered by
                                </p>
                                {generFilter || languageFilter ? (
                                    <>
                                        {/* <ul className="hidden lg:flex gap-10 items-center justify-center">
                                            {generFilter &&
                                                generFilter.map((gener) => (
                                                    <li
                                                        title={gener}
                                                        className="flex justify-center items-center gap-2 text-textColor"
                                                    >
                                                        <span className="text-base font-normal underline">
                                                            {gener}
                                                        </span>
                                                        <button className="hover:text-coral transition-all">
                                                            <svg
                                                                className="w-2 h-2"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="8"
                                                                height="9"
                                                                viewBox="0 0 8 9"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M7.81394 0.686106C7.6947 0.56694 7.53305 0.5 7.36454 0.5C7.19596 0.5 7.03432 0.56694 6.91513 0.686106L4.00004 3.60123L1.08492 0.686106C0.965719 0.56694 0.804067 0.5 0.635518 0.5C0.466969 0.5 0.305316 0.56694 0.186112 0.686106C0.0669467 0.80531 0 0.966962 0 1.13551C0 1.30407 0.0669467 1.46571 0.186112 1.58492L3.10123 4.50004L0.186112 7.41513C0.0669467 7.53432 0 7.69596 0 7.86454C0 8.03305 0.0669467 8.1947 0.186112 8.31394C0.305316 8.43306 0.466969 8.5 0.635518 8.5C0.804067 8.5 0.965719 8.43306 1.08492 8.31394L4.00004 5.39885L6.91513 8.31394C7.03432 8.43306 7.19596 8.5 7.36454 8.5C7.53305 8.5 7.6947 8.43306 7.81394 8.31394C7.93307 8.1947 8.00006 8.03305 8.00006 7.86454C8.00006 7.69596 7.93307 7.53432 7.81394 7.41513L4.89885 4.50004L7.81394 1.58492C7.93307 1.46571 8.00006 1.30407 8.00006 1.13551C8.00006 0.966962 7.93307 0.80531 7.81394 0.686106Z"
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </li>
                                                ))}
                                            {languageFilter &&
                                                languageFilter.map((language) => (
                                                    <li
                                                        title={language}
                                                        className="flex justify-center items-center gap-2 text-textColor"
                                                    >
                                                        <span className="text-base font-normal underline">
                                                            {language}
                                                        </span>
                                                        <button className="hover:text-coral transition-all">
                                                            <svg
                                                                className="w-2 h-2"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="8"
                                                                height="9"
                                                                viewBox="0 0 8 9"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M7.81394 0.686106C7.6947 0.56694 7.53305 0.5 7.36454 0.5C7.19596 0.5 7.03432 0.56694 6.91513 0.686106L4.00004 3.60123L1.08492 0.686106C0.965719 0.56694 0.804067 0.5 0.635518 0.5C0.466969 0.5 0.305316 0.56694 0.186112 0.686106C0.0669467 0.80531 0 0.966962 0 1.13551C0 1.30407 0.0669467 1.46571 0.186112 1.58492L3.10123 4.50004L0.186112 7.41513C0.0669467 7.53432 0 7.69596 0 7.86454C0 8.03305 0.0669467 8.1947 0.186112 8.31394C0.305316 8.43306 0.466969 8.5 0.635518 8.5C0.804067 8.5 0.965719 8.43306 1.08492 8.31394L4.00004 5.39885L6.91513 8.31394C7.03432 8.43306 7.19596 8.5 7.36454 8.5C7.53305 8.5 7.6947 8.43306 7.81394 8.31394C7.93307 8.1947 8.00006 8.03305 8.00006 7.86454C8.00006 7.69596 7.93307 7.53432 7.81394 7.41513L4.89885 4.50004L7.81394 1.58492C7.93307 1.46571 8.00006 1.30407 8.00006 1.13551C8.00006 0.966962 7.93307 0.80531 7.81394 0.686106Z"
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </li>
                                                ))}
                                        </ul> */}
                                    </>
                                ) : (
                                    <ul className="hidden lg:flex gap-10 items-center justify-center">
                                        <li className="flex justify-center items-center gap-2 text-textColor">
                                            <span className="text-base font-normal underline">
                                                Pop
                                            </span>
                                            <button className="hover:text-coral transition-all">
                                                <svg
                                                    className="w-2 h-2"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="8"
                                                    height="9"
                                                    viewBox="0 0 8 9"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M7.81394 0.686106C7.6947 0.56694 7.53305 0.5 7.36454 0.5C7.19596 0.5 7.03432 0.56694 6.91513 0.686106L4.00004 3.60123L1.08492 0.686106C0.965719 0.56694 0.804067 0.5 0.635518 0.5C0.466969 0.5 0.305316 0.56694 0.186112 0.686106C0.0669467 0.80531 0 0.966962 0 1.13551C0 1.30407 0.0669467 1.46571 0.186112 1.58492L3.10123 4.50004L0.186112 7.41513C0.0669467 7.53432 0 7.69596 0 7.86454C0 8.03305 0.0669467 8.1947 0.186112 8.31394C0.305316 8.43306 0.466969 8.5 0.635518 8.5C0.804067 8.5 0.965719 8.43306 1.08492 8.31394L4.00004 5.39885L6.91513 8.31394C7.03432 8.43306 7.19596 8.5 7.36454 8.5C7.53305 8.5 7.6947 8.43306 7.81394 8.31394C7.93307 8.1947 8.00006 8.03305 8.00006 7.86454C8.00006 7.69596 7.93307 7.53432 7.81394 7.41513L4.89885 4.50004L7.81394 1.58492C7.93307 1.46571 8.00006 1.30407 8.00006 1.13551C8.00006 0.966962 7.93307 0.80531 7.81394 0.686106Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </button>
                                        </li>
                                        <li className="flex justify-center items-center gap-2 text-textColor">
                                            <span className="text-base font-normal underline">
                                                Rock
                                            </span>
                                            <button className="hover:text-coral transition-all">
                                                <svg
                                                    className="w-2 h-2"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="8"
                                                    height="9"
                                                    viewBox="0 0 8 9"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M7.81394 0.686106C7.6947 0.56694 7.53305 0.5 7.36454 0.5C7.19596 0.5 7.03432 0.56694 6.91513 0.686106L4.00004 3.60123L1.08492 0.686106C0.965719 0.56694 0.804067 0.5 0.635518 0.5C0.466969 0.5 0.305316 0.56694 0.186112 0.686106C0.0669467 0.80531 0 0.966962 0 1.13551C0 1.30407 0.0669467 1.46571 0.186112 1.58492L3.10123 4.50004L0.186112 7.41513C0.0669467 7.53432 0 7.69596 0 7.86454C0 8.03305 0.0669467 8.1947 0.186112 8.31394C0.305316 8.43306 0.466969 8.5 0.635518 8.5C0.804067 8.5 0.965719 8.43306 1.08492 8.31394L4.00004 5.39885L6.91513 8.31394C7.03432 8.43306 7.19596 8.5 7.36454 8.5C7.53305 8.5 7.6947 8.43306 7.81394 8.31394C7.93307 8.1947 8.00006 8.03305 8.00006 7.86454C8.00006 7.69596 7.93307 7.53432 7.81394 7.41513L4.89885 4.50004L7.81394 1.58492C7.93307 1.46571 8.00006 1.30407 8.00006 1.13551C8.00006 0.966962 7.93307 0.80531 7.81394 0.686106Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </button>
                                        </li>
                                        <li className="flex justify-center items-center gap-2 text-textColor">
                                            <span className="text-base font-normal underline">
                                                Hip Hop
                                            </span>
                                            <button className="hover:text-coral transition-all">
                                                <svg
                                                    className="w-2 h-2"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="8"
                                                    height="9"
                                                    viewBox="0 0 8 9"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M7.81394 0.686106C7.6947 0.56694 7.53305 0.5 7.36454 0.5C7.19596 0.5 7.03432 0.56694 6.91513 0.686106L4.00004 3.60123L1.08492 0.686106C0.965719 0.56694 0.804067 0.5 0.635518 0.5C0.466969 0.5 0.305316 0.56694 0.186112 0.686106C0.0669467 0.80531 0 0.966962 0 1.13551C0 1.30407 0.0669467 1.46571 0.186112 1.58492L3.10123 4.50004L0.186112 7.41513C0.0669467 7.53432 0 7.69596 0 7.86454C0 8.03305 0.0669467 8.1947 0.186112 8.31394C0.305316 8.43306 0.466969 8.5 0.635518 8.5C0.804067 8.5 0.965719 8.43306 1.08492 8.31394L4.00004 5.39885L6.91513 8.31394C7.03432 8.43306 7.19596 8.5 7.36454 8.5C7.53305 8.5 7.6947 8.43306 7.81394 8.31394C7.93307 8.1947 8.00006 8.03305 8.00006 7.86454C8.00006 7.69596 7.93307 7.53432 7.81394 7.41513L4.89885 4.50004L7.81394 1.58492C7.93307 1.46571 8.00006 1.30407 8.00006 1.13551C8.00006 0.966962 7.93307 0.80531 7.81394 0.686106Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </button>
                                        </li>
                                    </ul>
                                )}

                                <ul className="flex lg:hidden gap-8 items-center justify-center px-10">
                                    <li className="flex justify-center items-center">
                                        <button className="text-texxtColor text-sm font-normal leading-4.5 capitalize">
                                            rock
                                        </button>
                                    </li>
                                    <li className="flex justify-center items-center">
                                        <button className="text-texxtColor text-sm font-normal leading-4.5 capitalize !text-indigo !font-bold">
                                            Pop
                                        </button>
                                    </li>
                                    <li className="flex justify-center items-center">
                                        <button className="text-texxtColor text-sm font-normal leading-4.5 capitalize">
                                            Hip_Hop
                                        </button>
                                    </li>
                                    <li className="flex justify-center items-center">
                                        <button className="text-texxtColor text-sm font-normal leading-4.5 capitalize !text-indigo !font-bold">
                                            Electronic
                                        </button>
                                    </li>
                                    <li className="flex justify-center items-center">
                                        <button className="text-texxtColor text-sm font-normal leading-4.5 capitalize">
                                            House
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="hidden lg:block"></div>
                            <div className="hidden lg:block"></div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="site-container">
                        <div className="mt-20 md:mt-[98px]">
                            <MediaSection
                                MediaType="songs"
                                Title="NEW songs ON RIFFCURIA"
                                ViewMoreLink="haveLink"
                                ArtistData={ArtistData}
                                GridClass=""
                                DesktopLimits={10}
                                MobileLimits={10}
                                isLoadMore={false}
                            />
                        </div>
                    </div>
                    <div className="mt-22 md:mt-20 hidden lg:block">
                        <Newsletter />
                    </div>
                    <div className="site-container">
                        <div className="mt-22 md:mt-20">
                            <MediaSection
                                MediaType="albums"
                                Title="NEW albums ON RIFFCURIA"
                                ViewMoreLink="haveLink"
                                ArtistData={ArtistData}
                                GridClass=""
                                DesktopLimits={10}
                                MobileLimits={10}
                                isLoadMore={false}
                            />
                        </div>
                    </div>
                    <div className="mb-[156px] pt-4.5 lg:pt-0">
                        <WeeksTop10 />
                    </div>
                </section>
            </main>
        </>
    );
}

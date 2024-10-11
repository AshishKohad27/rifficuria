"use client"
import React, { useState } from "react";

const Filter = () => {
  // State to control dropdown visibility
  const [filterOpen, setFilterOpen] = useState(false);

  // Function to toggle dropdown
  const filterFunc = () => {
    setFilterOpen(!filterOpen);
  };

  return (
    <>
      <button
        onClick={filterFunc}
        id="dropdownDefaultButton"
        className={`${
          filterOpen ? "bg-btn1 text-background" : "bg-transparent text-btn1"
        } border-2 border-btn1 hover:bg-btn1 hover:text-background p-2 px-4 flex items-center rounded-[80px] transition-all ease-in-out duration-200`}
        type="button"
      >
        Filter
        <svg
          className="w-[10px] h-[7px] ms-3"
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
            d={filterOpen ? "M1 5L5 1L9 5" : "M1 1L5 5L9 1"}
          />
        </svg>
      </button>

      {/* Conditionally render dropdown */}
      {filterOpen && (
        <div
          id="dropdown"
          className="z-50 absolute bg-background divide-y divide-background2 rounded-lg shadow mt-2"
        >
          <ul className="py-2 text-sm text-btn1 border border-btn1 rounded-lg" aria-labelledby="dropdownDefaultButton">
            <li>
              <label className="flex items-center px-4 py-2 hover:bg-background2 cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-2 custom-checkbox"
                />
                Rock
              </label>
            </li>

            <li>
              <label className="flex items-center px-4 py-2 hover:bg-background2 cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-2 custom-checkbox"
                />
                Pop
              </label>
            </li>

            <li>
              <label className="flex items-center px-4 py-2 hover:bg-background2 cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-2 custom-checkbox"
                />
                Hip Hop
              </label>
            </li>

            <li>
              <label className="flex items-center px-4 py-2 hover:bg-background2 cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-2 custom-checkbox"
                />
                Electronic
              </label>
            </li>

            <li>
              <label className="flex items-center px-4 py-2 hover:bg-background2 cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-2 custom-checkbox"
                />
                Jazz
              </label>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Filter;
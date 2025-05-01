"use client";
import DropdownContainer from "./DropdownContainer";
import React, { useEffect, useRef, useState } from "react";
import { FORMAT, GENRES, STATUS, YEARS } from "../utilities/Data";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
interface FilterProps {
  category: string;
  placeholder: string;
  queryParams: { [key: string]: string | string[] };
  contents: number[] | string[];
}

const Filter = ({ category, placeholder, queryParams }: FilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [searchValue, setSearchValue] = useState("");
  const router = useRouter();
  const dropdownRef = useRef<HTMLAnchorElement>(null);
  const searchParams = useSearchParams();

  const isSearchFilter = category === "Search";

  // const isSearchActive = e.target.value;

  const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    router.push(`/search/anime?search=${queryParams.Search}`);
  };

  const mapCategoryIntoContents = (categoryString: string) => {
    if (categoryString === "Genres") return GENRES;

    if (categoryString === "Year") {
      return YEARS;
    }
    if (categoryString === "Format") {
      return FORMAT;
    }
    if (categoryString === "Airing Status") {
      return STATUS;
    }

    return [];
  };

  const contents = mapCategoryIntoContents(category);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div onSubmit={handleSubmit} ref={dropdownRef}>
      <div className="cursor-pointer z-50">
        <h6 className="text-lead text-base font-medium pt-4 mb-1">
          {category}
        </h6>
        <div className="flex items-center rounded-md outline-none bg-white shadow-filter box-border font-medium text-sm py-2.5 ">
          {isSearchFilter ? (
            <Image
              className="items-center ml-2"
              height={10}
              width={10}
              alt="chevron"
              src={
                "https://anifinder.netlify.app/static/media/icons-search.aeb48093.svg"
              }
              style={{ height: "18px", width: "18px" }}
            />
          ) : null}

          <input
            className="flex focus:outline-none text-blue max-w-36 ml-2"
            placeholder={placeholder}
            value={queryParams[category]}
            onClick={() => setIsOpen((prev) => !prev)}
            onChange={(e) => {
              const typedValue =  e.target.value
                const params = new URLSearchParams(searchParams.toString());
                params.set(category, typedValue);
                router.push(`/search/anime?${params.toString()}`);
                setIsOpen(!isOpen);
            }}
          />


          {queryParams[category] ? (
            <button
              className=" bg-blue text-white ml-[-16px] mr-[4px] rounded-full w-4 h-[18px] text-xs text-red-500"
              onClick={() => {
                const params = new URLSearchParams(window.location.search);
                params.delete(category);
                router.push(`/search/anime?${params.toString()}`);
              }}
            >
              <span className="mt-[-2px]">x</span>
            </button>
          ) : null}
          {category && category !== "Search" ? (
            <svg
              className="h-4 w-6 -mt-2 text-sm mr-1 text-chevroncol"
              onClick={() => setIsOpen(!isOpen)}
            >
              <path
                d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
                fill="currentColor"
              ></path>
            </svg>
          ) : null}
        </div>
      </div>
      {isOpen ? (
        <DropdownContainer
          contents={contents}
          category={category}
          onSelect={() => setIsOpen(false)}
        />
      ) : (
        !isOpen
      )}
    </div>
  );
};

export default Filter;

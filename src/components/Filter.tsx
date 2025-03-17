"use client";
import DropdownContainer from "@/utilities/DropdownContainer";
import React, { useState } from "react";
import { FORMAT, GENRES, SEASON, STATUS, YEARS } from "../utilities/Data";
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
  const router = useRouter();

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  if (isOpen) {
    document.addEventListener("click", handleClickOutside);
  } else {
    document.removeEventListener("click", handleClickOutside);
  }

  const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    router.push(`/search/anime?search=${queryParams.search}`);
  };
  const searchParams = useSearchParams;

  const mapCategoryIntoContents = (categoryString: string) => {
    if (categoryString === "Genres") {
      return GENRES;
    }
    if (categoryString === "Year") {
      return YEARS;
    }
    if (categoryString === "Format") {
      return FORMAT;
    }
    if (categoryString === "Airing Status") {
      return STATUS;
    }
    if (categoryString === "Season") {
      return SEASON;
    }
    return [];
  };

  const contents = mapCategoryIntoContents(category);

  return (
    <div onSubmit={handleSubmit}>
      <div className="cursor-pointer z-50">
        <h6 className="text-lead text-base font-medium pt-4 mb-1">
          {category}
        </h6>
        <div className="flex items-center rounded-md outline-none bg-white shadow-filter box-border font-medium text-sm py-2.5 ">
          {category === "Search" ? (
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
            onChange={(e) => {
              const params = new URLSearchParams(searchParams.toString());
              params.set(category, e.target.value);
              const searchParam = params.get("Search");
              router.push(`/search/anime?search=${searchParam}`);
              setIsOpen(!isOpen);
            }}
          />
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
        <DropdownContainer contents={contents} category={category} />
      ) : (
        !isOpen
      )}
    </div>
  );
};

export default Filter;

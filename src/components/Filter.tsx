'use client'
import DropdownContainer from "@/utilities/DropdownContainer";
import React, { useState } from "react";
import {FORMAT, GENRES, SEASON, STATUS, YEARS} from '../utilities/Data'
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

const Filter = ({ category, placeholder, queryParams}) => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push(`/search/anime?search=${queryParams.search}`)
  }
  const searchParams = useSearchParams

  const mapCategoryIntoContents = (categoryString: string) => {
    if (categoryString === 'Genres') {
      return GENRES
    }
    if (categoryString === 'Year') {
      return YEARS
    }
    if (categoryString === 'Format') {
      return FORMAT
    }
    if (categoryString === 'Airing Status') {
      return STATUS
    }
    if (categoryString === 'Season') {
      return SEASON
    }
    return []
  }

  const contents = mapCategoryIntoContents(category) 

  console.log(queryParams[category])
  
  return (
    <div onSubmit={handleSubmit}>
      <div className="cursor-pointer z-50">
        <h6 className="text-txtfilter text-base font-medium pt-3 mb-1">
          {category}
        </h6>
        
        <div className="items-center rounded-md outline-none bg-white shadow-filter box-border font-medium text-sm flex py-2.5 px-1.5 " >
        {category === 'Search' ? (
          <Image
          height={10}
          width={10}
          alt="chevron"
          src={
            "https://anifinder.netlify.app/static/media/icons-search.aeb48093.svg"
          }
          style={{ height: "20px", width: "20px" }}
        />
        ): null}
          <input className="flex ml-1 text-blue" placeholder={placeholder}
          value={queryParams[category]} onChange={(e) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(category, e.target.value);
            const searchParam = params.get("search");
            router.push(`/search/anime?search=${searchParam}`); 
            
          }}
          />
          {category && category !== 'Search'? (<svg className="h-4 w-6 text-sm text-chevroncol" onClick={() => setIsOpen(!isOpen)}>
              <path
                d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
                fill="currentColor"
              ></path>
            </svg>): null}
        </div>
      </div>
      {isOpen && category === category ? (
            <DropdownContainer contents={contents} category={category} queryParams={queryParams}/>) : (false)
           }
    </div>
  );
};

export default Filter;
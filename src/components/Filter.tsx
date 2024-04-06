'use client'
import DropdownContainer from "@/utilities/DropdownContainer";
import React, { useState } from "react";
import {FORMAT, GENRES, SEASON, STATUS, YEARS} from '../utilities/Data'
import { useRouter } from "next/navigation";

const Filter =  ({ category, queryParams}) => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push(`/search/anime`)
  }

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

  return (
    <form onSubmit={handleSubmit}>
      <div className="cursor-pointer">
        <h6 className="text-txtfilter text-base font-medium pt-3 mb-1">
          {category}
        </h6>
        <div className="items-center rounded-md outline-none bg-white shadow-filter box-border font-medium text-sm flex py-2.5 px-1.5" >
          <input className="flex mr-1" placeholder="any" 
          />
          <svg className="h-4 w-6 text-sm" onClick={() => setIsOpen(!isOpen)}>
              <path
                d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
                fill="currentColor"
              ></path>
            </svg>
        </div>
       
      </div>
      {isOpen && category === category ? (<div>
            <DropdownContainer contents={contents} category={category} queryParams={queryParams}/>
           </div>) : (false)
           }
    </form>
  );
};

export default Filter;
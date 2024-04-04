import DropdownContainer from "@/utilities/DropdownContainer";
import React, { useState } from "react";

 const YEARS = [
  1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995,
  1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008,
  2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
  2022, 2023,
];

const FORMAT = ["tv", "movie", "special", "ova", "ona", "music"];

const STATUS = ["finished", "current", "unreleased", "tba"];

const GENRES = ['Action', 'Adventure', 'Comedy', 'Drama', 'Ecchi', 'Fantasy', 'Horror', 'Mahou Shoujo', 'Mecha', 'Music', 'Mistery', 'Psychological', 'Romance']

const SEASON = ['All', 'Spring', 'Summer', 'Fall', 'Winter']


const Filter =  ({ category, setChosenFilter, chosenFilter}) => {
  const [isOpen, setIsOpen] = useState(false)


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
    <form>
      <div className="cursor-pointer">
        <h6 className="text-txtfilter text-base font-medium pt-3 mb-1">
          {category}
        </h6>
        <div className="items-center rounded-md outline-none bg-white shadow-filter box-border font-medium text-sm flex py-2.5 px-1.5" onClick={() => setIsOpen(!isOpen)}>
          <input className="flex mr-1" placeholder="any" 
          />
          <svg className="h-4 w-6 text-sm">
              <path
                d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
                fill="currentColor"
              ></path>
            </svg>
        </div>
       
      </div>
      {!isOpen  && category === category ? (<div>
            <DropdownContainer contents={contents} category={category} setChosenFilter={setChosenFilter} chosenFilter={chosenFilter}/>
           </div>) : (false)
           }
    </form>
  );
};

export default Filter;


 // let filtersUrl = "https://kitsu.io/api/edge/anime?" ;
      
  // if (searchWordEntered) {
  //   filtersUrl += `filter[text]=${searchWordEntered}`;
  // }
  // if (searchedGenre) {
  //   filtersUrl += `?&filter[categories]=${searchedGenre}`;
  // }
  // if (chosenYear) {
  //   filtersUrl += `&filter[year]=${chosenYear}`;
  // }
  // if (chosenStatus) {
  //   filtersUrl += `&filter[status]=${chosenStatus}`;
  // }
  // if (chosenFormat) {
  //   filtersUrl += `&filter[subtype]=${chosenFormat}`;
  // }

  //&filter%5Bseason%5D=summer

  //https://kitsu.io/api/edge/anime?fields&filter%5Bseason%5D=summer

  //https://kitsu.io/api/edge/anime?fields%5Banime%5D=slug%2CcanonicalTitle%2Ctitles%2CposterImage%2Cdescription%2CaverageRating%2CstartDate%2CpopularityRank%2CratingRank%2CyoutubeVideoId&filter%5Bsubtype%5D=tv&filter%5Bseason%5D=summer%2Cfall&page%5Boffset%5D=0&page%5Blimit%5D=20&sort=-user_count
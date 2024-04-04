"use client";

import Image from "next/image";
import React from "react";
import Filter from "./Filter";

const Filters = ({ setChosenFilter, chosenFilter}) => {
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  // chosenFilters
  // {
  //   Genres: 'Action'
  // }

  return (

    <div className="flex flex-wrap grid-cols-1 gap-2 items-center justify-center ml-90 mb-32">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <h6 className="text-txtfilter text-base font-medium pt-3 mb-1">Search</h6>
          <div className="items-center rounded-md outline-none bg-white shadow-filter box-border font-medium text-sm flex py-2.5 px-1.5">
            <Image height={10} width={10} alt="chevron"
              src={
                "https://anifinder.netlify.app/static/media/icons-search.aeb48093.svg"
              }
              style={{height: '20px', width:'20px'}}
            />
            
            <input type="text" value={chosenFilter.search} onChange={(e) => setChosenFilter({
              ...chosenFilter,
              search: e.target.value
            })} className="flex ml-1" placeholder="search..." />
          </div>
        </form>
      <Filter setChosenFilter={setChosenFilter} category={'Genres'} chosenFilter={chosenFilter}/>
      <Filter setChosenFilter={setChosenFilter} category={'Year'} chosenFilter={chosenFilter}/>
      <Filter setChosenFilter={setChosenFilter} category={'Season'} chosenFilter={chosenFilter}/>
      <Filter category={'Format'} setChosenFilter={setChosenFilter} chosenFilter={chosenFilter}/>
      <Filter category={'Airing Status'} setChosenFilter={setChosenFilter} chosenFilter={chosenFilter}/>
    </div>
  );
};

export default Filters;
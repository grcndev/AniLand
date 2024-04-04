'use client'
import AnimeContainer from "@/components/AnimeContainer";
import Filters from "@/components/Filters";
import FiltersResult from "@/components/FiltersResult";
import React, { useEffect, useState } from "react";

const SearchPage = ({  }) => {
  const [data, setData] = useState([])
  const [chosenFilter, setChosenFilter ] = useState({
    search: '',
    Genres : '',
    Year: '',
    ['Airing Status']: '',
    Format: '',
    Season: '',
  })

  console.log({chosenFilter})

  useEffect(() => {
    const handleFetch = async () => {
      let filters = '?'
      if (chosenFilter.search) {
        filters += `&filter[text]=${chosenFilter.search}`
      }
      if (chosenFilter.Genres) {
        filters += `&filter[categories]=${chosenFilter.Genres}`
      }
      if (chosenFilter.Year) {
        filters += `&filter[year]=${chosenFilter.Year}`
      }
      if (chosenFilter['Airing Status']) {
        console.log('passed!')
        filters += `&filter[status]=${chosenFilter['Airing Status']}`
      }
      if (chosenFilter.Format) {
        filters += `&filter[subtype]=${chosenFilter.Format}`
      }
      if (chosenFilter.Season) {
        filters += `&filter%5Bseason%5D=${chosenFilter.Season}`
      }

      const res = await fetch(
        `https://kitsu.io/api/edge/anime${filters}`
      );
      const results = await res.json();
      console.log({results})
      setData(results)
    
    }
    handleFetch()
  }, [chosenFilter])


  return (
    <>
      <Filters setChosenFilter={setChosenFilter} chosenFilter={chosenFilter}/>
      <FiltersResult results={data} />
    </>
  );
};

export default SearchPage;

// // {searchParams ? <div className="grid justify-between sm:grid sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5   xl:grid-cols-6 w-full gap-x-4 mx-auto">
// {row.data?.slice(0, 6).map((anime) => {
//     return <Card key={anime.id} anime={anime} />;
//   })}
// </div> :  <AnimeContainer rowsData={rowsData}/> }

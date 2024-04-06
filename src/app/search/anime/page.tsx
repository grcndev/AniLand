'use client'
import Filters from "@/components/Filters";
import FiltersResult from "@/components/FiltersResult";
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from "react";

// 1. tirar o chosen e setchosen
// 2. tirar o queryparam de ser objeto e n passar mais ele pros filtros como prop, pq o search pode ser acessado dentro dos filtros
// 3. tirar o useffect e botar async, server components
// 4. vc pode criar um hook e similarmente, na home, usar o hook

const SearchPage = () => {
  const [data, setData] = useState([])
  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  const genres = searchParams.get('Genres')
  const year = searchParams.get('Year')
  const airing = searchParams.get('Airing Status')
  const season = searchParams.get('Season')
  const format = searchParams.get('Format')

  const queryParams = {
    search: search || '',
    Genres: genres || '',
    Year: year || '',
    ['Airing Status']: airing || '',
    Format: format || '',
    Season: season || '',
  }

  useEffect(() => {
    const handleFetch = async () => {
      let filters = ''
      if (queryParams.search) {
        filters += `&filter[text]=${queryParams.search}`
      }
      if (queryParams.Genres) {
        filters += `&filter[categories]=${queryParams.Genres}`
      }
      if (queryParams.Year) {
        filters += `&filter[year]=${queryParams.Year}`
      }
      if (queryParams['Airing Status']) {
        filters += `&filter[status]=${queryParams['Airing Status']}`
      }
      if (queryParams.Format) {
        filters += `&filter[subtype]=${queryParams.Format}`
      }
      if (queryParams.Season) {
        filters += `&filter%5Bseason%5D=${queryParams.Season}`
      }

      const res = await fetch(
        `https://kitsu.io/api/edge/anime?${filters}`
      );
      const results = await res.json();
      
      setData(results)
    }
    handleFetch()
  }, [search, genres, season, format, airing, year])


  return (
    <>
      <Filters queryParams={queryParams}/>
      <FiltersResult results={data} />
    </>
  );
};

export default SearchPage;
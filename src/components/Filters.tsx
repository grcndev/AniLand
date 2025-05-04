"use client";

import React from "react";
import Filter from "./Filter";
import { useAnimes } from "../../src/context/AnimeContext";

const Filters = () => {
  const { queryParams } = useAnimes()
  
  return (
    <div className="flex flex-wrap gap-6 sm:gap-[10px] md:gap-8 md:px-2 sm:px-0 lg:gap-[28px] xl:gap-7 2xl:gap-11 items-center justify-center ml-90 mb-18">
      <Filter category={"Search"} queryParams={queryParams} />
      <Filter category={"Genres"} placeholder={"Any"} queryParams={queryParams} />
      <Filter category={"Year"} placeholder={"Any"} queryParams={queryParams} />
      <Filter category={"Format"} placeholder={"Any"} queryParams={queryParams} />
      <Filter category={"Airing Status"} placeholder={"Any"} queryParams={queryParams} />
    </div>
  );
};

export default Filters;

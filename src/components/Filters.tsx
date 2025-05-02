"use client";

import React from "react";
import Filter from "./Filter";
import { useAnimes } from "../../src/context/AnimeContext";

const Filters = () => {
  const { queryParams } = useAnimes()
  
  return (
    <div className="flex flex-wrap grid-cols-1 gap-11 px-24 items-center justify-center ml-90 mb-18">
      <Filter category={"Search"} queryParams={queryParams} />
      <Filter category={"Genres"} placeholder={"Any"} queryParams={queryParams} />
      <Filter category={"Year"} placeholder={"Any"} queryParams={queryParams} />
      <Filter category={"Format"} placeholder={"Any"} queryParams={queryParams} />
      <Filter category={"Airing Status"} placeholder={"Any"} queryParams={queryParams} />
    </div>
  );
};

export default Filters;

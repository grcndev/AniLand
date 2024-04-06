"use client";

import Image from "next/image";
import React from "react";
import Filter from "./Filter";
import { useRouter, useSearchParams } from "next/navigation";

const Filters = ({ queryParams }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push(`/search/anime?search=${queryParams.search}`);
  };

  return (
    <div className="flex flex-wrap grid-cols-1 gap-2 items-center justify-center ml-90 mb-32">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <h6 className="text-txtfilter text-base font-medium pt-3 mb-1">
          Search
        </h6>
        <div className="items-center rounded-md outline-none bg-white shadow-filter box-border font-medium text-sm flex py-2.5 px-1.5">
          <Image
            height={10}
            width={10}
            alt="chevron"
            src={
              "https://anifinder.netlify.app/static/media/icons-search.aeb48093.svg"
            }
            style={{ height: "20px", width: "20px" }}
          />

          <input
            type="text"
            value={queryParams.search}
            onChange={(e) => {
              const params = new URLSearchParams(searchParams.toString());
              params.set("search", e.target.value);
              const searchParam = params.get("search");
              router.push(`/search/anime?search=${searchParam}`); // // vamos precisar somar os URLs anteriores, dos outros dropdowns e do search
            }}
            className="flex ml-1"
            placeholder="search..."
          />
        </div>
      </form>
      <Filter category={"Genres"} queryParams={queryParams} />
      <Filter category={"Year"} queryParams={queryParams} />
      <Filter category={"Season"} queryParams={queryParams} />
      <Filter category={"Format"} queryParams={queryParams} />
      <Filter category={"Airing Status"} queryParams={queryParams} />
    </div>
  );
};

export default Filters;

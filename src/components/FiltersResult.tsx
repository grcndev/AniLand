"use client"
import Card from "./Card";
import Skeleton from '@mui/material/Skeleton';
import { Anime, useAnimes } from "../../src/context/AnimeContext";


type ResultsProps = {
  results: {
    data: Anime[];
  };
};

const FiltersResult = ({ results }: ResultsProps) => {
  const { isLoading } = useAnimes()
  return (
    <>
      <section className="group items-center justify-center flex flex-wrap 2xl:px-24 mt-2 grid-cols-1 gap-2 ml-90 mb-32">
        <div className="flex flex-col xl:mx-48">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full xl:grid-cols-5 2xl:grid-cols-6">
            {isLoading
            ? (Array.from({ length: 12}).map((_, idx: number) => (
              <div key={idx} className="m-2 rounded-sm overflow-hidden">
              <Skeleton  variant="rectangular" animation="wave" width={185} height={265} className="rounded-md"/>
              </div>
            ))
          ) : results.data.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 text-lg mt-10">
              No results found.
            </div>
          ) : (
            results.data?.slice(0, 12).map((anime) => (
                <Card key={anime.id} anime={anime} />
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default FiltersResult;

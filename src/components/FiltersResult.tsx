"use client"
import Card from "./Card";
import Footer from "./Footer";
import Skeleton from '@mui/material/Skeleton';
import { useAnimes } from "../../src/context/AnimeContext";

const FiltersResult = ({ results }) => {
  const { isLoading } = useAnimes()

  return (
    <div>
      <div className="group items-center justify-center flex flex-wrap 2xl:px-24 mt-16 grid-cols-1 gap-2 ml-90 mb-32">
        <div className="flex flex-col xl:mx-48">
          <div className="grid sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full xl:grid-cols-6">
            {isLoading !== false
            ? Array.from({ length: 12}).map((_, idx) => (
              <div className="m-2 rounded-sm overflow-hidden">
              <Skeleton key={idx} variant="rectangular" animation="wave" width={185} height={265} className="rounded-md"/>
              </div>
            ))
            : results.data?.slice(0, 12).map((anime) => (
                <Card key={anime.id} anime={anime} />
              ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default FiltersResult;

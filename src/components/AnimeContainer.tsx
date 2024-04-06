import React from "react";
import Card from "./Card";

const AnimeContainer = ({ rowsData }) => {
  return (
    <>
    {rowsData?.map((row, index) => {

        return <div key={index} className=" group flex mx-auto">
        <div className="flex flex-col mx-48">
          <h2 className="text-txtcatg text-xl ml-3 font-medium">{row.title}</h2>
          <div className="grid justify-between sm:grid sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5   xl:grid-cols-6 w-full gap-x-4 mx-auto">
            {row.data?.slice(0, 6).map((anime) => {
              return <Card key={anime.id} anime={anime} />;
            })}
          </div>
        </div>
      </div>
    })}

    </>
  );
};

export default AnimeContainer;

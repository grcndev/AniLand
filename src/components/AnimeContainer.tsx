import React from "react";
import Card from "./Card";

const AnimeContainer = ({ rowsData }) => {
  return (
    <>
      {rowsData?.map((row, index) => {
        return (
          <div key={index} className=" group items-center justify-center flex flex-wrap 2xl:px-24 mt-16 grid-cols-1 gap-2 ml-90 mb-32">
            <div className="flex flex-col xl:mx-48">
              <h2 className="text-txtcatg text-xl ml-3 font-medium">
                {row.title}
              </h2>
              <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6">
                {row.data?.slice(0, 6).map((anime) => {
                  return <Card key={anime.id} anime={anime} />;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AnimeContainer;

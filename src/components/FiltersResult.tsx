import React from "react";
import Card from "./Card";
import Footer from "./Footer";

const FiltersResult = ({ results }) => {
  return (
    <>
      <div className=" group flex mx-auto mt-6">
        <div className="flex flex-col mx-48">
          <div className="grid justify-between sm:grid sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5 w-full xl:grid-cols-6 gap-x-4 mx-auto">
            {results.data?.map((anime) => {
              return <Card key={anime.id} anime={anime} />;
            })}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default FiltersResult;

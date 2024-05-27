import React from "react";
import Card from "./Card";
import Footer from "./Footer";

const FiltersResult = ({ results }) => {
  return (
    <div className="">
      <div className="group items-center justify-center flex flex-wrap 2xl:px-24 mt-16 grid-cols-1 gap-2 ml-90 mb-32">
        <div className="flex flex-col xl:mx-48">
          <div className="grid sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full xl:grid-cols-6">
            {results.data?.slice(0, 20).map((anime) => {
              return <Card key={anime.id} anime={anime} />;
            })}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default FiltersResult;

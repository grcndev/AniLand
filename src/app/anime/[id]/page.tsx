import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionAnimeId from "@/utilities/SectionAnimeId";
import Image from "next/image";
import React from "react";

const AnimePage = async ({ params }) => {
  const animeId = params.id;

  //   const year = anime.attributes.createdAt.slice(0, 4);

  const res = await fetch(`https://kitsu.io/api/edge/anime/${animeId}`);
  const anime = await res.json();
  return (
    <>
    <div className="flex flex-col relative mt-0">
      <div className="w-full h-full z-10 relative shadow-sdcover bg-cover bg-repeat bg-center">
        <Navbar />
        <Image
          src={anime.data.attributes.coverImage.large}
          className="overflow-clip w-full"
          width={1000}
          height={1000}
          alt="image-cover"
          style={{ width: "100%", height: "100%", marginTop: "-80px" }}
        />
      </div>

      <div className="flex justify-between bg-sgtxcol h-72">
        <div className="absolute z-40">
          <Image
            className="{styles.image}"
            src={anime.data.attributes.posterImage.large}
            alt="image-small"
            width={100}
            height={170}
            style={{
              height: "270px",
              width: "215px",
              marginTop: "-80px",
              marginLeft: "50px",
              zIndex: "40",
            }}
          />
          <div className="flex px-4 py-2 h-20">
            <div className="flex px-10 m-3 rounded-md bg-addlist ml-8">
              <span className="text-xs mt-3 w-20 items-center justify-between text-sgtxcol">
                Add to list
              </span>
            </div>
            <div className="mt-3 rounded-md w-10 h-10 bg-buttonfav">
              <svg
                className="h-8 w-8 items-center text-sgtxcol mt-2 ml-2"
                viewBox="0 0 800 800"
              >
                <path
                  className="h-4 w-4 bg-sgtxcol"
                  d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-4 mx-4 gap-4 ml-60 text-singletxt">
          <h3 className="mt-6 ml-8 mb-6">
            {anime.data.attributes.titles.en_jp}
          </h3>
          <p className="flex ml-8 mr-72">{anime.data.attributes.description}</p>
        </div>
      </div>

      <div className="flex align-center w-200 mt-8 py-4">
        <div className="bg-sgtxcol ml-12 pl-4 py-4 pr-12">
          <SectionAnimeId
            title={"English"}
            span={anime.data.attributes.titles.en_jp}
          />
          <SectionAnimeId
            title={"Format"}
            span={anime.data.attributes.titles.en_jp}
          />
          <SectionAnimeId
            title={"Episode Duration"}
            span={anime.data.attributes.episodeLength}
          />
          <SectionAnimeId
            title={"Status"}
            span={anime.data.attributes.status}
          />
          <SectionAnimeId
            title={"Start Date"}
            span={anime.data.attributes.start_date}
          />
          <SectionAnimeId
            title={"Community Approval"}
            span={anime.data.attributes.titles.en_jp}
          />
          <SectionAnimeId
            title={"Popularity Rank"}
            span={anime.data.attributes.averageRating}
          />
          <SectionAnimeId
            title={"Rating Rank"}
            span={anime.data.attributes.ratingRank}
          />
          <SectionAnimeId
            title={"Age Rating"}
            span={anime.data.attributes.ageRating}
          />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AnimePage;

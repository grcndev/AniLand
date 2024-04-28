import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionAnimeId from "@/utilities/SectionAnimeId";
import Image from "next/image";
import React from "react";

const AnimePage = async ({ params }) => {
  const animeId = params.id;
  const res = await fetch(`https://kitsu.io/api/edge/anime/${animeId}`);
  const anime = await res.json();
  const cover = anime.data.attributes.coverImage.large
  return (
    <>
    <div className="flex flex-col relative mt-0">
      <div className="w-full xs:h-32 md:h-full z-10 relative shadow-sdcover bg-cover bg-repeat bg-center">
        <Navbar />
        <Image
          src={cover}
          className=""
          width={1400}
          height={1000}
          alt="image-cover"
          style={{ width: "100%", height: "100%", marginTop: "-80px" }}
        />
      </div>

      <div className="flex justify-between bg-sgtxcol md:h-[450px] lg:h-[450px] xl:h-[350px]">
        <div className="xs:ml-0 sm:ml-2 md:ml-4 lg:ml-8 xl:ml-24 2x:ml-40 absolute z-40">
          <Image
            className="-mt-20 ml-12 z-40 xs:w-[100px] xs:h-[141px] md:w-[215px] md:h-[270px]"
            src={anime.data.attributes.posterImage.large}
            alt="image-small"
            width={200}
            height={260}
            style={{
              maxHeight: "270px",
              maxWidth: "215px",
              minHeight: "141px",
              minWidth: "100px",
              
            }}
          />
          <div className="flex px-4 py-2 h-20">
            <div className="flex justify-between pl-8 m-3.5 rounded-[3px] bg-addlist ml-8">
              <span className="text-sm text-['roboto'] font-normal mt-2.5 ml-2 w-20 items-center justify-between text-sgtxcol">
                Add to list
              </span>
              <span className="w-8 cursor-pointer h-10 ml-2 flex items-end bg-bgcbody/[0.2]">
                <svg className="w-9 h-[33px] ml-1 mt-4 font-[50] text-[4px] text-bgcbody"><path
                d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
                fill="currentColor"
              ></path></svg>
              </span>
            </div>
            <div className="mt-3.5 rounded-[3px] w-10 h-9 bg-buttonfav">
              <svg
                className="h-[28px] w-8 items-center text-sgtxcol mt-2.5 ml-2.5"
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
        <div className="flex flex-col min-pl-4 gap-1 sm:ml-[240px] md:ml-[300px] lg:ml-[320px] xl:ml-[350px] 2xl:ml-[420px] sm:mr-4 md:mr-6 lg:mr-8 xl:mr-8 font-roboto text-singletxt">
          <h3 className="mt-8 text-xl ml-8 mb-6">
            {anime.data.attributes.titles.en_jp}
          </h3>
          <p className="flex leading-6 text-[15px] xs:mr-0 sm:mr-0 md:mr-4 lg:mr-8 xl:mr-52 sm:pl-2 md:pl-4 lg:pl-8">{anime.data.attributes.description}</p>
        </div>
      </div>

      <div className="flex xs:ml-0 sm:ml-4 md:ml-8 lg:ml-10 xl:ml-24 2x:ml-52 align-center w-200 mt-8 py-4">
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

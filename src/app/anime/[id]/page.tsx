import React from "react";

const AnimePage = async ({ params }) => {
  const animeId = params.id;

  //   const score = anime.attributes.averageRating;
  //   const synopsis = anime.attributes.synopsis;
  //   const year = anime.attributes.createdAt.slice(0, 4);
  //   const rank = anime.attributes.popularityRank;
  //   const rate = anime.attributes.ratingRank;

  const res = await fetch(`https://kitsu.io/api/edge/anime/${animeId}`);
  const anime = await res.json();
  return <div>{anime.data.attributes.titles.en}</div>;
};

export default AnimePage;

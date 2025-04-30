"use client";
import Image from "next/image";
import Link from "next/link";
import Badge from "./Badge";
import { useState } from "react";

const Card = ({ anime }) => {
  const [isHovering, setIsHovering] = useState(false);
  const title = anime.attributes.titles.en;
  const canonicalTitle = anime.attributes.canonicalTitle;
  const poster = anime.attributes.posterImage.large;

  console.log(anime);

  return (
    <>
      <div className="w-full text-center relative">
        {isHovering ? (
          <Badge
            rating={anime.attributes.averageRating}
            title={anime.attributes.titles.en || canonicalTitle}
            episodes={anime.attributes.episodeLength}
            status={anime.attributes.status}
            age={anime.attributes.ageRatingGuide}
            format={anime.attributes.subtype}
          />
        ) : null}
        <div className="p-4 max-w-6xl mx-auto">
          <Link href={`/anime/${anime.id}`}>
            <div className="flex flex-col">
              <Image
                className="h-full mb-3 rounded-sm"
                height={265}
                width={185}
                alt="poster"
                src={poster}
                style={{ height: "265 px", width: "185 px" }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              />
              <div className="text-sm mb-3 text-left break-all w-[175px] lg:max-w-[100%] text-txtcard">
                {title || canonicalTitle}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;

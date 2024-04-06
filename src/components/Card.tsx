import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ anime }) => {
  const title = anime.attributes.titles.en;
  const canonicalTitle = anime.attributes.canonicalTitle
  const poster = anime.attributes.posterImage.large;

  return (
    <div className="w-full mx-auto">
      <div className="p-4 max-w-6xl mx-auto">
        <Link href={`/anime/${anime.id}`}>
          <div className="flex flex-col justify-evenly">
            <Image
              className="h-full max-w-full mb-3"
              height={265}
              width={185}
              alt="poster"
              src={poster}
              style={{ height: "100%", width: "100%" }}
            />
            <div className="text-sm mb-3 text-txtcard">{title || canonicalTitle}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
import React from "react";

const SectionAnimeId = ({title, span}) => {
  return (
    <div className="flex  flex-col gap-1">
      <h6 className="bg-titlesec text-sm">{title}</h6>
      <span className="text-xs text-txnav mb-6">{span}</span>
    </div>
  );
};

export default SectionAnimeId;

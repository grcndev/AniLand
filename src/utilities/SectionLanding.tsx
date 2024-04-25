import Image from "next/image";
import React from "react";

const SectionLanding = ({ sectionTitle, sectionText, svg }) => {
  return (
    <div className="flex items-center justify-evenly mt-18  pb-16 my-6">
      <Image
        className="h-24 w-20"
        alt="landings"
        width={20}
        height={20}
        src={svg}
        style={{ height: "80 px", width: "74.72 px"}}
      />
      <div className="flex flex-col gap-2s ml-8">
        <h6 className="text-mjtitleldg text-lg w-64">{sectionTitle}</h6>
        <span className=" block items-center p-x-2 text-spanldg w-64 mt-2 text-sm font-light leading-6">{sectionText}</span>
      </div>
    </div>
  );
};

export default SectionLanding;

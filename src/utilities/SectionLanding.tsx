import Image from "next/image";
import React from "react";

const SectionLanding = ({ sectionTitle, sectionText, svg }) => {
  return (
    <div className="flex justify-center mt-20  pb-20 px-30 max-w-20 mx-20 my-6">
      <Image
        className="h-24 w-20 mx-6"
        alt="landings"
        width={20}
        height={20}
        src={svg}
        style={{ height: "96px", width: "80px", marginRight: "30px"}}
      />
      <div className="flex flex-col gap-4 max-w-xs">
        <h6 className="text-mjtitleldg text-lg ">{sectionTitle}</h6>
        <span className=" block items-center p-x-4 text-spanldg w-auto mt-2 text-sm font-light line-clamp-2 leading-6">{sectionText}</span>
      </div>
    </div>
  );
};

export default SectionLanding;

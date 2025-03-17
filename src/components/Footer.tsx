import React from "react";

const Footer = () => {
  const sections = [
    {
      title: "Donate",
      links: ["AniLand.co", "AniChart.net"],
      extraClasses: "xl:ml-80",
    },
    {
      title: "Apps",
      links: ["Site Stats", "ARecomendations", "API"],
      extraClasses: "xl:ml-52",
    },
    {
      title: "Discord",
      links: ["Twitter", "Facebook", "GitHub"],
      extraClasses: "xl:ml-36",
    },
    {
      title: "App Data",
      links: ["Moderators", "Contact", "Terms & Privacy", "Site Map"],
    },
  ];

  return (
    <div className=" grid mt-10 font-bold bg-footerbg">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 2xl:mt-10 ml-8 sm:ml-48">
        <div>
          <div className="flex mt-6 mb-4 text-blue">Site Theme</div>
          <div className="flex gap-2 mb-8">
            {["bg-bgcbody", "text-footertxt"].map((style, index) => (
              <div
                key={index}
                className={`px-3 py-3 w-2 h-2 rounded-sm inline-block border-2 border-bordersq ${style}`}
              >
                <span className="flex text-left font-light -mt-1.5 -ml-2.5">A</span>
              </div>
            ))}
          </div>
        </div>

        {sections.map(({ title, links, extraClasses }, index) => (
          <div key={index} className={`${extraClasses} mb-6`}>
            <h2 className="cursor-pointer text-footertxt hover:text-blue mt-6 mb-2">{title}</h2>
            {links.map((link, i) => (
              <h2 key={i} className="cursor-pointer text-footertxt hover:text-blue mb-2">{link}</h2>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;





// import React from "react";

// const Footer = () => {
//   return (
//     <div className="ml-5grid mt-10 font-bold bg-footerbg ">
//       <div className="grid sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 2xl:mt-10 ml-8 sm:ml-48">
//         <div className="">
//           <div className="flex mt-6 mb-4 text-blue">Site Theme</div>
//           <div className="flex gap-2 mb-8">
//             <div className="px-3 py-3 w-2 h-2 rounded-sm inline-block border-2 border-bordersq bg-bgcbody">
//               <span className="flex text-left font-light -mt-1.5 -ml-2.5">
//                 A
//               </span>
//             </div>
//             <div className="px-3 py-3 w-2 h-2 rounded-sm inline-block border-2 border-bordersq text-footertxt">
//               <span className="flex text-left font-light -mt-1.5 -ml-2.5">
//                 A
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className=" xl:ml-80 mb-6">
//           <h2 className="cursor-pointer text-footertxt hover:text-blue sm:mt-6 md:mt-8 lg:mt-6 xl:mt-6 mt-4 mb-2">
//             Donate
//           </h2>
//           <h2 className="cursor-pointer text-footertxt hover:text-blue mb-2">
//             AniLand.co
//           </h2>
//           <h2 className="cursor-pointer text-footertxt hover:text-blue mb-8">
//             AniChart.net
//           </h2>
//         </div>

//         <div className=" xl:ml-52 mb-6">
//           <h2 className="cursor-pointer text-footertxt hover:text-blue lg:mt-6 xl:mt-6  2xl:mt-4 mb-2">
//             Apps
//           </h2>
//           <h2 className="cursor-pointer text-footertxt hover:text-blue mb-2">
//             Site Stats
//           </h2>
//           <h2 className="cursor-pointer text-footertxt hover:text-blue mb-2">
//             ARecomendations
//           </h2>
//           <h2 className="cursor-pointer text-footertxt hover:text-blue mb-8">
//             API
//           </h2>
//         </div>
//         <div className="xl:ml-36 mb-6">
//           <h2 className="cursor-pointer text-footertxt hover:text-blue xl:mt-6 mb-2">
//             Discord
//           </h2>
//           <h2 className="cursor-pointer text-footertxt hover:text-blue mb-2">
//             Twitter
//           </h2>
//           <h2 className="cursor-pointer text-footertxt hover:text-blue mb-2">
//             Facebook
//           </h2>
//           <h2 className="cursor-pointer text-footertxt hover:text-blue mb-8">
//             GitHub
//           </h2>
//         </div>
//         <div className="mb-6">
//           <h2 className="cursor-pointer text-footertxt hover:text-blue 2xl:mt-4 mb-2">
//             App Data
//           </h2>
//           <h2 className="cursor-pointer text-footertxt hover:text-blue mb-2">
//             Moderators
//           </h2>
//           <h2 className="cursor-pointer text-footertxt hover:text-blue mb-2">
//             Contact
//           </h2>
//           <h2 className="cursor-pointer text-footertxt hover:text-blue mb-2">
//             Terms & Privacy
//           </h2>
//           <h2 className="cursor-pointer text-footertxt hover:text-blue mb-8">
//             Site Map
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col mt-10 font-bold bg-footerbg h-">
      <div className="ml-10">
        <div className="flex mt-6 mb-4 text-addlist">Site Theme</div>
        <div className="flex gap-2 mb-8">
          <div className="px-3 py-3 w-2 h-2 rounded-sm inline-block border-2 border-bordersq bg-bgcbody">
            <span className="flex text-left font-light -mt-1.5 -ml-2.5">A</span>
          </div>
          <div className="px-3 py-3 w-2 h-2 rounded-sm inline-block border-2 border-bordersq text-footertxt">
            <span className="flex text-left font-light -mt-1.5 -ml-2.5">A</span>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="cursor-pointer text-footertxt hover:text-addlist mt-4 mb-2">Donate</h2>
          <h2 className="cursor-pointer text-footertxt hover:text-addlist mb-2">AniFinder.co</h2>
          <h2 className="cursor-pointer text-footertxt hover:text-addlist mb-8">AniFinder.netlify.app</h2>
        </div>
        <div className="cursor-pointer text-footertxt mb-4">
          <h2 className="cursor-pointer text-footertxt hover:text-addlist mb-2" >App</h2>
          <h2 className="cursor-pointer text-footertxt hover:text-addlist mb-2">Site Stats</h2>
          <h2 className="cursor-pointer text-footertxt hover:text-addlist mb-2">ARecomendations</h2>
          <h2 className="cursor-pointer text-footertxt hover:text-addlist mb-8">API</h2>
        </div>
        <div className="cursor-pointer text-footertxt mb-4">
          <h2 className="cursor-pointer text-footertxt hover:text-addlist mb-2">Discord</h2>
          <h2 className="cursor-pointer text-footertxt hover:text-addlist mb-2">Twitter</h2>
          <h2 className="cursor-pointer text-footertxt hover:text-addlist mb-2">Facebook</h2>
          <h2 className="cursor-pointer text-footertxt hover:text-addlist mb-8">GitHub</h2>
        </div>
        <div className="mb-6">
          <h2 className="cursor-pointer text-footertxt hover:text-addlist mb-2">App Data</h2>
          <h2 className="cursor-pointer text-footertxt hover:text-addlist mb-2">Moderators</h2>
          <h2 className="cursor-pointer text-footertxt hover:text-addlist mb-2">Contact</h2>
          <h2 className="cursor-pointer text-footertxt hover:text-addlist mb-2">Terms & Privacy</h2>
          <h2 className="cursor-pointer text-footertxt hover:text-addlist mb-8">Site Map</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;

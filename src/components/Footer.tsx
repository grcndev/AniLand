import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col mt-10 font-bold bg-footerbg h-">
      <div className="ml-10">
        <div className="flex mt-6 mb-4 text-addlist">Site Theme</div>
        <div className="flex gap-2">
        <div>
          <div className="px-3 py-3 w-2 h-2 border-2 border-bordersq bg-bgcbody">A</div>
        </div>
        <div>
          <div className="px-3 py-3 w-2 h-2 border-2 border-bordersq text-bgcbody">A</div>
        </div>
        </div>

        <div className="text-footertxt gap-6 mb-4 cursor-pointer">
          <h2>Donate</h2>
          <h2>AniFinder.co</h2>
          <h2>AniFinder.netlify.app</h2>
        </div>
        <div className="text-footertxt mb-4">
          <h2>App</h2>
          <h2>Site Stats</h2>
          <h2>ARecomendations</h2>
          <h2>API</h2>
        </div>
        <div className="text-footertxt mb-4">
          <h2>Discord</h2>
          <h2>Twitter</h2>
          <h2>Facebook</h2>
          <h2>GitHub</h2>
        </div>
        <div className="text-footertxt mb-4">
          <h2>App Data</h2>
          <h2>Moderators</h2>
          <h2>Contact</h2>
          <h2>Terms & Privacy</h2>
          <h2>Site Map</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;

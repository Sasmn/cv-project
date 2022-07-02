//rfc
import React from "react";
import emailIcon from "../icons/reshot-icon-email-P9WA8LS724.svg";
import websiteIcon from "../icons/reshot-icon-personal-website-SHMULA9ZYF.svg";
import phoneIcon from "../icons/reshot-icon-phone-YUPNL5R2TW.svg";
import Contact from "./Contact";

function GeneralInfo() {
  //useState
  return (
    <div className="flex flex-wrap m-8 relative">
      <div className="w-28 h-28 bg-yellow-500 absolute -z-10 rounded-full"></div>
      <h1 className="flex-1 basis-full mt-8 ml-8 text-5xl font-bold">Name</h1>
      <h2 className="ml-8 mr-16">work position</h2>
      <ul className="flex flex-1 justify-around border-t-2 border-gray-500">
        <Contact name="Phone" imageSrc={phoneIcon} />
        <Contact name="Email" imageSrc={emailIcon} />
        <Contact name="Website" imageSrc={websiteIcon} />
      </ul>
    </div>
  );
}

export default GeneralInfo;

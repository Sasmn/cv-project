//rfc
import React from "react";
import emailIcon from "../icons/reshot-icon-email-P9WA8LS724.svg";
import websiteIcon from "../icons/reshot-icon-personal-website-SHMULA9ZYF.svg";
import phoneIcon from "../icons/reshot-icon-phone-YUPNL5R2TW.svg";
import Contact from "./Contact";

function GeneralInfo() {
  //useState
  return (
    <div className="flex flex-wrap box-border max-w-full overflow-hidden m-8 relative">
      <div className="w-28 h-28 bg-yellow-500 absolute -z-10 rounded-full"></div>
      <div className="flex-1 basis-full mt-8 ml-8">
        <input
          type="text"
          placeholder="name"
          autoComplete="off"
          className="text-5xl font-bold bg-transparent w-96 max-w-[60%] h-14 pl-2 pr-2 rounded-2xl focus:outline-none"
        />
      </div>
      <input
        type="text"
        placeholder="position"
        className="ml-8 mr-16 mt-2 font-semibold text-xl w-60 max-w-[50%] h-8 bg-transparent pl-1 pr-1 rounded-xl focus:outline-none"
      ></input>
      <ul className="flex flex-1 flex-wrap basis-full md:basis-0 justify-around items-center p-2 border-t-2 border-gray-500 mt-6">
        <Contact name="Phone" imageSrc={phoneIcon} />
        <Contact name="Email" imageSrc={emailIcon} />
        <Contact name="Website" imageSrc={websiteIcon} />
      </ul>
    </div>
  );
}

export default GeneralInfo;

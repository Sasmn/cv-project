import React, { useState, useEffect } from "react";
import emailIcon from "../icons/reshot-icon-email-P9WA8LS724.svg";
import websiteIcon from "../icons/reshot-icon-personal-website-SHMULA9ZYF.svg";
import phoneIcon from "../icons/reshot-icon-phone-YUPNL5R2TW.svg";
import Contact from "./Contact";

function GeneralInfo() {
  const [GeneralInfos, setGeneralInfos] = useState(
    () =>
      JSON.parse(localStorage.getItem("GeneralInfo")) || {
        name: "",
        position: "",
        phone: "",
        email: "",
        website: "",
      }
  );

  function handleChange(e) {
    setGeneralInfos((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  }

  useEffect(() => {
    localStorage.setItem("GeneralInfo", JSON.stringify(GeneralInfos));
  }, [GeneralInfos]);

  return (
    <div className="flex flex-wrap box-border max-w-full m-8 relative">
      <div className="w-28 h-28 bg-yellow-500 absolute -z-10 rounded-full"></div>
      <div className="flex-1 basis-full mt-8 ml-8">
        <input
          onChange={handleChange}
          value={GeneralInfos.name}
          name="name"
          type="text"
          placeholder="name"
          autoComplete="off"
          className="text-5xl font-bold bg-transparent w-full max-w-full h-14 pl-2 pr-2 rounded-2xl min-w-0 focus:outline-none"
        />
      </div>
      <input
        onChange={handleChange}
        value={GeneralInfos.position}
        name="position"
        type="text"
        placeholder="position"
        className="ml-8 m-r-4 mt-2 font-semibold text-xl w-[23%] h-8 bg-transparent pl-1 pr-1 rounded-xl focus:outline-none"
      ></input>
      <ul className="flex flex-1 flex-wrap basis-full md:basis-0 justify-around items-center p-2 border-t-2 border-gray-500 mt-6">
        <Contact
          name="Phone"
          imageSrc={phoneIcon}
          GeneralInfos={GeneralInfos}
          handleChange={handleChange}
        />
        <Contact
          name="Email"
          imageSrc={emailIcon}
          GeneralInfos={GeneralInfos}
          handleChange={handleChange}
        />
        <Contact
          name="Website"
          imageSrc={websiteIcon}
          GeneralInfos={GeneralInfos}
          handleChange={handleChange}
        />
      </ul>
    </div>
  );
}

export default GeneralInfo;

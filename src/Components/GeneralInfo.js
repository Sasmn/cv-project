import React, { useState, useEffect } from "react";
import emailIcon from "../icons/reshot-icon-email-P9WA8LS724.svg";
import websiteIcon from "../icons/reshot-icon-personal-website-SHMULA9ZYF.svg";
import phoneIcon from "../icons/reshot-icon-phone-YUPNL5R2TW.svg";
import Contact from "./Contact";

function GeneralInfo(props) {
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
      <span
        className="w-28 h-28 absolute -z-10 rounded-full"
        style={{ backgroundColor: props.color }}
      ></span>
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
        className="basis-full lg:basis-[30%] grow-1 pl-11 mt-1 font-semibold text-xl h-8 bg-transparent pr-1 rounded-xl focus:outline-none min-w-0 w-0"
      ></input>
      <ul className="flex flex-1 flex-wrap basis-full lg:basis-[70%] justify-around items-center p-2 border-t-2 border-gray-500 mt-6">
        <Contact
          name="Phone"
          color={props.color}
          imageSrc={phoneIcon}
          GeneralInfos={GeneralInfos}
          handleChange={handleChange}
        />
        <Contact
          name="Email"
          color={props.color}
          imageSrc={emailIcon}
          GeneralInfos={GeneralInfos}
          handleChange={handleChange}
        />
        <Contact
          name="Website"
          color={props.color}
          imageSrc={websiteIcon}
          GeneralInfos={GeneralInfos}
          handleChange={handleChange}
        />
      </ul>
    </div>
  );
}

export default GeneralInfo;

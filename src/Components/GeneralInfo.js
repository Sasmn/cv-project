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
    <div className="flex flex-wrap overflow-hidden max-w-full p-2 md:p-4 lg:p-8 relative">
      <span
        className="w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 print:w-28 print:h-28 absolute -z-10 rounded-full"
        style={{ backgroundColor: props.color }}
      ></span>
      <div className="flex-1 basis-full mt-3 lg:mt-6 overflow-hidden">
        <input
          onChange={handleChange}
          value={GeneralInfos.name}
          name="name"
          type="text"
          placeholder="name"
          autoComplete="off"
          className="pl-1 lg:pl-5 print:pl-5 text-3xl md:text-4xl lg:text-6xl print:text-6xl font-bold bg-transparent w-full overflow-hidden min-w-0 focus:outline-none"
        />
      </div>
      <input
        onChange={handleChange}
        value={GeneralInfos.position}
        name="position"
        type="text"
        placeholder="position"
        className={`basis-full lg:basis-[28%] print:basis-[28%] grow-0 shrink-0 pl-2 lg:pl-6 print:pl-6 mt-1 print:mt-0 text-gray-600 font-semibold mediumSizedFont print:text-base h-min bg-transparent focus:outline-none min-w-0 w-0`}
      ></input>
      <ul
        className={`flex flex-1 flex-wrap basis-full lg:basis-[72%] print:basis-[72%] grow-0 shrink-0 justify-around items-center border-t-2 border-gray-500 mt-4 lg:mt-2`}
      >
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

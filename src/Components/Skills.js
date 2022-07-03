import React, { useState } from "react";
import ListItem from "./ListItem";

const Skills = () => {
  const [personalSkills, setPersonalSkills] = useState([]);
  const [professionalSkills, setProfessionalSkills] = useState([]);

  function addPersonalSkill() {
    setPersonalSkills((prevPersonalSkills) => [
      ...prevPersonalSkills,
      <input type="text" className="bg-black" />,
    ]);
  }

  function addProfessionalSkill() {
    setProfessionalSkills((prevProfessionalSkills) => [
      ...prevProfessionalSkills,
      isNaN(prevProfessionalSkills[prevProfessionalSkills.length - 1])
        ? 0
        : prevProfessionalSkills[prevProfessionalSkills.length - 1] + 1,
    ]);
  }

  const profSkillItems = professionalSkills.map((numb) => (
    <ListItem key={numb} />
  ));

  return (
    <div className="flex m-[2%] w-[96%] box-border">
      <div className="basis-1/4">
        <h2 className="border-b-2 max-w-min p-3">Skills</h2>
      </div>
      <div className="basis-3/4 flex">
        <div className="basis-1/2 m-3 border-t-2 border-yellow-500 flex flex-wrap items-start h-min">
          <h6 className="basis-3/4 text-lg font-bold h-8">Personal</h6>
          <div
            onClick={addPersonalSkill}
            className="basis-1/4 relative hover:opacity-70 cursor-pointer min-w-6 h-8"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-1 bg-black"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-5 bg-black"></div>
          </div>
          <ul className="flex flex-col gap-1 text-base">{personalSkills}</ul>
        </div>
        <div className="basis-1/2 m-3 border-t-2 border-yellow-500 flex flex-wrap items-start h-min">
          <h6 className="basis-3/4 text-lg font-bold h-8">Personal</h6>
          <div
            onClick={addProfessionalSkill}
            className="basis-1/4 relative hover:opacity-70 cursor-pointer min-w-6 h-8"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-1 bg-black"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-5 bg-black"></div>
          </div>
          <ul className="basis-full flex flex-col gap-1 text-base">
            {profSkillItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;

import React from "react";
import SkillGroups from "./SkillGroups";

const Skills = () => {
  return (
    <div className="flex m-[2%] w-[96%] lg:m-[5%] lg:w-[90%]">
      <div className="basis-1/4 shrink-0 h-min flex items-center pl-[1%] lg:pl-[5%]">
        <h2 className="border-b-2 md:border-b-4 border-gray-800 font-bold w-min pb-2 text-xl">Skills</h2>
      </div>
      <div className="basis-3/4 shrink-0 flex border-t-4 pt-4 border-yellow-300">
        <SkillGroups name="Personal" />
        <SkillGroups name="Professional" />
      </div>
    </div>
  );
};

export default Skills;

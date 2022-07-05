import React from "react";
import SkillGroups from "./SkillGroups";

const Skills = () => {
  return (
    <div className="flex m-[2%] w-[96%]">
      <div className="basis-1/4 shrink-0">
        <h2 className="border-b-2 max-w-min pb-3">Skills</h2>
      </div>
      <div className="basis-3/4 shrink-0 flex border-t-4 border-yellow-300">
        <SkillGroups name="Personal" />
        <SkillGroups name="Professional" />
      </div>
    </div>
  );
};

export default Skills;

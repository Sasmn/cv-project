import React from "react";
import SkillGroups from "./SkillGroups";

const Skills = (props) => {
  return (
    <div className="flex box-border max-w-full p-2 md:p-4 lg:p-8">
      <div className="basis-1/4 lg:basis-[28%] print:basis-[28%] shrink-0 h-min flex items-center pl-0 lg:pl-10 print:pl-10">
        <h2
          className="border-b-2 md:border-b-4 print:border-b-4 font-bold w-min pb-2 mediumSizedFont print:text-lg"
          style={{ borderColor: props.color }}
        >
          Skills
        </h2>
      </div>
      <div
        className={`basis-3/4 lg:basis-[72%] print:basis-[72%] shrink-0 flex border-t-4 pt-4`}
        style={{ borderColor: props.color }}
      >
        <SkillGroups name="Personal" color={props.color} />
        <SkillGroups name="Professional" color={props.color} />
      </div>
    </div>
  );
};

export default Skills;

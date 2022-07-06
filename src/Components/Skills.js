import React from "react";
import SkillGroups from "./SkillGroups";

const Skills = (props) => {
  let borderColor = "border-[" + props.color + "]";
  console.log(2, borderColor);
  return (
    <div className="flex m-[2%] w-[96%] lg:m-[5%] lg:w-[90%]">
      <div className="basis-1/4 lg:basis-[29%] shrink-0 h-min flex items-center pl-[1%] lg:pl-[5%]">
        <h2
          className="border-b-2 md:border-b-4 font-bold w-min pb-2 text-xl"
          style={{ borderColor: props.color }}
        >
          Skills
        </h2>
      </div>
      <div
        className={`basis-3/4 lg:basis-[71%] shrink-0 flex border-t-4 pt-4`}
        style={{ borderColor: props.color }}
      >
        <SkillGroups name="Personal" color={props.color} />
        <SkillGroups name="Professional" color={props.color} />
      </div>
    </div>
  );
};

export default Skills;

import React from "react";
import OneWorkExp from "./OneWorkExp";

const WorkExperience = () => {
  return (
    <div className="flex m-[2%] w-[96%] box-border">
      <div className="basis-1/4">
        <h2 className="border-b-2 max-w-min p-3 text-bold">Work Experience</h2>
      </div>
      <div className="basis-3/4 flex flex-wrap">
        <OneWorkExp />
        <OneWorkExp />
        <OneWorkExp />
        <OneWorkExp />
        <OneWorkExp />
        <OneWorkExp />
        <OneWorkExp />
        <OneWorkExp />
        <OneWorkExp />
        <OneWorkExp />
      </div>
    </div>
  );
};

export default WorkExperience;

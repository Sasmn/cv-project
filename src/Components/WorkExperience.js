import React, { useState } from "react";
import AddButton from "./AddButton";
import OneWorkExp from "./OneWorkExp";

const WorkExperience = () => {
  const [ExperienceKey, SetExperienceKey] = useState([]);

  function addExpKey() {
    SetExperienceKey((prevKeys) => [
      ...prevKeys,
      isNaN(prevKeys[prevKeys.length - 1])
        ? 0
        : prevKeys[prevKeys.length - 1] + 1,
    ]);
  }

  const Experiences = ExperienceKey.map((exp) => {
    return <OneWorkExp key={exp} />;
  });

  return (
    <div className="flex m-[2%] w-[96%] h-min">
      <div className="basis-1/4 shrink-0 h-min flex flex-wrap items-center">
        <h2 className="border-b-2 max-w-min p-3 text-bold">Work Experience</h2>
        <AddButton handleClick={addExpKey} />
      </div>
      <div className="basis-3/4 grow-0 flex flex-wrap h-min">{Experiences}</div>
    </div>
  );
};

export default WorkExperience;

import React, { useState } from "react";
import AddButton from "./AddButton";
import OneExp from "./OneExp";

const Experience = (props) => {
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
    return <OneExp key={exp} />;
  });

  return (
    <div className="flex m-[2%] w-[96%] h-min">
      <div className="basis-1/4 shrink-0 h-min flex flex-wrap items-center">
        <h2 className="border-b-2 max-w-min pb-3 text-bold">{props.name}</h2>
        <AddButton handleClick={addExpKey} />
      </div>
      <div className="basis-3/4 grow-0 flex flex-wrap gap-3 h-min border-t-4 border-yellow-300 pt-4">
        {Experiences}
      </div>
    </div>
  );
};

export default Experience;

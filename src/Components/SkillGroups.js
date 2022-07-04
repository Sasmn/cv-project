import React, { useState } from "react";
import ListItem from "./ListItem";

const SkillGroups = (props) => {
  const [SkillKeys, setSkillKeys] = useState([]);

  function addSkillKey() {
    setSkillKeys((prevKeys) => [
      ...prevKeys,
      isNaN(prevKeys[prevKeys.length - 1])
        ? 0
        : prevKeys[prevKeys.length - 1] + 1,
    ]);
  }

  const skillItems = SkillKeys.map((numb) => <ListItem key={numb} />);

  return (
    <div className="basis-1/2 grow-0 shrink-0 overflow-hidden p-3 flex flex-wrap items-start h-min">
      <h6 className="basis-3/4 text-lg font-bold h-8 overflow-hidden">{props.name}</h6>
      <div
        onClick={addSkillKey}
        className="basis-1/4 relative hover:opacity-70 cursor-pointer min-w-6 h-8"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-1 bg-black"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-5 bg-black"></div>
      </div>
      <ul className="basis- flex flex-col gap-1 text-base">{skillItems}</ul>
    </div>
  );
};

export default SkillGroups;

import React, { useState } from "react";
import AddButton from "./AddButton";
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
      <h6 className="basis-3/4 text-lg font-bold h-8 overflow-hidden">
        {props.name}
      </h6>
      <AddButton handleClick={addSkillKey} />
      <ul className="basis-full flex flex-wrap gap-2 overflow-hidden">
        {skillItems}
      </ul>
    </div>
  );
};

export default SkillGroups;

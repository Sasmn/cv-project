import React, { useState, useEffect } from "react";
import AddButton from "./AddButton";
import ListItem from "./ListItem";

const SkillGroups = (props) => {
  const localStorageName = props.name + "Skills";
  const [Skills, setSkills] = useState(
    () =>
      JSON.parse(localStorage.getItem(localStorageName)) || [
        {
          key: 0,
          value: "",
        },
      ]
  );

  function addSkillKey() {
    setSkills((prevKeys) => [
      ...prevKeys,
      {
        key: prevKeys[prevKeys.length - 1].key + 1,
        value: "",
      },
    ]);
  }

  function handleChange(e) {
    let updatedData = Skills.map((skill) => {
      if (skill.key.toString() === e.target.name) {
        return {
          ...skill,
          value: e.target.value,
        };
      }
      return skill;
    });
    setSkills(updatedData);
  }

  const skillItems = Skills.map((skill) => (
    <ListItem key={skill.key} skill={skill} handleChange={handleChange} />
  ));

  useEffect(() => {
    localStorage.setItem(localStorageName, JSON.stringify(Skills));
  }, [Skills, localStorageName]);

  return (
    <div className="basis-1/2 grow-0 flex flex-wrap items-start h-min">
      <h6 className="basis-3/4 grow-0 shrink-1 text-lg font-bold h-8 overflow-hidden">
        {props.name}
      </h6>
      <AddButton handleClick={addSkillKey} />
      <ul className="basis-full grow-0 flex flex-wrap gap-2">{skillItems}</ul>
    </div>
  );
};

export default SkillGroups;

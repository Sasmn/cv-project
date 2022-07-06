import React, { useState, useEffect } from "react";
import AddButton from "./AddButton";
import ListItem from "./ListItem";
import { nanoid } from "nanoid";

const SkillGroups = (props) => {
  const localStorageName = props.name + "Skills";
  const [Skills, setSkills] = useState(
    () =>
      JSON.parse(localStorage.getItem(localStorageName)) || [
        {
          key: nanoid(),
          value: "",
        },
      ]
  );

  function addSkillKey() {
    setSkills((prevKeys) => [
      ...prevKeys,
      {
        key: nanoid(),
        value: "",
      },
    ]);
  }

  function handleChange(e) {
    console.log(e.target, e.currentTarget);
    let updatedData = Skills.map((skill) => {
      if (skill.key === e.target.name) {
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
    <ListItem
      key={skill.key}
      skill={skill}
      handleChange={handleChange}
      deleteElement={deleteListItem}
    />
  ));

  useEffect(() => {
    localStorage.setItem(localStorageName, JSON.stringify(Skills));
  }, [Skills, localStorageName]);

  function deleteListItem(e) {
    const targetKey = e.currentTarget.dataset.key;
    e.currentTarget.parentNode.parentNode.className += " animate-dropout";
    e.currentTarget.parentNode.className = " !opacity-0";
    setTimeout(function () {
      setSkills((prevSkills) =>
        prevSkills.filter((skill) => {
          console.log(skill.key, targetKey);
          return skill.key !== targetKey;
        })
      );
    }, 100);
  }

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

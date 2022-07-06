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
          edit: true,
        },
      ]
  );

  const [CurrentSkillItem, setCurrentSkillItem] = useState(
    (Skills[0] && Skills[0]) || ""
  );

  console.log(CurrentSkillItem);
  function addSkillItem() {
    setSkills((prevKeys) => [
      ...prevKeys,
      {
        key: nanoid(),
        value: "",
        edit: true,
      },
    ]);
  }

  function handleChange(e) {
    let updatedData = Skills.map((skill) => {
      if (skill.key === CurrentSkillItem.key) {
        return {
          ...skill,
          value: e.target.value,
        };
      }
      return skill;
    });
    setSkills(updatedData);
  }

  function toggleEdit() {
    let newData = Skills.map((skill) => {
      if (skill.key === CurrentSkillItem.key) {
        return {
          ...skill,
          edit: !skill.edit,
        };
      }
      return skill;
    });
    setSkills(newData);
  }

  const skillItems = Skills.map((skill) => (
    <ListItem
      key={skill.key}
      skill={skill}
      handleChange={handleChange}
      toggleEdit={toggleEdit}
      deleteElement={deleteListItem}
      setCurrentSkillItem={setCurrentSkillItem}
    />
  ));

  useEffect(() => {
    localStorage.setItem(localStorageName, JSON.stringify(Skills));
  }, [Skills, localStorageName]);

  function deleteListItem() {
    setSkills((prevSkills) =>
      prevSkills.filter((skill) => skill.key !== CurrentSkillItem.key)
    );
  }

  return (
    <div className="basis-1/2 m-1 grow-0 flex flex-wrap items-start h-min">
      <h6 className="basis-3/4 grow-0 shrink-1 text-lg font-bold h-8 overflow-hidden">
        {props.name}
      </h6>
      <AddButton handleClick={addSkillItem} />
      <ul className="basis-full grow-0 flex flex-wrap gap-0.5">
        {skillItems}
      </ul>
    </div>
  );
};

export default SkillGroups;

import React, { useState, useEffect } from "react";
import AddButton from "./AddButton";
import OneExp from "./OneExp";
import { nanoid } from "nanoid";

const Experience = (props) => {
  const localStorageName = props.name.replace(" ", "") + "Data";
  const [Experiences, SetExperiences] = useState(
    () =>
      JSON.parse(localStorage.getItem(localStorageName)) || [
        {
          key: nanoid(),
          from: "",
          to: "",
          institution: "",
          city: "",
          name: "",
          description: "",
          edit: true,
        },
      ]
  );

  const [currentExp, setCurrentExp] = useState(
    (Experiences[0] && Experiences[0]) || ""
  );

  // console.log(currentExp);
  function addExpKey() {
    SetExperiences((prevKeys) => [
      ...prevKeys,
      {
        key: nanoid(),
        from: "",
        to: "",
        institution: "",
        city: "",
        name: "",
        description: "",
        edit: true,
      },
    ]);
  }

  function handleChange(e) {
    let updatedData = Experiences.map((exp) => {
      if (exp.key === currentExp.key) {
        return {
          ...exp,
          [e.target.name]: e.target.value,
        };
      }
      return exp;
    });
    SetExperiences(updatedData);
  }

  function toggleEdit() {
    let newData = Experiences.map((exp) => {
      if (exp.key === currentExp.key) {
        return {
          ...exp,
          edit: !exp.edit,
        };
      }
      return exp;
    });
    SetExperiences(newData);
  }

  const expElements = Experiences.map((exp) => {
    return (
      <OneExp
        key={exp.key}
        exp={exp}
        color={props.color}
        setCurrentExp={setCurrentExp}
        toggleEdit={toggleEdit}
        handleChange={handleChange}
        deleteElement={deleteExpereience}
      />
    );
  });

  useEffect(() => {
    localStorage.setItem(localStorageName, JSON.stringify(Experiences));
  }, [Experiences, localStorageName]);

  function deleteExpereience() {
    SetExperiences((prevExps) =>
      prevExps.filter((exp) => exp.key !== currentExp.key)
    );
  }

  return (
    <div className="flex max-w-full box-border p-2 md:p-4 lg:p-8">
      <div className="basis-1/4 lg:basis-[29%] grow-0 shrink-0 h-min flex gap-1 flex-wrap items-center lg:pl-10 overflow-hidden">
        <h2
          className="border-b-2 md:border-b-4 w-min pb-2 font-bold mediumSizedFont"
          style={{ borderColor: props.color }}
        >
          {props.name}
        </h2>
        <AddButton handleClick={addExpKey} />
      </div>
      <div
        className="basis-3/4 lg:basis-[71%] grow-0 shrink-0 flex flex-wrap gap-1 h-min border-t-4 pt-4"
        style={{ borderColor: props.color }}
      >
        {expElements}
      </div>
    </div>
  );
};

export default Experience;

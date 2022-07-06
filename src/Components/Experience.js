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

  console.log(currentExp);
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

  function handleChange() {
    let updatedData = Experiences.map((exp) => {
      if (exp.key === currentExp.key) {
        return {
          ...exp,
          [currentExp.name]: currentExp.value,
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
        data_key={exp.key}
        exp={exp}
        toggleEdit={toggleEdit}
        handleChange={handleChange}
        deleteElement={deleteExpereience}
        setCurrentExp={setCurrentExp}
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
    <div className="flex m-[2%] w-[96%] h-min">
      <div className="basis-1/4 shrink-0 h-min flex flex-wrap items-center">
        <h2 className="border-b-2 max-w-min pb-3 text-bold">{props.name}</h2>
        <AddButton handleClick={addExpKey} />
      </div>
      <div className="basis-3/4 grow-0 flex flex-wrap gap-3 h-min border-t-4 border-yellow-300 pt-4">
        {expElements}
      </div>
    </div>
  );
};

export default Experience;

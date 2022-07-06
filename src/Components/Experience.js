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
    <div className="flex m-[2%] w-[96%] lg:m-[5%] lg:w-[90%]">
      <div className="basis-1/4 shrink-0 h-min flex flex-wrap items-center pl-[1%] lg:pl-[5%]">
        <h2 className="border-b-2 md:border-b-4 border-gray-800 w-min pb-2 font-bold text-lg">{props.name}</h2>
        <AddButton handleClick={addExpKey} />
      </div>
      <div className="basis-3/4 grow-0 flex flex-wrap gap-3 h-min border-t-4 border-yellow-300 pt-4">
        {expElements}
      </div>
    </div>
  );
};

export default Experience;

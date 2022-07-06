import React, { useState, useEffect } from "react";
import AddButton from "./AddButton";
import OneExp from "./OneExp";

const Experience = (props) => {
  const localStorageName = props.name.replace(" ", "") + "Data";
  const [Experiences, SetExperiences] = useState(
    () =>
      JSON.parse(localStorage.getItem(localStorageName)) || [
        {
          key: 0,
          from: "",
          to: "",
          institution: "",
          city: "",
          name: "",
          description: "",
        },
      ]
  );

  function addExpKey() {
    SetExperiences((prevKeys) => [
      ...prevKeys,
      {
        key: prevKeys[prevKeys.length - 1].key + 1,
        from: "",
        to: "",
        institution: "",
        city: "",
        name: "",
        description: "",
      },
    ]);
  }

  function handleChange(e) {
    let updatedData = Experiences.map((exp) => {
      console.log(exp.key, e.target.dataset.key);
      if (exp.key.toString() === e.target.dataset.key) {
        return {
          ...exp,
          [e.target.name]: e.target.value,
        };
      }
      return exp;
    });
    SetExperiences(updatedData);
  }

  const expElements = Experiences.map((exp) => {
    return (
      <OneExp
        key={exp.key}
        data_key={exp.key}
        exp={exp}
        handleChange={handleChange}
        deleteElement={deleteExpereience}
      />
    );
  });

  useEffect(() => {
    localStorage.setItem(localStorageName, JSON.stringify(Experiences));
  }, [Experiences, localStorageName]);

  function deleteExpereience(e) {
    SetExperiences((prevExps) =>
      prevExps.filter(
        (exp) => exp.key.toString() !== e.currentTarget.dataset.key
      )
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

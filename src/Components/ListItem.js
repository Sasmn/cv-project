import React, { useState } from "react";
import TickButton from "./TickButton";

const ListItem = () => {
  const [LineCompleted, setLineCompleted] = useState(false);

  function handleClick() {
    setLineCompleted(true);
  }

  return (
    <li
      className={`flex w-40 sm:w-56 md:w-60 lg:w-96 overflow-hidden justify-between ${
        LineCompleted && "pointer-events-none"
      }`}
    >
      <input
        type="text"
        disabled={LineCompleted}
        className={`basis-3/4 max-w-3/4 bg-transparent ${
          !LineCompleted && "border-b-2 border-yellow-300"
        } overflow-hidden`}
      />
      <TickButton handleClick={handleClick} completed={LineCompleted} />
    </li>
  );
};

export default ListItem;

import React, { useState } from "react";
import TickButton from "./TickButton";

const ListItem = () => {
  const [LineCompleted, setLineCompleted] = useState(false);

  function handleClick() {
    setLineCompleted(true);
  }

  return (
    <li
      className={`basis-full flex animate-drop origin-center ${
        LineCompleted && "pointer-events-none"
      }`}
    >
      <input
        type="text"
        disabled={LineCompleted}
        className={`basis-3/4 max-w-[75%] grow-0 shrink max-w-3/4 bg-transparent min-w-0 w-0 ${
          !LineCompleted && "border-b-2 border-yellow-300"
        }`}
      />
      <TickButton handleClick={handleClick} completed={LineCompleted} />
    </li>
  );
};

export default ListItem;

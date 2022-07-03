import React, { useState } from "react";

const ListItem = () => {
  const [LineCompleted, setLineCompleted] = useState(false);

  function handleClick() {
    setLineCompleted(true);
  }

  return (
    <li className={`flex w-full justify-between ${LineCompleted && "pointer-events-none"}`}>
      <input
        type="text"
        disabled={LineCompleted}
        className="grow-1 basis-3/4 max-w-3/4 border-b-2 border-yellow-300 overflow-hidden"
      />
      <div className={`shrink-0 basis-1/4 flex justify-center ${LineCompleted && "opacity-0"}`}>
        <div
          onClick={handleClick}
          className="inline-block rotate-45 h-6 w-3.5 border-green-600 border-b-4 border-r-4 cursor-pointer"
        ></div>
      </div>
    </li>
  );
};

export default ListItem;

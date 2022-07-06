import React from "react";

const TickButton = (props) => {
  return (
    <div
      onClick={() => {
        props.handleClick();
      }}
      className={`shrink-0 basis-1/4 flex justify-center items-center overflow-hidden cursor-pointer group duration-200 ${
        props.completed && "opacity-0 scale-0"
      }`}
    >
      <div className="rotate-45 h-4 w-2.5 -translate-y-1 border-green-600 group-hover:border-green-400 border-b-2 border-r-2 sm:h-6 sm:w-3.5 sm:border-b-4 sm:border-r-4"></div>
    </div>
  );
};

export default TickButton;

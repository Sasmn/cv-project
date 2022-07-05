import React from "react";

const AddButton = (props) => {
  return (
    <div
      onClick={props.handleClick}
      className="basis-1/4 shrink-0 relative hover:opacity-70 cursor-pointer min-w-6 h-8"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-1 bg-black"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-5 bg-black"></div>
    </div>
  );
};

export default AddButton;

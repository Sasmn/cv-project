import React from "react";
import editIcon from "../icons/reshot-icon-edit-Q9X5K68PDE.svg";
import deleteIcon from "../icons/reshot-icon-delete-KL8MB62NXD.svg";

const DeleteOrEdit = (props) => {
  return (
    <div
      className={`backdrop-blur-sm bg-gray-600/25 absolute top-0 left-0 w-full h-full rounded-md flex justify-center items-center gap-8 md:gap-12 duration-100 origin-center ${
        props.Visible ? "scale-1 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      <img
        src={editIcon}
        alt="Edit icon"
        className="w-6 h-6 scale-75 sm:scale-90 md:scale-110 lg:scale-125 bg-cyan-700 hover:bg-gray-400 rounded-md cursor-pointer"
        onClick={props.toggleEdit}
      />
      <img
        src={deleteIcon}
        alt="Delete icon"
        className="w-6 h-6 scale-75 sm:scale-90 md:scale-110 lg:scale-125 bg-red-500 hover:bg-gray-400 rounded-md cursor-pointer"
        onClick={props.deleteElement}
      />
    </div>
  );
};

export default DeleteOrEdit;

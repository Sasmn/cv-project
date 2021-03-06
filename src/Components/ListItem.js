import React, { useState } from "react";
import TickButton from "./TickButton";
import DeleteOrEdit from "./DeleteOrEdit";

const ListItem = (props) => {
  const [EditState, setEditState] = useState(false);

  function showEdit() {
    setEditState(true);
  }

  function hideEdit() {
    setEditState(false);
  }

  return (
    <li
      onMouseEnter={() => {
        showEdit();
        props.setCurrentSkillItem(props.skill);
      }}
      onMouseLeave={hideEdit}
      // onTouchStart={() => {
      //   showEdit();
      //   props.setCurrentSkillItem(props.skill);
      // }}
      // onTouchEnd={hideEdit}
      className={`basis-full flex rounded-lg animate-dropin origin-center relative ${
        props.skill.edit && "bg-gray-100"
      }`}
    >
      <input
        onChange={props.handleChange}
        name={props.skill.key}
        value={props.skill.value}
        type="text"
        disabled={!props.skill.edit}
        className={`basis-3/4 grow-0 shrink max-w-3/4 px-2 my-2 print:my-1 bg-transparent min-w-0 w-0 focus:outline-none ${
          !props.skill.edit && "underline decoration-2 underline-offset-4"
        }`}
        style={{ textDecorationColor: props.color }}
      />
      <TickButton
        handleClick={props.toggleEdit}
        completed={!props.skill.edit}
      />
      {!props.skill.edit && (
        <DeleteOrEdit
          Visible={EditState}
          deleteElement={props.deleteElement}
          toggleEdit={props.toggleEdit}
        />
      )}
    </li>
  );
};

export default ListItem;

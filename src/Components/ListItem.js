import React, { useState } from "react";
import TickButton from "./TickButton";
import DeleteOrEdit from "./DeleteOrEdit";

const ListItem = (props) => {
  const [LineCompleted, setLineCompleted] = useState(false);

  function handleClick() {
    setLineCompleted(true);
  }

  const [Visible, setVisible] = useState(false);

  function showEdit() {
    setVisible(true);
  }

  function hideEdit() {
    setVisible(false);
  }

  return (
    <li
      onMouseEnter={showEdit}
      onMouseLeave={hideEdit}
      className={`basis-full flex animate-drop origin-center relative`}
    >
      <input
        onChange={props.handleChange}
        name={props.skill.key}
        value={props.skill.value}
        type="text"
        disabled={LineCompleted}
        className={`basis-3/4 grow-0 shrink max-w-3/4 px-2 py-0.5 bg-transparent min-w-0 w-0 ${
          !LineCompleted && "border-b-2 border-yellow-300"
        }`}
      />
      <TickButton handleClick={handleClick} completed={LineCompleted} />
      {LineCompleted && <DeleteOrEdit Visible={Visible} />}
    </li>
  );
};

export default ListItem;

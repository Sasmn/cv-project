import React, { useState } from "react";
import DeleteOrEdit from "./DeleteOrEdit";
import TickButton from "./TickButton";

const OneExp = (props) => {
  function auto_height(e) {
    e.target.style.height = "1px";
    e.target.style.height = e.target.scrollHeight + "px";
  }

  const [EditState, setEditState] = useState(false);

  function showEdit() {
    setEditState(true);
  }
  function hideEdit() {
    setEditState(false);
  }

  return (
    <div
      onMouseEnter={() => {
        showEdit();
        props.setCurrentExp(props.exp);
      }}
      onMouseLeave={hideEdit}
      onTouchStart={() => {
        showEdit();
        props.setCurrentExp(props.exp);
      }}
      onTouchEnd={hideEdit}
      className="basis-full border-b-2 border-yellow-300 flex h-min gap-4 md:gap-8 p-2 animate-dropin origin-center relative"
    >
      <div className="basis-2/6 md:basis-1/4 h-min flex flex-wrap">
        <div className="basis-full flex font-bold">
          <input
            onChange={props.handleChange}
            name="from"
            value={props.exp.from}
            type="number"
            placeholder="from"
            disabled={!props.exp.edit}
            min={1950}
            max={new Date().getFullYear()}
            className="basis-2/5 bg-gray-300 text-center h-min max-w-[40%] min-w-0 w-0"
          />
          <span className="basis-1/5 h-min text-center"> - </span>
          <input
            onChange={props.handleChange}
            name="to"
            value={props.exp.to}
            type="number"
            placeholder="to"
            disabled={!props.exp.edit}
            min={1950}
            max={new Date().getFullYear()}
            className="basis-2/5 bg-gray-300 text-center h-min max-w-[40%] min-w-0 w-0"
          />
        </div>
        <input
          onChange={props.handleChange}
          name="institution"
          value={props.exp.institution}
          type="text"
          placeholder="institution"
          disabled={!props.exp.edit}
          className="basis-full min-w-0 w-0"
        />
        <input
          onChange={props.handleChange}
          name="city"
          value={props.exp.city}
          type="text"
          placeholder="city"
          disabled={!props.exp.edit}
          className="basis-full min-w-0 w-0"
        />
      </div>
      <div className="basis-4/6 md:basis-3/4 h-min flex flex-wrap">
        <input
          onChange={props.handleChange}
          name="name"
          value={props.exp.name}
          type="text"
          placeholder="name"
          disabled={!props.exp.edit}
          className={`basis-3/4 font-bold min-w-0 w-0`}
        />
        <TickButton
          handleClick={props.toggleEdit}
          completed={!props.exp.edit}
        />
        <textarea
          rows={1}
          // onChange={props.handleChange}
          // name="description"
          placeholder="description"
          disabled={!props.exp.edit}
          className="basis-full h-min mt-2 resize-none min-w-0 w-0"
          onInput={auto_height}
        ></textarea>
      </div>
      {!props.exp.edit && (
        <DeleteOrEdit
          Visible={EditState}
          deleteElement={props.deleteElement}
          toggleEdit={props.toggleEdit}
        />
      )}
    </div>
  );
};

export default OneExp;

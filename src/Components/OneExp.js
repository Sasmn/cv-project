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
      // onTouchEnd={hideEdit}
      className={`basis-full rounded-2xl flex h-min gap-4 md:gap-8 p-2 animate-dropin origin-center relative ${
        props.exp.edit && "bg-gray-100"
      }`}
    >
      <div className={`basis-2/6 md:basis-1/4 h-min flex flex-wrap`}>
        {props.exp.edit ? (
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
              className={`${
                props.exp.edit ? "basis-2/5" : "basis-[min-content] max-w-min"
              } border-b-2 bg-transparent text-center h-min min-w-0 w-0 px-1 focus:outline-none ${
                !props.exp.edit && "border-none"
              }`}
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
              className={`basis-2/5 border-b-2 bg-transparent text-center h-min max-w-[40%] min-w-0 w-0 px-1 focus:outline-none ${
                !props.exp.edit && "border-none"
              }`}
            />
          </div>
        ) : (
          <p className="px-1 font-bold print:text-sm">
            {props.exp.from}-{props.exp.to}
          </p>
        )}
        <input
          onChange={props.handleChange}
          name="institution"
          value={props.exp.institution}
          type="text"
          placeholder="institution"
          disabled={!props.exp.edit}
          className={`basis-full min-w-0 w-0 border-b-2 bg-transparent px-1 text-gray-600 print:text-sm focus:outline-none ${
            !props.exp.edit && "border-none"
          }`}
        />
        <input
          onChange={props.handleChange}
          name="city"
          value={props.exp.city}
          type="text"
          placeholder="city"
          disabled={!props.exp.edit}
          className={`basis-full min-w-0 w-0 border-b-2 bg-transparent px-1 text-gray-600 print:text-sm focus:outline-none ${
            !props.exp.edit && "border-none"
          }`}
        />
      </div>
      <div className="basis-4/6 md:basis-3/4 h-min flex flex-wrap relative">
        <span
          className="w-fit h-2.5 lg:h-3.5 absolute top-2 sm:top-3 print:top-3 left-2 lg:left-3 print:left-2 -z-10 rounded-lg print:text-lg"
          style={{ backgroundColor: props.color }}
        >
          <span className="opacity-0 print:text-lg">{props.exp.name}</span>
        </span>
        <input
          onChange={props.handleChange}
          name="name"
          id="name"
          value={props.exp.name}
          type="text"
          placeholder="name"
          disabled={!props.exp.edit}
          className={`basis-3/4 font-bold min-w-0 w-0 border-b-2 bg-transparent px-1 print:text-base focus:outline-none ${
            !props.exp.edit && "border-none"
          }`}
        />

        <TickButton
          handleClick={props.toggleEdit}
          completed={!props.exp.edit}
        />
        {props.exp.edit ? (
          <textarea
            rows={1}
            onChange={props.handleChange}
            name="description"
            value={props.exp.description}
            placeholder="description"
            disabled={!props.exp.edit}
            className={`basis-full h-min mt-2 resize-none min-w-0 w-0 border-b-2 bg-transparent px-1 text-gray-600 focus:outline-none ${
              !props.exp.edit && "border-none"
            }`}
            onInput={auto_height}
          />
        ) : (
          <p className="basis-full h-min mt-2 print:mt-0 px-1 text-gray-600 print:text-sm">
            {props.exp.description}
          </p>
        )}
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

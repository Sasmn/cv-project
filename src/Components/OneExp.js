import React, { useState } from "react";
import DeleteOrEdit from "./DeleteOrEdit";
import TickButton from "./TickButton";

const OneExp = (props) => {
  function auto_height(e) {
    e.target.style.height = "1px";
    e.target.style.height = e.target.scrollHeight + "px";
  }

  const [ExpCompleted, setExpCompleted] = useState(false);

  function handleTickClick() {
    setExpCompleted(true);
  }

  const [Visible, setVisible] = useState(false);

  function showEdit() {
    setVisible(true);
  }
  function hideEdit() {
    setVisible(false);
  }

  return (
    <div
      onMouseEnter={showEdit}
      onMouseLeave={hideEdit}
      className="basis-full border-b-2 border-yellow-300 flex h-min gap-4 md:gap-8 p-2 animate-dropin origin-center relative"
    >
      <div className="basis-2/6 md:basis-1/4 h-min flex flex-wrap">
        <div className="basis-full flex font-bold">
          <input
            onChange={props.handleChange}
            name="from"
            value={props.exp.from}
            data-key={props.data_key}
            type="number"
            placeholder="from"
            disabled={ExpCompleted}
            min={1950}
            max={new Date().getFullYear()}
            className="basis-2/5 bg-gray-300 text-center h-min max-w-[40%] min-w-0 w-0"
          />
          <span className="basis-1/5 h-min text-center"> - </span>
          <input
            onChange={props.handleChange}
            name="to"
            value={props.exp.to}
            data-key={props.data_key}
            type="number"
            placeholder="to"
            disabled={ExpCompleted}
            min={1950}
            max={new Date().getFullYear()}
            className="basis-2/5 bg-gray-300 text-center h-min max-w-[40%] min-w-0 w-0"
          />
        </div>
        <input
          onChange={props.handleChange}
          name="institution"
          value={props.exp.institution}
          data-key={props.data_key}
          type="text"
          placeholder="institution"
          disabled={ExpCompleted}
          className="basis-full min-w-0 w-0"
        />
        <input
          onChange={props.handleChange}
          name="city"
          value={props.exp.city}
          data-key={props.data_key}
          type="text"
          placeholder="city"
          disabled={ExpCompleted}
          className="basis-full min-w-0 w-0"
        />
      </div>
      <div className="basis-4/6 md:basis-3/4 h-min flex flex-wrap">
        <input
          onChange={props.handleChange}
          name="name"
          value={props.exp.name}
          data-key={props.data_key}
          type="text"
          placeholder="name"
          disabled={ExpCompleted}
          className={`basis-3/4 font-bold min-w-0 w-0`}
        />
        <TickButton handleClick={handleTickClick} completed={ExpCompleted} />
        <textarea
          rows={1}
          // onChange={props.handleChange}
          // name="description"
          placeholder="description"
          disabled={ExpCompleted}
          className="basis-full h-min mt-2 resize-none min-w-0 w-0"
          onInput={auto_height}
        ></textarea>
      </div>
      {ExpCompleted && (
        <DeleteOrEdit
          Visible={Visible}
          deleteElement={props.deleteElement}
          elementKey={props.data_key}
        />
      )}
    </div>
  );
};

export default OneExp;

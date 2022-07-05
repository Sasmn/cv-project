import React from "react";

const OneWorkExp = () => {
  function auto_height(e) {
    e.target.style.height = "1px";
    e.target.style.height = e.target.scrollHeight + "px";
  }

  return (
    <div className="basis-full flex h-min gap-4 md:gap-8 animate-drop origin-center">
      <div className="basis-2/5 md:basis-1/5 overflow-hidden h-min flex flex-wrap">
        <div className="basis-full overflow-hidden flex font-bold">
          <input
            type="number"
            placeholder="from"
            min={1950}
            max={new Date().getFullYear()}
            className="basis-2/5 bg-gray-300 h-min max-w-[40%] min-w-0 w-0"
          />
          <span className="basis-1/5 h-min text-center"> - </span>
          <input
            type="number"
            placeholder="to"
            min={1950}
            max={new Date().getFullYear()}
            className="basis-2/5 bg-gray-300 h-min max-w-[40%] min-w-0 w-0"
          />
        </div>
        <input
          type="text"
          placeholder="company"
          className="basis-full overflow-hidden min-w-0 w-0"
        />
        <input
          type="text"
          placeholder="city"
          className="basis-full overflow-hidden min-w-0 w-0"
        />
      </div>
      <div className="basis-3/5 md:basis-4/5 overflow-hidden h-min flex flex-wrap">
        <input
          type="text"
          placeholder="position"
          className={`bg-gray-200 basis-full min-w-0 w-0`}
        />
        <textarea
          rows={1}
          placeholder="description"
          className="basis-full h-min resize-none min-w-0 w-0"
          onInput={auto_height}
        ></textarea>
      </div>
    </div>
  );
};

export default OneWorkExp;

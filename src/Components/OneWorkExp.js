import React from "react";

const OneWorkExp = () => {
  return (
    <div className="basis-full flex h-min gap-4 md:gap-8">
      <div className="basis-2/5 md:basis-1/5 overflow-hidden flex flex-wrap">
        <div className="basis-full overflow-hidden flex font-bold">
          <input
            type="number"
            placeholder="from"
            min={1950}
            max={new Date().getFullYear()}
            className="basis-2/5 bg-gray-300 h-min max-w-[40%]"
          />
          <span className="basis-1/5 h-min text-center"> - </span>
          <input
            type="number"
            placeholder="to"
            min={1950}
            max={new Date().getFullYear()}
            className="basis-2/5 bg-gray-300 h-min max-w-[40%]"
          />
        </div>
        <input
          type="text"
          placeholder="company"
          className="basis-full overflow-hidden"
        />
        <input
          type="text"
          placeholder="city"
          className="basis-full overflow-hidden"
        />
      </div>
      <div className="basis-3/5 md:basis-4/5 overflow-hidden">
        <input
          type="text"
          placeholder="position"
          className={`bg-gray-200 w-full max-w-[100%]`}
        />
      </div>
    </div>
  );
};

export default OneWorkExp;

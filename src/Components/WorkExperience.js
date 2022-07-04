import React from "react";

const WorkExperience = () => {
  return (
    <div className="flex m-[2%] w-[96%] box-border">
      <div className="basis-1/4">
        <h2 className="border-b-2 max-w-min p-3 text-bold">Work Experience</h2>
      </div>
      <div className="basis-3/4 flex h-min gap-4 md:gap-8">
        <div className="basis-1/5 overflow-hidden grow-0 flex flex-col">
          <div className="flex font-bold">
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
          <input type="text" placeholder="company" className="max-w-[20%]" />
          <input type="text" placeholder="city" className="max-w-[20%]" />
        </div>
        <div className="basis-4/5 overflow-hidden">
          <input
            type="text"
            placeholder="position"
            className={`bg-gray-200 w-full max-w-[100%]`}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;

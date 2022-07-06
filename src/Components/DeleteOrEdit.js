import React from "react";

const DeleteOrEdit = (props) => {
  return (
    <div
      className={`backdrop-blur-sm bg-gray-600/25 absolute top-0 left-0 w-full h-full rounded-md flex justify-center items-center gap-8 md:gap-12 duration-100 origin-center ${
        props.Visible ? "scale-1 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      <div
        onClick={props.toggleEdit}
        className="p-0.5 lg:p-1 rounded-md bg-teal-600 hover:bg-yellow-900/75 hover:scale-110 duration-100"
      >
        <svg
          className="cursor-pointer scale-75 sm:scale-90 md:scale-110 lg:scale-125 group"
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            className="group-hover:fill-teal-600 fill-yellow-900 origin-center duration-100"
            clipPath="url(#a)"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#000"
          >
            <path d="M21.707 7.293a1 1 0 0 1 0 1.414l-13 13A1 1 0 0 1 8 22H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 .293-.707l13-13a1 1 0 1 1 1.414 1.414L5 17.414V20h2.586L20.293 7.293a1 1 0 0 1 1.414 0z" />
            <path d="M16.293 3.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414zM17.293 11.707l-4-4 1.414-1.414 4 4-1.414 1.414z" />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div
        // data-key={props.elementKey}
        onClick={props.deleteElement}
        className="p-0.5 lg:p-1 rounded-md bg-red-600 hover:bg-gray-900/75 hover:scale-110 duration-100"
      >
        <svg
          className="cursor-pointer scale-75 sm:scale-90 md:scale-110 lg:scale-125 group"
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="fill-gray-900 group-hover:fill-red-600 origin-center duration-100"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 7a1 1 0 0 1 1 1v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 1 1 2 0v11a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8a1 1 0 0 1 1-1z"
            fill="#000"
          />
          <path
            className="fill-gray-900 group-hover:fill-red-600 origin-center duration-100"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 8a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1zM14 8a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1zM4 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zM8 3a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1z"
            fill="#000"
          />
        </svg>
      </div>
    </div>
  );
};

export default DeleteOrEdit;

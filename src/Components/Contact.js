import React from "react";

function Contact(props) {
  let inputType = "text";

  if (props.name === "Phone") {
    inputType = "tel";
  } else if (props.name === "Email") {
    inputType = "email";
  }

  return (
    <li className="shrink-0 basis-1/2 sm:basis-1/3 flex h-12 mt-2">
      <img
        src={props.imageSrc}
        alt="Phone icon"
        className="m-1 pb-2 border-b-4 border-yellow-500"
      />
      <div className="flex flex-col">
        <h5 className="font-bold ">{props.name}</h5>
        <input
          type={inputType}
          placeholder="here"
          autoComplete="off"
          className="bg-transparent opacity-80 w-full pl-1 pr-1 text-base border-b-2 border-yellow-500 min-w-0 focus:bg-transparent focus:outline-none"
        />
      </div>
    </li>
  );
}

export default Contact;

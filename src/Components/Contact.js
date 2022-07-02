import React from "react";

function Contact(props) {
  let inputType = "text";

  if (props.name === "Phone") {
    inputType = "tel";
  } else if (props.name === "Email") {
    inputType = "email";
  }

  return (
    <li className="flex h-12">
      <img
        src={props.imageSrc}
        alt="Phone icon"
        className="m-1 pb-2 border-b-4 border-yellow-500"
      />
      <div className="flex flex-col">
          <h5 className="font-bold ">{props.name}</h5>
          {/* <p className="">user input</p> */}
          <input
            type={inputType}
            className="bg-yellow-300 opacity-80 w-24 rounded-lg"
          ></input>
      </div>
    </li>
  );
}

export default Contact;

import React from "react";

function Contact(props) {
  let inputType = "text";

  if (props.name === "Phone") {
    inputType = "tel";
  } else if (props.name === "Email") {
    inputType = "email";
  }

  const propName = props.name.toLowerCase();

  return (
    <li className="shrink-0 grow-0 basis-1/3 flex gap-1 items-center h-min mt-2 overflow-hidden print:h-12">
      <img
        src={props.imageSrc}
        alt="Phone icon"
        className="print:basis-5 basis-4 md:basis-5 lg:basis-6 xl:basis-7 shrink-0 grow-0 h-8 overflow-hidden pb-1 border-b-2 border-gray-500"
        // style={{ borderColor: props.color }}
      />
      <div className="basis-full grow-0 shrink-1 flex h-min flex-wrap overflow-hidden">
        <h5 className="basis-full font-bold h-min mediumSizedFont print:text-lg">
          {props.name}
        </h5>
        <input
          type={inputType}
          onChange={props.handleChange}
          value={props.GeneralInfos[propName]}
          name={propName}
          placeholder="here"
          autoComplete="off"
          className="print:text-sm basis-full shrink-1 bg-transparent text-gray-600 h-min focus:border-b-2 border-gray-700 min-w-0 focus:bg-transparent focus:outline-none"
        />
      </div>
    </li>
  );
}

export default Contact;

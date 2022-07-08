import React from "react";
import GeneralInfo from "./GeneralInfo";
import Skills from "./Skills";
import Experience from "./Experience";

const Main = React.forwardRef((props, ref) => {
  return (
    <main
      ref={ref}
      className=".main shadow-2xl print:shadow-none pt-5 pb-5 relative print:px-5 print:py-10"
    >
      <GeneralInfo color={props.color} />
      <Skills color={props.color} />
      <Experience name="Work Experience" color={props.color} />
      <Experience name="Education" color={props.color} />
      <div className="bg-gradient-to-r from-stone-200 to-stone-50 bg-[length:5px_5px] absolute top-0 left-0 w-full h-full -z-20"></div>
    </main>
  );
});

export default Main;

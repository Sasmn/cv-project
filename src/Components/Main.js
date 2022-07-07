import React from "react";
import GeneralInfo from "./GeneralInfo";
import Skills from "./Skills";
import Experience from "./Experience";

const Main = React.forwardRef((props, ref) => {
  return (
    <main ref={ref} className=".main shadow-2xl pt-5 pb-5">
      <GeneralInfo color={props.color} />
      <Skills color={props.color} />
      <Experience name="Work Experience" color={props.color} />
      <Experience name="Education" color={props.color} />
    </main>
  );
});

export default Main;

import GeneralInfo from "./Components/GeneralInfo";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";

function App() {
  return (
    <div className="w-full lg:w-5/6 ml-auto mr-auto shadow-2xl pt-5 pb-5">
      <GeneralInfo />
      <Skills />
      <Experience name="Work Experience" />
      <Experience name="Education" />
    </div>
  );
}

export default App;

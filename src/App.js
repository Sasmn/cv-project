import Education from "./Components/Education";
import GeneralInfo from "./Components/GeneralInfo";
import Skills from "./Components/Skills";
import WorkExperience from "./Components/WorkExperience";

function App() {
  return (
    <div className="w-full lg:w-5/6  ml-auto mr-auto shadow-2xl">
      <GeneralInfo />
      <Skills />
      <WorkExperience />
      <Education />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import GeneralInfo from "./Components/GeneralInfo";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";

function App() {
  const [colorTheme, setColorTheme] = useState(
    () => JSON.parse(localStorage.getItem("themeColor")) || "#f5ce42"
  );

  function handleChange(e) {
    setColorTheme(e.target.value);
  }

  useEffect(() => {
    localStorage.setItem("themeColor", JSON.stringify(colorTheme));
  }, [colorTheme]);

  return (
    <div className="w-full lg:w-11/12 xl:w-5/6 2xl:w-2/3 ml-auto mr-auto font-kohsan tracking-wider">
      <header className="flex justify-between items-center p-7">
        <div className="flex items-center gap-4">
          <h3>choose a color:</h3>
          <div className="w-14 h-14 rounded-full relative overflow-hidden">
            <input
              type="color"
              value={colorTheme}
              onChange={handleChange}
              className="w-[200%] h-[200%] absolute top-[-50%] left-[-50%] cursor-pointer"
            />
          </div>
        </div>
        <h4>download CV</h4>
      </header>
      <main className=" shadow-2xl pt-5 pb-5">
        <GeneralInfo color={colorTheme} />
        <Skills color={colorTheme} />
        <Experience name="Work Experience" color={colorTheme} />
        <Experience name="Education" color={colorTheme} />
      </main>
    </div>
  );
}

export default App;

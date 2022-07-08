import React, { useState, useEffect, useRef } from "react";
import Main from "./Components/Main";
import { useReactToPrint } from "react-to-print";

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

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "my cv",
    pageStyle: `
      @page {
        size: auto;
        margin: 5mm 10mm;
      }
      @media print {
        html, body {
          height: initial !important;
          overflow: initial !important;
          -webkit-print-color-adjust: exact;
        }
        .no-print {
          display: none;
        }
      }
      `,
    copyStyles: true,
  });

  return (
    <div className="text-[10px] md:text-sm lg:text-base xl:text-lg w-full xl:w-11/12 2xl:w-4/5 ml-auto mr-auto font-kohsan tracking-wider">
      <header className="flex justify-between items-center p-7">
        <div className="flex items-center gap-4">
          <h3 className="mediumSizedFont font-bold relative">
            <span
              className="w-full h-[45%] absolute bottom-[5%] lg:bottom-[2%] left-[3%] -z-10 rounded-lg"
              style={{ backgroundColor: colorTheme }}
            ></span>
            choose a color:
          </h3>
          <div className="w-8 h-8 md:w-14 md:h-14 rounded-full relative overflow-hidden hover:scale-125 duration-300">
            <input
              type="color"
              value={colorTheme}
              onChange={handleChange}
              className="w-[200%] h-[200%] absolute top-[-50%] left-[-50%] cursor-pointer"
            />
          </div>
        </div>
        <button
          onClick={handlePrint}
          className="mediumSizedFont cursor-pointer rounded-xl border-2 px-2 py-1 hover:scale-110 duration-150 hover:bg-gray-200"
          style={{ borderColor: colorTheme }}
        >
          print CV
        </button>
      </header>
      <Main color={colorTheme} ref={componentRef} />
    </div>
  );
}

export default App;

import React, { useState, useEffect, useRef } from "react";
import Main from "./Components/Main";
import { useReactToPrint } from "react-to-print";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";

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
        margin: 0;
      }
      @media print {
        html, body {
          // font-size: 30px;
          height: initial !important;
          overflow: initial !important;
          // width: 1050px;
          -webkit-print-color-adjust: exact;
        }
        .no-print {
          display: none;
        }
        .mediumSizedFont {
          font-size: 30px;
        }
        
      }
      `,
    copyStyles: true,
  });

  // const printRef = useRef();
  // const handleDownloadPdf = async () => {
  //   const element = printRef.current;
  //   const canvas = await html2canvas(element);
  //   const data = canvas.toDataURL("image/png");

  //   const pdf = new jsPDF();
  //   const imgProperties = pdf.getImageProperties(data);
  //   const pdfWidth = pdf.internal.pageSize.getWidth();
  //   const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
  //   pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
  //   pdf.save("print.pdf");
  // };

  // function handleDownloadPdf() {
  //   const input = printRef.current;
  //   html2canvas(input).then((canvas) => {
  //     const imgData = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF();
  //     pdf.addImage(imgData, "JPEG", 0, 0);
  //     pdf.save('print.pdf')
  //   });
  // }

  // const handleDownloadPdf = async () => {
  //   const element = printRef.current;
  //   const canvas = await html2canvas(element);
  //   const data = canvas.toDataURL("image/png");
  //   const link = document.createElement("a");

  //   if (typeof link.download === "string") {
  //     link.href = data;
  //     link.download = "image.jpg";

  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   } else {
  //     window.open(data);
  //   }
  // };

  // function handleDownloadPdf() {
  //   const input = printRef.current;
  //   html2canvas(input, {
  //     allowTaint: false,
  //   }).then((canvas) => {
  //     canvas.style.display = "none";
  //     const imgData = canvas.toDataURL("image/png");
  //     var a = document.createElement("a");
  //     a.setAttribute("download", "myImage.png");
  //     a.setAttribute("href", imgData);
  //     a.click();
  //   });
  // }

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
        <button onClick={handlePrint} className="mediumSizedFont">
          print CV
        </button>
      </header>
      <Main color={colorTheme} ref={componentRef} />
    </div>
  );
}

export default App;

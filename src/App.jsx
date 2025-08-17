import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Items from "./components/Items";

function App() {
  const num = [
    "7",
    "8",
    "9",
    "C",
    "4",
    "5",
    "6",
    "/",
    "1",
    "2",
    "3",
    "+",
    "-",
    "0",
    "*",
    "=",
  ];
  const [val, setVal] = useState("");
  const buttonClicked = (text) => {
    if (text === "C") {
      setVal("");
    } else if (text === "=") {
      setVal(eval(val));
    } else {
      const newVal = val + text;
      setVal(newVal);
    }
  };
  return (
    <>
      <div className="w-full h-screen text-center flex justify-center items-center bg-[#1c1c1c]">
        <div className="w-[300px] h-auto border-2 border-gray-600 shadow-md shadow-white p-1 rounded-md bg-slate-100 ">
          <p className="text-xl font-serif font-bold my-2">Calculator</p>
          <input
            type="text"
            className="border-2 w-[95%] border-black rounded-md p-1 my-2 text-xl"
            readOnly
            value={val}
          />
          <div className="flex flex-wrap justify-around gap-y-4 gap-x-2 p-2">
            {num.map((ele) => {
              return (
                <Items key={ele} ele={ele} buttonClicked={buttonClicked} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import React from "react";

function Items({ buttonClicked, ele }) {
  const array = ["/", "+", "-", "*", "C", "="];
  return (
    <button
      className="w-[50px] h-[50px] place-content-center bg-slate-800 text-white font-bold rounded-full hover:bg-slate-600 text-xl"
      onClick={() => buttonClicked(ele)}
      style={
        array.includes(ele)
          ? { background: "orange" }
          : { background: "slate-800" }
      }
    >
      {ele}
    </button>
  );
}

export default Items;

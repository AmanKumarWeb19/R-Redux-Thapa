import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1 className="text-6xl text-red-500 font-bold underline">
          INCREMENT/DECREMENT COUNTER...!
        </h1>
        <h3 className="mt-10 text-purple-500 underline text-3xl font-serif">
          Using React - Redux
        </h3>

        <div className="border-4 border-red-400 items-center mt-8 w-96 m-auto p-1 bg-slate-400">
          <a
            title="Decrement"
            className="border bg-red-600 text-white text-2xl rounded-md cursor-pointer p-4"
          >
            <span>-</span>
          </a>
          <input
            className="mt-16 p-2 border-slate-500 border-4 rounded-md bg-slate-300 text-yellow-600 text-center text-[20px]"
            type="text"
            name="quantity"
            value="0"
          />
          <a
            title="Increment"
            className="border bg-green-600 text-white text-2xl rounded-md cursor-pointer p-4"
          >
            <span>+</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;

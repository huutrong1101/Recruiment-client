import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";

export default function App() {
  return (
    <div className="px-12 py-24 flex flex-col gap-12">
      <div>Change `./src/App` to modify the source code.</div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

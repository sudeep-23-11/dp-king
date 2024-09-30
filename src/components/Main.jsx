import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Overview from "./Overview.jsx";
import Other from "./Other.jsx";

export default function Main() {
  const [overview, setOverview] = useState("text-black border-black");
  const [other, setOther] = useState("text-gray-400 border-gray-400");

  const overviewFunc = () => {
    setOverview("text-black border-black");
    setOther("text-gray-400 border-gray-400");
  };

  const otherFunc = () => {
    setOverview("text-gray-400 border-gray-400");
    setOther("text-black border-black");
  };

  return (
    <BrowserRouter>
      <div>
        <div className="flex flex-row mt-4 ml-5">
          <button
            className={`h-12 w-64 font-medium border-b-4 ${overview}`}
            onClick={overviewFunc}
          >
            <Link to="/">Overview</Link>
          </button>
          <hr />
          <button
            className={`h-12 w-64 font-medium border-b-4 ${other}`}
            onClick={otherFunc}
          >
            <Link to="/other">Other</Link>
          </button>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/other" element={<Other />} />
      </Routes>
    </BrowserRouter>
  );
}

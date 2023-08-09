import React from "react";
import { Outlet } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

import { PiSidebar, PiStarLight } from "react-icons/pi";

export default function RecNavbar() {
  return (
    <>
      <div className="ml-[0.5%]">
        <button className="group relative h-12 w-[5%] overflow-hidden rounded-lg bg-white text-lg ">
          <div className="absolute inset-0 w-0 bg-gray-200 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <span className="relative left-[30%] text-black ">
            <PiSidebar />
          </span>
        </button>

        <button className="group relative ml-2 h-12 w-[5%] overflow-hidden rounded-lg bg-white text-lg">
          <div className="absolute inset-0 w-0 bg-gray-200 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <span className="relative left-[30%] text-black ">
            <PiStarLight />
          </span>
        </button>
        <button className="group relative h-12 w-28 overflow-hidden rounded-lg bg-white text-lg">
          <div className="absolute inset-0 w-0 bg-gray-200 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <span className="relative text-black ">Dashboard</span>
        </button>
        <span>/</span>
        <button className="group relative h-12 w-20 overflow-hidden rounded-lg bg-white text-lg">
          <div className="absolute inset-0 w-0 bg-gray-200 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <span className="relative text-black ">Default</span>
        </button>
      </div>
    </>
  );
}

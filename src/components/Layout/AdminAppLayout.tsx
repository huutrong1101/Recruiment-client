import { BrowserRouter, Outlet, Link, NavLink } from "react-router-dom";
import { PiSidebar, PiStarLight } from "react-icons/pi";

import LeftSidebar from "../AdminSidebar/AdminSidebar";

import Footer from "../../components/Footer/Footer";
import Rec_RightSidebar from "../RecRightSidebar/RecRightSidebar";

export default function AdminAppLayout() {
  return (
    <div className="flex">
      <div className="w-1/6 flex-1">
        <LeftSidebar />
      </div>
      <div className="w-2/3 flex flex-col">
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

        <Outlet />
        <div>
          <Footer />
        </div>
      </div>
      <div className="w-1/6 flex-1 ">
        <Rec_RightSidebar />
      </div>
    </div>
  );
}

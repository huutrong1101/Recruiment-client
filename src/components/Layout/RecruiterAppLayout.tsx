import React from "react";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import Rec_LeftSidebar from "../RecLeftSidebar/RecLeftSidebar";
import Rec_Navbar from "../RecNavDashboard/RecNavbar";
import DashboardFooter from "../RecFooter/DashboardFooter";
import Rec_RightSidebar from "../RecRightSidebar/RecRightSidebar";

export default function RecruiterAppLayout() {
  const activeMenu = true;
  return (
    <div>
      <div className="flex">
        <div className="w-1/6 flex-1 ">
          {/* <!-- Left Sidebar Content --> */}
          <Rec_LeftSidebar />
        </div>
        <div className="w-2/3 flex flex-col">
          {/* <!-- Navigation Bar --> */}
          <nav className="p-3 border-b-2 border-black-500">
            <Rec_Navbar />
          </nav>
          <Outlet />

          {/* <!-- Footer --> */}
          <footer className=" ">
            <DashboardFooter />
          </footer>
        </div>

        {/* <!-- Right Sidebar --> */}
        <div className="w-1/6 flex-1 ">
          <Rec_RightSidebar />
          {/* <!-- Right Sidebar Content --> */}
        </div>
      </div>

      {/* <DashboardFooter /> */}
    </div>
  );
}

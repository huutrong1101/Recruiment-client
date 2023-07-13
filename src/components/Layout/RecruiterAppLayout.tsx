import React from "react";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import RecLeftSidebar from "../RecLeftSidebar/RecLeftSidebar";
import RecNavbar from "../RecNavDashboard/RecNavbar";
import DashboardFooter from "../RecFooter/DashboardFooter";
import RecRightSidebar from "../RecRightSidebar/RecRightSidebar";

export default function RecruiterAppLayout() {
  const activeMenu = true;
  return (
    <div>
      <div className="flex">
        <div className="w-1/6 flex-1 ">
          {/* <!-- Left Sidebar Content --> */}
          <RecLeftSidebar />
        </div>
        <div className="w-2/3 flex flex-col">
          {/* <!-- Navigation Bar --> */}
          <nav className="p-3 border-b-2 border-black-500">
            <RecNavbar />
          </nav>
          <Outlet />

          {/* <!-- Footer --> */}
          <footer className=" ">
            <DashboardFooter />
          </footer>
        </div>

        {/* <!-- Right Sidebar --> */}
        <div className="w-1/6 flex-1 ">
          <RecRightSidebar />
          {/* <!-- Right Sidebar Content --> */}
        </div>
      </div>

    </div>
  );
}

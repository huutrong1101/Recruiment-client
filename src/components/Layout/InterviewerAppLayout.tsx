import React from "react";
import { Outlet } from "react-router-dom";
import image from "../../../images/avatar.png";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import RightSidebar from "../RightSidebar/RightSidebar";
import DashboardFooter from "../../components/RecFooter/DashboardFooter";
import RecLeftSidebar from "../RecLeftSidebar/RecLeftSidebar";
import RecRightSidebar from "../RecRightSidebar/RecRightSidebar";
import RecNavbar from "../RecNavDashboard/RecNavbar";

export default function InterviewerAppLayout() {
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

      {/* <DashboardFooter /> */}
    </div>
  );
}


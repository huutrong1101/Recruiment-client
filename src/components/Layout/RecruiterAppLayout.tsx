import React from "react";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import image from "../../../images/avatar.png";
import Rec_LeftSidebar from "../Rec_LeftSidebar/Rec_LeftSidebar";
import Rec_RightSidebar from "../Rec_RightSidebar/Rec_RightSidebar";
import DashboardFooter from "../Rec_Footer/DashboardFooter";
import Rec_Navbar from "../Rec_NavDashboard/Rec_Navbar"


export default function RecruiterAppLayout() {
  const activeMenu = true;
  return (
    <>
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

          {/* <!-- Main Content Area --> */}
          <div className="flex-auto">
            {/* <!-- Main Content --> */}
            <div className="h-full">
              <Outlet />
            </div>
          </div>

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




      {/* <div className="flex relative">
      {activeMenu ? (
        <div className="w-1/6 fixed sidebar ">
          <Rec_LeftSidebar/>
        </div>
      ) : (
        <div className="w-0">
          <Rec_LeftSidebar/>
        </div>
      )}
      <div
        className={
          activeMenu
            ? 'min-h-screen w-full  '
            : 'w-full min-h-screen flex-2 '
        }
      >
        <div className="fixed md:static navbar w-full ">
          <Rec_Navbar />
        </div>
        <div>
          
        </div>
        
      </div>
      {/* <Rec_RightSidebar/>
    </div> */}
    </>
  );
}

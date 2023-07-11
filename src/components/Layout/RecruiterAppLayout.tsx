import React from "react";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import Rec_LeftSidebar from "../RecLeftSidebar/RecLeftSidebar";
import Rec_Navbar from "../RecNavDashboard/RecNavbar";
import DashboardFooter from "../DashboardFooter/DashboardFooter";
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

          {/* Nav bar */}
          {/* <nav className="flex-1">
            <nav className="HeaderA w-full h-[72px] px-7 py-[22px] bg-white border border-black border-opacity-10 justify-center items-start gap-[616px] inline-flex">
              <div className="IconBreadcrumb justify-start items-center gap-2 inline-flex">
                <div className="Button w-7 h-7 p-1 rounded-lg justify-center items-center gap-1 flex">
                  <div className="SidebarD w-5 h-5 relative">
                    <img
                      className="Vector w-[16.25px] h-[13.75px] left-[1.88px] top-[3.12px] absolute"
                      src="https://via.placeholder.com/16x14"
                    />
                  </div>
                </div>
                <div className="Button w-7 h-7 p-1 rounded-lg justify-center items-center gap-1 flex">
                  <div className="StarD w-5 h-5 relative">
                    <img
                      className="Vector w-[17.49px] h-[16.88px] left-[1.25px] top-[1.25px] absolute"
                      src="https://via.placeholder.com/17x17"
                    />
                  </div>
                </div>
                <div className="Breadcrumb w-44 justify-start items-center gap-1 flex">
                  <div className="Button w-[98px] px-2 py-1 rounded-lg justify-center items-center gap-1 flex">
                    <div className="Text text-center text-black text-opacity-40 text-[14px] font-normal leading-tight">
                      Dashboards
                    </div>
                  </div>
                  <div className=" text-black text-opacity-20 text-[14px] font-normal leading-tight">
                    /
                  </div>
                  <div className="Button w-[65px] px-2 py-1 rounded-lg justify-center items-center gap-1 flex">
                    <div className="Text text-center text-zinc-900 text-[14px] font-normal leading-tight">
                      Default
                    </div>
                  </div>
                </div>
              </div>
              <div className="IconButton justify-end items-center gap-2 inline-flex">
                <div className="Button w-7 h-7 p-1 rounded-lg justify-center items-center gap-1 flex">
                  <div className="RightbarS w-5 h-5 relative">
                    <img
                      className="Vector w-[16.25px] h-[13.75px] left-[1.88px] top-[3.12px] absolute"
                      src="https://via.placeholder.com/16x14"
                    />
                  </div>
                </div>
              </div>
            </nav>
            
          </nav> */}
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

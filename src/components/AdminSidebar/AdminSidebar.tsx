import React from "react";
import image from "../../../images/uses.png";
import { Link, NavLink } from "react-router-dom";

import {
  MdOutlineEventAvailable,
  MdOutlineManageAccounts,
} from "react-icons/md";
import {
  HiOutlineFolder,
  HiOutlineCalendarDays,
  HiOutlineUser,
  HiOutlineChartPie,
} from "react-icons/hi2";
export const links = [
  {
    title: "Dash board",
    links: [
      {
        name: "Default",
        icon: <HiOutlineChartPie />,
        mylink: "admin/AdminDashboard",
      },
      {
        name: "Calender",
        icon: <HiOutlineCalendarDays />,
        mylink: "",
      },
      {
        name: "Interviewer",
        icon: <MdOutlineManageAccounts />,
        mylink: "",
      },
      {
        name: "Candidate",
        icon: <HiOutlineUser />,
        mylink: "",
      },
      {
        name: "Job",
        icon: <HiOutlineFolder />,
        mylink: "",
      },
      {
        name: "Event",
        icon: <MdOutlineEventAvailable />,
        mylink: "",
      },
    ],
  },
];

export default function AdminSidebar() {
  const activeMenu = true;
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 bg-gray-200";
  const normalLink =
    " flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md text-gray-700 hover:bg-gray-200 m-2";
  return (
    <>
      <div className="sticky top-0 h-full pb-10 overflow-auto bg-white border border-black border-opacity-10 md:overflow-hidden md:hover:overflow-auto">
        {activeMenu && (
          <>
            <div className="inline-flex items-center justify-between gap-3 mt-6 ml-8 ">
              <img
                alt=""
                className="Byewind w-11 h-11 relative rounded-[64px]"
                src={image}
              />
              <div className="font-normal leading-tight Text text-zinc-900 text-x">
                ByeWind
              </div>
            </div>

            <div className="ml-2">
              {links.map((item) => (
                <div key={item.title}>
                  <p className="mt-4 text-gray-400 ml-7 text-x">{item.title}</p>
                  {item.links.map((link) => (
                    <NavLink
                      to={`/${link.mylink}`}
                      key={link.name}
                      onClick={() => {}}
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                    >
                      <span className="ml-1 text-2xl text-black">
                        {link.icon}
                      </span>
                      <span className="flex text-black ">{link.name}</span>
                    </NavLink>
                  ))}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

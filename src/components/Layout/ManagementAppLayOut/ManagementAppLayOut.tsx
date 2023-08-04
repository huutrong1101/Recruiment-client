import React, { useState, useEffect } from "react";
import "./ManagementAppLayOut.scss";
import { Link, Outlet, NavLink } from "react-router-dom";
import classnames from "classnames";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import {
  HiOutlineFolder,
  HiOutlineCalendarDays,
  HiOutlineUser,
  HiOutlineChartPie,
  HiOutlineDocumentDuplicate,
  HiOutlineClipboardDocument,
  HiOutlineClipboardDocumentList,
} from "react-icons/hi2";
import {
  MdOutlineEventAvailable,
  MdOutlineManageAccounts,
} from "react-icons/md";
import RecFooter from "../../RecFooter/DashboardFooter";
import NavbarUserLoggedInCard from "../../Navbar/NavbarUserLoggedInCard";
import { useAppSelector, useAppDispatch } from "../../../hooks/hooks";

export const linksAll = [
  {
    title: "ADMIN",
    links: [
      {
        name: "Default",
        icon: <HiOutlineChartPie />,
        url: "admin/users",
      },
      {
        name: "Create Acount",
        icon: <HiOutlineDocumentDuplicate />,
        url: "admin/userscreate",
      },
      {
        name: "Profile",
        icon: <HiOutlineDocumentDuplicate />,
        url: "admin/profile",
      },
      {
        name: "Manager Job",
        icon: <HiOutlineCalendarDays />,
        url: "admin/jobs",
      },
    ],
  },
  {
    title: "RECRUITER",
    links: [
      {
        name: "Default",
        icon: <HiOutlineChartPie />,
        url: "recruiter/dashboard",
      },
      {
        name: "Calender",
        icon: <HiOutlineCalendarDays />,
        url: "recruiter/calender",
      },
      {
        name: "Interviewer",
        icon: <MdOutlineManageAccounts />,
        url: "recruiter/interviewers",
      },
      {
        name: "Candidate",
        icon: <HiOutlineUser />,
        url: "recruiter/applied-candidates",
      },
      {
        name: "Job",
        icon: <HiOutlineFolder />,
        url: "recruiter/jobs",
      },
      {
        name: "Event",
        icon: <MdOutlineEventAvailable />,
        url: "recruiter/events",
      },
    ],
  },
  {
    title: "INTERVIEWER",
    links: [
      {
        name: "Interview Recent",
        icon: <HiOutlineClipboardDocumentList />,
        url: "interviewer/interview-recent",
      },
      {
        name: "Candidate Recent",
        icon: <HiOutlineCalendarDays />,
        url: "interviewer/candidate-recent",
      },
      {
        name: "Interview Question",
        icon: <HiOutlineClipboardDocument />,
        url: "interviewer/question",
      },
    ],
  },
];
const ManagementAppLayOut = () => {
  const [leftActive, setLeftActive] = useState<boolean>(false);
  const activeLink =
    "flex items-center gap-3 py-1 rounded-lg text-black text-md  bg-gray-200 mt-1 mx-3";
  const normalLink =
    " flex items-center gap-3 py-1 rounded-lg text-black text-md text-gray-700 hover:bg-gray-200 mt-1 mx-3";

  const { user } = useAppSelector((state: any) => state.Auth);

  let links = linksAll;
  if (user?.role == "INTERVIEWER") {
    links = [linksAll[2]];
  } else if (user?.role == "RECRUITER") {
    links = [linksAll[1]];
  } else if (user?.role == "ADMIN") {
    links = [linksAll[0]];
  }

  return (
    <div className="ManagementAppLayOut">
      <div className="navbar ">
        <div className="fixed w-[100vw] z-10 bg-white top-0">
          <div
            className={classnames(
              "navbar-content flex items-center justify-between mx-4",
              { "minimize-content": leftActive },
            )}
          >
            <div className="flex justify-between navbar-content-left">
              <button type="button" onClick={() => setLeftActive(!leftActive)}>
                <Bars3Icon className="w-5 h-5 mr-2" />
              </button>
            </div>
            <div className="navbar-content-right">
              <NavbarUserLoggedInCard />
            </div>
          </div>
        </div>
        <div
          className={classnames("navbar-left ", {
            "minimize-left": leftActive,
          })}
        >
          <div className="flex justify-center items-center h-[72px]">
              <Link to="/">
                {leftActive?<div className="text-4xl font-semibold">JP</div>:<div className="text-4xl font-semibold">JobPort</div>}
              </Link>
          </div>
          <div className="">
            {links.map((item) => (
              <div key={item.title} className="mb-2">
                <hr className={classnames("mx-2 border border-black")} />
                <p
                  className={classnames(
                    "text-gray-400 mx-3 mt-2 text-x font-semibold",
                    { hidden: leftActive },
                  )}
                >
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.url}`}
                    key={link.name}
                    className={({ isActive }) =>
                      `${isActive ? activeLink : normalLink} ${
                        leftActive ? "justify-center" : "pl-4"
                      }`
                    }
                  >
                    <span className="text-2xl text-black">{link.icon}</span>
                    <div
                      className={classnames({
                        "text-black flex, hidden": leftActive,
                      })}
                    >
                      {link.name}
                    </div>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`${leftActive ? "small" : "large"} pt-[72px]`}>
        <div className="mx-[2rem] min-h-[calc(100vh-72px-2rem)] pb-[1.5rem]">
          <Outlet />
        </div>
        <RecFooter check={leftActive ? true : false} />
      </div>
    </div>
  );
};

export default ManagementAppLayOut;

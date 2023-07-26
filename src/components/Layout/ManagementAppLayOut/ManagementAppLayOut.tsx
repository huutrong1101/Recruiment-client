import React, { useState, useEffect } from "react";
import "./ManagementAppLayOut.scss";
import { Link, Outlet, NavLink } from "react-router-dom";
import classnames from "classnames";
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
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
import { useAppSelector, useAppDispatch } from "../../../hooks/hooks";
import { setText } from "../../../redux/reducer/SearchSlice";
export const links = [
  {
    title: "ADMIN",
    links: [
      {
        name: "Default",
        icon: <HiOutlineChartPie />,
        url: "admin/dashboard",
      },
      {
        name: "Profile",
        icon: <HiOutlineDocumentDuplicate />,
        url: "admin/profile",
      },
      {
        name: "Manager Job",
        icon: <HiOutlineCalendarDays />,
        url: "admin/job-manager",
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
        url: "recruiter/interviewer",
      },
      {
        name: "Candidate",
        icon: <HiOutlineUser />,
        url: "recruiter/candidates",
      },
      {
        name: "Job",
        icon: <HiOutlineFolder />,
        url: "recruiter/job-management",
      },
      {
        name: "Event",
        icon: <MdOutlineEventAvailable />,
        url: "recruiter/event",
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
        url: "interviewer/interview-question",
      },
    ],
  },
];
const ManagementAppLayOut = () => {
  const [leftActive, setLeftActive] = useState<boolean>(false);
  const [rightActive, setRightActive] = useState<boolean>(false);
  const activeLink =
    "flex items-center gap-3 py-1 rounded-lg text-black text-md  bg-gray-200 mt-1 mx-3";
  const normalLink =
    " flex items-center gap-3 py-1 rounded-lg text-black text-md text-gray-700 hover:bg-gray-200 mt-1 mx-3";

  const {text} = useAppSelector((state:any) => state.searchFeature);
  const dispatch = useAppDispatch();

  const handleLoadPage = () => {
    dispatch(setText(""));
  };

  const handleChange = (event : any) => {
    const textInput = event.target.value;
    dispatch(setText(textInput));
  }

  return (
    <div className="ManagementAppLayOut">
      <div className="navbar ">
        <div className="fixed w-[100vw] z-10 bg-white top-0">
          <div
            className={classnames(
              "navbar-content flex items-center justify-between",
              { "minimize-content": leftActive },
            )}
          >
            <div className="flex justify-between navbar-content-left">
              <button type="button" onClick={() => setLeftActive(!leftActive)}>
                <Bars3Icon className="w-5 h-5 mr-2" />
              </button>
              <div>Breadcrumbs</div>
            </div>
            <div className="navbar-content-mid">
              <form className="w-[40vw]">
                <div className="relative">
                  <MagnifyingGlassIcon className="absolute mt-[0.9rem] ml-[0.75rem] w-5 h-5"/>
                  <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-base rounded-lg w-full pl-10 p-2.5"
                        value={text} placeholder="Search Name" onChange={handleChange} required />
                </div>
              </form>
            </div>
            <div className="navbar-content-right">
              <button type="button" onClick={() => setRightActive(true)}>
                <Bars3Icon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div
          className={classnames("navbar-left ", {
            "minimize-left": leftActive,
          })}
        >
          <div className="flex mt-3 mb-6 ml-3">
            <div className="flex avt">
              <img
                src="https://img.hoidap247.com/picture/question/20200508/large_1588936738888.jpg"
                alt=""
                className="avt-img"
              />
              <div className="avt-act"></div>
            </div>
            <div className={classnames("mt-2 ml-2", { hidden: leftActive })}>
              Justin Bieber
            </div>
          </div>
          <div className="">
            {links.map((item) => (
              <div key={item.title}>
                <p
                  className={classnames(
                    "text-gray-400 mx-3 mt-4 text-x font-semibold",
                    { hidden: leftActive },
                  )}
                >
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.url}`}
                    key={link.name}
                    onClick={handleLoadPage}
                    className={({ isActive }) =>
                      `${isActive ? activeLink : normalLink} ${leftActive? 'justify-center': 'pl-4'}`
                    }
                  >
                    <span className="text-2xl text-black">
                      {link.icon}
                    </span>
                    <div
                      className={classnames({
                        "text-black flex, hidden": leftActive,
                      })}
                    >
                      {link.name}
                    </div>
                  </NavLink>
                ))}
                {leftActive ? <hr className={classnames("mx-2 mt-1 border border-black")}/> : ""}
              </div>
            ))}
          </div>
        </div>
        <div
          className={classnames("navbar-right", { "show-right": rightActive })}
        >
          <div className="">Activites</div>
          <ul className="side-links">
            <button
              type="button"
              className="right-hide-btn"
              onClick={() => setRightActive(false)}
            >
              <XMarkIcon className="w-5 h-5 text-white" />
            </button>
          </ul>
        </div>
      </div>
      <div className={`${leftActive ? "small" : "large"} pt-[72px]`}>
        <div className="mx-[2rem] min-h-[calc(100vh-72px-2rem)]">
          <Outlet />
        </div>
        <RecFooter check={leftActive ? true : false} />
      </div>
    </div>
  );
};

export default ManagementAppLayOut;

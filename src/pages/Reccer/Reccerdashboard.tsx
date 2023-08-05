import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { data } from "../../data/RecDashboardData";
import RecCard from "../../components/RecDashboardCard/RecDashboardCard";
import LineChart from "./Recchart";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchRecJobList } from "../../redux/reducer/RecJobSlice";
import {
  fetchRecInterviewerList,
  fetchRecInterviewerSkill,
} from "../../redux/reducer/RecInterviewerSilce";
import {
  fetchCandidateList,
  fetchCandidateSkill,
} from "../../redux/reducer/CandidateListSlice";
import axiosInstance from "../../utils/AxiosInstance";
import { current } from "@reduxjs/toolkit";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Reccer_dashboard() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRecJobList());
    dispatch(fetchCandidateList());
    dispatch(fetchCandidateSkill());
  }, []);
  const [isLoading, setIsLoading] = useState(false);
  const dashboard: any = useAppSelector(
    (state) => state.RecDashboardList.recDashboardList,
  );
  const [showdata, setshowdata] = useState(dashboard);
  useEffect(() => {
    const fetchPosition = async () => {
      setIsLoading(true);
      try {
        const response = await axiosInstance(
          `recruiter/statistic`
        );
        setshowdata(response.data.result);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosition();
  }, []);
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;

  console.log(showdata)
  interface ShowData {
    newUser: { total: number; details: string[] };
    activeUser: { total: number; details: string[] };
    jobPost: { total: number; details: string[] };
    jobApply: { total: number; details: string[] };
    hiring: { total: number; details: string[] };
  }
  // console.log(showdata.activeUser.details)
  return (
    <>
      <div className="mx-[3%] h-full">
        <Menu as="div" className="relative inline-block pt-4 text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              Today
              <ChevronDownIcon
                className="w-5 h-5 -mr-1 text-gray-400"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100 "
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute z-10 mt-2 origin-top-left bg-white rounded-md shadow-lg left-30 w-30 ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm",
                      )}
                    >
                      Yesterday
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm",
                      )}
                    >
                      Week
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm",
                      )}
                    >
                      Month
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <div className="flex flex-wrap justify-center items-center mt-[20px] ">
          {/* <!-- Card --> */}
          {/* First Line */}
          {/* Active User */}
          <div className="px-3 mb-8 lg:w-1/4 md:w-1/2">
            <button className={`p-4 rounded-lg hover:bg-blue-200 w-full bg-[#E3F5FF]`}>
              <div className="flex items-start justify-between">
                <div
                  className={classNames(
                    "flex items-center flex-col leading-7 tracking-wider"
                  )}
                >
                  <h3 className={classNames("text-black text-m font-semibold ")}>
                    Active Users
                  </h3>
                </div>
              </div>
              <div className={classNames("mt-4 flex text-2xl justify-between font-semibold ")}>

                {showdata &&
                  showdata.activeUser &&
                  showdata.activeUser.details.map((data: any) => {
                    <>
                      <p>sdfsdfsdfsdfsdfs</p>
                      <div className="flex">
                        <p className=" text-sm my-2 gap-2 inline-flex">asdasasdasddasd</p>
                        <span className="flex justify-center items-center"><HiOutlineArrowTrendingUp /></span>
                      </div>
                    </>
                  })}
              </div>

            </button>



          </div>
          <div className="px-3 mb-8 lg:w-1/4 md:w-1/2">
            <button className={`p-4 rounded-lg hover:bg-blue-200 w-full bg-[#E3F5FF]`}>
              <div className="flex items-start justify-between">
                <div
                  className={classNames(
                    "flex items-center flex-col leading-7 tracking-wider"
                  )}
                >
                  <h3 className={classNames("text-black text-m font-semibold ")}>
                    asdasdasdasdasd
                  </h3>
                </div>
              </div>
              <div className={classNames("mt-4 flex text-2xl justify-between font-semibold ")}>
                <p>asdasdsa</p>
                <div className="flex">
                  <p className=" text-sm my-2 gap-2 inline-flex">asdasdasd</p>
                  <span className="flex justify-center items-center"><HiOutlineArrowTrendingUp /></span>
                </div>
              </div>
            </button>

          </div>
          <div className="px-3 mb-8 lg:w-1/4 md:w-1/2">
            <button className={`p-4 rounded-lg hover:bg-blue-200 w-full bg-[#E3F5FF]`}>
              <div className="flex items-start justify-between">
                <div
                  className={classNames(
                    "flex items-center flex-col leading-7 tracking-wider"
                  )}
                >
                  <h3 className={classNames("text-black text-m font-semibold ")}>
                    asdasdasdasdasd
                  </h3>
                </div>
              </div>
              <div className={classNames("mt-4 flex text-2xl justify-between font-semibold ")}>
                <p>asdasdsa</p>
                <div className="flex">
                  <p className=" text-sm my-2 gap-2 inline-flex">asdasdasd</p>
                  <span className="flex justify-center items-center"><HiOutlineArrowTrendingUp /></span>
                </div>
              </div>
            </button>

          </div>
          <div className="px-3 mb-8 lg:w-1/4 md:w-1/2">
            <button className={`p-4 rounded-lg hover:bg-blue-200 w-full bg-[#E3F5FF]`}>
              <div className="flex items-start justify-between">
                <div
                  className={classNames(
                    "flex items-center flex-col leading-7 tracking-wider"
                  )}
                >
                  <h3 className={classNames("text-black text-m font-semibold ")}>
                    asdasdasdasdasd
                  </h3>
                </div>
              </div>
              <div className={classNames("mt-4 flex text-2xl justify-between font-semibold ")}>
                <p>asdasdsa</p>
                <div className="flex">
                  <p className=" text-sm my-2 gap-2 inline-flex">asdasdasd</p>
                  <span className="flex justify-center items-center"><HiOutlineArrowTrendingUp /></span>
                </div>
              </div>
            </button>

          </div>
          {/* Second Line */}
          <div className="px-3 mb-8 lg:w-1/4 md:w-1/2">
            <button className={`p-4 rounded-lg hover:bg-blue-200 w-full bg-[#E3F5FF]`}>
              <div className="flex items-start justify-between">
                <div
                  className={classNames(
                    "flex items-center flex-col leading-7 tracking-wider"
                  )}
                >
                  <h3 className={classNames("text-black text-m font-semibold ")}>
                    asdasdasdasdasd
                  </h3>
                </div>
              </div>
              <div className={classNames("mt-4 flex text-2xl justify-between font-semibold ")}>
                <p>asdasdsa</p>
                <div className="flex">
                  <p className=" text-sm my-2 gap-2 inline-flex">asdasdasd</p>
                  <span className="flex justify-center items-center"><HiOutlineArrowTrendingUp /></span>
                </div>
              </div>
            </button>

          </div>
          <div className="px-3 mb-8 lg:w-1/4 md:w-1/2">
            <button className={`p-4 rounded-lg hover:bg-blue-200 w-full bg-[#E3F5FF]`}>
              <div className="flex items-start justify-between">
                <div
                  className={classNames(
                    "flex items-center flex-col leading-7 tracking-wider"
                  )}
                >
                  <h3 className={classNames("text-black text-m font-semibold ")}>
                    asdasdasdasdasd
                  </h3>
                </div>
              </div>
              <div className={classNames("mt-4 flex text-2xl justify-between font-semibold ")}>
                <p>asdasdsa</p>
                <div className="flex">
                  <p className=" text-sm my-2 gap-2 inline-flex">asdasdasd</p>
                  <span className="flex justify-center items-center"><HiOutlineArrowTrendingUp /></span>
                </div>
              </div>
            </button>

          </div>
          <div className="px-3 mb-8 lg:w-1/4 md:w-1/2">
            <button className={`p-4 rounded-lg hover:bg-blue-200 w-full bg-[#E3F5FF]`}>
              <div className="flex items-start justify-between">
                <div
                  className={classNames(
                    "flex items-center flex-col leading-7 tracking-wider"
                  )}
                >
                  <h3 className={classNames("text-black text-m font-semibold ")}>
                    asdasdasdasdasd
                  </h3>
                </div>
              </div>
              <div className={classNames("mt-4 flex text-2xl justify-between font-semibold ")}>
                <p>asdasdsa</p>
                <div className="flex">
                  <p className=" text-sm my-2 gap-2 inline-flex">asdasdasd</p>
                  <span className="flex justify-center items-center"><HiOutlineArrowTrendingUp /></span>
                </div>
              </div>
            </button>

          </div>
          <div className="px-3 mb-8 lg:w-1/4 md:w-1/2">
            <button className={`p-4 rounded-lg hover:bg-blue-200 w-full bg-[#E3F5FF]`}>
              <div className="flex items-start justify-between">
                <div
                  className={classNames(
                    "flex items-center flex-col leading-7 tracking-wider"
                  )}
                >
                  <h3 className={classNames("text-black text-m font-semibold ")}>
                    asdasdasdasdasd
                  </h3>
                </div>
              </div>
              <div className={classNames("mt-4 flex text-2xl justify-between font-semibold ")}>
                <p>asdasdsa</p>
                <div className="flex">
                  <p className=" text-sm my-2 gap-2 inline-flex">asdasdasd</p>
                  <span className="flex justify-center items-center"><HiOutlineArrowTrendingUp /></span>
                </div>
              </div>
            </button>

          </div>


        </div>
        <div className="mb-5 bg-white drop-shadow-md rounded-2xl">
          <p className="px-[5%] pt-[3%] font-semibold text-2xl">
            Today DashBoard
          </p>

          <div className="h-[400px]">
            <LineChart />
          </div>
        </div>
      </div>
    </>
  );
}

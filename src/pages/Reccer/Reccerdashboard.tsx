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
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";

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
        const response = await axiosInstance(`recruiter/statistic`);
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
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  return (
    <>
      {!isLoading ? (
        <>
          <div className="mx-[3%] h-full">
            <Menu as="div" className="relative inline-block pt-4 text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  Today Status
                </Menu.Button>
              </div>
            </Menu>

            <div className="flex flex-wrap justify-center items-center mt-[20px] ">
              {/* <!-- Card --> */}
              {showdata &&
                showdata.length > 0 &&
                showdata.map((data: any, index: any) => (
                  <div key={index} className=" px-3 mb-8 lg:w-1/5 md:w-1/2">
                    <RecCard job={data} index={index} />
                  </div>
                ))}
            </div>

            <div className="mb-4 bg-white border hover:shadow-lg duration-500 rounded-2xl">
              <p className="px-[5%] pt-[3%] font-semibold text-2xl">
                General Analytic
              </p>

              <div className="h-[400px]">
                <LineChart showdata={showdata} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center my-4 min-h-[70vh] flex-col items-center">
          <LoadSpinner className="text-3xl" />
        </div>
      )}
    </>
  );
}

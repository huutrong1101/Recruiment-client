import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { data } from "../../data/RecJobManagementData";
import RecJobCard from "../../components/RecJobManagementCard/RecJobManagementCard";
export default function Reccer_JobManagement() {
    return (
        <>
            <form className="flex w-3/4 items-center mx-auto p-2">
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" fill="none" viewBox="0 0 18 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
                        </svg>
                    </div>
                    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full pl-10 p-2.5   " placeholder="Search Name" required />
                </div>
                <div className="flex items-center p-5">
                    <Link to="#">
                        <div className="sm:w-[100px] h-[50px] relative" >
                            <button className="w-full h-full left-5 top-0 absolute bg-[#48A280] hover:bg-emerald-700 text-white rounded-lg" type="submit">+ Add Job</button>
                        </div>
                    </Link>
                </div>
            </form>
            <div className="flex flex-wrap justify-center items-center 2 mt-[10px] ">
                {/* <!-- Card --> */}
                {data.listJobs &&
                    data.listJobs.map((job) => (
                        <div key={job.jobId} className=" px-4 mb-8 md:w-5/6">
                            <RecJobCard job={job} />
                        </div>
                    ))}
            </div>
          </Link>
        </div>
        {activeSearch.length > 0 && (
          <div className="absolute top-20 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
            {activeSearch.map((s) => (
              <span>{s}</span>
            ))}
          </div>
        )}
      </form>
      <div className="flex flex-wrap justify-center items-center mt-[10px] ">
        {/* <!-- Card --> */}
        {data.listJobs &&
          data.listJobs.map((job) => (
            <div key={job.jobId} className=" px-4 mb-8 md:w-5/6 ">
              <RecCard job={job} />
            </div>
          ))}
      </div>
      <div className="grid md:grid-cols-12 grid-cols-1 mt-1">
        <div className="md:col-span-12 text-center justify-center">
          <ul className="inline-flex items-center -space-x-px">
            <li>
              <a
                href="#"
                className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white rounded-s-3xl hover:text-white border border-gray-300  hover:border-emerald-600  hover:bg-emerald-600 "
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white border border-gray-300  hover:border-emerald-600 hover:bg-emerald-600 "
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white border border-gray-300  hover:border-emerald-600  hover:bg-emerald-600 "
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white border border-gray-300  hover:border-emerald-600  hover:bg-emerald-600 "
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white rounded-e-3xl hover:text-white border border-gray-300  hover:border-emerald-600 hover:bg-emerald-600 "
              >
                5
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

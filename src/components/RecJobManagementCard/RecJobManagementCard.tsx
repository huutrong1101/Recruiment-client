import React from "react";
import classnames from "classnames";
import logo_FPT from "../../../images/logo_FPT.png";



interface MyComponentProps {
  job: {
    jobId: number;
    createdAt: string;
    jobType: string;
    name: string;
    TimeFrom: number;
    TimeTo: number;
    MoneyFrom: number;
    MoneyTo: number;
    Decription: string;
  };
}

export default function Rec_DashboardCard({ job }: MyComponentProps) {
  return (
    <>
      <div className="group relative overflow-hidden bg-white shadow hover:shadow-md  rounded-md transition-all duration-500 h-fit">
        <div className="p-6">
          <div className="flex items-center">
            <div className="w-14 h-14 min-w-[56px] flex items-center justify-center bg-white shadow  rounded-md">
              <img className="my-3" src={logo_FPT} />
            </div>

            <div className={classnames("ml-4 items-center leading-7 tracking-wider")}>
              <h1 className={classnames("text-black text-lg font-semibold ")}>
                {job.name}
                <span className="text-gray-400 text-sm ml-5 font-semibold ">{job.createdAt} days ago</span>
              </h1>
              <button className={classnames("text-[#05966A] text-center text-xs font-semibold bg-[#C6DED5] p-1 rounded-full px-2 hover:bg-[#05966A] hover:text-white")}>
                {job.jobType}
              </button>
              <span className="text-gray-400 text-sm ml-5 font-semibold " >EST. Time:{job.TimeFrom} To {job.TimeTo} Months </span>
              <span className="text-gray-400 text-sm ml-1 font-semibold " >Hourly: ${job.MoneyFrom} - ${job.MoneyTo} </span>

            </div>
          </div>
          <div className={classnames("flex items-start mt-4")}>
            <h3
              className={classnames(
                "text-black text-center text-sm font-semibold leading-7 tracking-wider capitalize"
              )}
            >
              Decription:
              <span className="ml-1 text-gray-400 font-normal">
                {job.Decription}
              </span>
            </h3>
          </div>
          <div>
            <span className={classnames("bg-gray-300 hover:bg-gray-400  inline-block text-slate-900 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1")}>
              HTML/CSS
            </span>
            <span className={classnames("bg-gray-300 hover:bg-gray-400  inline-block text-slate-900 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1")}>
              RectJS
            </span>
            <span className={classnames("bg-gray-300 hover:bg-gray-400  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1")}>
              JavaScripts
            </span>
            <span className={classnames("bg-gray-300 hover:bg-gray-400  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1")}>
              JavaScripts
            </span>

          </div>
        </div>
        <div className="px-6 py-3 bg-gray-200  lg:flex justify-between items-center">
          <div className="lg:inline-block flex justify-between"></div>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-semibold text-gray-500  sm:mt-0">
            <li>
              <a href="#" className="btn py-2 px-5 btn-sm rounded-2xl bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full lg:w-auto lg:mt-0 mt-4 ">Edit</a>
            </li>
            <li>
              <a href="#" className="py-2 px-2 rounded-2xl bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full lg:w-auto lg:mt-0 mt-4">Create Schedule</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white absolute top-0 end-0 m-3"></a>
      </div>

    </>

  );
}

import React from "react";
import classnames from "classnames";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";

interface MyComponentProps {
  job: {
    jobId: number,
    Type: string,
    quantity: string,
    percentage: string,
  },
  index: {
    index: number,
  }
}

export default function Rec_DashboardCard({ job,index }: MyComponentProps) {
  return (
    <>
      <button className={`p-4 rounded-lg hover:bg-blue-200 w-full ${index % 2 === 0 ? "bg-[#E3F5FF] " : "bg-[#DFF9EF] hover:bg-green-200"}`}>
        <div className="flex items-start justify-between">
          <div
            className={classnames(
              "flex items-center flex-col leading-7 tracking-wider"
            )}
          >
            <h3 className={classnames("text-black text-m font-semibold ")}>
              {job.Type}
            </h3>
          </div>
        </div>
        <div className={classnames("mt-4 flex text-2xl justify-between font-semibold ")}>
          <p>{job.quantity}</p>
          <div className="flex">
            <p className=" text-sm my-2 gap-2 inline-flex">+{job.percentage}%</p>
            <span className="flex justify-center items-center"><HiOutlineArrowTrendingUp /></span>
          </div>
        </div>
      </button>
    </>
  );
}

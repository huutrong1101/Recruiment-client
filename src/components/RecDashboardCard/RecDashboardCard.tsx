import React from "react";
import classnames from "classnames";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";

interface MyComponentProps {
  job: {
    jobId: number,
    Type: string,
    quantity: string,
    percentage: string,
  };
}

export default function Rec_DashboardCard({ job }: MyComponentProps) {
  return (
    <>
      <button className="p-4 bg-blue-50 rounded-lg hover:bg-blue-200 w-full">
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
        <div className={classnames("mt-4")}>
            <div className={classnames("flex text-2xl font-semibold")}>
              <p>{job.quantity}</p>
              <p className="ml-[32%] text-sm my-2 gap-2 inline-flex">+{job.percentage}%</p>
              <span className="flex justify-center items-center"><HiOutlineArrowTrendingUp/></span>
            </div>
        </div>
      </button>     
    </>
  );
}

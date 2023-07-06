import React from "react";
import classnames from "classnames";
import logo_FPT from "../../../images/logo_FPT.png";
import { Link } from "react-router-dom";
import {
  MapPinIcon,
  UserIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

interface MyComponentProps {
  job: {
    jobId: number;
    createdAt: string;
    jobType: string;
    name: string;
    location: string;
    quantity: number;
  };
}

export default function JobCard({ job }: MyComponentProps) {
  return (
    <>
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <div className={classnames("flex items-start justify-between")}>
          <img src={logo_FPT} alt="" />
          <div
            className={classnames(
              "flex items-center flex-col leading-7 tracking-wider capitalize"
            )}
          >
            <h3 className={classnames("text-black text-lg font-medium ")}>
              FPT Softwave
            </h3>
            <p
              className={classnames(
                "text-gray-500 text-center text-sm font-normal "
              )}
            >
              {job.createdAt} days ago
            </p>
          </div>
          <p
            className={classnames(
              "text-green-500 text-center text-xs font-medium bg-slate-300 p-1 rounded-full px-2"
            )}
          >
            {job.jobType}
          </p>
        </div>
        <div className={classnames("mt-4")}>
          <h3
            className={classnames(
              "text-black text-center text-lg font-medium leading-7 tracking-wider capitalize"
            )}
          >
            {job.name}
          </h3>
          <div className={classnames("mt-2")}>
            <div className={classnames("flex gap-2")}>
              <MapPinIcon className={classnames(`w-[20px] ml-4`)} />
              <p>Ha Noi</p>
            </div>
            <div className={classnames("flex gap-2")}>
              <UserIcon className={classnames(`w-[20px] ml-4`)} />
              <p>{job.quantity} member</p>
            </div>
          </div>
        </div>
        <div className={classnames("mt-4")}>
          <div className={classnames("flex items-center justify-center")}>
            <Link
              to="/jobs"
              className={classnames(
                "bg-emerald-700 text-white p-2 rounded-md flex"
              )}
            >
              Read More
              <ArrowRightIcon className={classnames(`w-[20px] ml-1`)} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
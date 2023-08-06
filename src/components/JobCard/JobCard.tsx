import React from "react";
import classnames from "classnames";
import logo_FPT from "../../../images/logo_FPT.png";
import { Link } from "react-router-dom";
import {
  MapPinIcon,
  UserIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import moment from "moment";
import { JobInterface } from "../../services/services";
import { JOB_POSITION } from "../../utils/Localization";
import { HiMapPin, HiUser } from "react-icons/hi2";
import classNames from "classnames";

interface JobCardProps {
  job: JobInterface;
}

export default function JobCard({ job }: JobCardProps) {
  const now = moment();
  const created = moment(job.createdAt);
  const duration = moment.duration(now.diff(created));
  const days = duration.asDays();

  const maxCharacters = 30; // Số ký tự tối đa bạn muốn hiển thị
  const title = job.name;

  let shortenedTitle = title;

  if (title.length > maxCharacters) {
    shortenedTitle = title.substring(0, maxCharacters) + "...";
  }

  return (
    <Link to={`/jobs/${job.jobId}`}>
      <div
        className={classNames(
          `p-6 bg-white rounded-lg shadow-sm border hover:border-emerald-700`,
          `ease-in-out duration-75 hover:shadow-md`,
          `flex flex-row md:flex-col`,
        )}
      >
        <div className={classnames("w-8/12 md:w-full")}>
          <h3
            className={classnames(
              "text-black text-md font-bold leading-7 tracking-wider capitalize break-words",
            )}
          >
            {shortenedTitle}
          </h3>
          <div
            className={classnames(
              "mt-2 text-gray-600 text-sm flex flex-col gap-1",
            )}
          >
            <div className={classnames("flex flex-row gap-4 items-center")}>
              <HiMapPin />
              <p className="flex-1">{JOB_POSITION[job.location]}</p>
            </div>
            <div className={classnames("flex flex-row gap-4 items-center")}>
              <HiUser />
              <p className="flex-1">{job.quantity} members</p>
            </div>
          </div>
        </div>

        {/* <div className={classnames("mt-4")}>
          <div className={classnames("flex items-center justify-center")}>
            <Link
              to={`/jobs/${job.jobId}`}
              className={classnames(
                "bg-emerald-700 text-emerald-100 p-2 rounded-md flex gap-2",
              )}
            >
              <span>Read More</span>
              <ChevronRightIcon className={classnames(`w-[20px] ml-1`)} />
            </Link>
          </div>
        </div> */}

        {/* Job pill */}
        {/* <div>
          <p
            className={classnames(
              "text-emerald-700 text-xs font-medium p-1 rounded-full px-2",
            )}
          >
            {JOB_POSITION[job.jobType]}
          </p>
        </div> */}
        <hr className="hidden my-2 sm:block opacity-30" />

        <div
          className={classnames(
            "flex flex-col md:flex-row items-center justify-center md:gap-4",
          )}
        >
          <img src={logo_FPT} alt="" className="w-2/12 md:w-3/12" />
          <div
            className={classnames(
              "flex flex-col tracking-wider capitalize flex-1",
            )}
          >
            <h3 className={classnames("text-black text-base font-medium ")}>
              FPT Software
            </h3>
            <p className={classnames("text-gray-300 text-xs font-normal ")}>
              {days >= 1
                ? `${Math.floor(days)} days`
                : `${Math.abs(duration.asHours()).toFixed(0)} hours`}{" "}
              ago
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

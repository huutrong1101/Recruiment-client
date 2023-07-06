import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import blog_image from "../../../images/blog_image.png";
import {
  ArrowRightIcon,
  CalendarDaysIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

interface MyComponentProps {
  event: {
    id: number;
    date: string;
    time: string;
    title: string;
  };
}

export default function BlogCard({ event }: MyComponentProps) {
  return (
    <>
      <div className="bg-white rounded-lg shadow-lg ">
        <div className={classnames("w-full")}>
          <img
            src={blog_image}
            alt="blog_image"
            className={classnames("w-full")}
          />
        </div>
        <div className={classnames("p-6")}>
          <div className={classnames("flex items-center justify-between")}>
            <div className={classnames("flex items-center gap-1")}>
              <CalendarDaysIcon className={classnames(`w-[20px]`)} />
              <p>{event.date}</p>
            </div>
            <div className={classnames("flex items-center gap-1")}>
              <ClockIcon className={classnames(`w-[20px]`)} />
              <p>{event.time} min read</p>
            </div>
          </div>
          <div className={classnames("mt-2")}>
            <h3
              className={classnames(
                "text-black text-base font-medium leading-7 tracking-wider capitalize"
              )}
            >
              {event.title}
            </h3>
          </div>
          <div className={classnames("mt-6 flex items-center justify-center")}>
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

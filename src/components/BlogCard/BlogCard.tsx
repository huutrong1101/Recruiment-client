import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import blog_image from "../../../images/blog_image.png";
import {
  ArrowRightIcon,
  CalendarDaysIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import moment from "moment";
import { EventInterface } from "../../services/services";

interface BlogCardProps {
  event: EventInterface;
}

export default function BlogCard({ event }: BlogCardProps) {
  const formattedDate = moment(event.startAt).format("Do MMMM, YYYY");

  console.log(event);
  return (
    <>
      <div className="bg-white rounded-lg shadow-lg">
        <div className={classnames("w-full")}>
          <img
            src={event.img || blog_image}
            alt="blog_image"
            className={classnames("w-full h-[200px] object-cover")}
          />
        </div>
        <div className={classnames("p-6")}>
          <div className={classnames("flex items-center justify-between")}>
            <div
              className={classnames("flex items-center gap-1 text-gray-500")}
            >
              <CalendarDaysIcon className={classnames(`w-[20px]`)} />
              <p>{formattedDate}</p>
            </div>
            <div
              className={classnames("flex items-center gap-1 text-gray-500")}
            >
              <ClockIcon className={classnames(`w-[20px]`)} />
              <p>{event.time}</p>
            </div>
          </div>
          <div className={classnames("mt-2")}>
            <h3
              className={classnames(
                "text-black text-base font-medium leading-7 tracking-wider capitalize",
              )}
            >
              {event.title}
            </h3>
          </div>
          <div className={classnames("mt-6 flex items-center justify-center")}>
            <Link
              // to={`/events/${event.id}`}
              to={`/events/${event.id}`}
              className={classnames(
                "bg-emerald-700 text-white p-2 rounded-md flex",
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

import classNames from "classnames";
import he from "he";
import moment from "moment";
import { useEffect } from "react";
import { HiCalendarDays } from "react-icons/hi2";
import { Link } from "react-router-dom";
import blog_image from "../../../images/blog_image.png";

export default function RecruiterBlogCard({ event }: any) {
  useEffect(() => {
    console.log(event);
  }, [event]);
  return (
    <Link to={`/recruiter/events/${event.id}`}>
      <div className="bg-white rounded-lg shadow-lg border rounded-t-xl flex flex-col hover:border-emerald-700 cursor-pointer">
        {/* Header thumbnail */}
        <div className="w-full flex justify-center">
          <img
            src={event.img || blog_image}
            className="object-center aspect-video rounded-t-xl shadow-sm"
          />
        </div>

        <div className="px-6 py-4 flex flex-col gap-3">
          {/* Times and dates */}
          <div className="grid md:grid-rows-3 grid-rows-none md:grid-cols-0 text-gray-500 text-xs gap-2">
            <div className="flex items-center gap-1">
              <HiCalendarDays />
              <p>{moment(event.startAt).format("DD/MM/YY")}</p>
            </div>
            <div className="flex items-center gap-1">
              {/* <HiClock /> */}
              <p>{moment(event.time, "HH:mm:ss").format("HH:mm")}</p>
            </div>
            <div className="text-xs opacity-60">
              {moment().isAfter(event.deadline) ? (
                <span
                  className={classNames(
                    `bg-red-700 text-red-100 px-2 py-1 rounded-md`,
                  )}
                >
                  Finished
                </span>
              ) : moment().isSame(event.deadline, "day") ? (
                <span
                  className={classNames(
                    `bg-yellow-700 text-yellow-100 px-2 py-1 rounded-md`,
                  )}
                >
                  Ending
                </span>
              ) : (
                <span
                  className={classNames(
                    `text-emerald-100 bg-emerald-800 px-2 py-1 rounded-md`,
                  )}
                >
                  Progress
                </span>
              )}
            </div>
          </div>

          {/* Title */}
          <div className="text-base">
            <h1 className="font-semibold line-clamp-2 break-words">
              {/* {event.title.length > 25
              ? event.title.substring(0, 15) + "  ..."
              : event.title} */}
              {he.decode(event.title)}
            </h1>
          </div>

          <div
            className={classNames(
              `line-clamp-2 text-sm text-gray-500 text-justify leading-4`,
            )}
          >
            {he.decode(event.description)}
          </div>
        </div>
      </div>
    </Link>
  );
}

import { CalendarDaysIcon, ClockIcon } from "@heroicons/react/24/outline";
import classnames from "classnames";
import moment from "moment";
import { Link } from "react-router-dom";
import blog_image from "../../../images/blog_image.png";
import { EventInterface } from "../../services/services";

interface BlogCardProps {
  event: EventInterface;
}

export default function BlogCard({ event }: BlogCardProps) {
  const formattedDate = moment(event.startAt).format("Do MMMM, YYYY");

  const maxCharacters = 26; // Số ký tự tối đa bạn muốn hiển thị
  const title = event.title;

  let shortenedTitle = title;

  if (title.length > maxCharacters) {
    shortenedTitle = title.substring(0, maxCharacters) + "...";
  }

  // console.log(event);
  return (
    <Link to={`/events/${event.id}`}>
      <div className="bg-white rounded-lg shadow-lg border hover:border-emerald-700">
        <div className={classnames("w-full shadow")}>
          <img
            src={event.img || blog_image}
            alt="blog_image"
            className={classnames(
              "w-full h-[150px] object-cover aspect-video rounded-t-md",
            )}
          />
        </div>
        <div className={classnames("p-6")}>
          <div
            className={classnames("flex items-center justify-between text-xs")}
          >
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
              <p>{moment(event.time, "HH:mm:ss").format("HH:mm")}</p>
            </div>
          </div>

          {/* Description */}
          <div className={classnames("mt-2")}>
            <h3
              className={classnames(
                "text-black text-base font-medium tracking-wider capitalize line-clamp-2",
              )}
            >
              {event.title}
            </h3>

            <p
              className={classnames(`mt-4 text-xs line-clamp-4 text-gray-400`)}
            >
              {event.description}
            </p>
          </div>

          {/* <div className={classnames("mt-6 flex items-center justify-center")}>
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
          </div> */}
        </div>
      </div>
    </Link>
  );
}

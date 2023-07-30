import React, { useEffect, useState } from "react";
import classNames from "classnames";
import BlogCard from "../../components/BlogCard/BlogCard";
import blog_image from "../../../images/blog_image.png";
import { EventInterface, EventListConfig } from "../../services/services";
import { useAppSelector } from "../../hooks/hooks";
import useQueryParams from "../../hooks/useQueryParams";
import { omitBy, isUndefined, isEqual } from "lodash";
import qs from "query-string";
import axiosInstance from "../../utils/AxiosInstance";
import Pagination from "../../components/Pagination/Pagination";
import moment from "moment";
import { Link } from "react-router-dom";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";

export type QueryConfig = {
  [key in keyof EventListConfig]: string;
};

export default function Events() {
  const events: EventInterface[] = useAppSelector((state) => state.Home.events);

  const totalEvents = useAppSelector((state) => state.Home.totalEvents);

  const queryParams: QueryConfig = useQueryParams();

  const queryConfig: QueryConfig = omitBy(
    {
      index: queryParams.index || "1",
      size: queryParams.size || 6,
    },
    isUndefined,
  );

  const [showEvents, setShowEvents] = useState(events);

  const [pageSize, setPageSize] = useState(
    Math.ceil(totalEvents / Number(queryParams.size || 6)),
  );

  const [isLoading, setIsLoading] = useState(false);

  const [prevQueryConfig, setPrevQueryConfig] =
    useState<QueryConfig>(queryConfig);

  useEffect(() => {
    const fetchPosition = async () => {
      setIsLoading(true);
      try {
        if (queryConfig) {
          const query = qs.stringify(queryConfig);
          const response = await axiosInstance(`/events?${query}`);
          setShowEvents(response.data.result.content);
          setPageSize(response.data.result.totalPages);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosition();
  }, []);

  useEffect(() => {
    if (!isEqual(prevQueryConfig, queryConfig)) {
      const fetchJobs = async () => {
        setIsLoading(true);
        try {
          const query = qs.stringify(queryConfig);
          const response = await axiosInstance(`/events?${query}`);
          setShowEvents(response.data.result.content);
          setPageSize(response.data.result.totalPages);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchJobs();
      setPrevQueryConfig(queryConfig);
    }
  }, [queryConfig, prevQueryConfig]);

  return (
    <div className={classNames("flex gap-5 mb-12")}>
      {/* List Blog  */}
      <div className={classNames("w-[70%]")}>
        {isLoading ? (
          <div className="flex justify-center my-4">
            <LoadSpinner className="text-3xl text-emerald-500" />
          </div>
        ) : (
          <div className="flex flex-wrap -mx-4">
            {/* <!-- Card --> */}
            {showEvents.length > 0 ? (
              showEvents.map((event) => (
                <div key={event.id} className="w-full px-4 mb-8 md:w-1/2">
                  <BlogCard event={event} />
                </div>
              ))
            ) : (
              <div className="flex justify-center w-full mb-10">
                <span>Không tìm thấy kết quả</span>
              </div>
            )}
          </div>
        )}

        {/* Pagination  */}
        <Pagination
          queryConfig={queryConfig}
          pageSize={pageSize}
          url="/events"
        />
      </div>

      {/* Most Popular  */}
      <div
        className={classNames(
          "w-[30%] p-6 bg-white rounded-lg shadow-lg h-fit sticky top-1",
        )}
      >
        <h3
          className={classNames(
            "text-black text-base font-semibold leading-7 tracking-wider capitalize flex items-center justify-center",
          )}
        >
          Most popular
        </h3>
        <div className={classNames("flex flex-col gap-4 mt-2 pt-2 border-t-2")}>
          {events.slice(0, 3).map((event) => {
            const formattedDate = moment(event.startAt).format("Do MMMM, YYYY");
            return (
              <Link
                to={`/events/${event.id}`}
                className={classNames(
                  "flex gap-3 w-full bg-gray-100 rounded-lg overflow-hidden cursor-pointer",
                )}
              >
                <div className={classNames("w-[30%]")}>
                  <img
                    src={event.img || blog_image}
                    alt=""
                    className={classNames("h-full object-cover")}
                  />
                </div>
                <div className={classNames("w-[70%]")}>
                  <h3 className="text-base font-medium text-black capitalize">
                    {event.title}
                  </h3>
                  <p className="text-gray-500">{formattedDate}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

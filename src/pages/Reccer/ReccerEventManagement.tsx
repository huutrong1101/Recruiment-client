import React, { useEffect, useState, } from "react";
import classnames from "classnames";
import blog_image from "../../../images/blog_image.png";
import { Link, NavLink } from "react-router-dom";
import { data } from "../../data/homeData";
import { ArrowRightIcon, CalendarDaysIcon, ClockIcon, } from "@heroicons/react/24/outline";
import SearchBar from "../../components/Search/Search";
import { EventInterface, JobListConfig } from "../../services/services";
import useQueryParams from "../../hooks/useQueryParams";
import { omitBy, isUndefined, isEqual } from "lodash";
import { useAppSelector } from "../../hooks/hooks";
import qs from "query-string";
import axiosInstance from "../../utils/AxiosInstance";
import moment from "moment";
import Pagination from "../../components/Pagination/Pagination";
import Loader from "../../components/Loader/Loader";
import { Outlet } from "react-router-dom";
import AdminTable from "../../components/AdminManagerList/AdminTable";
import { STATUS } from "../../utils/Status";
import { AcountConfig, AcountInterface } from "../../services/services";
import { createSearchParams, useNavigate } from "react-router-dom";
import Paginationacountlist from "../../components/AdminManagerList/Pagination/Paginationacountlist";

export type QueryConfig = {
  [key in keyof JobListConfig]: string;
};
export default function ReccerEventManagement() {
  const events: EventInterface[] = useAppSelector((state) => state.Home.events);

  const totalEvents = useAppSelector((state) => state.Home.totalEvents);

  const queryParams: QueryConfig = useQueryParams();

  const queryConfig: QueryConfig = omitBy(
    {
      index: queryParams.index || "1",
      size: queryParams.size || 6,
      name: queryParams.name || "",
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

  // Search
  const navigate = useNavigate();
  const [typeSelected, setTypeSelected] = useState("");
  const [dataSearch, setDataSearch] = useState({
    key: "",
  });
  const handleSearch = async () => {
    try {
      setIsLoading(true);
      navigate({
        pathname: "/recruiter/events",
        search: createSearchParams({
          ...queryConfig,
          name: dataSearch.key,
        }).toString(),
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleGetData = (type: any) => {
    setTypeSelected(type.typename);
    navigate({
      pathname: "/recruiter/events",
      search: createSearchParams({
        ...queryConfig,
        page: "1",
        name: dataSearch.key,
      }).toString(),
    });
  };

  return (
    <>
      <div>
        {/* Search */}
        <div className="justify-center flex grid-cols-[100%] sm:grid-cols-[15%,60%,25%] gap-1 pt-5 mx-auto lg:grid-cols-[25%,60%,25%] ">
        <form
          onSubmit={handleSearch}
          className="inline-flex items-center justify-start gap-1 px-0.5 py-0.5 bg-white border rounded-xl bg-opacity-5"
        >
          <div className="flex items-center justify-center gap-3 relative">              
            <input
              type="text"
              className="font-medium outline-none text-gray-900 text-[14px] h-[30px] text-left rounded-lg"
              value={dataSearch.key}
              onChange={(e) =>
                setDataSearch({ ...dataSearch, key: e.target.value })
              }
                placeholder=" Please enter a search     "
              />
            </div>
        </form>
        <button
          onClick={() => handleSearch()}
          className="px-6 py-1.5 ml-5 text-white rounded-lg bg-emerald-600 hover:bg-emerald-800"
        >
          Search
        </button>

        </div>
        {/* Add Event */}
        <NavLink to="/recruiter/events-add" onClick={() => { }}>
          <button className="text-white shadow text-sm font-medium leading-tight flex py-2 px-2 justify-start bg-emerald-600 rounded-xl ">
            + Add Event
          </button>
        </NavLink>

        {/* Conten */}
        <div>
          {isLoading ? (
            <div className="flex justify-center">
              <Loader />
            </div>
          ) : (
            <div className="flex flex-wrap -mx-4 mt-[50px]">
              {/* <!-- Card --> */}

              <>
                {showEvents.map((event) => (
                  <div key={event.id} className="w-full px-4 mb-8 md:w-1/3">
                    {/* <BlogCard event={event} /> */}
                    <div className="bg-white rounded-lg shadow-lg">
                      <div className={classnames("w-full")}>
                        <img
                          src={event.img || blog_image}
                          className={classnames("w-full h-[300px] object-cover")}
                        />
                      </div>
                      <div className={classnames("p-6")}>
                        <div className={classnames("flex items-center justify-between")}>
                          <div className={classnames("flex items-center gap-1")}>
                            <CalendarDaysIcon className={classnames(`w-[20px]`)} />
                            <p>{moment(event.startAt).format("Do MMMM, YYYY")}</p>
                          </div>
                          <div className={classnames("flex items-center gap-1")}>
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
                            to={`${event.id}`}
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
                  </div>
                ))}
              </>

            </div>
          )}
        </div>

        <div>
          {/* Pagination  */}
          <Pagination
            queryConfig={queryConfig}
            pageSize={pageSize}
            url="/recruiter/events"
          />
        </div>
      </div >
    </>
  );
}

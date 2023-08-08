import { useEffect, useState, } from "react";
import blog_image from "../../../images/blog_image.png";
import { Link, NavLink } from "react-router-dom";
import { ArrowPathIcon, ArrowRightIcon, CalendarDaysIcon, ChevronDownIcon, ClockIcon, ExclamationTriangleIcon, MagnifyingGlassIcon, NoSymbolIcon, } from "@heroicons/react/24/outline";
import { EventInterface, EventListConfig } from "../../services/services";
import useQueryParams from "../../hooks/useQueryParams";
import { omitBy, isUndefined, isEqual } from "lodash";
import { useAppSelector } from "../../hooks/hooks";
import qs from "query-string";
import axiosInstance from "../../utils/AxiosInstance";
import moment from "moment";
import Pagination from "../../components/Pagination/Pagination";
import { createSearchParams, useNavigate } from "react-router-dom";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";
import classNames from "classnames";
import { BsFilterLeft } from "react-icons/bs";

export type QueryConfig = {
  [key in keyof EventListConfig]: string;
};
export default function ReccerEventManagement() {
  const events: EventInterface[] = useAppSelector((state) => state.Home.events);

  const totalEvents = useAppSelector((state) => state.Home.totalEvents);

  const queryParams: QueryConfig = useQueryParams();

  const queryConfig: QueryConfig = omitBy(
    {
      index: queryParams.index || "1",
      size: queryParams.size || 6,
      state: queryParams.state || true,
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
          const response = await axiosInstance(`/recruiter/events?${query}`);
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
          const response = await axiosInstance(`/recruiter/events?${query}`);
          setShowEvents(response.data.result.content);
          setPageSize(response.data.result.totalPages);
          console.log(response.data.result.content);
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
  const [dataSearch, setDataSearch] = useState({
    key: "",
  });
  const handleSearch = async (e: any) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      navigate({
        pathname: "/recruiter/events",
        search: createSearchParams({
          ...queryConfig,
          index: "1",
          name: dataSearch.key,
        }).toString(),
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="flex justify-center mt-10 item-center"
        >
          {/* Input */}
          <div
            className={classNames(
              "flex items-center flex-shrink-0 w-1/2 p-2 border rounded-lg ",
              "focus-within:border-emerald-700",
            )}
          >
            <MagnifyingGlassIcon className={classNames(`w-[20px]`)} />
            <input
              value={dataSearch.key}
              onChange={(e) =>
                setDataSearch({ ...dataSearch, key: e.target.value })
              }
              type="text"
              placeholder="Search your Keywords"
              className={classNames(
                "w-full h-full text-[12px] ml-3 focus:outline-none text-base text-zinc-400",
              )}
            />
          </div>
          {/* Button */}
          <div className={classNames("gap-2 ml-10 items-center justify-center")}>
            <button
              className={classNames(
                "bg-[#05966A] hover:bg-emerald-700 text-white p-3 rounded-md flex w-full text-center items-center justify-center",
              )}
              type="submit"
            >
              Search
            </button>
          </div>
        </form>

        {/*Add Button  */}
        <div className="fixed bottom-4 right-0 p-4 text-white">       
          <div className="sm:w-[100px] h-[50px] relative">
            <NavLink to="/recruiter/events-add" >
            <button className="relative w-[50%] h-full text-3xl font-w bg-[#05966A] hover:bg-emerald-700 text-white rounded-full transition-all duration-300 hover:w-[100%] group">
              <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 text-sm -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Add Event
              </span>
              <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                +
              </span>
            </button>
             </NavLink>
          </div>      
        </div>            
        
        {/* Content */}
        <div>
          {isLoading ? (
            <div className="flex justify-center my-4 min-h-[70vh] flex-col items-center">
                    <LoadSpinner className="text-3xl " />
            </div>
          ) : (
            <div className="flex flex-wrap mx-4 mt-[50px]">
              {/* <!-- Card --> */}
              {showEvents && showEvents.length > 0 ?
                (showEvents.map((event) => (
                  <div key={event.id} className="w-full px-4 mb-10 md:w-1/3 borded-2">
                    <div className="bg-white rounded-lg shadow-lg borded-2">
                      <div className="w-full flex justify-center ">
                        <img
                          src={event.img || blog_image}
                          className="w-2/3 h-2/3 mx-auto rounded-lg shadow dark:shadow-gray-700 aspect-square "
                          />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <CalendarDaysIcon className="w-[20px]" />
                            <p>{moment(event.startAt).format("Do MMMM, YYYY")}</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <ClockIcon className="w-[20px]" />
                            <p>{moment(event.time, "HH:mm:ss").format("HH:mm")}</p>
                          </div>
                        </div>
                        <div className="mt-2 text-left">
                          {moment().isAfter(event.deadline) ? (
                            <div className="flex">
                              <NoSymbolIcon className="w-6 h-6 mr-2 " style={{ color: "red" }} />
                              <p style={{ color: 'red', fontStyle: 'italic' }}>Finished ...</p>
                            </div>
                          ) : moment().isSame(event.deadline, 'day') ? (
                            <div className="flex">
                              <ExclamationTriangleIcon className="w-6 h-6 mr-2 " style={{ color: "#FFD700" }} />
                              <p style={{ color: '#FFD700', fontStyle: 'italic' }}>Coming to end ...</p>
                            </div>
                          ) : (
                            <div className="flex">
                              <ArrowPathIcon className="w-6 h-6 mr-2 " style={{ color: "#059669" }} />
                              <p style={{ color: '#059669', fontStyle: 'italic' }}>On Going ...</p>
                            </div>
                          )}
                        </div>
                        <div className="mt-2 text-center text-xl justify text-bold italic">
                          <Link
                            to={`${event.id}`}
                            className="p-2 px-6 rounded-md flex"
                          >
                            {event.title.length > 20
                              ? event.title.substring(0, 15) + "  ..."
                              : event.title}
                          </Link>
                        </div>
                        <div className="mt-6 flex items-center justify-center">
                          <Link
                            to={`${event.id}`}
                            className="bg-emerald-600 hover:bg-emerald-800 text-white p-2 px-6 rounded-md flex"
                          >
                            View More...
                            {/* <ArrowRightIcon className="w-[20px] ml-1" /> */}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
                ) : (
                  <div className="flex justify-center my-4 min-h-[70vh] flex-col text-center">
                    <span>No results were found. Please check again</span>
                  </div>
                  )}

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
    </>
  );
}

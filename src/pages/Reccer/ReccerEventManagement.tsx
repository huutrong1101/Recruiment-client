import { useEffect, useState, } from "react";
import blog_image from "../../../images/blog_image.png";
import { Link, NavLink } from "react-router-dom";
import { ArrowRightIcon, CalendarDaysIcon, ChevronDownIcon, ClockIcon, MagnifyingGlassIcon, } from "@heroicons/react/24/outline";
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
      <div>        
            <div
              className={classNames(
                "flex justify-center mt-5 item-center ",
              )}
            >
              <form
                onSubmit={e => handleSearch(e)}
              > 
                <div
                  className={classNames(
                    "flex justify-center items-center w-80% p-1 border rounded-xl",
                    "focus-within:border-emerald-400",
                  )}
                >
                    <BsFilterLeft className={classNames(`w-[20px] ml-4 mr-4`)} />
                    <div
                      className={classNames(
                        "text-[16px] cursor-pointer flex items-center justify-between",
                      )}
                    >
                        Name Event      
                    </div>
                    <div className=" flex items-center p-3 rounded-xl">
                      <MagnifyingGlassIcon className="w-5 h-5 mx-2  mr-4" />
                      <input
                        type="text"
                        placeholder="Search your name Event"
                        className="w-[85%] h-full text-base text-zinc-400 focus:outline-none"
                        value={dataSearch.key}
                        onChange={(e) => setDataSearch({ ...dataSearch, key: e.target.value })}
                      />
                    </div> 
                    <div
                      className={classNames(
                        "text-[16px] cursor-pointer flex items-center justify-between",
                      )}
                    >
                        <button
                          type="submit"
                          className="bg-[#05966A] hover:bg-emerald-700 text-white p-2 rounded-md flex items-center justify-center"
                        >
                          Search
                        </button>      
                    </div>                              
                </div>                  
              </form>
            </div>           





        <div className="mt-5">
        {/* Add Event */}
          <button
          className={classNames(  "text-white p-3 rounded-xl w-1/8 text-white shadow text-sm font-medium leading-tight flex justify-start bg-emerald-600 ",
          )}>
            <NavLink to="/recruiter/events-add" onClick={() => { }}>
              + Add Event
            </NavLink>
          </button>
        </div>
        {/* Conten */}
        <div>
          {isLoading ? (
            <div className="flex justify-center">
                    <LoadSpinner className="text-2xl text-[#059669] " />
            </div>
          ) : (
            <div className="flex flex-wrap mx-4 mt-[50px]">
              {/* <!-- Card --> */}
              {showEvents && showEvents.length > 0 ?
                (showEvents.map((event) => (
                  <div key={event.id} className="w-full px-4 mb-8 md:w-1/3">
                    <div className="bg-white rounded-lg shadow-lg">
                      <div className="w-full">
                        <img
                          src={event.img || blog_image}
                          className="w-full h-[250px] object-center rounded-lg flex justify-center"
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
                            <p style={{ color: 'red', fontStyle: 'italic' }}>Finished ...</p>
                          ) : moment().isSame(event.deadline, 'day') ? (
                            <p style={{ color: '#FFD700', fontStyle: 'italic' }}>Coming to end ...</p>
                          ) : (
                            <p style={{ color: '#059669', fontStyle: 'italic' }}>On Going ...</p>
                          )}
                        </div>
                        <div className="mt-2 text-center">
                          <h1 className="text-2xl e-justify text-e-bold italic">
                            {event.title.length > 25
                              ? event.title.substring(0, 15) + "  ..."
                              : event.title}
                          </h1>
                        </div>
                        <div className="mt-6 flex items-center justify-center">
                          <Link
                            to={`${event.id}`}
                            className="bg-emerald-700 text-white p-2 rounded-md flex"
                          >
                            Read More
                            <ArrowRightIcon className="w-[20px] ml-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
                ) : (
                  <div className="flex justify-center w-full mb-10">
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
      </div >
    </>
  );
}

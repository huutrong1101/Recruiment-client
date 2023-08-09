import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { isEqual, isUndefined, omitBy } from "lodash";
import qs from "query-string";
import { useEffect, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import RecruiterBlogCard from "../../components/BlogCard/RecruiterBlogCard";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";
import Pagination from "../../components/Pagination/Pagination";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { useAppSelector } from "../../hooks/hooks";
import useQueryParams from "../../hooks/useQueryParams";
import { EventInterface, EventListConfig } from "../../services/services";
import axiosInstance from "../../utils/AxiosInstance";

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
      size: queryParams.size || 8,
      state: queryParams.state || true,
      name: queryParams.name || "",
    },
    isUndefined,
  );

  const [showEvents, setShowEvents] = useState(events);

  const [pageSize, setPageSize] = useState(
    Math.ceil(totalEvents / Number(queryParams.size || 8)),
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
        <div className={classNames("flex mt-5 item-center gap-4")}>
          <form
            onSubmit={(e) => handleSearch(e)}
            className={classNames(`flex flex-row gap-2 items-center`)}
          >
            <div
              className={classNames(
                "flex justify-center items-center w-full border rounded-xl",
                "focus-within:border-emerald-400 w-full",
              )}
            >
              {/* <BsFilterLeft className={classNames(`ml-4 mr-4`)} />
              <div
                className={classNames(
                  "text-[16px] cursor-pointer flex items-center justify-between",
                )}
              >
                Name
              </div> */}
              <div className=" flex items-center p-3 rounded-xl">
                <MagnifyingGlassIcon className="w-5 h-5 mx-2  mr-4" />
                <input
                  type="text"
                  placeholder="Search for events"
                  className="h-full w-full text-base text-zinc-400 focus:outline-none"
                  value={dataSearch.key}
                  onChange={(e) =>
                    setDataSearch({ ...dataSearch, key: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <PrimaryButton type="submit" text={`Search`} className={`w-4`} />
            </div>
          </form>

          <div className="flex flex-row-reverse items-center flex-1">
            {/* Add Event */}
            {/* <button
              className={classNames(
                "text-white p-3 rounded-xl w-2/8 shadow text-sm font-medium leading-tight flex justify-start bg-emerald-600 ",
              )}
            >
              <NavLink to="/recruiter/events-add" onClick={() => {}}>
                Add Event
              </NavLink>
            </button> */}
            <div>
              <PrimaryButton
                text={`Add event`}
                onClick={() => {
                  navigate(`/recruiter/events-add`);
                }}
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          {isLoading ? (
            <div className="flex justify-center my-4 min-h-[70vh] flex-col items-center">
              <LoadSpinner className="text-3xl " />
            </div>
          ) : (
            <div className="sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 grid mt-[50px] ">
              {/* <!-- Card --> */}
              {showEvents && showEvents.length > 0 ? (
                showEvents.map((event) => (
                  <RecruiterBlogCard event={event} key={event.id} />
                ))
              ) : (
                <div className="flex justify-center w-full mb-10">
                  <span>No results were found. Please check again</span>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex flex-col mt-6">
          {/* Pagination  */}
          <Pagination
            queryConfig={queryConfig}
            pageSize={pageSize}
            url="/recruiter/events"
          />
        </div>
      </div>
    </>
  );
}

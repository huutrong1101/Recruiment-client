import { Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import classNames from "classnames";
import { isEqual, isUndefined, omit, omitBy } from "lodash";
import qs from "query-string";
import { Fragment, useEffect, useState } from "react";
import { AiOutlineBlock } from "react-icons/ai";
import { createSearchParams, useNavigate } from "react-router-dom";
import JobCard from "../../components/JobCard/JobCard";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";
import Pagination from "../../components/Pagination/Pagination";
import { useAppSelector } from "../../hooks/hooks";
import useQueryParams from "../../hooks/useQueryParams";
import { JobInterface, JobListConfig } from "../../services/services";
import axiosInstance from "../../utils/AxiosInstance";
import { JOB_POSITION } from "../../utils/Localization";

export type QueryConfig = {
  [key in keyof JobListConfig]: string;
};

export default function Jobs() {
  const jobs: JobInterface[] = useAppSelector((state) => state.Job.jobs);

  const posistion = useAppSelector((state) => state.Job.postion);

  const location = useAppSelector((state) => state.Job.location);

  const type = useAppSelector((state) => state.Job.type);

  const totalJobs = useAppSelector((state) => state.Job.totalJobs);

  const [dataSearch, setDataSearch] = useState({
    key: "",
    posName: "",
    location: "",
    type: "",
  });

  const navigate = useNavigate();

  const queryParams: QueryConfig = useQueryParams();

  const queryConfig: QueryConfig = omitBy(
    {
      index: queryParams.index || "1",
      size: queryParams.size || 10,
      name: queryParams.name,
      location: queryParams.location,
      posName: queryParams.posName,
      type: queryParams.type,
    },
    isUndefined,
  );

  const [prevQueryConfig, setPrevQueryConfig] =
    useState<QueryConfig>(queryConfig);

  const [showJobs, setShowJobs] = useState(jobs);

  const [pageSize, setPageSize] = useState(
    Math.ceil(totalJobs / Number(queryParams.size || 10)),
  );

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPosition = async () => {
      setIsLoading(true);
      try {
        if (queryConfig) {
          const query = qs.stringify(queryConfig);
          const response = await fetchJobWithQuery(query);
          setShowJobs(response.data.result.content);
          setPageSize(response.data.result.totalPages);

          setDataSearch({
            ...dataSearch,
            key: queryConfig.name || "",
            type: queryConfig.type || "",
          });
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
          const response = await fetchJobWithQuery(query);
          setShowJobs(response.data.result.content);
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

  const fetchJobWithQuery = async (query: string) => {
    return await axiosInstance(`/jobs?${query}`, {
      headers: { Authorization: null },
    });
  };

  const handleSearch = async (e: any) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      navigate({
        pathname: "/jobs",
        search: createSearchParams({
          ...queryConfig,
          name: dataSearch.key,
          posName: dataSearch.posName,
          location: dataSearch.location,
          type: dataSearch.type,
          index: "1",
        }).toString(),
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setDataSearch({
      key: "",
      posName: "",
      location: "",
      type: "",
    });

    navigate({
      pathname: "/jobs",
      search: createSearchParams(
        omit(queryConfig, [
          "name",
          "posName",
          "index",
          "size",
          "location",
          "type",
        ]),
      ).toString(),
    });
  };

  return (
    <>
      <div className={classNames("flex gap-5 mb-12")}>
        {/* Sidebar Search  */}
        <div
          className={classNames(
            "p-6 bg-white rounded-lg shadow-sm w-1/3 h-fit sticky top-[25px] flex flex-col gap-3 border",
          )}
        >
          <form onSubmit={(e) => handleSearch(e)}>
            {/* Search  */}
            <div>
              <h3 className={classNames("text-base font-semibold")}>
                Search for
              </h3>
              <div
                className={classNames(
                  "flex items-center flex-shrink-0 w-full p-2 border rounded-xl mt-2",
                  "focus-within:border-emerald-600 text-base",
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
                    "w-[85%] h-full text-[12px] ml-3 focus:outline-none text-base text-zinc-400",
                  )}
                />
              </div>
            </div>
            {/* Category  */}
            <div className={classNames("mt-4")}>
              <h3 className={classNames("text-base font-semibold capitalize")}>
                Position
              </h3>
              <Menu as="div" className={classNames("relative mt-2")}>
                <Menu.Button
                  className={classNames(
                    "cursor-pointer flex items-center justify-between w-full p-2 border rounded-xl",
                  )}
                >
                  <span className={classNames("ml-2 text-zinc-400")}>
                    {JOB_POSITION[dataSearch.posName] || "Position"}
                  </span>
                  <ChevronDownIcon className={classNames("w-[20px] ml-4")} />
                  {/* Drop down  */}
                </Menu.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute left-0 z-10 w-full mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {posistion.map((pos, index) => (
                        <Menu.Item key={index}>
                          {({ active }) => (
                            <p
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm",
                              )}
                              onClick={() =>
                                setDataSearch({
                                  ...dataSearch,
                                  posName: pos,
                                })
                              }
                            >
                              {JOB_POSITION[pos]}
                            </p>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            {/* Location  */}
            <div className={classNames("mt-4")}>
              <h3 className={classNames("text-base font-semibold  capitalize")}>
                Location
              </h3>
              <Menu as="div" className={classNames("relative mt-2")}>
                <Menu.Button
                  className={classNames(
                    "cursor-pointer flex items-center justify-between w-full p-2 border rounded-xl",
                  )}
                >
                  <span className={classNames("ml-2 text-zinc-400")}>
                    {JOB_POSITION[dataSearch.location] || "Location"}
                  </span>
                  <ChevronDownIcon className={classNames("w-[20px] ml-4")} />
                  {/* Drop down  */}
                </Menu.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute left-0 z-10 w-full mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {location.map((location, index) => (
                        <Menu.Item key={index}>
                          {({ active }) => (
                            <p
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm",
                              )}
                              onClick={() =>
                                setDataSearch({
                                  ...dataSearch,
                                  location: location,
                                })
                              }
                            >
                              {JOB_POSITION[location]}
                            </p>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            {/* Jobs Type  */}
            <div className={classNames("mt-4")}>
              <h3 className={classNames("text-base font-semibold")}>
                Jobs Type
              </h3>
              <Menu as="div" className={classNames("relative mt-2")}>
                <Menu.Button
                  className={classNames(
                    "cursor-pointer flex items-center justify-between w-full p-2 border rounded-xl",
                  )}
                >
                  <span className={classNames("ml-2 text-zinc-400")}>
                    {JOB_POSITION[dataSearch.type] || "Jobs Type"}
                  </span>
                  <ChevronDownIcon className={classNames("w-[20px] ml-4")} />
                  {/* Drop down  */}
                </Menu.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute left-0 z-10 w-full mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {type.map((type, index) => (
                        <Menu.Item key={index}>
                          {({ active }) => (
                            <p
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm",
                              )}
                              onClick={() =>
                                setDataSearch({
                                  ...dataSearch,
                                  type: type,
                                })
                              }
                            >
                              {JOB_POSITION[type]}
                            </p>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            {/* Button Search */}
            <div className={classNames("mt-6 flex gap-2 flex-col")}>
              <button
                className={classNames(
                  "bg-emerald-700 hover:bg-emerald-900 text-white p-3 rounded-md flex w-full text-center items-center justify-center",
                )}
              >
                Search
              </button>
            </div>
          </form>
          <button
            className={classNames(
              "bg-red-700 hover:bg-red-900 text-white p-3 rounded-md flex w-full text-center items-center justify-center",
            )}
            onClick={() => handleReset()}
          >
            Reset
          </button>
        </div>

        {/* List Jobs  */}

        <div className={classNames("w-[70%]")}>
          {isLoading ? (
            <div className="flex justify-center my-4 min-h-[70vh] flex-col items-center">
              <LoadSpinner className="text-3xl text-emerald-500" />
            </div>
          ) : (
            <div className="flex flex-wrap -mx-4">
              {/* <!-- Card --> */}
              {showJobs.length > 0 ? (
                <>
                  {showJobs.map((job) => (
                    <>
                      {" "}
                      <div className="w-full px-4 mb-8 md:w-1/2">
                        <JobCard job={job} key={job.jobId} />
                      </div>
                    </>
                  ))}
                </>
              ) : (
                <div className="flex flex-col justify-center w-full mb-10 min-h-[70vh] items-center text-3xl gap-4">
                  <span>
                    <AiOutlineBlock />
                  </span>
                  <span>There is no job available.</span>
                </div>
              )}
            </div>
          )}
          {/* Pagination  */}
          <Pagination
            queryConfig={queryConfig}
            pageSize={pageSize}
            url="/jobs"
          />
        </div>
      </div>
    </>
  );
}

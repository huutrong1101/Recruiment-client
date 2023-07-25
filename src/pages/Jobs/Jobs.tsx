import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import classNames from "classnames";
import JobCard from "../../components/JobCard/JobCard";
import { data } from "../../data/homeData";
import { useAppSelector } from "../../hooks/hooks";
import { JobInterface, JobListConfig } from "../../services/services";
import Pagination from "../../components/Pagination/Pagination";
import axiosInstance from "../../utils/AxiosInstance";
import { omitBy, isUndefined } from "lodash";
import useQuerParams from "../../hooks/useQueryParams";
import Loader from "../../components/Loader/Loader";
import qs from "query-string";
import { createSearchParams, useNavigate } from "react-router-dom";
import { omit, isEqual } from "lodash";

export type QueryConfig = {
  [key in keyof JobListConfig]: string;
};

export default function Jobs() {
  const jobs: JobInterface[] = useAppSelector((state) => state.Home.jobs);

  const totalJobs = useAppSelector((state) => state.Home.totalJobs);

  const navigate = useNavigate();

  const queryParams: QueryConfig = useQuerParams();

  const queryConfig: QueryConfig = omitBy(
    {
      index: queryParams.index || "0",
      limit: queryParams.limit || 10,
      name: queryParams.name,
      location: queryParams.location,
      posName: queryParams.posName,
      category: queryParams.category,
    },
    isUndefined,
  );

  const [prevQueryConfig, setPrevQueryConfig] =
    useState<QueryConfig>(queryConfig);

  const [showJobs, setShowJobs] = useState(jobs);

  const [pageSize, setPageSize] = useState(
    Math.ceil(totalJobs / Number(queryParams.limit ?? 10)),
  );

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isEqual(prevQueryConfig, queryConfig)) {
      const fetchJobs = async () => {
        setIsLoading(true);
        try {
          const query = qs.stringify(queryConfig);
          const response = await axiosInstance(`/jobs?${query}`);
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

  const [dataSearch, setDataSearch] = useState({
    key: "",
    category: "",
    location: "",
    type: "BACKEND",
  });

  const handleSearch = async () => {
    try {
      setIsLoading(true);

      navigate({
        pathname: "/jobs",
        search: createSearchParams({
          ...queryConfig,
          name: dataSearch.key,
          posName: dataSearch.type,
          index: "0",
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
      category: "",
      location: "",
      type: "",
    });

    navigate({
      pathname: "/jobs",
      search: createSearchParams(
        omit(queryConfig, ["name", "posName"]),
      ).toString(),
    });
  };

  return (
    <>
      <div className={classNames("flex gap-5 mb-12")}>
        {/* Sidebar Search  */}
        <div
          className={classNames(
            "p-6 bg-white rounded-lg shadow-lg w-[30%] h-fit sticky top-1",
          )}
        >
          {/* Search  */}
          <div>
            <h3 className={classNames("text-base font-semibold capitalize")}>
              Search Position
            </h3>
            <div
              className={classNames(
                "flex items-center flex-shrink-0 w-full p-2 border rounded-full mt-2",
                "focus-within:border-emerald-400",
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
                  "w-[85%] h-full text-[12px] ml-3 focus:outline-none text-base text-gray-500",
                )}
              />
            </div>
          </div>
          {/* Category  */}
          <div className={classNames("mt-4")}>
            <h3 className={classNames("text-base font-semibold  capitalize")}>
              Cateogories
            </h3>
            <Menu as="div" className={classNames("relative mt-2")}>
              <Menu.Button
                className={classNames(
                  "cursor-pointer flex items-center justify-between w-full p-2 border rounded-full",
                )}
              >
                <span className={classNames("ml-2 text-gray-500")}>
                  {dataSearch.category || "---Choose---"}
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
                    {data.listFieldSearch.categories.map((cate) => (
                      <Menu.Item key={cate.id}>
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
                                category: cate.category,
                              })
                            }
                          >
                            {cate.category}
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
                  "cursor-pointer flex items-center justify-between w-full p-2 border rounded-full",
                )}
              >
                <span className={classNames("ml-2 text-gray-500")}>
                  {dataSearch.location || "---Choose---"}
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
                    {data.listFieldSearch.locations.map((location) => (
                      <Menu.Item key={location.id}>
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
                                location: location.location,
                              })
                            }
                          >
                            {location.location}
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
            <h3 className={classNames("text-base font-semibold  capitalize")}>
              Jobs Type
            </h3>
            <Menu as="div" className={classNames("relative mt-2")}>
              <Menu.Button
                className={classNames(
                  "cursor-pointer flex items-center justify-between w-full p-2 border rounded-full",
                )}
              >
                <span className={classNames("ml-2 text-gray-500")}>
                  {dataSearch.type || "---Choose---"}
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
                    {data.listFieldSearch.jobTypes.map((type) => (
                      <Menu.Item key={type.id}>
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
                                type: type.type,
                              })
                            }
                          >
                            {type.type}
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
                "bg-emerald-700 text-white p-3 rounded-md flex w-full text-center items-center justify-center",
              )}
              onClick={() => handleSearch()}
            >
              Search
            </button>
            <button
              className={classNames(
                "bg-red-500 text-white p-3 rounded-md flex w-full text-center items-center justify-center",
              )}
              onClick={() => handleReset()}
            >
              Reset
            </button>
          </div>
        </div>

        {/* List Jobs  */}

        <div className={classNames("w-[70%]")}>
          {isLoading ? (
            <div className="flex justify-center">
              <Loader />
            </div>
          ) : (
            <div className="flex flex-wrap -mx-4">
              {/* <!-- Card --> */}
              {showJobs.length > 0 ? (
                showJobs.map((job) => (
                  <div key={job.jobId} className="w-full px-4 mb-8 md:w-1/2">
                    <JobCard job={job} />
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
          <Pagination queryConfig={queryConfig} pageSize={pageSize} />
        </div>
      </div>
    </>
  );
}

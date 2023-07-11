import React, { useState } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import classNames from "classnames";
import JobCard from "../../components/JobCard/JobCard";
import { data } from "../../data/homeData";

export default function Jobs() {
  const [dataSearch, setDataSearch] = useState({
    key: "",
    category: "",
    location: "",
    type: "",
  });

  const handleSearch = () => {
    alert(JSON.stringify(dataSearch));
    setDataSearch({
      key: "",
      category: "",
      location: "",
      type: "",
    });
  };

  return (
    <>
      <div className={classNames("flex gap-5")}>
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
                  {dataSearch.category}
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
                  {dataSearch.location}
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
                  {dataSearch.type}
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
          <div className={classNames("mt-6")}>
            <button
              className={classNames(
                "bg-emerald-700 text-white p-3 rounded-md flex w-full text-center items-center justify-center",
              )}
              onClick={() => handleSearch()}
            >
              Search
            </button>
          </div>
        </div>

        {/* List Jobs  */}
        <div className={classNames("w-[70%]")}>
          <div className="flex flex-wrap -mx-4">
            {/* <!-- Card --> */}
            {data.listJobs &&
              data.listJobs.map((job) => (
                <div key={job.jobId} className="w-full px-4 mb-8 md:w-1/2">
                  <JobCard job={job} />
                </div>
              ))}
          </div>

          {/* Pagination  */}
          <nav
            aria-label="Page navigation example"
            className="flex items-center justify-center"
          >
            <ul className="flex list-style-none">
              <li>
                <a className="relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 hover:bg-neutral-100">
                  Previous
                </a>
              </li>
              <li>
                <a
                  className="relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100"
                  href="#!"
                >
                  1
                </a>
              </li>
              <li aria-current="page">
                <a
                  className="relative block rounded-full bg-primary-100 px-3 py-1.5 text-sm font-medium text-primary-700 transition-all duration-300 hover:bg-neutral-100"
                  href="#!"
                >
                  2
                  <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                    (current)
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100"
                  href="#!"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  className="relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100"
                  href="#!"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

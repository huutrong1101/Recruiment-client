import React, { useState, Fragment } from "react";
import home_page from "../../../images/home_page.png";
import classnames from "classnames";
import {
  CakeIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";
import { data } from "../../data/homeData";
import JobCard from "../../components/JobCard/JobCard";
import BlogCard from "../../components/BlogCard/BlogCard";
import Advertise from "../../components/Advertise/Advertise";
import { Menu, Transition } from "@headlessui/react";

export default function Home() {
  const [showType, setShowType] = useState(false);

  const [search, setSearch] = useState("");

  const [type, setType] = useState(data.listTypeJobs[1].name);

  const handleSubmit = () => {
    alert("Giá trị thu được với từ khóa: " + search + " và loại: " + type);
  };

  return (
    <div className={classnames("h-full")}>
      <div className={classnames("flex justify-between")}>
        <div
          className={classnames(
            "w-[55%] py-8 pl-[30px] md:pl-[60px] lg:pl-[90px]",
          )}
        >
          <img
            src={home_page}
            alt="home_page"
            className={classnames("w-full")}
          />
        </div>

        <div className={classnames("w-[45%] relative")}>
          <div
            className={classnames(
              "absolute top-[50%] translate-y-[-50%] text-center",
            )}
          >
            <h3
              className={classnames(
                "text-[18px] md:text-[25px] lg:text-[48px] font-semibold",
              )}
            >
              Join Us &{" "}
              <span className={classnames("text-emerald-700")}>
                Explore Thousands
              </span>{" "}
              of Jobs
            </h3>
            <p
              className={classnames(
                "text-[12px] md:text-[18px] font-semibold text-gray-500",
              )}
            >
              Find Jobs, Employment & Career Opportunities. Some of the
              companies we've helped recruit excellent applicants over the
              years.
            </p>
          </div>
        </div>
      </div>

      {/* SEARCH  */}
      <form
        className={classnames(
          "flex flex-col border rounded-md shadow-md md:shadow-lg md:flex-row p-3 gap-4 mt-[40px] md:mt-[80px]",
        )}
      >
        <div
          className={classnames(
            "flex w-full items-center flex-shrink-0 md:w-[49%] border-r-2",
          )}
        >
          <MagnifyingGlassIcon
            className={classnames(`w-[20px] ml-1 md:ml-4`)}
          />
          <input
            type="text"
            placeholder="Search your Keywords"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={classnames(
              "w-[85%] h-full text-[10px] md:text-[17px] ml-3 focus:outline-none",
            )}
          />
        </div>

        <div
          className={classnames(
            "flex items-center w-full gap-4 md:w-[27%] border-r-2",
          )}
        >
          <CakeIcon className={classnames(`w-[20px] md:ml-4`)} />
          <Menu as="div" className={classnames("relative w-full")}>
            <Menu.Button className={classnames("w-full")}>
              <div
                className={classnames(
                  "text-[13px] cursor-pointer flex items-center justify-between",
                )}
                onClick={() => setShowType(!showType)}
              >
                {type}
                {showType && (
                  <ChevronUpIcon className={classnames("w-[20px] mr-4")} />
                )}
                {!showType && (
                  <ChevronDownIcon className={classnames("w-[20px] mr-4")} />
                )}
              </div>
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
              <Menu.Items className="absolute left-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {data.listTypeJobs &&
                    data.listTypeJobs.map((type) => (
                      <Menu.Item key={type.id}>
                        {({ active }) => (
                          <p
                            className={classnames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm",
                            )}
                            onClick={() => {
                              setType(type.name);
                              setShowType(false);
                            }}
                          >
                            {type.name}
                          </p>
                        )}
                      </Menu.Item>
                    ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        <div
          className={classnames(
            "w-full md:w-[24%] flex items-center justify-center",
          )}
        >
          <button
            className="w-[50%] md:w-[80%] md:h-[56px] border rounded-md bg-emerald-700 shadow-md text-white"
            onClick={() => handleSubmit()}
          >
            Search
          </button>
        </div>
      </form>

      {/* Popular Jobs  */}
      <div className="mt-[40px] md:mt-[80px]">
        <div className={classnames("text-center")}>
          <h3
            className={classnames(
              "text-black text-xl md:text-2xl font-medium leading-7 tracking-wider capitalize",
            )}
          >
            Popular Jobs
          </h3>
          <p
            className={classnames(
              "text-gray-400 text-center text-sm md:text-lg font-medium capitalize",
            )}
          >
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 30000+ companies worldwide.
          </p>
        </div>

        <div className="flex flex-wrap -mx-4 mt-8 md:mt-[50px]">
          {/* <!-- Card --> */}
          {data.listJobs &&
            data.listJobs.map((job) => (
              <div
                key={job.jobId}
                className="w-full px-4 mb-8 sm:w-1/2 lg:w-1/3"
              >
                <JobCard job={job} />
              </div>
            ))}
        </div>

        <div className={classnames("flex items-center justify-center")}>
          <Link
            to="/jobs"
            className={classnames(
              "bg-emerald-700 text-white p-3 rounded-md flex",
            )}
          >
            See more jobs
          </Link>
        </div>
      </div>

      {/* Lastest Blog Or News */}
      <div className="mt-[80px]">
        <div className={classnames("text-center")}>
          <h3
            className={classnames(
              "text-black text-xl md:text-2xl font-medium leading-7 tracking-wider capitalize",
            )}
          >
            Lastest Blog or News
          </h3>
          <p
            className={classnames(
              "text-gray-400 text-center text-sm md:text-lg font-medium capitalize",
            )}
          >
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 30000+ companies worldwide.
          </p>
        </div>

        <div className="flex flex-wrap -mx-4 mt-[50px]">
          {/* <!-- Card --> */}
          {data.listEvent &&
            data.listEvent.map((event) => (
              <div
                key={event.id}
                className="w-full px-4 mb-8 sm:w-1/2 lg:w-1/3"
              >
                <BlogCard event={event} />
              </div>
            ))}
        </div>

        <div className={classnames("flex items-center justify-center")}>
          <Link
            to="/events"
            className={classnames(
              "bg-emerald-700 text-white p-3 rounded-md flex",
            )}
          >
            See More News
          </Link>
        </div>
      </div>

      {/* Explore jobs now  */}
      <Advertise />
    </div>
  );
}

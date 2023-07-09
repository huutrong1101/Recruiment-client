import React from "react";
import home_page from "../../../images/home_page.png";
import classnames from "classnames";
import { CakeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";
import { data } from "../../data/homeData";
import JobCard from "../../components/JobCard/JobCard";
import BlogCard from "../../components/BlogCard/BlogCard";
import Advertise from "../../components/Advertise/Advertise";

export default function Home() {
  return (
    <div className={classnames("h-full")}>
      <div className={classnames("flex justify-between")}>
        <div className={classnames("w-[55%] py-8 pl-[90px]")}>
          <img
            src={home_page}
            alt="home_page"
            className={classnames("w-full")}
          />
        </div>
        <div className={classnames("w-[45%] relative")}>
          <div
            className={classnames(
              "absolute top-[50%] translate-y-[-50%] text-center"
            )}
          >
            <h3 className={classnames("text-[54px] font-semibold")}>
              Join Us &{" "}
              <span className={classnames("text-emerald-700")}>
                Explore Thousands
              </span>{" "}
              of Jobs
            </h3>
            <p
              className={classnames("text-[20px] font-semibold text-gray-500")}
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
          "flex border rounded-md shadow-md md:shadow-lg p-4 gap-4"
        )}
      >
        <div
          className={classnames(
            "flex items-center flex-shrink-0 w-[49%] border-r-2"
          )}
        >
          <MagnifyingGlassIcon className={classnames(`w-[20px] ml-4`)} />
          <input
            type="text"
            placeholder="Search your Keywords"
            className={classnames(
              "w-[85%] h-full text-[17px] ml-3 focus:outline-none"
            )}
          />
        </div>
        <div className={classnames("flex items-center w-[27%] border-r-2")}>
          <CakeIcon className={classnames(`w-[20px] ml-4`)} />
          <button
            className={classnames("ml-4")}
            id="dropdownHoverButton"
            data-dropdown-toggle="dropdownHover"
            data-dropdown-trigger="hover"
          >
            Full Time
          </button>

          {/* <!-- Dropdown menu --> */}
          <div
            id="dropdownHover"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownHoverButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={classnames("w-[24%] flex items-center justify-center")}>
          <button className="w-[222px] h-[56px] border rounded-md bg-emerald-700 shadow-md text-white">
            Search
          </button>
        </div>
      </form>

      {/* Popular Jobs  */}
      <div className="mt-[80px]">
        <div className={classnames("text-center")}>
          <h3
            className={classnames(
              "text-black text-2xl font-medium leading-7 tracking-wider capitalize"
            )}
          >
            Popular Jobs
          </h3>
          <p
            className={classnames(
              "text-gray-400 text-center text-lg font-medium capitalize"
            )}
          >
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 30000+ companies worldwide.
          </p>
        </div>

        <div className="flex flex-wrap -mx-4 mt-[5px]">
          {/* <!-- Card --> */}
          {data.listJobs &&
            data.listJobs.map((job) => (
              <div key={job.jobId} className="w-full px-4 mb-8 md:w-1/3">
                <JobCard job={job} />
              </div>
            ))}
        </div>

        <div className={classnames("flex items-center justify-center")}>
          <Link
            to="/"
            className={classnames(
              "bg-emerald-700 text-white p-3 rounded-md flex"
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
              "text-black text-2xl font-medium leading-7 tracking-wider capitalize"
            )}
          >
            Lastest Blog or News
          </h3>
          <p
            className={classnames(
              "text-gray-400 text-center text-lg font-medium capitalize"
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
              <div key={event.id} className="w-full px-4 mb-8 md:w-1/3">
                <BlogCard event={event} />
              </div>
            ))}
        </div>

        <div className={classnames("flex items-center justify-center")}>
          <Link
            to="/"
            className={classnames(
              "bg-emerald-700 text-white p-3 rounded-md flex"
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

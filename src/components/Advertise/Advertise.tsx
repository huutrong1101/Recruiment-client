import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";

export default function Advertise() {
  return (
    <>
      <div className="my-[40px] md:my-[80px] bg-white shadow-lg border border-gray-100 p-6">
        <h3
          className={classnames(
            "text-black text-xl md:text-2xl font-medium leading-7 tracking-wider capitalize",
          )}
        >
          Explore jobs Now
        </h3>
        <div className={classnames("flex items-center justify-between gap-4")}>
          <div className={classnames("w-2/3 md:w-[80%]")}>
            <p
              className={classnames(
                "text-gray-400 text-sm md:text-lg font-medium capitalize",
              )}
            >
              Search all the open positions on the web. Get your own
              personalized salary estimate. Read reviews on over 30000+
              companies worldwide.
            </p>
          </div>
          <div
            className={classnames(
              "w-1/3 md:w-[20%] flex gap-3 items-center justify-center",
            )}
          >
            <Link
              to="/jobs"
              className={classnames(
                "bg-emerald-700 text-white p-2 rounded-md flex text-center",
              )}
            >
              Apply Now
            </Link>
            <Link
              to="/jobs"
              className={classnames(
                "bg-gray-300 text-emerald-700 p-2 rounded-md flex text-center",
              )}
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

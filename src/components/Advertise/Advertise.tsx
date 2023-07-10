import React from "react";
import classnames from "classnames";

export default function Advertise() {
  return (
    <>
      <div className="mt-[80px] bg-white shadow-lg border border-gray-100 p-6">
        <h3
          className={classnames(
            "text-black text-[30px] font-medium leading-28 tracking-wide capitalize",
          )}
        >
          Explore jobs Now
        </h3>
        <div className={classnames("flex items-center justify-between")}>
          <div className={classnames("w-[80%]")}>
            <p
              className={classnames(
                "text-gray-400 text-base font-semibold capitalize",
              )}
            >
              Search all the open positions on the web. Get your own
              personalized salary estimate. Read reviews on over 30000+
              companies worldwide.
            </p>
          </div>
          <div
            className={classnames(
              "w-[20%] flex gap-3 items-center justify-center",
            )}
          >
            <button
              className={classnames(
                "bg-emerald-700 text-white p-2 rounded-md flex",
              )}
            >
              Apply Now
            </button>
            <button
              className={classnames(
                "bg-gray-300 text-emerald-700 p-2 rounded-md flex",
              )}
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

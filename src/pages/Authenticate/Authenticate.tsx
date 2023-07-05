import React from "react";
import classnames from "classnames";
import image from "../../../images/sprite.png";
import { Outlet } from "react-router-dom";

export default function Authenticate() {
  return (
    <div className={classnames("flex flex-col md:flex-row  gap-12")}>
      <div className="w-full md:w-1/3 lg:w-3/12 xl:w-3/12 2xl:w-2/12">
        <Outlet />
      </div>
      {/* Browse Job Frame */}
      <div
        className={classnames(
          `bg-[#176A4B] rounded-3xl px-6 py-4`,
          `shadow-md`,
          `relative flex-1 flex flex-col gap-6`
        )}
      >
        <h1
          className={classnames(`text-white`, `font-bold text-3xl leading-10`)}
        >
          There are more than a thousand career opportunities for you
        </h1>
        <p
          className={classnames(`text-[#89EFC9] text-[20px]`, `leading-tight`)}
        >
          We understand that you are expecting to have the best jobs. By joining
          JobPort, you are going to whitelist onto the top recruiter company
          around the world.
        </p>

        <div className="flex flex-row">
          <button className={classnames(`border`, `px-3 py-1 rounded-xl`)}>
            <div className="text-white ">Browse jobs</div>
          </button>
        </div>

        <img
          src={image}
          className={classnames(
            `right-0 bottom-[-120px] opacity-100`,
            `absolute`,
            `w-[200px]`
          )}
        />
      </div>
    </div>
  );
}

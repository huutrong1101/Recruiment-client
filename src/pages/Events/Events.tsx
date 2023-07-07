import React from "react";
import classNames from "classnames";
import BlogCard from "../../components/BlogCard/BlogCard";
import { data } from "../../data/homeData";
import blog_image from "../../../images/blog_image.png";

export default function Events() {
  return (
    <div className={classNames("flex gap-5")}>
      {/* List Blog  */}
      <div className={classNames("w-[70%]")}>
        <div className="flex flex-wrap -mx-4">
          {/* <!-- Card --> */}
          {data.listEvent &&
            data.listEvent.map((event) => (
              <div key={event.id} className="w-full px-4 mb-8 md:w-1/2">
                <BlogCard event={event} />
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

      {/* Most Popular  */}
      <div
        className={classNames(
          "w-[30%] p-6 bg-white rounded-lg shadow-lg h-fit sticky top-1"
        )}
      >
        <h3
          className={classNames(
            "text-black text-base font-semibold leading-7 tracking-wider capitalize flex items-center justify-center"
          )}
        >
          Most popular
        </h3>
        <div className={classNames("flex flex-col gap-4 mt-2 pt-2 border-t-2")}>
          <div
            className={classNames(
              "flex gap-3 w-full bg-gray-100 rounded-lg overflow-hidden cursor-pointer"
            )}
          >
            <div className={classNames("w-[30%]")}>
              <img
                src={blog_image}
                alt=""
                className={classNames("h-full object-cover")}
              />
            </div>
            <div className={classNames("w-[70%]")}>
              <h3>
                DigitalOcean launches first Canadian data centre in Toronto
              </h3>
              <p>28th May, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

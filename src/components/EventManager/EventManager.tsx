import React, {useState, } from "react";
import classnames from "classnames";
import blog_image from "../../../images/blog_image.png";
import { Link, NavLink } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { data } from "../../data/homeData";
import BlogCard from "../BlogCard/BlogCard";

export default function EventManager() {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform search operation with the searchQuery
    console.log('Searching for:', searchQuery);
    // Reset searchQuery
    setSearchQuery('');
  };
  const [ShowSearch, SearchListTrue] = useState(false) ;
  const handleShowData1 = () => {
    SearchListTrue(true);
    // ShowTabaradmin1(false);
  };
  return (
    <>
      <div className="grid grid-cols-[15%,60%,25%] gap-1 w-3/4 mx-auto">
        <form onSubmit={handleSearch} className="col-span-2 flex items-center bg-black bg-opacity-5 rounded-full px-1.5 py-1 shadow">
          <div>
            <MagnifyingGlassIcon className="w-4 h-4 relative gap-1" />
          </div>
          <div>
            <input
              type="text"
              className=" font-medium leading-tight text-gray-900 text-[14px] text-center rounded-full w-[350px] h-[20px]"  value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Please enter a search"
            />
          </div>
          <div>
            <button type="submit" className="p-1.5  bg-emerald-600 text-white text-sm leading-tight rounded-full">
              Search
            </button>
          </div>
        </form>
        <div className="col-span-1 flex justify-center items-center bg-emerald-600 rounded-full py-2 shadow">
          <NavLink to="/recruiter/add-events" onClick={() => {}}>
            <button className="text-white text-sm font-medium leading-tight">
              + Add Event
            </button>
          </NavLink>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap -mx-4 mt-[50px]">
          {/* <!-- Card --> */}
          {data.listEvent &&
            data.listEvent.map((event) => (
              <div key={event.id} className="w-full px-4 mb-8 md:w-1/3">
                <BlogCard event={event} />
              </div>
            ))}
        </div>
      </div>  
      <div>
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
    </>
  );
}

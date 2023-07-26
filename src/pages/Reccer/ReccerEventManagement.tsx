import React, {useState, } from "react";
import classnames from "classnames";
import blog_image from "../../../images/blog_image.png";
import { Link, NavLink } from "react-router-dom";
import { data } from "../../data/homeData";
import {  ArrowRightIcon,  CalendarDaysIcon,  ClockIcon,} from "@heroicons/react/24/outline";
import SearchBar from "../../components/Search/Search";
export default function ReccerEventManagement() {
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
      {/* Search */}
      <div className="justify-center flex grid-cols-[100%] sm:grid-cols-[15%,60%,25%] gap-1 mx-auto lg:grid-cols-[25%,60%,25%] ">
          <SearchBar />
      </div>
      {/* Add Event */}
      <NavLink to="/recruiter/events-add" onClick={() => {}}>
        <button className="text-white shadow text-sm font-medium leading-tight flex py-2 px-2 justify-start bg-emerald-600 rounded-xl ">
          + Add Event
        </button>
      </NavLink>
      
      {/* Conten */}
      <div>
        <div className="flex flex-wrap -mx-4 mt-[50px]">
          {/* <!-- Card --> */}
          {data.listEvent &&
            data.listEvent.map((event) => (
              <div key={event.id} className="w-full px-4 mb-8 md:w-1/3">
                {/* <BlogCard event={event} /> */}
                <div className="bg-white rounded-lg shadow-lg">
                  <div className={classnames("w-full")}>
                    <img
                      src={blog_image}
                      alt="blog_image"
                      className={classnames("w-full")}
                    />
                  </div>
                  <div className={classnames("p-6")}>
                    <div className={classnames("flex items-center justify-between")}>
                      <div className={classnames("flex items-center gap-1")}>
                        <CalendarDaysIcon className={classnames(`w-[20px]`)} />
                        <p>{event.date}</p>
                      </div>
                      <div className={classnames("flex items-center gap-1")}>
                        <ClockIcon className={classnames(`w-[20px]`)} />
                        <p>{event.time} min</p>
                      </div>
                    </div>
                    <div className={classnames("mt-2")}>
                      <h3
                        className={classnames(
                          "text-black text-base font-medium leading-7 tracking-wider capitalize",
                        )}
                      >
                        {event.title}
                      </h3>
                    </div>
                    <div className={classnames("mt-6 flex items-center justify-center")}>
                      <Link
                        to={`${event.id}`} 
                        className={classnames(
                          "bg-emerald-700 text-white p-2 rounded-md flex",
                        )}
                      >
                        Read More
                        <ArrowRightIcon className={classnames(`w-[20px] ml-1`)} />
                      </Link>
                    </div>
                  </div>
                </div>
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
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

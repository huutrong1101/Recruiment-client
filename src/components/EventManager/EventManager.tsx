import React, {useState} from "react";
import classnames from "classnames";
import blog_image from "../../../images/blog_image.png";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
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
          <button className="text-white text-sm font-medium leading-tight">
            + Add Event
          </button>
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
    </>
  );
}

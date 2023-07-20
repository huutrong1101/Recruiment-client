import React, { useState } from 'react';
import { MagnifyingGlassIcon} from "@heroicons/react/24/outline";
function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (e) => {
    e.preventDefault();
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
    <div  className='flex justify-center '>
      <form onSubmit={handleSearch} className="ml-20 px-1.5 py-1 bg-white border bg-opacity-5  rounded-lg justify-start items-center gap-1 inline-flex">
        <div className='flex justify-center items-center gap-3'>
          <MagnifyingGlassIcon className="w-4 h-4 relative" />
          <input   type="text" className="font-medium outline-none text-gray-900 text-[14px] w-[300px] h-[30px] text-left rounded-lg "
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder=" Please enter a search     "
          />
        </div>
      </form>
         <button className='px-6 py-1 text-white rounded-lg bg-emerald-600 hover:bg-emerald-800 ml-5'>
            Search
        </button>
    </div>
  );
}

export default SearchBar;

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
    <div>
      <form onSubmit={handleSearch} className="w-[615px] h-[42px] px-1.5 py-1 bg-black bg-opacity-5 rounded-full justify-start items-center gap-1 inline-flex">
        <td>
          <MagnifyingGlassIcon className="w-4 h-4 relative" />
        </td>
        <td>
          <input   type="text" className="font-medium leading-tight text-gray-900 text-[14px] w-[500px] h-[30px] text-center  rounded-full "
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Please enter a search"
          />
        </td>
        <button type="submit" >Search</button>
      </form>
    </div>
  );
}

export default SearchBar;

import React, { useState } from 'react';
import { MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import Button from '@mui/material/Button';

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
      <form onSubmit={handleSearch} className="px-1.5 py-1 bg-black bg-opacity-5 rounded-full justify-start items-center gap-1 inline-flex">
        <td>
          <MagnifyingGlassIcon className="w-4 h-4 relative" />
        </td>
        <td>
          <input   type="text" className="font-medium leading-tight text-gray-900 text-[14px] w-[300px] h-[30px] text-center  rounded-full "
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Please enter a search"
          />
        </td>
        <Button className= "px-6 py-3 text-white rounded-full bg-emerald-600 hover:bg-emerald-800 ml-5" type="submit" >Search</Button>
      </form>
    </div>
  );
}

export default SearchBar;

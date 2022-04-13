import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

export default function SearchBar() {
  const [searchText, setSearchText] = useState('');
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <label htmlFor="search-planet" className="relative w-fit">
      <input
        type="search"
        name="search-planet"
        id="search-planet"
        placeholder="search ..."
        onChange={handleChange}
        value={searchText}
        className="rounded pl-3 pt-1 pr-8 text-header outline-none border-0 shadow-inner"
      />

      <button
        type="button"
        className="absolute flex justify-center items-center top-[2px] right-1 w-7 h-7 p-1 text-header hover:bg-blue-400 rounded-full"
      >
        <BsSearch />
      </button>
    </label>
  );
}

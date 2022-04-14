import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searchBodies } from '../../store/search/Search';

export default function SearchBar() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const planet = formData.get('search-planet');
    if (!planet) return;
    setSearchText('');
    dispatch(searchBodies(planet));
    navigate('search');
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="relative ">
      <label htmlFor="search-planet" className="w-fit">
        <input
          type="search"
          name="search-planet"
          id="search-planet"
          placeholder="search ..."
          onChange={handleChange}
          value={searchText}
          className="rounded pl-3 pt-1 pr-8 text-header outline-none border-0 shadow-inner"
        />
      </label>
      <button
        type="submit"
        className="absolute flex justify-center items-center top-[2px] right-1 w-7 h-7 p-1 text-header hover:bg-blue-400 rounded-full"
      >
        <BsSearch />
      </button>
    </form>
  );
}

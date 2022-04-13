import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from '../search-bar/searchbar';

const Header = () => {
  const setActiveStyle = (navData) => {
    const result = navData.isActive ? 'underline text-white font-bold' : '';
    return result;
  };
  return (
    <header className="flex flex-row justify-between items-center py-2 px-6 bg-header">
      <NavLink
        className="h-full flex flex-row gap-3 justify-between items-center text-4xl"
        to="/"
      >
        Planets & Asteroids
      </NavLink>
      <nav className="flex flex-row gap-3 justify-between items-center">
        <NavLink className={setActiveStyle} to="/">
          Home
        </NavLink>
        <NavLink className={setActiveStyle} to="/about">
          About
        </NavLink>
        <div className="w-2 h-4 border-r-2 border-white" />
        <SearchBar />
      </nav>
    </header>
  );
};
export default Header;

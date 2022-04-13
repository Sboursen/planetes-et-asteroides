import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from '../search-bar/searchbar';

const Header = () => {
  const setActiveStyle = (navData) => {
    const result = navData.isActive ? 'underline text-white font-semibold' : '';
    return result;
  };
  return (
    <header className="flex flex-row justify-between items-center py-2 px-6 bg-header">
      <NavLink
        className="hidden h-full md:flex flex-row gap-3 justify-between items-center text-4xl"
        to="/"
      >
        Planets & Asteroids
      </NavLink>
      <nav className="flex flex-row gap-6 text-2xl justify-between items-center">
        <NavLink className={setActiveStyle} to="/">
          Home
        </NavLink>
        <NavLink className={setActiveStyle} to="/about">
          About
        </NavLink>
      </nav>
      <SearchBar />
    </header>
  );
};
export default Header;

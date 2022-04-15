import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiPlanet } from 'react-icons/bi';
import { FaUserAstronaut } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import SearchBar from '../search-bar/searchbar';

const Header = () => {
  const setActiveStyle = (navData) => {
    const result = navData.isActive ? 'underline text-white font-semibold' : '';
    return result;
  };
  return (
    <header className="flex flex-row justify-between items-center py-2 px-6 bg-header w-full h-12">
      <NavLink
        className="hidden h-full md:flex flex-row gap-3 justify-between items-center text-4xl"
        to="/"
      >
        Planets & Asteroids
      </NavLink>
      <nav className="desktop-menu hidden md:flex flex-row gap-6 text-2xl justify-between items-center">
        <NavLink className={`hover:animate-bounce ${setActiveStyle}`} to="/">
          <BiPlanet />
        </NavLink>
        <NavLink
          className={`hover:animate-bounce ${setActiveStyle}`}
          to="/about"
        >
          <FaUserAstronaut />
        </NavLink>
      </nav>
      <div className="hidden md:block">
        <SearchBar />
      </div>

      <nav className="mobile-menu flex md:hidden flex-row gap-6 text-xl justify-between items-center w-full">
        <NavLink className={`hover:animate-bounce ${setActiveStyle}`} to="/">
          <BiPlanet />
        </NavLink>
        <SearchBar />
        <div className="flex flex-row gap-3 justify-center items-center">
          <NavLink
            className={`hover:animate-bounce ${setActiveStyle}`}
            to="/about"
          >
            <FaUserAstronaut />
          </NavLink>
          <AiFillSetting />
        </div>
      </nav>
    </header>
  );
};
export default Header;

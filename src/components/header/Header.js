import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const setActiveStyle = (navData) => {
    const result = navData.isActive
      ? 'underline text-slate-600'
      : '';
    return result;
  };
  return (
    <header className="flex flex-row justify-between items-center my-6 mx-12 pb-4">
      <NavLink
        className="h-full flex flex-row gap-3 justify-between items-center "
        to="/"
      >
        Planets and asteroids
      </NavLink>
      <nav className="flex flex-row gap-3 justify-between items-center">
        <NavLink className={setActiveStyle} to="/">
          Home
        </NavLink>
        <NavLink className={setActiveStyle} to="/about">
          About
        </NavLink>
        <div className="w-2 h-4 border-r-2 border-black" />
        <NavLink className={setActiveStyle} to="/details">
          Sort
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;

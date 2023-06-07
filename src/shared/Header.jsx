import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const navLink = <>
            <li className='btn btn-outline'><NavLink to='/' className={({ isActive}) => isActive ? "active" : "default"} >Home</NavLink></li>
           </>
    return (
        <div className="navbar bg-gray-800 text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-gray-800 rounded-box w-52">
        {navLink}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Movie Zone</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLink}
    </ul>
  </div>
</div>
    );
};

export default Header;
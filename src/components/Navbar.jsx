import { useState } from 'react'
import { logokab } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => (
  <nav className="w-full flex py-3 justify-between items-center navbar">
    <img src={logokab} alt="logospbe" className="w-24 sm:w-auto" /> {/* Adjusted logo size */}
    <ul className="list-none sm:flex hidden justify-end items-center flex-1">
      {navLinks.map((nav, index) => (
        <li key={nav.id} className={`font-poppins font-bold cursor-pointer text-sm sm:text-lg ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}> {/* Adjusted font size */}
          <a href={`/${nav.id}`}>{nav.title}</a>
        </li>
      ))}
    </ul>
  </nav>
)

export default Navbar

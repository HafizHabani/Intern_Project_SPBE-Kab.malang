
import { useState } from 'react'
import { logokab } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => (
    <nav className="w-full flex py-3 justify-between items-center navbar">
        <img src={logokab} alt="logospbe" className=""/>
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-bold cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </nav>
    
  )

export default Navbar
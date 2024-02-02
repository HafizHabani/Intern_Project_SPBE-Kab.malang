import React from 'react';
import { useState } from 'react'
import { logospbe } from '../assets';

const Navbar = () => {
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
        <img src={logospbe} alt="logospbe" className='w-[123px] h-[32px]'/>

    </nav>
    
  )
}

export default Navbar
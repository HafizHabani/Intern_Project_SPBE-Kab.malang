import React from 'react'
import { gubMal } from '../assets'

const Home = () => (
    <div className='shrink flex justify-between items-center px-1 sm:px-20'> 
      <div className='flex flex-col py-10 text-white'>
        <div className='text-sm sm:text-4xl font-semibold'>
          Selamat Datang di<br/>
          SPBE Kabupaten Malang
        </div>
        <div className='text-xs sm:text-lg pt-5'>
          Sistem Pemerintahan Berbasis Elektronik Kabupaten Malang
        </div>
      </div>
      <div className=''>
        <img src={gubMal} alt="logospbe" className=""/>
      </div>
    </div>
  )

export default Home
import React from 'react'
import { Pendopo } from '../assets'

const Home = () => (
    <div className='shrink flex justify-between items-center px-1 '> 
      <div className='flex flex-col py-10 text-white w-1/3'>
        <div className='text-sm sm:text-4xl font-semibold'>
          Selamat Datang di<br/>
          SPBE Kabupaten Malang
        </div>
        <div className='text-xs sm:text-lg pt-5'>
          Sistem Pemerintahan Berbasis Elektronik Kabupaten Malang
        </div>
      </div>
      <div className='w-2/3'>
        <img src={Pendopo} alt="logospbe" className="divide-opacity-10 "/>
      </div>
    </div>
  )

export default Home
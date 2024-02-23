import React from 'react';
import { Pendopo } from '../assets';

const Homlay = () => (
<div className='flex flex-col items-center justify-around pt-5 sm:flex-row text-white'>
  <div className='flex flex-col text-center sm:text-left sm:w-1/2 sm:pr-26'style={{ textAlign: 'center'}}>
    <div className='text-sm sm:text-4xl font-semibold'>
      Layanan SPBE Kabupaten Malang
    </div>
    <div className='text-sm pt-5' >
      Ingin tahu lebih lanjut seputar Layanan SPBE Kabupaten Malang? Disini tempatnya! Anda bisa mencari berbagai informasi seputar Layanan Digital yang terdapat pada Website SPBE Kabupaten Malang.
    </div>
    <button className="mt-5 btn btn-sm mx-24 text-white btn-primary">Jelajahi</button>
    
  </div>
  <div className='mt-5 sm:mt-0 sm:ml-24'>
    <img src={Pendopo} alt="kankabmal" className='w-full ' />
  </div>
</div>

);

export default Homlay;

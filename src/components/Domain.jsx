import React from 'react';
import { kebijakan, layanan, kelola, manajemen } from '../assets';

const Domain = () => (
  <div className='py-8'>
    <div className='flex justify-center font-semibold text-lg text-center mb-5'>
      Domain Yang Tersedia Dalam SPBE Kabupaten Malang
    </div>
    <div className='flex flex-wrap justify-center sm:justify-around md:justify-between lg:justify-around xl:justify-between sm:mx-10 md:mx-20'>
      <button className="btn w-full sm:w-48 md:w-40 lg:w-48 xl:w-56 btn-lg bg-gradient-to-t from-indigo-500 via-sky-500 to-emerald-400 mb-4 md:mb-0 md:mr-4 lg:mr-0">
        <img src={kebijakan} alt='none' className="w-10 h-10 sm:w-auto sm:h-auto mx-auto" />
        Kebijakan
      </button>
      <button className="btn w-full sm:w-48 md:w-40 lg:w-48 xl:w-56 btn-lg bg-gradient-to-t from-indigo-500 via-sky-500 to-emerald-400 mb-4 md:mb-0 md:mr-4 lg:mr-0">
        <img src={manajemen} alt='none' className="w-10 h-10 sm:w-auto sm:h-auto mx-auto" />
        Manajemen
      </button>
      <button className="btn w-full sm:w-48 md:w-40 lg:w-48 xl:w-56 btn-lg bg-gradient-to-t from-indigo-500 via-sky-500 to-emerald-400 mb-4 md:mb-0 md:mr-4 lg:mr-0">
        <img src={layanan} alt='none' className="w-10 h-10 sm:w-auto sm:h-auto mx-auto" />
        Layanan
      </button>
      <button className="btn w-full sm:w-48 md:w-40 lg:w-48 xl:w-56 btn-lg bg-gradient-to-t from-indigo-500 via-sky-500 to-emerald-400 mb-4 md:mb-0 md:mr-4 lg:mr-0">
        <img src={kelola} alt='none' className="w-10 h-10 sm:w-auto sm:h-auto mx-auto" />
        Tata Kelola
      </button>
    </div>
  </div>
);

export default Domain;

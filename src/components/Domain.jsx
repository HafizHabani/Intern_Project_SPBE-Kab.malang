import React from 'react'
import { kebijakan, layanan, kelola, manajemen} from '../assets'

const Domain = () => (
    <div className='py-8'>
      <div className='flex justify-center font-semibold text-lg text-center mb-5'>
        Domain Yang Tersedia Dalam SPBE Kabupaten Malang
      </div>
      <div className='flex flex-wrap flex-row justify-around sm:mx-20'>
        <button className="btn md:w-52 btn-lg bg-gradient-to-t from-indigo-500 from-1% via-sky-500 via-5% to-emerald-400 to-90%`">
          <img src={kebijakan} alt='none' />
          Kebijakan
        </button>
        <button className="btn md:w-52 btn-lg bg-gradient-to-t from-indigo-500 from-1% via-sky-500 via-5% to-emerald-400 to-90%`">
          <img src={manajemen} alt='none' />
          Manajemen
        </button>
        <button className="btn md:w-52 btn-lg bg-gradient-to-t from-indigo-500 from-1% via-sky-500 via-5% to-emerald-400 to-90%`">
          <img src={layanan} alt='none' />
          Layanan
        </button>
        <button className="btn md:w-52 btn-lg bg-gradient-to-t from-indigo-500 from-1% via-sky-500 via-5% to-emerald-400 to-90%`">
          <img src={kelola} alt='none' />
          Tata Kelola
        </button>
      </div>
    </div>
  )

export default Domain

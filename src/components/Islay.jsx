import React from 'react'
import { LogoKabMal } from '../assets'

const Islay = () => {
  return (
    <div>
      <h6 className="text-lg font-bold border-4 border-solid border-white border-b-primary py-5 pe-40">Layanan Kabupaten Malang</h6>
      <div className='pt-10 flex flex-col'>

      <div className='flex flex-wrap justify-around'>
          {
            <div className='flex flex-col items-center border-4 border-solid border-gray-300 rounded-lg p-4 w-80'>
            <img src={LogoKabMal} alt="LogoKabMal" className="flex max-w-sm rounded-lg" style={{ maxHeight: "100px", maxWidth: "60px" }} />
            <h5 className='mt-5 font-bold text-center text-base'>Sistem Informasi Pemerintahan Daerah (SIPD)</h5>
            <button className="mt-5 btn mx-28 text-white w-4/6 btn-primary">Detail Layanan</button>
            <button className="mt-2 btn mx-28 text-white w-4/6 btn-primary">Kunjungi Layanan</button>
          </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Islay

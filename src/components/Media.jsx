import React from 'react'
import { LogoKabMal  } from '../assets'

const Media = () => {
  return (
    <div className="w-full ">
  <div className="hero-content flex-col lg:flex-row-reverse flex justify-around">
    <img src={LogoKabMal} alt="LogoKabMal" className="flex max-w-sm rounded-lg" />
    <div className="">
      <h1 className="text-lg font-bold py-6">SPBE Kabupaten Malang</h1>
      <p className="">Laman Resmi Layanan Sistem Pemerintahan Berbasis Elektronik Kabupaten Malang.</p>
      <p className='font-bold'> Ikuti Kami </p>
      <button className="btn btn-primary">Sosial Media</button>
    </div>
  </div>
</div>
  )
}

export default Media
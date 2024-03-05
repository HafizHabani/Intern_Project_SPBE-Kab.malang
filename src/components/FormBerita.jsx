import React from 'react'
import {  berita} from '../assets'

const FormBerita = (prop) => {
  return (
<div>
  <h6 className="text-lg font-bold border-4 border-solid border-white border-b-primary py-5 pe-40">Berita Terkini</h6>
  <div className='pt-10'>
    <div className="mb-4">
      <h1 className="text-5xl font-bold">{prop.title}</h1>
      <p className="text-gray-500 mt-5">Tanggal: 25 Februari 2024</p>
    </div>
    
    <div className="mb-4">
  {/* Gambar Berita */}
  <img src={berita} alt="Gambar Berita" className="rounded-lg" style={{ width: '1000px' }} />
</div>

    <div>
      <p className="text-gray-700 mt-10 text-lg"  style={{ textAlign: 'justify' }}>
        {prop.description}
      </p>
    </div>
  </div>
</div>

  )
}

export default FormBerita

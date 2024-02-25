import React from 'react'
import { jdih, kamasuta, lapor, lpse, sakip, siapel, siapik, siapkerja, sipanji, spid, srikandi, tindikanting } from '../assets'


const Islay = () => {
  return (
    <div>
      <h6 className="text-lg font-bold border-4 border-solid border-white border-b-primary py-5 pe-40">Layanan Kabupaten Malang</h6>
      <div className='pt-10 flex flex-col'>

      <div className='flex flex-wrap justify-around'>
          {
            <div className='flex flex-col items-center border-4 border-solid border-gray-300 rounded-lg p-4 w-80 '>
            <img src={spid} alt="SPID" className="flex max-w-sm rounded-lg" style={{ maxHeight: "100px", maxWidth: "100px" }} />
            <h5 className='mt-5 font-bold text-center text-base'>Sistem Informasi Pemerintahan Daerah (SIPD)</h5>
            <button className="mt-5 btn mx-28 text-white w-4/6 btn-primary">Detail Layanan</button>
            <button className="mt-2 btn mx-28 text-white w-4/6 btn-primary">Kunjungi Layanan</button>
          </div>
          },
             {
            <div className='flex flex-col items-center border-4 border-solid border-gray-300 rounded-lg p-4 w-80'>
            <img src={lpse} alt="LPSE" className="flex max-w-sm rounded-lg" style={{ maxHeight: "100px", maxWidth: "100px" }} />
            <h5 className='mt-5 font-bold text-center text-base'>Layanan Pengadaan Secara Elektronik (LPSE)</h5>
            <button className="mt-5 btn mx-28 text-white w-4/6 btn-primary">Detail Layanan</button>
            <button className="mt-2 btn mx-28 text-white w-4/6 btn-primary">Kunjungi Layanan</button>
          </div>
          },
             {
            <div className='flex flex-col items-center border-4 border-solid border-gray-300 rounded-lg p-4 w-80'>
            <img src={siapel} alt="Siapel" className="flex max-w-sm rounded-lg" style={{ maxHeight: "100px", maxWidth: "100px" }} />
            <h5 className='mt-5 font-bold text-center text-base'>Sistem Aplikasi Layanan (SIAPEL)</h5>
            <button className="mt-5 btn mx-28 text-white w-4/6 btn-primary">Detail Layanan</button>
            <button className="mt-2 btn mx-28 text-white w-4/6 btn-primary">Kunjungi Layanan</button>
          </div>
          }
        </div>
        <div className='flex flex-wrap justify-around mt-6'>
          {
            <div className='flex flex-col items-center border-4 border-solid border-gray-300 rounded-lg p-4 w-80'>
            <img src={srikandi} alt="Srikandi" className="flex max-w-sm rounded-lg" style={{ maxHeight: "100px", maxWidth: "100px" }} />
            <h5 className='mt-5 font-bold text-center text-base'>Sistem Informasi Kearsipan Dinamis Terintegrasi (SRIKANDI)</h5>
            <button className="mt-5 btn mx-28 text-white w-4/6 btn-primary">Detail Layanan</button>
            <button className="mt-2 btn mx-28 text-white w-4/6 btn-primary">Kunjungi Layanan</button>
          </div>
          },
             {
            <div className='flex flex-col items-center border-4 border-solid border-gray-300 rounded-lg p-4 w-80'>
            <img src={siapik} alt="SIAPIK" className="flex max-w-sm rounded-lg" style={{ maxHeight: "150px", maxWidth: "150px" }} />
            <h5 className='mt-5 font-bold text-center text-base'>Sistem Aplikasi Pengawasan Inspektorat (SIAPIK)</h5>
            <button className="mt-5 btn mx-28 text-white w-4/6 btn-primary">Detail Layanan</button>
            <button className="mt-2 btn mx-28 text-white w-4/6 btn-primary">Kunjungi Layanan</button>
          </div>
          },
             {
            <div className='flex flex-col items-center border-4 border-solid border-gray-300 rounded-lg p-4 w-80'>
            <img src={sakip} alt="e-sakip" className="flex max-w-sm rounded-lg" style={{ maxHeight: "100px", maxWidth: "100px" }} />
            <h5 className='mt-5 font-bold text-center text-base'>e-SAKIP REVIU</h5>
            <button className="mt-5 btn mx-28 text-white w-4/6 btn-primary">Detail Layanan</button>
            <button className="mt-2 btn mx-28 text-white w-4/6 btn-primary">Kunjungi Layanan</button>
          </div>
          }
        </div>
        <div className='flex flex-wrap justify-around mt-6'>
          {
            <div className='flex flex-col items-center border-4 border-solid border-gray-300 rounded-lg p-4 w-80'>
            <img src={siapkerja} alt="siapkerja" className="flex max-w-sm rounded-lg" style={{ maxHeight: "100px", maxWidth: "100px" }} />
            <h5 className='mt-5 font-bold text-center text-base'>SiapKerja</h5>
            <button className="mt-5 btn mx-28 text-white w-4/6 btn-primary">Detail Layanan</button>
            <button className="mt-2 btn mx-28 text-white w-4/6 btn-primary">Kunjungi Layanan</button>
          </div>
          },
             {
            <div className='flex flex-col items-center border-4 border-solid border-gray-300 rounded-lg p-4 w-80'>
            <img src={lapor} alt="Lapor" className="flex max-w-sm rounded-lg" style={{ maxHeight: "100px", maxWidth: "100px" }} />
            <h5 className='mt-5 font-bold text-center text-base'>Layanan Aspirasi dan Pengaduan Online Rakyat (LAPOR!)</h5>
            <button className="mt-5 btn mx-28 text-white w-4/6 btn-primary">Detail Layanan</button>
            <button className="mt-2 btn mx-28 text-white w-4/6 btn-primary">Kunjungi Layanan</button>
          </div>
          },
             {
            <div className='flex flex-col items-center border-4 border-solid border-gray-300 rounded-lg p-4 w-80'>
            <img src={kamasuta} alt="e-Kamasuta" className="flex max-w-sm rounded-lg" style={{ maxHeight: "100px", maxWidth: "100px" }} />
            <h5 className='mt-5 font-bold text-center text-base'>E-KAMASUTA BERTALI</h5>
            <button className="mt-5 btn mx-28 text-white w-4/6 btn-primary">Detail Layanan</button>
            <button className="mt-2 btn mx-28 text-white w-4/6 btn-primary">Kunjungi Layanan</button>
          </div>
          }
        </div>
        <div className='flex flex-wrap justify-around mt-6'>
          {
            <div className='flex flex-col items-center border-4 border-solid border-gray-300 rounded-lg p-4 w-80'>
            <img src={jdih} alt="JDIH" className="flex max-w-sm rounded-lg" style={{ maxHeight: "100px", maxWidth: "100px" }} />
            <h5 className='mt-5 font-bold text-center text-base'>JDIH Kabupaten Malang</h5>
            <button className="mt-5 btn mx-28 text-white w-4/6 btn-primary">Detail Layanan</button>
            <button className="mt-2 btn mx-28 text-white w-4/6 btn-primary">Kunjungi Layanan</button>
          </div>
          },
             {
            <div className='flex flex-col items-center border-4 border-solid border-gray-300 rounded-lg p-4 w-80'>
            <img src={sipanji} alt="Sipanji" className="flex max-w-sm rounded-lg" style={{ maxHeight: "100px", maxWidth: "100px" }} />
            <h5 className='mt-5 font-bold text-center text-base'>Sistem Pengelolaan Pajak Mandiri (SIPANJI)</h5>
            <button className="mt-5 btn mx-28 text-white w-4/6 btn-primary">Detail Layanan</button>
            <button className="mt-2 btn mx-28 text-white w-4/6 btn-primary">Kunjungi Layanan</button>
          </div>
          },
             {
            <div className='flex flex-col items-center border-4 border-solid border-gray-300 rounded-lg p-4 w-80'>
            <img src={tindikanting} alt="Tindik Anting" className="flex max-w-sm rounded-lg" style={{ maxHeight: "100px", maxWidth: "100px" }} />
            <h5 className='mt-5 font-bold text-center text-base'>Tindik Anting</h5>
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

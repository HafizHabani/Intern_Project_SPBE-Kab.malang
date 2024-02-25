import React from 'react'
import {  berita} from '../assets'


const Isber = () => {
  return (
    <div>
      <h6 className="text-lg font-bold border-4 border-solid border-white border-b-primary py-5 pe-40">Berita Terkini</h6>
      <div className='pt-10 flex flex-col'>

      <div className='flex flex-wrap justify-around'>
          {
           <div className='flex flex-col items-center border-4 border-solid border-gray-300 rounded-lg p-4 w-80'>
           <div className="relative w-full h-40 rounded-lg overflow-hidden">
             <img src={berita} alt="SPID" className="absolute inset-0 w-full h-full object-cover" />
           </div>
           <div className="mt-3 flex flex-col justify-between h-40">
             <h5 className='font-bold text-center text-base '>Demi Kenyamanan Peziarah, Mbak Ita Resmikan Renovasi Makam Kyai Sholeh Darat</h5>
             <h2 className="text-sm ">{`Upaya mewujudkan Kota Semarang sebagai salah satu destinasi wisata reliji terus dilakukan oleh Pemerintah Kota Semarang. Dalam rangka itu,`}</h2>
           </div>
           <button className="mt-5 btn mx-28 text-white w-4/6 btn-primary"> <a href="/Berita/:id">Selengkapnya -{'>'}</a></button>
         </div>

         
          },
             {
                   <div className='flex flex-col items-center border-4 border-solid border-gray-300 rounded-lg p-4 w-80'>
                   <div className="relative w-full h-40 rounded-lg overflow-hidden">
                     <img src={berita} alt="SPID" className="absolute inset-0 w-full h-full object-cover" />
                   </div>
                   <div className="mt-3 flex flex-col justify-between h-40">
                     <h5 className='font-bold text-center text-base '>Demi Kenyamanan Peziarah, Mbak Ita Resmikan Renovasi Makam Kyai Sholeh Darat</h5>
                     <h2 className="text-sm ">{`Upaya mewujudkan Kota Semarang sebagai salah satu destinasi wisata reliji terus dilakukan oleh Pemerintah Kota Semarang. Dalam rangka itu,`}</h2>
                   </div>
                   <button className="mt-5 btn mx-28 text-white w-4/6 btn-primary">Selengkapnya -{'>'}</button>
                 </div>
          },
             {
                 <div className='flex flex-col items-center border-4 border-solid border-gray-300 rounded-lg p-4 w-80'>
                 <div className="relative w-full h-40 rounded-lg overflow-hidden">
                   <img src={berita} alt="SPID" className="absolute inset-0 w-full h-full object-cover" />
                 </div>
                 <div className="mt-3 flex flex-col justify-between h-40">
                   <h5 className='font-bold text-center text-base '>Demi Kenyamanan Peziarah, Mbak Ita Resmikan Renovasi Makam Kyai Sholeh Darat</h5>
                   <h2 className="text-sm ">{`Upaya mewujudkan Kota Semarang sebagai salah satu destinasi wisata reliji terus dilakukan oleh Pemerintah Kota Semarang. Dalam rangka itu,`}</h2>
                 </div>
                 <button className="mt-5 btn mx-28 text-white w-4/6 btn-primary">Selengkapnya -{'>'}</button>
               </div>
          }
        </div>
        <div className='flex flex-wrap justify-around mt-6'>
          {
                  <div className='flex flex-col items-center border-4 border-solid border-gray-300 rounded-lg p-4 w-80'>
                  <div className="relative w-full h-40 rounded-lg overflow-hidden">
                    <img src={berita} alt="SPID" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="mt-3 flex flex-col justify-between h-40">
                    <h5 className='font-bold text-center text-base '>Demi Kenyamanan Peziarah, Mbak Ita Resmikan Renovasi Makam Kyai Sholeh Darat</h5>
                    <h2 className="text-sm ">{`Upaya mewujudkan Kota Semarang sebagai salah satu destinasi wisata reliji terus dilakukan oleh Pemerintah Kota Semarang. Dalam rangka itu,`}</h2>
                  </div>
                  <button className="mt-5 btn mx-28 text-white w-4/6 btn-primary">Selengkapnya -{'>'}</button>
                </div>
          },
             {
                  <div className='flex flex-col items-center border-4 border-solid border-gray-300 rounded-lg p-4 w-80'>
                  <div className="relative w-full h-40 rounded-lg overflow-hidden">
                    <img src={berita} alt="SPID" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="mt-3 flex flex-col justify-between h-40">
                    <h5 className='font-bold text-center text-base '>Demi Kenyamanan Peziarah, Mbak Ita Resmikan Renovasi Makam Kyai Sholeh Darat</h5>
                    <h2 className="text-sm ">{`Upaya mewujudkan Kota Semarang sebagai salah satu destinasi wisata reliji terus dilakukan oleh Pemerintah Kota Semarang. Dalam rangka itu,`}</h2>
                  </div>
                  <button className="mt-5 btn mx-28 text-white w-4/6 btn-primary">Selengkapnya -{'>'}</button>
                </div>
          },
             {
                  <div className='flex flex-col items-center border-4 border-solid border-gray-300 rounded-lg p-4 w-80'>
                  <div className="relative w-full h-40 rounded-lg overflow-hidden">
                    <img src={berita} alt="SPID" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="mt-3 flex flex-col justify-between h-40">
                    <h5 className='font-bold text-center text-base '>Demi Kenyamanan Peziarah, Mbak Ita Resmikan Renovasi Makam Kyai Sholeh Darat</h5>
                    <h2 className="text-sm ">{`Upaya mewujudkan Kota Semarang sebagai salah satu destinasi wisata reliji terus dilakukan oleh Pemerintah Kota Semarang. Dalam rangka itu,`}</h2>
                  </div>
                  <button className="mt-5 btn mx-28 text-white w-4/6 btn-primary">Selengkapnya -{'>'}</button>
                </div>
          }
        </div>
      
        <div className="join flex justify-center mt-5">
        <button className="join-item btn btn-sm bg-primary border-red-700 hover:bg-red-900 text-white">«</button>
        <button className="join-item btn btn-sm bg-primary border-red-700 hover:bg-red-900 text-white">1</button>
        <button className="join-item btn btn-sm bg-primary border-red-700 hover:bg-red-900 text-white">2</button>
        <button className="join-item btn btn-sm bg-primary border-red-700 hover:bg-red-900 text-white">3</button>
        <button className="join-item btn btn-sm bg-primary border-red-700 hover:bg-red-900 text-white">»</button>
      </div>
      </div>
    </div>

    
  )
}

export default Isber

import { useState } from 'react';
import { kebijakan, layanan, kelola, manajemen } from '../assets';
import { Link } from 'react-router-dom';
import { kebijakanDummy,manajemenDummy,kelolaDummy } from '../constants';



const Domain = () =>  {
  const [KebijakanIsHiden, setKebijakanIsHiden] = useState(true);
  const [KelolaIsHiden, setKelolaIsHiden] = useState(true);
  const [ManajemenIsHiden, setManajemenIsHiden] = useState(true);

  const handleShowKebijakan = () => setKebijakanIsHiden(false);
  const handleShowKelola = () => setKelolaIsHiden(false);
  const handleShowManajemen = () => setManajemenIsHiden(false);

  const handleHideKebijakan = () => setKebijakanIsHiden(true); 
  const handleHideKelola = () => setKelolaIsHiden(true); 
  const handleHideManajemen = () => setManajemenIsHiden(true); 

  const KebijakanPressed = () =>{
    if (KebijakanIsHiden === true) {
      handleShowKebijakan();
      handleHideKelola();
      handleHideManajemen();
    }
    else {
      handleHideKebijakan();
    }
  }

  const KelolaPressed = () =>{
    if (KelolaIsHiden === true) {
      handleShowKelola();
      handleHideKebijakan();
      handleHideManajemen();
    } else {
      handleHideKelola();
    }
  }

  const ManajemenPressed = () =>{
    if (ManajemenIsHiden === true) {
      handleShowManajemen();
      handleHideKebijakan();
      handleHideKelola();
    } else {
      handleHideManajemen();
    }
  }

  return(
  <div className='py-8'>
    <div className='flex justify-center font-semibold text-lg text-center mb-5'>
      Domain Yang Tersedia Dalam SPBE Kabupaten Malang
    </div>
    <div className='flex flex-wrap justify-center sm:justify-around md:justify-between lg:justify-around xl:justify-between sm:mx-10 md:mx-20'>
      <button onClick={KebijakanPressed} className="btn w-full text-white sm:w-48 md:w-40 lg:w-48 xl:w-56 btn-lg bg-gradient-to-t from-rose-900 via-red-700 to-red-500 mb-4 md:mb-0 md:mr-4 lg:mr-0">
        <img src={kebijakan} alt='none' className="w-10 h-10 sm:w-auto sm:h-auto" />
        Kebijakan
      </button>
      <button onClick={KelolaPressed} className="btn text-white w-full sm:w-48 md:w-40 lg:w-48 xl:w-56 btn-lg bg-gradient-to-t from-rose-900 via-red-700 to-red-500 mb-4 md:mb-0 md:mr-4 lg:mr-0">
        <img src={kelola} alt='none' className="w-10 h-10 sm:w-auto sm:h-auto " />
        Tata Kelola
      </button>
      <button onClick={ManajemenPressed} className="btn text-white w-full sm:w-48 md:w-40 lg:w-48 xl:w-56 btn-lg bg-gradient-to-t from-rose-900 via-red-700 to-red-500 mb-4 md:mb-0 md:mr-4 lg:mr-0">
        <img src={manajemen} alt='none' className="w-10 h-10 sm:w-auto sm:h-auto " />
        Manajemen
      </button>
      <Link to="/Layanan" className='w-full sm:w-48 md:w-40 lg:w-48 xl:w-56'>
      <button className="btn w-full text-white sm:w-48 md:w-40 lg:w-48 xl:w-56 btn-lg bg-gradient-to-t from-rose-900 via-red-700 to-red-500 mb-4 md:mb-0 md:mr-4 lg:mr-0">
        <img src={layanan} alt='none' className="w-10 h-10 sm:w-auto sm:h-auto " />
        Layanan
      </button>
      </Link>
    </div>
    
    <div className={`${KebijakanIsHiden? 'hidden' : ''} my-10 `} >
      <div className="relative">
      </div>
      <table className="table">
        <thead className='text-lg text-primary'>
          <tr>
            <th>No</th>
            <th>Aspek</th>
            <th>Indikator</th>
            <th>Penjelasan</th>
          </tr>
        </thead>
        <tbody>
          {kebijakanDummy.data.data.map((kebijakan, index)=>(
            <tr key={kebijakan.id}>
              <td>{index+1}</td>
              <td>{kebijakan.aspek}</td>
              <td>{kebijakan.indikator}</td>
              <td>
                {kebijakan.penjelasan}<br/> 
                <a href={kebijakan.link} className='text-primary'>Selengkapnya</a>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="join flex justify-center mt-5">
        <button className="join-item btn btn-sm bg-primary border-red-700 hover:bg-red-900 text-white">«</button>
        <button className="join-item btn btn-sm bg-primary border-red-700 hover:bg-red-900 text-white">Page 1</button>
        <button className="join-item btn btn-sm bg-primary border-red-700 hover:bg-red-900 text-white">»</button>
      </div>
    </div>

    <div className={`${ManajemenIsHiden? 'hidden' : ''} my-10 `}>
      <div className="relative">
       
      </div>
      <table className="table ">
        <thead className='text-lg text-primary'>
          <tr>
            <th>No</th>
            <th>Aspek</th>
            <th>Indikator</th>
            <th>Penjelasan</th>
          </tr>
        </thead>
        <tbody>
          {manajemenDummy.data.data.map((manajemen, index)=>(
            <tr key={manajemen.id}>
              <td>{index+1}</td>
              <td>{manajemen.aspek}</td>
              <td>{manajemen.indikator}</td>
              <td>
                {manajemen.penjelasan}<br/> 
                <a href={manajemen.link} className='text-primary'>Selengkapnya</a>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="join flex justify-center mt-5">
        <button className="join-item btn btn-sm bg-primary border-red-700 hover:bg-red-900 text-white">«</button>
        <button className="join-item btn btn-sm bg-primary border-red-700 hover:bg-red-900 text-white">Page 1</button>
        <button className="join-item btn btn-sm bg-primary border-red-700 hover:bg-red-900 text-white">»</button>
      </div>
    </div>

    <div className={`${KelolaIsHiden? 'hidden' : ''} my-10`}>
    <div className="relative">
       
      </div>
      <table className="table ">
        <thead className='text-lg text-primary'>
          <tr>
            <th>No</th>
            <th>Aspek</th>
            <th>Indikator</th>
            <th>Penjelasan</th>
          </tr>
        </thead>
        <tbody>
          {kelolaDummy.data.data.map((kelola, index)=>(
            <tr key={kelola.id}>
              <td>{index+1}</td>
              <td>{kelola.aspek}</td>
              <td>{kelola.indikator}</td>
              <td>
                {kelola.penjelasan}<br/> 
                <a href={kelola.link} className='text-primary'>Selengkapnya</a>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="join flex justify-center mt-5">
        <button className="join-item btn btn-sm bg-primary border-red-700 hover:bg-red-900 text-white">«</button>
        <button className="join-item btn btn-sm bg-primary border-red-700 hover:bg-red-900 text-white">Page 1</button>
        <button className="join-item btn btn-sm bg-primary border-red-700 hover:bg-red-900 text-white">»</button>
      </div>
    </div>

  </div>
  );
  }

export default Domain;

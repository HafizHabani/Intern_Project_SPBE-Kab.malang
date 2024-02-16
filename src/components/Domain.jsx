import { useState } from 'react';
import { kebijakan, layanan, kelola, manajemen } from '../assets';
import { Link } from 'react-router-dom';
import { KebijakanDummy,manajemenDummy,kelolaDummy } from '../constants';



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
      <button onClick={KebijakanPressed} className="btn w-full sm:w-48 md:w-40 lg:w-48 xl:w-56 btn-lg bg-gradient-to-t from-indigo-500 via-sky-500 to-emerald-400 mb-4 md:mb-0 md:mr-4 lg:mr-0">
        <img src={kebijakan} alt='none' className="w-10 h-10 sm:w-auto sm:h-auto" />
        Kebijakan
      </button>
      <button onClick={ManajemenPressed} className="btn w-full sm:w-48 md:w-40 lg:w-48 xl:w-56 btn-lg bg-gradient-to-t from-indigo-500 via-sky-500 to-emerald-400 mb-4 md:mb-0 md:mr-4 lg:mr-0">
        <img src={manajemen} alt='none' className="w-10 h-10 sm:w-auto sm:h-auto " />
        Manajemen
      </button>
      <Link to="/Layanan">
      <button className="btn w-full sm:w-48 md:w-40 lg:w-48 xl:w-56 btn-lg bg-gradient-to-t from-indigo-500 via-sky-500 to-emerald-400 mb-4 md:mb-0 md:mr-4 lg:mr-0">
        <img src={layanan} alt='none' className="w-10 h-10 sm:w-auto sm:h-auto " />
        Layanan
      </button>
      </Link>
      <button onClick={KelolaPressed} className="btn w-full sm:w-48 md:w-40 lg:w-48 xl:w-56 btn-lg bg-gradient-to-t from-indigo-500 via-sky-500 to-emerald-400 mb-4 md:mb-0 md:mr-4 lg:mr-0">
        <img src={kelola} alt='none' className="w-10 h-10 sm:w-auto sm:h-auto " />
        Tata Kelola
      </button>
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
          {KebijakanDummy.map((kebijakan)=>(
            <tr key={kebijakan.nomor}>
              <td>{kebijakan.nomor}</td>
              <td>{kebijakan.aspek}</td>
              <td>{kebijakan.indikator}</td>
              <td>
                {kebijakan.penjelasan}<br/> 
                <a href={kebijakan.linkDoc} className='text-primary'>Selengkapnya</a>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
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
          {manajemenDummy.map((manajemen)=>(
            <tr key={manajemen.nomor}>
              <td>{manajemen.nomor}</td>
              <td>{manajemen.aspek}</td>
              <td>{manajemen.indikator}</td>
              <td>
                {manajemen.penjelasan}<br/> 
                <a href={manajemen.linkDoc} className='text-primary'>Selengkapnya</a>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
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
          {kelolaDummy.map((kelola)=>(
            <tr key={kelola.nomor}>
              <td>{kelola.nomor}</td>
              <td>{kelola.aspek}</td>
              <td>{kelola.indikator}</td>
              <td>
                {kelola.penjelasan}<br/> 
                <a href={kelola.linkDoc} className='text-primary'>Selengkapnya</a>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  </div>
  );
  }

export default Domain;

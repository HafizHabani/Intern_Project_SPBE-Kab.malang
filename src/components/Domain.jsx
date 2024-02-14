import { useState } from 'react';
import { kebijakan, layanan, kelola, manajemen } from '../assets';



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
      handleHideKelola();
      handleHideManajemen();
    }
  }

  const KelolaPressed = () =>{
    if (KelolaIsHiden === true) {
      handleShowKelola();
      handleHideKebijakan();
      handleHideManajemen();
    } else {
      handleHideKebijakan();
      handleHideKelola();
      handleHideManajemen();
    }
  }

  const ManajemenPressed = () =>{
    if (ManajemenIsHiden === true) {
      handleShowManajemen();
      handleHideKebijakan();
      handleHideKelola();
    } else {
      handleHideKebijakan();
      handleHideKelola();
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
        <img src={kebijakan} alt='none' className="w-10 h-10 sm:w-auto sm:h-auto mx-auto" />
        Kebijakan
      </button>
      <button onClick={ManajemenPressed} className="btn w-full sm:w-48 md:w-40 lg:w-48 xl:w-56 btn-lg bg-gradient-to-t from-indigo-500 via-sky-500 to-emerald-400 mb-4 md:mb-0 md:mr-4 lg:mr-0">
        <img src={manajemen} alt='none' className="w-10 h-10 sm:w-auto sm:h-auto mx-auto" />
        Manajemen
      </button>
      <button className="btn w-full sm:w-48 md:w-40 lg:w-48 xl:w-56 btn-lg bg-gradient-to-t from-indigo-500 via-sky-500 to-emerald-400 mb-4 md:mb-0 md:mr-4 lg:mr-0">
        <img src={layanan} alt='none' className="w-10 h-10 sm:w-auto sm:h-auto mx-auto" />
        Layanan
      </button>
      <button onClick={KelolaPressed} className="btn w-full sm:w-48 md:w-40 lg:w-48 xl:w-56 btn-lg bg-gradient-to-t from-indigo-500 via-sky-500 to-emerald-400 mb-4 md:mb-0 md:mr-4 lg:mr-0">
        <img src={kelola} alt='none' className="w-10 h-10 sm:w-auto sm:h-auto mx-auto" />
        Tata Kelola
      </button>
    </div>
    
    <div className={`${KebijakanIsHiden? 'hidden' : ''}`} >
      Isi Kebijakan
    </div>

    <div className={`${ManajemenIsHiden? 'hidden' : ''}`}>
      Isi Manajemen
    </div>

    <div className={`${KelolaIsHiden? 'hidden' : ''}`}>
     Isi Kelola
    </div>

  </div>
  );
  }

export default Domain;

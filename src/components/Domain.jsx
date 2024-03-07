import { useState } from 'react';
import { kebijakan, layanan, kelola, manajemen } from '../assets';
import { Link } from 'react-router-dom';
import { kebijakanDummy, manajemenDummy, kelolaDummy, layananDummy } from '../constants';
import axios from 'axios'



const Domain = () => {
  const [KebijakanIsHiden, setKebijakanIsHiden] = useState(true);
  const [KelolaIsHiden, setKelolaIsHiden] = useState(true);
  const [LayananIsHiden, setLayananIsHiden] = useState(true);
  const [ManajemenIsHiden, setManajemenIsHiden] = useState(true);

  const [kebijakanData, setKebijakanData] = useState(kebijakanDummy);
  const [layananData, setLayananData]=useState(layananDummy);
  const [kelolaData, setKelolaData] = useState(kelolaDummy);
  const [manajemenData, setManajemenData] = useState(manajemenDummy);


  const handleShowKebijakan = () => setKebijakanIsHiden(false);
  const handleShowKelola = () => setKelolaIsHiden(false);
  const handleShowLayanan = () => setLayananIsHiden(false);
  const handleShowManajemen = () => setManajemenIsHiden(false);

  const handleHideKebijakan = () => setKebijakanIsHiden(true);
  const handleHideKelola = () => setKelolaIsHiden(true);
  const handleHideLayanan = () => setLayananIsHiden(true);
  const handleHideManajemen = () => setManajemenIsHiden(true);

  const KebijakanPressed = () => {
    if (KebijakanIsHiden === true) {
      handleShowKebijakan();
      handleHideLayanan();
      handleHideKelola();
      handleHideManajemen();
    }
    else {
      handleHideKebijakan();
    }
  }

  const LayananPressed = () => {
    if (LayananIsHiden === true) {
      handleShowLayanan();
      handleHideKebijakan()
      handleHideKelola();
      handleHideManajemen();
    }
    else {
      handleHideLayanan();
    }
  }

  const KelolaPressed = () => {
    if (KelolaIsHiden === true) {
      handleShowKelola();
      handleHideLayanan();
      handleHideKebijakan();
      handleHideManajemen();
    } else {
      handleHideKelola();
    }
  }

  const ManajemenPressed = () => {
    if (ManajemenIsHiden === true) {
      handleShowManajemen();
      handleHideLayanan();
      handleHideKebijakan();
      handleHideKelola();
    } else {
      handleHideManajemen();
    }
  }

  const HandlerKebijakan = async (link) => {
    const data = await axios.get(link)
    setKebijakanData(data)
  }
  const HandlerManajemen = async (link) => {
    const data = await axios.get(link)
    setManajemenData(data)
  }
  const HandlerKelola = async (link) => {
    const data = await axios.get(link)
    setKelolaData(data)
  }
  // const HandlerLayanan = async (prop) => {
  //   const data = await axios.get(prop.link)
  //   setKebijakanData(data)
  // }



  return (
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
        <button onClick={LayananPressed} className="btn w-full text-white sm:w-48 md:w-40 lg:w-48 xl:w-56 btn-lg bg-gradient-to-t from-rose-900 via-red-700 to-red-500 mb-4 md:mb-0 md:mr-4 lg:mr-0">
          <img src={layanan} alt='none' className="w-10 h-10 sm:w-auto sm:h-auto " />
          Layanan
        </button>
      </div>

      <div className={`${KebijakanIsHiden ? 'hidden' : ''} my-10 `} >
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
            {kebijakanData.data.data.map((kebijakan, index) => (
              <tr key={kebijakan.id}>
                <td>{index + 1}</td>
                <td>{kebijakan.aspek}</td>
                <td>{kebijakan.indikator}</td>
                <td>
                  {kebijakan.penjelasan}<br />
                  <a href={kebijakan.link} className='text-primary'>Selengkapnya</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="join flex justify-center text-white mt-5">
          <button className={`join-item btn btn-sm text-white border-primary bg-primary hover:bg-red-700  disabled:bg-red-900 ${kebijakanData.data.prev_page_url === null ? "btn-disabled": " "}`} onClick={async ()=>HandlerKebijakan(kebijakanData.data.prev_page_url)}>«</button>
          <button className="join-item btn btn-sm text-white border-primary bg-primary hover:bg-red-700 disabled:bg-red-900">Page {kebijakanData.data.current_page}</button>
          <button className={`join-item btn btn-sm text-white border-primary bg-primary hover:bg-red-700 disabled:bg-red-900 ${kebijakanData.data.next_page_url === null ? "btn-disabled": " "}`} onClick={async ()=>HandlerKebijakan(kebijakanData.data.next_page_url)}>»</button>
        </div>
      </div>

      <div className={`${ManajemenIsHiden ? 'hidden' : ''} my-10 `}>
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
            {manajemenData.data.data.map((manajemen, index) => (
              <tr key={manajemen.id}>
                <td>{index + 1}</td>
                <td>{manajemen.aspek}</td>
                <td>{manajemen.indikator}</td>
                <td>
                  {manajemen.penjelasan}<br />
                  <a href={manajemen.link} className='text-primary'>Selengkapnya</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="join flex justify-center text-white mt-5">
          <button className={`join-item btn btn-sm text-white border-primary bg-primary hover:bg-red-700  disabled:bg-red-900 ${manajemenData.data.prev_page_url === null ? "btn-disabled": " "}`} onClick={async ()=>HandlerManajemen(manajemenData.data.prev_page_url)}>«</button>
          <button className="join-item btn btn-sm text-white border-primary bg-primary hover:bg-red-700 disabled:bg-red-900">Page {manajemenData.data.current_page}</button>
          <button className={`join-item btn btn-sm text-white border-primary bg-primary hover:bg-red-700 disabled:bg-red-900 ${manajemenData.data.next_page_url === null ? "btn-disabled": " "}`} onClick={async ()=>HandlerManajemen(manajemenData.data.next_page_url)}>»</button>
        </div>
      </div>

      <div className={`${KelolaIsHiden ? 'hidden' : ''} my-10`}>
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
            {kelolaData.data.data.map((kelola, index) => (
              <tr key={kelola.id}>
                <td>{index + 1}</td>
                <td>{kelola.aspek}</td>
                <td>{kelola.indikator}</td>
                <td>
                  {kelola.penjelasan}<br />
                  <a href={kelola.link} className='text-primary'>Selengkapnya</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="join flex justify-center text-white mt-5">
          <button className={`join-item btn btn-sm text-white border-primary bg-primary hover:bg-red-700  disabled:bg-red-900 ${kelolaData.data.prev_page_url === null ? "btn-disabled": " "}`} onClick={async ()=>HandlerKelola(kelolaData.data.prev_page_url)}>«</button>
          <button className="join-item btn btn-sm text-white border-primary bg-primary hover:bg-red-700 disabled:bg-red-900">Page {kelolaData.data.current_page}</button>
          <button className={`join-item btn btn-sm text-white border-primary bg-primary hover:bg-red-700 disabled:bg-red-900 ${kelolaData.data.next_page_url === null ? "btn-disabled": " "}`} onClick={async ()=>HandlerKelola(kelolaData.data.next_page_url)}>»</button>
        </div>
      </div>


      <div className={`${LayananIsHiden ? 'hidden' : ''} my-10`}>
        <div>
          <h6 className="text-lg font-bold border-4 border-solid border-white border-b-primary py-5 pe-40">Layanan Kabupaten Malang</h6>
          <div className='pt-10 flex flex-col'>
            <div className='flex flex-wrap justify-around'>
              {layananData.data.map((layanan, index) => (
                <div key={index} className='flex flex-row items-center justify-between border-4 border-solid border-gray-300 rounded-lg mt-5 p-4 w-96'>
                  <div className='flex flex-row'>
                    <img src={layanan.logo} alt="LogoKabMal" className="flex max-w-sm rounded-lg" style={{ maxHeight: "80px", maxWidth: "40px" }} />
                    <h5 className='ml-3 font-bold text-sm'>{layanan.nama}</h5>
                  </div>
                  <div className='flex flex-col items-center'>
                    <button className="btn px-6 btn-sm text-sm text-white  btn-primary" onClick={() => {document.getElementById('my_modal_2').showModal(); }}>Detail</button>
                    <dialog id="my_modal_2" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">{layanan.nama}</h3>
                        <p className="py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                    
                    <a href={layanan.link} target="_blank" rel='noreferrer' className="mt-3 btn btn-sm text-sm text-white btn-primary">Kunjungi</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
      <button className='btn' onClick={console.log(manajemenData.data.next_page_url)}>coba</button>
    </div>
  );
}

export default Domain;

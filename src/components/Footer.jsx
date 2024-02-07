import React from 'react'
import { malangmakmur } from '../assets'

const Footer = () => {
  return (
    <footer className="footer text-base-content w-full my-10">
  <nav>
    <h6 className="text-lg border-4 border-solid border-white border-b-primary py-5 pe-40 font-bold">Topik</h6>
    <a className="link link-hover">Tentang Kabupaten Malang</a>
    <a className="link link-hover">Perencanaan</a>
    <a className="link link-hover">Ekonomi</a>
    <a className="link link-hover">Sosial</a>
    <a className="link link-hover">Budaya</a>
    <a className="link link-hover">Infrastruktur</a>
  </nav> 
  <nav>
    <h6 className="text-lg font-bold border-4 border-solid border-white border-b-primary py-5 pe-40">Tautan</h6> 
    <a className="link link-hover">Pemkot Kabupaten Malang</a>
    <a className="link link-hover">Kementrian Dalam Negeri</a>
    <a className="link link-hover">Kementrian Keuangan</a>
    <a className="link link-hover">Kementrian PPN/Bappenas</a>
    <a className="link link-hover">Kementrian Komunikasi dan Informatika</a>
    <a className="link link-hover">Badan Siber dan Sandi Negara</a>
    <a className="link link-hover">Pemprov Jawa Timur</a>
  </nav> 
  <nav>
    <h6 className="text-lg font-bold border-4 border-solid border-white border-b-primary py-5 pe-40">Hubungi Kami</h6> 
    <a className="link link-hover">Alamat :
Jalan Pemuda No.148 Kota Semarang</a>
    <a className="link link-hover">Email :
timspbe@semarangkota.go.id</a>
    <a className="link link-hover">Telepon :
(024)3549446</a>
    <a className="link link-hover">Whatsapp :
081225932893</a>
  </nav> 
  <nav className='flex flex-col font-bold w-full justify-center items-center'>
  <img src={malangmakmur} alt="malangmakmur" className="mx-auto"/>
  <h5 className='font-bold text-base'>SPBE Kabupaten Malang Copyright Reserved © 2024</h5>
  <div className="w-3/5 bg-gray-200 p-4 rounded-md flex flex-col items-center justify-center">
  <a className="">Pengunjung</a> 
  <a className='border-4 border-b-primary  border-gray-200  pb-3'>Sejak 15 Maret 2023</a>
  <a className="my-1">Hari ini : 14</a> 
  <a className="my-1">Minggu : 85</a> 
  <a className="my-1">Bulan : 594</a> 
  <a className="my-1">Tahun : 594</a>
  </div>
  </nav>
</footer>
  )
}

export default Footer
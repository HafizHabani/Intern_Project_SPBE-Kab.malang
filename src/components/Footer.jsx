import React from "react";
import { malangmakmur } from "../assets";

const Footer = () => {
  return (
    <footer className="">
      <div className="footer text-base-content flex justify-around w-full sm:px-20 py-10">
        <nav>
          <h6 className="text-lg border-4 border-solid border-white border-b-primary py-5 pe-40 font-bold">
            Topik
          </h6>
          <a className="link link-hover">Tentang Kabupaten Malang</a>
          <a className="link link-hover">Perencanaan</a>
          <a className="link link-hover">Ekonomi</a>
          <a className="link link-hover">Sosial</a>
          <a className="link link-hover">Budaya</a>
          <a className="link link-hover">Infrastruktur</a>
        </nav>
        <nav>
          <h6 className="text-lg font-bold border-4 border-solid border-white border-b-primary py-5 pe-40">
            Tautan
          </h6>
          <a className="link link-hover">Pemkot Kabupaten Malang</a>
          <a className="link link-hover">Kementrian Dalam Negeri</a>
          <a className="link link-hover">Kementrian Keuangan</a>
          <a className="link link-hover">Kementrian PPN/Bappenas</a>
          <a className="link link-hover">
            Kementrian Komunikasi dan Informatika
          </a>
          <a className="link link-hover">Badan Siber dan Sandi Negara</a>
          <a className="link link-hover">Pemprov Jawa Timur</a>
        </nav>
        <nav>
          <h6 className="text-lg font-bold border-4 border-solid border-white border-b-primary py-5 pe-40">
            Hubungi Kami
          </h6>
          <a className="link link-hover">
            Alamat : Jalan KH. Agus Salim No.7, Kota Malang
          </a>
          <a className="link link-hover">Email : timspbe@semarangkota.go.id</a>
          <a className="link link-hover">Telepon : (024)3549446</a>
          <a className="link link-hover">Whatsapp : 081225932893</a>
        </nav>
      </div>
      <div>
        <nav className="flex flex-col font-bold w-full justify-center py-10 items-center">
          <img src={malangmakmur} alt="malangmakmur" className="mx-auto" />
          <h5 className="font-bold text-base">
            SPBE Kabupaten Malang Copyright Reserved © 2024
          </h5>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

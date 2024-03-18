import React, { useState } from 'react';
import { layananDummy } from '../constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';


const Islay = () => {
  const [namaLayanan, setNamaLayanan] = useState('');

  return (
    <div className="py-10">
      <div className="text-lg font-bold border-4 border-solid border-white border-b-primary py-5 pe-40 flex flex-row text-xl md:text-2xl">
        <h6 className="text-primary pl-2 font-bold">Layanan </h6>
        <h6 className="pl-2 font-bold">Kabupaten Malang</h6>
      </div>

      <Swiper pagination={true} autoplay={{ delay:2000 }} modules={[Pagination, Autoplay]} className="mySwiper mb-2"
        spaceBetween={20}
        slidesPerView={3}
        
        breakpoints={{
          // Konfigurasi jumlah slide yang ditampilkan pada berbagai lebar layar
          375 : {
            slidesPerView: 1,
          },
          390 : {
            slidesPerView: 1,
          },
          412: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {layananDummy.data.map((layanan, index) => (
          <SwiperSlide key={index} className='mb-12'>
            <div className="flex flex-col items-center border-4 border-solid border-gray-300 rounded-lg mt-5 p-4 w-96 mx-auto">
              <div className="flex justify-center">
                <img
                  src={layanan.logo}
                  alt="LogoKabMal"
                  className="flex max-w-sm rounded-lg"
                  style={{ maxHeight: '150px', maxWidth: '150px' }} // Ubah ukuran logo gambar di sini
                />
              </div>
              <h5 className="mt-3 mb-3 font-bold text-lg">{layanan.nama}</h5> {/* Perbesar teks nama */}
              <div className="flex flex-row justify-between">
                <button
                  className="btn px-6 btn-sm text-sm text-white  btn-primary"
                  onClick={() => {
                    document.getElementById('my_modal_2').showModal();
                    setNamaLayanan(layanan.nama);
                  }}
                  style={{ marginRight: '10px' }}
                >
                  Detail
                </button>
                <a
                  href={layanan.link}
                  target="_blank"
                  rel="noreferrer"
                  className=" btn btn-sm text-sm text-white btn-primary"
                >
                  Kunjungi
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{namaLayanan}</h3>
          <p className="py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      
    </div>

    
  );
};

export default Islay;



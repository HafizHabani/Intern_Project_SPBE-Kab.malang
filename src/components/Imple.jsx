import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation,  } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { indikatorDummy } from "../constants";

const Imple = () => {
  return (
    <div className="w-full sm:px-4 md:px-8 lg:px-12 py-6">
      <div className="text-lg font-bold flex flex-row text-xl md:text-2xl">
        <h1 className="text-primary pl-2 font-bold mt-6">
          Implementasi SPBE 
        </h1>
        <p className="pl-2 font-bold mb-6 mt-6">Kabupaten Malang</p>
      </div>
      
      <Swiper
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper mb-2"
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
      >
      {indikatorDummy.data.map((indikator, index) => (
        <><SwiperSlide key={index}>
          <div className="flex flex-col justify-center items-center">
            <img
              src={indikator.image.replace(
                "http://127.0.0.1:8000/C:\\xampp\\htdocs\\magang-backend\\public\\",
                "/storage/"
              )}
              alt="gambar indikator SPBE"
              className="w-full sm:max-w-md md:max-w-none"
              style={{ maxHeight: "1000px", maxWidth: "800px" }} />
            <h1 className="mb-8 font-bold text-lg text-center">Tahun {indikator.tahun}</h1>
          </div>
        </SwiperSlide>
        </>
        ))}
      </Swiper>
    
  </div>
  
  );
};

export default Imple;

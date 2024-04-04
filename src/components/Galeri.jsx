import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import { galleryPhoto, galleryVideo } from "../constants";

const Galeri = () => {
  const fotoData = galleryPhoto.data.map((item) => ({
    id: item.id,
    title: item.title,
    image: item.image,
    href: item.image,
  }));

  const videoData = galleryVideo.data.map((item) => ({
    id: item.id,
    type: "video",
    src: item.title,
    href: item.link,
  }));

  const [cards, setCards] = useState(fotoData);
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
    setCards(showVideo ? fotoData : videoData);
  };

  return (
    <div className="md:px-20 pt-20 pb-20">
      <div className="flex md:flex-row items-center justify-between mb-4 md:mb-0">
        <div className="flex flex-row pb-2">
          <p className="text-primary pl-2 font-bold text-2xl">Galeri</p>
          <p className="pl-2 font-bold text-2xl">Kegiatan</p>
        </div>
        <div>
          <a href="#" className="font-bold text-white">
            Lihat Semua
          </a>
        </div>
      </div>
      <div className="mt-2 md:mt-0 flex items-center">
        <span
          onClick={toggleVideo}
          className={`cursor-pointer border border-solid ${
            showVideo
              ? "border-primary text-primary"
              : "bg-primary text-white border-primary "
          }`}
          style={{ padding: "4px 35px ", borderRadius: "4px 0 0 4px" }}
        >
          Photo
        </span>
        <span
          onClick={toggleVideo}
          className={`cursor-pointer border border-solid  ${
            showVideo
              ? "border-primary bg-primary text-white"
              : "border-primary text-primary "
          }`}
          style={{ padding: "4px 35px", borderRadius: "0 4px 4px 0" }}
        >
          Video
        </span>
      </div>
      <div className="pt-10">
        <div className="flex items-center justify-center ">
          <Swiper
            pagination={true}
            autoplay={{ delay: 5000 }}
            modules={[Pagination, Autoplay]}
            slidesPerView={3}
            spaceBetween={20}
            // style={{ overflowX: "hidden" }}
            className="carousel-container py-6 carousel-item relative justify-center gap-4 w-full"
          >
            {cards.map((card) => (
              <SwiperSlide
                key={card.id}
                className={`card ${showVideo ? "video" : "photo"} `}
              >
                {showVideo ? (
                  <div className="w-full h-full video-container" style={{ overflowX: "hidden",height: "200px" }}>
                    <iframe
                      width="100%"
                      height="100%"
                      src={card.href}
                      
                      allowFullScreen
                      title={`Video ${card.id}`}
                      style={{ overflowX: "hidden", maxHeight: "1000px" }}
                    ></iframe>
                  </div>
                ) : (
                  <img
                    src={card.image.replace(
                      "http://127.0.0.1:8000/C:\\xampp\\htdocs\\magang-backend\\public\\",
                      "/storage/"
                    )}
                    alt={`Card ${card.id}`}
                    className="w-full h-full object-cover"
                    style={{ maxHeight: "1000px" }}
                  />
                )}
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Galeri;

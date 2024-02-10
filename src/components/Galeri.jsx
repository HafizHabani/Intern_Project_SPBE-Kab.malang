import React from 'react';
import { kegiatan, kegiatan2, kegiatan3 } from '../assets'

const Galeri = () => {
  return (
    <div className="outerrgaleri flex flex-col w-full">
      <div className="ferslen mt-7 italic justify-center flex flex-row">
        <div className='font-bold text-3xl text-primary'>
          Galeri Kegiatan
        </div>
      </div>
      <div className="carousel">
        <Slide
          id="slide1"
          images={[
            kegiatan,
            kegiatan2,
            kegiatan3
          ]}
          prevSlide="#slide4"
          nextSlide="#slide2"
        />
        <Slide
          id="slide2"
          images={[
            kegiatan2,
            kegiatan3,
            kegiatan
          ]}
          prevSlide="#slide1"
          nextSlide="#slide3"
        />
        <Slide
          id="slide3"
          images={[
            kegiatan3,
            kegiatan,
            kegiatan2
          ]}
          prevSlide="#slide2"
          nextSlide="#slide4"
        />
        <Slide
          id="slide4"
          images={[
            kegiatan3,
            kegiatan2,
            kegiatan
          ]}
          prevSlide="#slide3"
          nextSlide="#slide1"
        />
      </div>
    </div>
  );
};

const Slide = ({ id, images, prevSlide, nextSlide }) => {
  return (

    <div id={id} className="py-6 carousel-item relative justify-center gap-4 w-full">
      {images.map((image, index) => (
        <img key={index} src={image} className="rounded-box4" style={{ maxHeight: '300px' }} />
      ))}
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={prevSlide} className="btn btn-circle">❮</a>
        <a href={nextSlide} className="btn btn-circle">❯</a>
      </div>
    </div>
  );
};

export default Galeri;

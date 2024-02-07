import React from 'react'
import { suhat_malang } from '../assets'

const Galeri = () => {
  return (
    <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full ">
    <img src="https://waifu2x.booru.pics/outfiles/6385d2f7f2448d7b0010c940bdd379d5f793464b_s2_n3_y2.png" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://waifu2x.booru.pics/outfiles/9291079a31c377fc4fcd1ed6cf9a533af8e730b1_s2_n3_y2.png" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://waifu2x.booru.pics/outfiles/724779d73deccb9d347ead0a4bc311f94d1d24df_s2_n3_y2.png" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={suhat_malang} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  )
}

export default Galeri
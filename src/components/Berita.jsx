import React from 'react';
import { newsDummy } from '../constants';

const Berita = () => (
  <div className='sm:px-4 md:px-8 lg:px-12 py-6'> {/* Adjusted horizontal padding */}
    <div className='flex md:flex-row items-center justify-between mb-6'> {/* Changed flex direction and added margin-bottom */}
      <div className='flex flex-row text-xl md:text-2xl'> {/* Adjusted font size */}
        <p className='text-primary pl-2 font-bold'>Berita</p>
        <p className='pl-2 font-bold'>Terkini</p>
      </div>
      <div>
        <a href='#' className='font-bold text-sm md:text-base'>Lihat Semua</a> {/* Adjusted font size */}
      </div>
    </div>
    <div className='relative flex flex-wrap justify-around pt-4 md:pt-10'> {/* Adjusted padding */}
      {newsDummy.data.map((news, index) => (
        <div key={index} className="card card-compact w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-base-100 mt-2 md:mt-0 md:mr-4 lg:mr-0"> {/* Adjusted card width and added margin-right */}
          <figure>
            <img src={news.image} alt="Shoes" className="w-full" /> {/* Adjusted image width */}
          </figure>
          <div className="card-body">
            <h2 className="card-title text-base md:text-lg">{news.title}</h2> {/* Adjusted font size */}
            <p className='text-xs md:text-sm'>
              {news.description.slice(0, 40)}
              {news.description.length > 40 ? '...' : ''}
              </p> {/* Adjusted font size */}
            <div className="card-actions justify-between items-center">
              <div className='text-slate-500 text-xs md:text-sm'>{news.update_at}</div> {/* Adjusted font size */}
              <button className="btn btn-xs md:btn-sm font-normal btn-primary text-xs md:text-sm text-white">Selengkapnya</button> {/* Adjusted font size */}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Berita;

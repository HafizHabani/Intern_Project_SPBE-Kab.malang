import React from 'react'
import { newsDummy } from '../constants'

const Berita = () => (
    <div className='sm:px-20 py-10'>
      <div className='flex flex-row items-center justify-between'>
        <div className='flex flex-row text-2xl'>
          <p className='text-primary pl-2'>
              Berita 
          </p>
          Terkini
        </div>
        <div>
          <a href='#' className='text-slate-500'>Lihat Semua</a>
        </div>
      </div>
      <div className='flex flex-wrap flex-row content-around justify-around pt-10'>
        {newsDummy.map((news)=>(
          <div key={news.author} className="card card-compact w-50 sm:w-98 bg-base-100 mt-2 md:mt-0 ">
            <figure><img src={news.image} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title text-sm sm:text-base">{news.title}</h2>
              <p className='text-xs sm:text-base'>{news.description}</p>
              <div className="card-actions justify-between items-center">
                <div className='text-slate-500 text-xs sm:text-base'> 
                  {news.author}
                </div>
                <button className="btn btn-xs sm:btn-sm font-normal btn-primary text-xs sm:sm text-white">Selengkapnya</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

export default Berita

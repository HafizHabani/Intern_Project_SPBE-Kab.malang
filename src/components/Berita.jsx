import React from "react";
import { newsDummy } from "../constants";
import { useNavigate } from 'react-router-dom';

const Berita = () => {
  const navigate = useNavigate(); 
  return (
  <div className="sm:px-4 md:px-8 lg:px-12 py-6">
    {" "}
    {/* Adjusted horizontal padding */}
    <div className="flex md:flex-row items-center justify-between mb-6">
      {" "}
      {/* Changed flex direction and added margin-bottom */}
      <div className="flex flex-row text-xl md:text-2xl">
        {" "}
        {/* Adjusted font size */}
        <p className="text-primary pl-2 font-bold">Berita</p>
        <p className="pl-2 font-bold">Terkini</p>
      </div>
      <div>
        <a href="/Berita" className="font-bold text-sm md:text-base">
          Lihat Semua
        </a>{" "}
        {/* Adjusted font size */}
      </div>
    </div>
    <div className="relative flex flex-wrap justify-around pt-4 md:pt-10">
      {/* Sort data berita berdasarkan tanggal atau ID secara descending */}
      {newsDummy.data
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)) // Mengurutkan data dari yang terbaru
        .slice(0, 3) // Mengambil 3 data teratas
        .map((news, index) => (
          <div
            key={index}
            className="card card-compact w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-base-100 mt-2 md:mt-0 md:mr-4 lg:mr-0"
          >
            <figure>
              <img src={news.image} alt="Shoes" className="max-h-52" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-base md:text-lg">{news.title}</h2>
              <p className="text-xs md:text-sm">
                {news.description.slice(0, 40)}
                {news.description.length > 40 ? "..." : ""}
              </p>
              <div className="card-actions justify-between items-center">
                <div className="text-slate-500 text-xs md:text-sm">
                  {new Date(news.updated_at).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <button className="btn btn-xs md:btn-sm font-normal btn-primary text-xs md:text-sm text-white" onClick={() => navigate(`/Berita/${news.id}`)}>
                  Selengkapnya
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  </div>
  )
};

export default Berita;

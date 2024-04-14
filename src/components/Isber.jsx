import React, { useState, useEffect } from "react";
import { berita } from "../assets";
import { newsDummy } from "../constants";

const Isber = () => {
  return (
    <div>
      <h6 className="text-lg font-bold border-4 border-solid border-white border-b-primary py-5 pe-40">
        List Berita
      </h6>
      <div className="pt-10 flex flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newsDummy.data
            .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
            .map((news, index) => (
              <div
                className="border-4 border-solid border-gray-300 rounded-lg overflow-hidden flex flex-col"
                key={index}
              >
                <div className="relative w-full h-40">
                  <img
                    src={news.image.replace(
                      "http://127.0.0.1:8000/C:\\xampp\\htdocs\\magang-backend\\public\\",
                      "/storage/"
                    )}
                    alt={news.image.replace(
                      "http://127.0.0.1:8000/C:\\xampp\\htdocs\\magang-backend\\public\\",
                      "/storage/"
                    )}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex-grow">
                  {" "}
                  {/* Gunakan flex-grow untuk memperluas elemen ini sehingga memenuhi sisa ruang di dalam kartu */}
                  <h5 className="font-bold text-center text-base mb-2">
                    {news.title}
                  </h5>
                  <p className="text-sm mb-4">
                    {news.description.slice(0, 200)}
                  </p>
                </div>
                <div className="p-4 flex justify-between items-center">
                  {" "}
                  {/* Pindahkan elemen tanggal dan tombol di luar div p-4 */}
                  <div className="text-slate-500 text-xs md:text-sm">
                    {new Date(news.updated_at).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <button className="btn btn-xs md:btn-sm font-normal btn-primary text-xs md:text-sm text-white">
                    Selengkapnya
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="join flex justify-center mt-5">
        <button className="join-item btn btn-sm bg-primary border-red-700 hover:bg-red-900 text-white">
          «
        </button>
        <button className="join-item btn btn-sm bg-primary border-red-700 hover:bg-red-900 text-white">
          1
        </button>
        <button className="join-item btn btn-sm bg-primary border-red-700 hover:bg-red-900 text-white">
          2
        </button>
        <button className="join-item btn btn-sm bg-primary border-red-700 hover:bg-red-900 text-white">
          3
        </button>
        <button className="join-item btn btn-sm bg-primary border-red-700 hover:bg-red-900 text-white">
          »
        </button>
      </div>
    </div>
  );
};

export default Isber;

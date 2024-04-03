import React from "react";
import { urlAPI } from "../constants";
import axios from "axios";
import { useState } from "react";

const TabelDomain = (prop) => {
  const [id, setId] = React.useState();
  const [data, setData] = React.useState({});
  const [Domain, setDomain] = React.useState(prop.domain);
  const [linkPage, setLinkPage] = React.useState(
    `${urlAPI}${prop.keterangan}/show`.toLocaleLowerCase()
  );
  const map = data;

  const [notification, setNotification] = useState(null);

  // Fungsi untuk menampilkan notifikasi
  const showNotification = (message, isSuccess) => {
    setNotification({ message, isSuccess });
    // Setelah 3 detik, tutup notifikasi secara otomatis
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const HandlerDomain = async (id) => {
    setLinkPage(id);
    const data = await axios.get(id);
    setDomain(data.data);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    const userData = {
      domain: data.domain,
      aspek: data.aspek,
      indikator: data.indikator,
      penjelasan: data.penjelasan,
      link: data.link,
      tahun: data.tahun,
      nilai: data.nilai,
    };

    console.log(userData);
    
    axios
    .post(`${urlAPI}${prop.keterangan}/update/${id}`.toLocaleLowerCase(), userData)
    .then((response) => {
      console.log(response);
      showNotification("Data berhasil diupdate", true);
      getData();
    })
    .catch((error) => {
      console.log(error);
      showNotification("Data tidak berhasil diupdate", false);
    });
  };
  const deleteHandler = (id) => {
    axios
      .delete(`${urlAPI}${prop.keterangan}/delete/${id}`.toLocaleLowerCase())
      .then((response) => {
        // Notifikasi berhasil dihapus
        console.log("Data berhasil dihapus", response.data.message);
        // Tambahkan logika untuk menampilkan notifikasi UI di sini
        showNotification("Berhasil Menghapus Data", true);
        getData();
      })
      .catch((error) => {
        // Jika terjadi kesalahan, tampilkan pesan error
        console.error("Terjadi kesalahan saat menghapus data:", error.message);
        // Tambahkan logika untuk menampilkan notifikasi UI tentang kesalahan di sini
        showNotification("Gagal Menghapus Data", false);
      });
  };

  const handleSubmitCreate = (e) => {
    e.preventDefault();
    const userData = {
      domain: `${prop.keterangan} SPBE`,
      aspek: data.aspek,
      indikator: data.indikator,
      penjelasan: data.penjelasan,
      link: data.link,
      nilai: data.nilai,
      tahun: data.tahun,
    };

    console.log(userData);

    axios
      .post(`${urlAPI}${prop.keterangan}/create`.toLocaleLowerCase(), userData)
      .then((response) => {
        console.log(response);
        showNotification("Data berhasil ditambahkan", true);
        getData();
      })
      .catch((error) => {
        console.log(error);
        showNotification("Gagal menambahkan data", false);
      });
  };

  const getData = async () => {
    const data = await axios.get(linkPage);
    setDomain(data.data);
  };

  const [selectedYear, setSelectedYear] = useState("All"); // State untuk menyimpan tahun yang dipilih

  // Fungsi untuk menangani perubahan tahun yang dipilih
  const handleYearChange = (tahun) => {
    setSelectedYear(tahun);
  };

  // Daftar tahun yang tersedia
  const uniqueYears = Array.from(
    new Set(Domain.data.map((domain) => domain.tahun))
  ).sort((a, b) => a - b);

  // Filter data berdasarkan tahun yang dipilih
  const filteredData = Domain.data.filter((domain) => {
    // Jika tahun yang dipilih adalah 'All', tampilkan semua data
    if (selectedYear === "All") {
      return true;
    }
    // Jika tahun dari kebijakan sama dengan tahun yang dipilih, tampilkan data tersebut
    return domain.tahun === selectedYear;
  });

  return (
    <div className="p-4">
      <div className="flex flex-row justify-between items-center py-2">
        <p className="font-bold text-2xl">Tabel Domain {prop.nama}</p>
        <button
          className="btn btn-sm bg-primary hover:bg-red-700 text-white"
          onClick={() => document.getElementById("my_modal_4").showModal()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Tambah Indikator
        </button>
        {/* Notifikasi */}
        {notification && (
          <div
            className={`notification fixed bottom-4 right-4 p-4 rounded-md ${
              notification.isSuccess ? "bg-green-500" : "bg-red-500"
            } text-white`}
          >
            <p>{notification.message}</p>
          </div>
        )}
      </div>
      <table className="table border-solid border-2">
        <thead className="text-lg text-primary border-solid border-2">
          <tr>
            <th className="border-solid border-2">No</th>
            <th className="border-solid border-2">Aspek</th>
            <th className="border-solid border-2">Indikator</th>
            <th className="border-solid border-2">Narasi</th>
            <th className="border-solid border-2">Nilai Indikator</th>
            <th className="border-solid border-2">Link Dokumen</th>
            {/* Tambahkan dropdown untuk memilih tahun */}
            <th className="flex items-center">
              <span>Tahun:</span>
              <select
                className="ml-2 p-1 border border-gray-300 rounded"
                value={selectedYear}
                onChange={(e) => handleYearChange(e.target.value)}
              >
                {/* Buat opsi untuk setiap tahun unik */}
                <option value="All">All</option>
                {uniqueYears.map((year, index) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </th>
            <th className="border-solid border-2">Action</th>
          </tr>
        </thead>
        <tbody className="border-solid border-2">
          {filteredData.map((domain) => (
            <tr key={domain.id}>
              <td className="border-solid border-2">{domain.id}</td>
              <td className="border-solid border-2">{domain.aspek}</td>
              <td className="border-solid border-2 max-w-96">
                {domain.indikator}
              </td>
              <td className="border-solid border-2 max-w-96">
                {domain.penjelasan}
              </td>
              <td className="border-solid border-2 max-w-96">{domain.nilai}</td>
              <td className="border-solid border-2 ">
                <a href={domain.link} target="_blank" rel="noreferrer" className="text-primary" >
                  {domain.link}
                </a>
              </td>
              <td className="border-solid border-2">{ domain.tahun}</td>{" "}
              {/* Ganti ini dengan properti tahun dari data */}
              <td>
                {/* ini button edit */}
                <div className="flex flex-row justify-center items-center ">
                  <button
                    className="btn btn-square bg-emerald-400 hover:bg-emerald-600"
                    onClick={() => {
                      document.getElementById("my_modal_3").showModal();
                      setId(domain.id);
                      setData(domain);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                      />
                    </svg>
                  </button>

                  {/* Ini button delete */}
                  <button
                    className="btn btn-square bg-red-500 hover:bg-red-800"
                    onClick={() => {
                      deleteHandler(domain.id);
                      console.log(map);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="join flex justify-center text-white mt-5">
        <button
          className={`join-item btn btn-sm text-white border-primary bg-primary hover:bg-red-700  disabled:bg-red-900 ${
            Domain.prev_page_url === null ? "btn-disabled" : " "
          }`}
          onClick={async () => HandlerDomain(Domain.prev_page_url)}
        >
          «
        </button>
        <button className="join-item btn btn-sm text-white border-primary bg-primary hover:bg-red-700 disabled:bg-red-900">
          Page {Domain.current_page}
        </button>
        <button
          className={`join-item btn btn-sm text-white border-primary bg-primary hover:bg-red-700 disabled:bg-red-900 ${
            Domain.next_page_url === null ? "btn-disabled" : " "
          }`}
          onClick={async () => HandlerDomain(Domain.next_page_url)}
        >
          »
        </button>
      </div>

      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-5/12 max-w-5xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute text-xl right-6 top-6">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Tambah Indikator</h3>
          <form onSubmit={handleSubmitCreate}>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="mb-4">
                <label
                  htmlFor="domain"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Domain:
                </label>
                <input
                  type="text"
                  name="domain"
                  onSubmit={handleChange}
                  onChange={handleChange}
                  value={`${prop.keterangan} SPBE`.toString()}
                  id="aspek"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="aspek"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Aspek:
                </label>
                <input
                  type="text"
                  name="aspek"
                  onChange={handleChange}
                  id="aspek"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="indikator"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Indikator:
                </label>
                <input
                  type="text"
                  name="indikator"
                  onChange={handleChange}
                  id="indikator"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="penjelasan"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Penjelasan:
                </label>
                <textarea
                  id="penjelasan"
                  name="penjelasan"
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="nilai"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Nilai Index:
                </label>
                <input
                  type="number"
                  name="nilai"
                  onChange={handleChange}
                  id="nilai"
                  title="Harus Angka yang di input"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  step="1"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="link"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Link Document:
                </label>
                <input
                  type="text"
                  name="link"
                  id="link"
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="tahun"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Tahun:
                </label>
                <input
                  type="text"
                  name="tahun"
                  onChange={handleChange}
                  id="tahun"
                  pattern="[0-9]{4}"
                  title="Masukkan tahun dengan format empat digit (misalnya: 2024)"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
            </div>
            {/* Notifikasi */}
            {notification && (
              <div
                className={`notification fixed bottom-4 left-4 p-4 rounded-md ${
                  notification.isSuccess ? "bg-green-500" : "bg-red-500"
                } text-white`}
              >
                <p>{notification.message}</p>
              </div>
            )}
            <div className=" px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="submit"
                formMethod="post"
                className="btn bg-primary text-base font-medium text-white hover:bg-red-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
              >
                Tambah
              </button>
            </div>
          </form>
        </div>
      </dialog>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-5/12 max-w-5xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute text-xl right-6 top-6">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Edit Indikator</h3>
          <form onSubmit={handleSubmitUpdate} method="dialog">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="mb-4">
                <label
                  htmlFor="domain"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Domain:
                </label>
                <input
                  type="text"
                  name="domain"
                  id="domain"
                  onSubmit={handleChange}
                  onChange={handleChange}
                  value={`${prop.keterangan} SPBE`}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="aspek"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Aspek:
                </label>
                <input
                  type="text"
                  name="aspek"
                  id="aspek"
                  onSubmit={handleChange}
                  onChange={handleChange}
                  defaultValue={map.aspek}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="indikator"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Indikator:
                </label>
                <input
                  type="text"
                  name="indikator"
                  id="indikator"
                  onSubmit={handleChange}
                  onChange={handleChange}
                  defaultValue={map.indikator}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="penjelasan"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Penjelasan:
                </label>
                <textarea
                  id="penjelasan"
                  name="penjelasan"
                  onSubmit={handleChange}
                  onChange={handleChange}
                  defaultValue={map.penjelasan}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="nilai"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Nilai Index:
                </label>
                <input
                  type="number"
                  name="nilai"
                  onSubmit={handleChange}
                  onChange={handleChange}
                  id="nilai"
                  title="Harus Angka yang di input"
                  defaultValue={map.nilai}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  step="1"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="link"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Link Document:
                </label>
                <input
                  type="text"
                  name="link"
                  id="link"
                  onSubmit={handleChange}
                  onChange={handleChange}
                  defaultValue={map.link}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="tahun"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Tahun:
                </label>
                <input
                  type="text"
                  defaultValue={map.tahun}
                  name="tahun"
                  onSubmit={handleChange}
                  onChange={handleChange}
                  id="tahun"
                  pattern="[0-9]{4}"
                  title="Masukkan tahun dengan format empat digit (misalnya: 2024)"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
            </div>
            {/* Notifikasi */}
        {notification && (
          <div
            className={`notification fixed bottom-4 left-4 p-4 rounded-md ${
              notification.isSuccess ? "bg-green-500" : "bg-red-500"
            } text-white`}
          >
            <p>{notification.message}</p>
          </div>
        )}
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="submit"
                className="btn bg-primary text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};
export default TabelDomain;

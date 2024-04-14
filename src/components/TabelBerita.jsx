import React, { useState } from "react";

import axios from "axios";
import { urlAPI } from "../constants";

// Import FilePond styles
import "filepond/dist/filepond.min.css";
import { Textarea } from "@material-tailwind/react";
const TabelBerita = (props) => {
  const [notification, setNotification] = useState(null);
  const [data, setData] = React.useState({});
  const [berita, setNilai] = React.useState(props.berita);
  const [changeData, setChangeData] = React.useState({});
  const [file, setFile] = React.useState([]);
  const [id, setId] = React.useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const getData = async () => {
    const data = await axios.get(`${urlAPI}abcd/show`);
    setNilai(data.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Pastikan file logo telah dipilih
    if (!file) {
      showNotification("Pilih file logo terlebih dahulu", false);
      return;
    }

    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", data.title);
    formData.append("description", data.description);

    axios
      .post(`${urlAPI}abcd/createberita`, formData)
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
  const showNotification = (message, isSuccess) => {
    setNotification({ message, isSuccess });
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", data.title);
    formData.append("description", data.description);
    axios
      .post(`${urlAPI}abcd/updateberita/${id}`, formData)
      .then((response) => {
        console.log(response);
        showNotification("Data berhasil diupdate", true);
        getData();
      })
      .catch((error) => {
        console.log(error);
        showNotification("Gagal mengupdate data", false);
      });
  };

  const deleteHandler = (id) => {
    axios
      .delete(`${urlAPI}abcd/delete/${id}`.toLocaleLowerCase())
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

  return (
    <div className="p-4 ml-4">
      <div className="flex flex-row justify-between items-center py-2">
        <p className="font-bold text-2xl">Tabel {props.keterangan}</p>
        <button
          className="btn btn-sm bg-primary hover:bg-red-800 text-white"
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
          Tambah Berita
        </button>
      </div>
      <div>
        <table className="table border-solid border-2">
          <thead className="text-lg text-primary border-solid border-2">
            <tr>
              <th className="border-solid border-2">No</th>
              <th className="border-solid border-2">Judul</th>
              <th className="border-solid border-2">Tanggal</th>
              <th className="border-solid border-2">Foto</th>
              <th className="border-solid border-2">Penjelasan</th>
            </tr>
          </thead>
          <tbody className="border-solid border-2">
            {berita.map((berita, index) => (
              <tr key={index}>
                <td className="border-solid border-2">{index + 1}</td>
                <td className="border-solid border-2">{berita.title}</td>
                <td className="border-solid border-2">
                  {berita.updated_at.slice(0, 10)}
                </td>
                <td className="border-solid border-2">
                  <img
                    src={berita.image}
                    alt={berita.title}
                    className="w-32 h-auto"
                  />
                </td>
                <td className="border-solid border-2 max-w-96">
                  {berita.description}
                  <br />
                  <a href={berita.link} className="text-primary">
                    Selengkapnya
                  </a>
                </td>
                <td>
                  {/* Ini button edit */}
                  <div className="flex flex-row justify-center items-center ">
                    <button
                      className="btn btn-square bg-emerald-400 hover:bg-emerald-600"
                      onClick={() => {
                        document.getElementById("my_modal_3").showModal();
                        setId(berita.id);
                        setChangeData(berita);
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
                      className="btn btn-square bg-red-500 hover:bg-red-700"
                      onClick={() => {
                        deleteHandler(berita.id);
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
                    {notification && (
                      <div
                        className={`notification fixed bottom-4 left-4 p-4 rounded-md ${
                          notification.isSuccess ? "bg-green-500" : "bg-red-500"
                        } text-white`}
                      >
                        <p>{notification.message}</p>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute text-xl right-6 top-6">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Tambah Berita</h3>
            <form
              onSubmit={handleSubmit}
              encType="multipart/form-data"
              method="dialog"
            >
             <div className="mb-4">
                  <label
                    htmlFor="title"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Judul Berita:
                  </label>
                  <input
                    type="text"
                    name="title"
                    onChange={handleChange}
                    id="title"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="image"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Gambar Sampul Berita:
                  </label>
                  <input
                    type="file"
                    name="image"
                    onChange={handleFile}
                    id="image"
                    accept="image/*"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
              <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Deskripsi Berita :
                  </label>
                  <textarea
                    type="text"
                    name="description"
                    onChange={handleChange}
                    id="description"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
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
              <div className="modal-action flex-row">
                <button
                  type="submit"
                  formMethod="post"
                  className="btn bg-primary text-base font-medium text-white hover:bg-red-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Tambahkan Berita
                </button>
              </div>
            </form>
          </div>
        </dialog>

        {/* edit */}
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box w-5/12 max-w-5xl">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute text-xl right-6 top-6">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Ubah Berita</h3>
            <form
              onSubmit={handleSubmitUpdate}
              encType="multipart/form-data"
              method="dialog"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="mb-4">
                  <label
                    htmlFor="title"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Judul Berita :
                  </label>
                  <input
                    type="text"
                    name="title"
                    defaultValue={changeData.title}
                    onSubmit={handleChange}
                    onChange={handleChange}
                    id="title"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="image"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Gambar Sampul Berita:
                  </label>
                  <input
                    type="file"
                    name="image"
                    onChange={handleFile}
                    id="image"
                    accept="image/*"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Deskripsi Berita :
                  </label>
                  <Textarea
                    type="text"
                    name="description"
                    defaultValue={changeData.description}
                    onSubmit={handleChange}
                    onChange={handleChange}
                    id="description"
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
                  Update
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default TabelBerita;

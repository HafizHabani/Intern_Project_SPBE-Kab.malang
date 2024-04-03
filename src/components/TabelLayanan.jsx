import React, { useState } from 'react';
import axios from 'axios';
import 'filepond/dist/filepond.min.css';
import { urlAPI } from '../constants';
import { FilePond, registerPlugin,} from 'react-filepond';
import  FilePondPluginFileValidateType  from 'filepond-plugin-file-validate-type';
registerPlugin(FilePondPluginFileValidateType);


const TabelLayanan = (props) => {
  const [data, setData] = useState({});
  const [notification, setNotification] = useState(null);
  const [files, setFiles] = useState([]);
  const [id, setId] = useState(null); // Definisikan variabel id

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Pastikan file logo telah dipilih
    if (!data.logo) {
      showNotification('Pilih file logo terlebih dahulu', false);
      return;
    }
  
    const formData = new FormData();
    formData.append('logo', data.logo); // Simpan file logo dalam FormData
    formData.append('nama', data.nama || ''); // Ubah ke data.nama atau string kosong jika data.nama tidak ada
    formData.append('link', data.link || ''); // Ubah ke data.link atau string kosong jika data.link tidak ada
    formData.append('deskripsi', data.deskripsi || ''); // Ubah ke data.deskripsi atau string kosong jika data.deskripsi tidak ada
  
    try {
      // Mengunggah gambar dan mendapatkan respons dari server
      const response = await axios.post(`${urlAPI}layanan/uploadgambar`, formData);
  
      console.log(response.data);
      showNotification('Data berhasil ditambahkan', true);
    } catch (error) {
      console.error(error);
      showNotification('Gagal menambahkan data', false);
    }
  };

  const showNotification = (message, isSuccess) => {
    setNotification({ message, isSuccess });
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    const userData = {
      logo : data.logo,
      nama: data.nama,
      deskripsi: data.deskripsi,
      link : data.link,
    };

    console.log(userData);
    
    axios
    .post(`${urlAPI}layanan/update/${id}`.toLocaleLowerCase(), userData)
    .then((response) => {
      console.log(response);
      showNotification("Data berhasil diupdate", true);
      
    })
    .catch((error) => {
      console.log(error);
      showNotification("Data tidak berhasil diupdate", false);
    });
  };

  const deleteHandler = (id) => {
    axios
      .delete(`${urlAPI}layanan/delete/${id}`.toLocaleLowerCase())
      .then((response) => {
        // Notifikasi berhasil dihapus
        console.log("Data berhasil dihapus", response.data.message);
        // Tambahkan logika untuk menampilkan notifikasi UI di sini
        showNotification("Berhasil Menghapus Data", true);
        
      })
      .catch((error) => {
        // Jika terjadi kesalahan, tampilkan pesan error
        console.error("Terjadi kesalahan saat menghapus data:", error.message);
        // Tambahkan logika untuk menampilkan notifikasi UI tentang kesalahan di sini
        showNotification("Gagal Menghapus Data", false);
      });
  };

 

  return (
    <div className='p-4 ml-4'>
      <div className='flex flex-row justify-between items-center py-2'>
        <p className='font-bold text-2xl'>
          Tabel {props.keterangan}
        </p>
        <button className='btn btn-sm bg-primary hover:bg-red-800 text-white' onClick={()=>document.getElementById('my_modal_4').showModal()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Tambah Layanan
        </button>

      </div>
      <table className="table border-solid border-2">
        <thead className='text-lg text-primary border-solid border-2'>
          <tr>
            <th className='border-solid border-2'>No</th>
            <th className='border-solid border-2'>Nama Layanan</th>
            <th className='border-solid border-2'>Tanggal</th>
            <th className='border-solid border-2'>Logo Layanan</th>
            <th className='border-solid border-2'>Penjelasan</th>
            <th className='border-solid border-2'>Link Layanan</th>
            <th className='border-solid border-2'>Action</th>
          

            
          </tr>
        </thead>
        <tbody className='border-solid border-2'>
          {props.layanan.map((layanan) => (
            <tr key={layanan.id}>
              <td className='border-solid border-2'>{layanan.id}</td>
              <td className='border-solid border-2'>{layanan.nama}</td>
              <td className='border-solid border-2'>{layanan.updated_at.slice(0, 10)}</td>
              <td className='border-solid border-2 flex justify-center'>
                <img src={layanan.logo} alt={layanan.nama} className="w-auto max-h-20" />
              </td>
              <td className='border-solid border-2'>{layanan.deskripsi}</td>
              <td className='border-solid border-2'>{layanan.link}</td>
              <td>
                {/* ini button edit */}
                <div className="flex flex-row justify-center items-center ">
                  <button
                    className="btn btn-square bg-emerald-400 hover:bg-emerald-600"
                    onClick={() => {
                      document.getElementById("my_modal_3").showModal();
                      setId(layanan.id);
                      setData(layanan);
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
                      deleteHandler(layanan.id);
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
      <dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute text-xl right-6 top-6">
        ✕
      </button>
    </form>
    <h3 className="font-bold text-lg">Tambah Layanan</h3>
    <form onSubmit={handleSubmit} encType="multipart/form-data" method='dialog'>
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="mb-4">
          <label
            htmlFor="nama"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nama:
          </label>
          <input
            type="text"
            name="nama"
            onChange={handleChange}
            id="nama"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
           <div className="mb-4">
          <label
            htmlFor="logo"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Logo:
          </label>
          <input
            type="file"
            name="logo"
            onChange={handleChange}
            id="logo"
            accept="image/*"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="deskripsi"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Deskripsi:
          </label>
          <textarea
            id="deskripsi"
            name="deskripsi"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="link"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Link Layanan:
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

      

      {/* edit */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-5/12 max-w-5xl">
        <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute text-xl right-6 top-6">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Tambah Layanan</h3>
          <form onSubmit={handleSubmitUpdate} encType="multipart/form-data" method='dialog'>
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
             
              <div className="mb-4">
                <label
                  htmlFor="nama"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Nama:
                </label>
                <input
                  type="text"
                  name="nama"
                  onChange={handleChange}
                  id="nama"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
          <label
            htmlFor="logo"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Logo:
          </label>
          <input
            type="file"
            name="logo"
            onChange={handleChange}
            id="logo"
            accept="image/*"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
              <div className="mb-4">
                <label
                  htmlFor="deskripsi"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Deskripsi:
                </label>
                <textarea
                  id="deskripsi"
                  name="deskripsi"
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                ></textarea>
              </div>
              
              <div className="mb-4">
                <label
                  htmlFor="link"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Link Layanan:
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
  )
}

export default TabelLayanan

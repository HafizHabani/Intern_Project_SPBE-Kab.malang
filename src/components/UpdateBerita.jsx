import React from 'react'
import { urlAPI } from '../constants'
import axios from "axios"

const UpdateBerita = (prop) => { 
  const [data, setData] = React.useState({});
  const [file, setFile] = React.useState();

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };
  const handleFile = (e) => {
    setFile(e.target.files[0])
  }

  const handlerFormSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('image', file);
    formData.append('title', data.title);
    formData.append('description', data.deskripsi)

    axios
      .post(`${urlAPI}abcd/create/`.toLocaleLowerCase(), formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("server responded");
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
  };
  return (
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Update Berita</h3>
          <form onSubmit={handlerFormSubmit}>
            <div className="label">
              <span className="label-text font-bold">Judul Berita</span>
            </div>
            <input type="text" defaultValue={prop.data.title} onChange={handleChange} onSubmit={handleChange} placeholder="Type here" className="input input-md input-bordered w-3/5 mb-3" />
            <div className="label">
              <span className="label-text font-bold">Gambar Sampul</span>
            </div>
            <input
              type="file"
              name="image"
              onChange={handleFile}
              id="image"
              accept="image/*"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
            <div className="label">
              <span className="label-text font-bold">Deskripsi</span>
            </div>
            <textarea defaultValue={prop.data.description} onChange={handleChange} onSubmit={handleChange} className="textarea textarea-bordered w-full mb-3" placeholder="Isi Berita"></textarea>
            <div className="modal-action flex-row">
              <button className='btn bg-emerald-400 hover:bg-emerald-700 text-white'>Save</button>
              <button formMethod='dialog' className="btn bg-primary hover:bg-red-700 text-white">Close</button>
            </div>
          </form>
        </div>
      </dialog>
  )
}

export default UpdateBerita

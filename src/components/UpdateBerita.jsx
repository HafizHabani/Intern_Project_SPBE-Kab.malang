import React from 'react'
import { FilePond } from 'react-filepond'

const UpdateBerita = (prop) => { 
    
  return (
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Update Berita</h3>
          <form>
            <div className="label">
              <span className="label-text font-bold">Judul Berita</span>
            </div>
            <input type="text" defaultValue={prop.data.title} placeholder="Type here" className="input input-md input-bordered w-3/5 mb-3" />
            <div className="label">
              <span className="label-text font-bold">Gambar Sampul</span>
            </div>
            <FilePond
              className='mb-5'
              allowFileTypeValidation={true}
              acceptedFileTypes={['image/*']}
            ></FilePond>
            <div className="label">
              <span className="label-text font-bold">Deskripsi</span>
            </div>
            <textarea defaultValue={prop.data.description} className="textarea textarea-bordered w-full mb-3" placeholder="Isi Berita"></textarea>
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

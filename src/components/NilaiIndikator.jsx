import React from 'react'
import { FilePond, registerPlugin,} from 'react-filepond';
import  FilePondPluginFileValidateType  from 'filepond-plugin-file-validate-type';
registerPlugin(FilePondPluginFileValidateType);


const NilaiIndikator = (props) => {
  return (
    <div className='p-4'>
      <div className='flex flex-row justify-between items-center py-2'>
        <p className='font-bold text-2xl'>
          Tabel {props.keterangan}
        </p>
        <button className='btn btn-sm bg-primary hover:bg-red-800 text-white' onClick={()=>document.getElementById('my_modal_4').showModal()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
          </svg>
          Update Gambar
        </button>
      </div>
      <div>
      <table className="table border-solid border-2">
        <thead className='text-lg text-primary border-solid border-2'>
        <tr>
            <th className='border-solid border-2'>No</th>
            <th className='border-solid border-2'>Tahun</th>
            <th className='border-solid border-2'>Gambar</th>
            <th className='border-solid border-2'>Action</th>
          </tr>
        </thead>
        <tbody className='border-solid border-2'>
          {props.nilai.map((nilai, index)=>(
            <tr  key={index}>
              <td className='border-solid border-2'>{index+1}</td>
              <td className='border-solid border-2'>{nilai.tahun}</td>
              <td className='border-solid border-2'>
                <img src={nilai.image} alt={nilai.tahun} className="w-32 h-auto" />
              </td>
              <td>
                <div className='flex flex-row justify-center items-center '>
                  <button className='btn btn-square bg-red-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-5/12 max-w-5xl">
          <h3 className="font-bold text-lg">Tambah Nilai</h3>
          <form>
            <div className="label">
              <span className="label-text font-bold">Tahun Evaluasi</span>
            </div>
            <input type="text" placeholder="Type here" className="input input-md input-bordered w-full mb-3" />
            <div className="label">
              <span className="label-text font-bold">Gambar</span>
            </div>
            <FilePond
              className='mb-5'
              allowFileTypeValidation={true}
              acceptedFileTypes={['image/*']}
            ></FilePond>
            <div className="modal-action">
              <button formMethod='dialog' className="btn">Close</button>
            </div>
          </form>
          
        </div>
      </dialog>
      </div>
    </div>
  )
}

export default NilaiIndikator

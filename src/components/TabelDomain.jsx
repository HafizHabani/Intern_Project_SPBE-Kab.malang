import React from 'react'
import {urlAPI} from '../constants'
import axios from 'axios'


const TabelDomain = (prop) => {
  const [id, setId]=React.useState()
  const [data, setData]=React.useState({})
  const [Domain, setDomain]= React.useState(prop.domain)
  const map = data

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      domain : data.domain,
      aspek : data.aspek,
      indikator : data.indikator,
      penjelasan: data.penjelasan,
      link : data.link,
    };

    console.log(userData)

    axios
      .post(`${urlAPI}${prop.keterangan}/update/${id}`.toLocaleLowerCase(), userData)
      .then((response) => {
        console.log(response);
        getData()
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

  const getData = async() =>{
    const data = await axios.get(`${urlAPI}${prop.keterangan}/show`.toLocaleLowerCase())
    setDomain(data.data)
  }
  
  
  return (
    <div className='p-4'>
      <div className='flex flex-row justify-between items-center py-2'>
        <p className='font-bold text-2xl'>
          Tabel Domain {prop.keterangan}
        </p>
        <button className='btn btn-sm bg-primary hover:bg-red-700 text-white' onClick={()=>document.getElementById('my_modal_4').showModal()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Tambah Indikator
        </button>
        
      </div>
      <table className="table border-solid border-2">
        <thead className='text-lg text-primary border-solid border-2'>
          <tr>
            <th className='border-solid border-2'>No</th>
            <th className='border-solid border-2'>Aspek</th>
            <th className='border-solid border-2'>Indikator</th>
            <th className='border-solid border-2'>Penjelasan</th>
            <th className='border-solid border-2'>Action</th>
          </tr>
        </thead>
        <tbody className='border-solid border-2'>
          {Domain.map((domain, index)=>(
            <tr  key={index+1}>
              <td className='border-solid border-2'>{index+1}</td>
              <td className='border-solid border-2'>{domain.aspek}</td>
              <td className='border-solid border-2'>{domain.indikator}</td>
              <td className='border-solid border-2'>
                {domain.penjelasan}<br/> 
                <a href={domain.link} className='text-primary'>Selengkapnya</a>
                </td>
              <td>

                {/* ini button edit */}
                <div className='flex flex-row justify-center items-center '>
                  <button className='btn btn-square bg-emerald-400 hover:bg-emerald-600'onClick={()=>{document.getElementById('my_modal_3').showModal(); setId(domain.id); setData(domain)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                  </button>

                  {/* Ini button delete */}
                  <button className='btn btn-square bg-red-500 hover:bg-red-800' onClick={console.log(map)}> 
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
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute text-xl right-6 top-6">✕</button>
          </form>
          <h3 className="font-bold text-lg">Tambah Indikator</h3>
          <form action={`${urlAPI}${prop.keterangan}/create`.toLocaleLowerCase()} method='post'>
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="mb-4">
                <label htmlFor="domain" className="block text-gray-700 text-sm font-bold mb-2">Domain:</label>
                <input type="text" name='domain' value={ `${prop.keterangan} SPBE`} id="aspek" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" readOnly />
              </div>
              <div className="mb-4">
                <label htmlFor="aspek" className="block text-gray-700 text-sm font-bold mb-2">Aspek:</label>
                <input type="text" name='aspek'  id="aspek" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
              </div>
              <div className="mb-4">
                <label htmlFor="indikator" className="block text-gray-700 text-sm font-bold mb-2">Indikator:</label>
                <input type="text" name='indikator'  id="indikator"  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
              </div>
              <div className="mb-4">
                <label htmlFor="penjelasan" className="block text-gray-700 text-sm font-bold mb-2">Penjelasan:</label>
                <textarea id="penjelasan" name='penjelasan' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="link" className="block text-gray-700 text-sm font-bold mb-2">Link Document:</label>
                <input type="text" name='link' id="link"  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
              </div>
            </div>
            <div className=" px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="submit" formMethod='post' className="btn bg-primary text-base font-medium text-white hover:bg-red-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm">
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
          <button className="btn btn-sm btn-circle btn-ghost absolute text-xl right-6 top-6">✕</button>
        </form>
        <h3 className="font-bold text-lg">Edit Indikator</h3>
          <form onSubmit={handleSubmit}>
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="mb-4">
                <label htmlFor="domain" className="block text-gray-700 text-sm font-bold mb-2">Domain:</label>
                <input type="text" name='domain' id="domain" onSubmit={handleChange} onChange={handleChange} value={ `${prop.keterangan} SPBE`} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" readOnly />
              </div>
              <div className="mb-4">
                <label htmlFor="aspek" className="block text-gray-700 text-sm font-bold mb-2">Aspek:</label>
                <input type="text" name='aspek' id="aspek" onSubmit={handleChange} onChange={handleChange} defaultValue={map.aspek} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
              </div>
              <div className="mb-4">
                <label htmlFor="indikator" className="block text-gray-700 text-sm font-bold mb-2">Indikator:</label>
                <input type="text" name='indikator' id="indikator" onSubmit={handleChange} onChange={handleChange} defaultValue={map.indikator} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
              </div>
              <div className="mb-4">
                <label htmlFor="penjelasan" className="block text-gray-700 text-sm font-bold mb-2">Penjelasan:</label>
                <textarea id="penjelasan" name='penjelasan' onSubmit={handleChange} onChange={handleChange} defaultValue={map.penjelasan} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="indikator" className="block text-gray-700 text-sm font-bold mb-2">Link Document:</label>
                <input type="text" name='link' id="link" onSubmit={handleChange} onChange={handleChange} defaultValue={map.link} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="submit" formMethod='post' className="btn bg-primary text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
                Update
              </button>
            </div>
          </form>
          
        </div>
      </dialog>
    </div>
  )
}
export default TabelDomain

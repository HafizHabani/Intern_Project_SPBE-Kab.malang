import React from 'react'
import { SPBELogin, kantorlogin } from '../assets'

const Login = () => {
  return (
    <div className='flex flex-row justify-between items-center'>
      <div className={`hidden sm:flex`}>
        <img src={kantorlogin} className='size-auto'/>
      </div>
      <div className='flex flex-col content-center mr-10 py-16'>
        <img src={SPBELogin} className='max-w-3/6'/>
        <p className='text-3xl font-bold'>
            Selamat Datang di Panel SPBE
        </p>
        <p>
            Silahkan Masuk Menggunakan Akun Anda
        </p>
        <form>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-bold">Email</span>
          </label>
          <input type="email" placeholder="Masukan Email Anda" className="input input-md input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-bold">Password</span>
          </label>
          <input type="password" placeholder="Masukan Password Anda" className="input input-md input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn  btn-primary text-white font-bold text-lg">Login</button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Login

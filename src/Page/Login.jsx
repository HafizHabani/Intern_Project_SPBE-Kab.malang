import React from 'react'
import Admin from './Admin'
import PropTypes from 'prop-types'
import { SPBELogin, kantorlogin } from '../assets'
import { urlAPI } from '../constants'
import axios from 'axios'

const Login = ({setToken}) => {
  const [data, setData]=React.useState({})
  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };


  const handlerlogin= async ()=>{
    const userData = {
      email : data.email,
      password : data. password,
    };
    return await axios.post(`${urlAPI}/xwyz/login`, userData)
    .then((response) => {
      setToken(response);
      return <Admin/>
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
  }



  return (
    <div className='flex flex-row items-center'>
      <div className={`hidden sm:flex`}>
        <img src={kantorlogin} className='size-auto'/>
      </div>
      <div className='flex flex-col p-10 content-center mx-4 sm:mr-10 py-16'>
        <img src={SPBELogin} className='max-w-3/6'/>
        <p className='text-3xl font-bold'>
            Selamat Datang di Panel SPBE
        </p>
        <p>
            Silahkan Masuk Menggunakan Akun Anda
        </p>
        <form onSubmit={handlerlogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-bold">Email</span>
          </label>
          <input type="email" name='email' placeholder="Masukan Email Anda" onChange={handleChange} className="input input-md input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-bold">Password</span>
          </label>
          <input type="password" name='password' placeholder="Masukan Password Anda" onChange={handleChange} className="input input-md input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn  btn-primary text-white font-bold text-lg">Login</button>
        </div>
        </form>
      </div>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
} 

export default Login

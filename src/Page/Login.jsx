import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SPBELogin, kantorlogin } from '../assets';
import { urlAPI } from '../constants';
import axios from 'axios';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

const Login = () => {
  const [data, setData] = React.useState({});
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };

  const handlerlogin = (e) => {
    e.preventDefault();
    const userData = {
      email: data.email,
      password: data.password,
    };
    axios.post(`${urlAPI}xwyz/login`, userData)
      .then((response) => {
        setToken(response.token);
        navigate('/Admin');
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
    <div className='flex items-center h-screen'>
      <div className='flex-1 hidden sm:block'>
        <img src={kantorlogin} className='w-full h-full object-cover' alt='Kantor Login' />
      </div>
      <div className='flex-1 p-10'>
        <div className='max-w-md mx-auto'>
          <img src={SPBELogin} className='max-w-full mb-8' alt='SPBE Login' />
          <h2 className='text-3xl font-bold mb-4'>Selamat Datang di Panel SPBE</h2>
          <p className='mb-8'>Silahkan Masuk Menggunakan Akun Anda</p>
          <form onSubmit={handlerlogin}>
            <label className="label">
              <span className="label-text text-lg font-bold">Email</span>
            </label>
            <input
              type="email"
              name='email'
              placeholder="Masukan Email Anda"
              onChange={handleChange}
              className="input input-md input-bordered mb-4 w-full"
              required
            />
            <label className="label">
              <span className="label-text text-lg font-bold">Password</span>
            </label>
            <input
              type="password"
              name='password'
              placeholder="Masukan Password Anda"
              onChange={handleChange}
              className="input input-md input-bordered mb-8 w-full"
              required
            />
            <button
              type='submit'
              className="btn btn-primary text-white font-bold text-lg w-full"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

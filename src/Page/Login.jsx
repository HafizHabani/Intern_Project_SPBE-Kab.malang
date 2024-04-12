import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SPBELogin, kantorlogin } from '../assets';
import { urlAPI } from '../constants';
import axios from 'axios';

function setToken(userToken) {
  localStorage.setItem('token', userToken);
}

const Login = () => {
  const [data, setData] = React.useState({});
  const [error, setError] = React.useState(null);
  const [success, setSuccess] = React.useState(null);
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
    axios.post(`${urlAPI}login`, userData)
      .then((response) => {
        setToken(response.data.token); // Assuming token is received in response.data.token
        setSuccess("Login berhasil");
        setTimeout(() => {
          setSuccess(null);
          navigate('/Admin'); // Redirect to Admin page after successful login
        }, 1000);
      })
      .catch((error) => {
        // Handle error
        setError("Email atau password salah");
        setTimeout(() => {
          setError(null);
        }, 1000);
        console.log(error);
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
          {error && <p className="bg-red-200 text-red-700 p-3 rounded-md mb-4">{error}</p>}
          {success && <p className="bg-green-200 text-green-700 p-3 rounded-md mb-4">{success}</p>}
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

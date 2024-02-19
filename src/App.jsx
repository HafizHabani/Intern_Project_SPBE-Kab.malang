import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard, Layanan, Login, Admin } from './Page';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Layanan' element={<Layanan/>}/>
        <Route path='/Admin' element={<Admin/>} />
      </Routes>
    </Router>

  );
};

export default App;
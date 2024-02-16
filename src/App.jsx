import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard, Tentang, Layanan } from './Page';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/Layanan' element={<Layanan/>}/>
        <Route path='/Tentang' element={<Tentang/>}/>
      </Routes>
    </Router>

  );
};

export default App;
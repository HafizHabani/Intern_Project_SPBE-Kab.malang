import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard, Layanan, Login } from './Page';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Layanan' element={<Layanan/>}/>
      </Routes>
    </Router>

  );
};

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard, Tentang } from './Page';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/Tentang' element={<Tentang/>}/>
      </Routes>
    </Router>

  );
};

export default App;
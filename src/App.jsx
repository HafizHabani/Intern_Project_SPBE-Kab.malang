import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard, Login, Admin, HalamanBerita, ArtikelBerita } from './Page';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/Login' element={<Login/>}/>
       
        <Route path='/Admin' element={<Admin/>} />
        <Route path='/Berita' element={<HalamanBerita/>}/>
        <Route path='/Berita/:id' element={<ArtikelBerita/>}
          loader={({params})=> {return params.id}}
        />
      </Routes>
    </Router>

  );
};

export default App;
import './App.css';
import '../src/Assets/css/Nav.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import Nav from './Components/Nav';



function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}




        </Routes>
      </BrowserRouter>
      <Nav />
    </div>
  );
}

export default App;

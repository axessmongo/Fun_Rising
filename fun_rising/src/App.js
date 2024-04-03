import './App.css';
import '../src/Assets/css/Nav.css'
import '../src/Assets/css/steps.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import Nav from './Components/Nav';
import Steps from './Components/Steps';

import '../src/Assets/css/About.css'


function App() {
 
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}




        </Routes>
      </BrowserRouter>
      <Nav />
      
      <Steps/>
    </div>
  );
}

export default App;

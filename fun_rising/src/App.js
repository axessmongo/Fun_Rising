import './App.css';
import '../src/Assets/css/Nav.css'
import  '../src/Assets/css/contact.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import Nav from './Components/Nav';
import Contact from './Components/Contact';
import Contactus from './Components/Contactus';



function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
           <Route path='contact' element={<Contact />} /> 
           {/* <Route path='contact' element={<Contactus />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <Nav /> */}
    </div>
  );
}

export default App;

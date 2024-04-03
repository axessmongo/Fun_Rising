import './App.css';
import '../src/Assets/css/Nav.css'
import  '../src/Assets/css/contact.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import Nav from './Components/Nav';
import Contact from './Components/Contact';
import Contactus from './Components/Contactus';
import '../src/Assets/css/steps.css'
import '../src/Assets/css/About.css'


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
         {/* <Route path='/' element={<Contact/>}/> */}
        </Routes>
      </BrowserRouter>
    
      <Home />
      <Contact/>
      <Contactus/>
    </div>
  );
}

export default App;

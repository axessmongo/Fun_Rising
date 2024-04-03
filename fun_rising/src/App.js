import './App.css';
import '../src/Assets/css/Nav.css'
import '../src/Assets/css/steps.css'
import '../src/Assets/css/About.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
      <Home />
    </div>
  );
}

export default App;

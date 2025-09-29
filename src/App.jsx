import React from 'react'
import './index.css';

import Home from './pages/Home'
// import { Route, Router, Routes } from 'react-router';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './pages/About';





const App = () => {
  return (
    <>
   

    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>


    </>
  )
}

export default App
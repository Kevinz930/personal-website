import React, { useEffect } from "react";
import { BrowserRouter, NavLink } from 'react-router-dom'

import './App.css';
import BackgroundVideo from './components/Background/BackgroundVideo/BackgroundVideo.js'
import BackgroundFilter from './components/Background/BackgroundFilter/BackgroundFilter.js'

import Home from './pages/Home/Home.js'
import About from './pages/About/About.js'
import Portfolio from './pages/Portfolio/Portfolio.js'
import Contact from './pages/Contact/Contact.js'

import NavBar from './components/NavBar/NavBar.js'


function App() {
  // const pages= ["Home", "About", "Portfolio", "Contact"];
  // let currentPage = "";

  return (
    <div className='App'>

      <BrowserRouter>
        <main>

          <div className='left'>
            <Home />
            <About />
            <Portfolio />
            <Contact />
          </div>

          <NavBar />
        </main>
      </BrowserRouter>


      <div className='background'>
        <BackgroundFilter />
        <BackgroundVideo />
      </div>

    </div>
  );
}

export default App;
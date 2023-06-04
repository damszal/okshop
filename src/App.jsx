import React from 'react'
import {BrowserRouter, Routes, Route,Link} from 'react-router-dom';

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'
import SignIn from './pages/SignIn.jsx'
import Header from './components/Header.jsx';

import './App.css'
import './index.css'
import './css/mediaQuery/resolution.css'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import {BrowserRouter, Routes, Route,Link} from 'react-router-dom';

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'
import SignIn from './pages/SignIn.jsx'

import Logotype from './components/Logotype.jsx';
import SearchBar from './components/SearchBar.jsx';
import Basket from './components/Basket.jsx';
import './App.css'
import './index.css'

function App() {

  return (
    <BrowserRouter>
      <header>
        <Link to="/" ><Logotype /></Link>
        <SearchBar />
        <nav>
          <Link to="signin">Sign in</Link>
          <Link to="login">Login</Link>
          <Link to="about">About</Link>
        </nav>
        <Basket />
      </header>
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

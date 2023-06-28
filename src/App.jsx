import React from 'react'
import { Outlet } from "react-router-dom";

import Header from './components/Header.jsx';

import './App.scss'
import './css/components/header.scss'
import './css/components/search-bar.scss'
import './css/components/logotype.scss'
import './css/components/main-manu.scss'
import './css/pages/home.scss'
import './css/pages/about.scss'
import './css/mediaQuery/resolution.scss'
// import './index.scss'


function App() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App

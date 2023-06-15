import React from 'react'
import { Outlet } from "react-router-dom";

import Header from './components/Header.jsx';

import './App.scss'
import './index.scss'
import './css/mediaQuery/resolution.scss'


function App() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App

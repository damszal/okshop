import React from 'react'
import { Outlet } from "react-router-dom";

import Header from './components/Header.jsx';

import './App.css'
import './index.css'
import './css/mediaQuery/resolution.css'

function App() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App

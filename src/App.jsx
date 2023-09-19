import React from 'react'
import { Outlet } from "react-router-dom";

import Header from './components/Header.jsx';

import './All.scss'

function App() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App

import React from 'react'

import {Link} from 'react-router-dom';
import SearchBar from './SearchBar.jsx';
import Basket from './Basket.jsx';
import Logotype from './logotype.jsx';

import '../css/components/main-manu.scss'

function Header() {
  return (
  <>
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
  <manu>
    <nav className='main-nav'>
      <ul className='main-nav-list'>
        <li className='main-nav-item'>
          <h4>category 01</h4>
          <div className='main-nav-submenu'>
            <ul>
              <li>subcat</li>
              <li>subcat</li>
              <li>subcat</li>
              <li>subcat</li>
            </ul>
          </div>
        </li>
        <li className='main-nav-item'>
          <h4>category 02</h4>
          <div className='main-nav-submenu'>
            <ul>
              <li>subcat</li>
              <li>subcat</li>
              <li>subcat</li>           
            </ul>
          </div>
        </li>
        <li className='main-nav-item'>
          <h4>category 03</h4>
          <div className='main-nav-submenu'>
            <ul>
              <li>subcat</li>
              <li>subcat</li>
            </ul>
          </div>
        </li>
        <li className='main-nav-item'>
          <h4>category 04</h4>
          <div className='main-nav-submenu'>
            <ul>
              <li>subcat</li>
              <li>subcat</li>
              <li>subcat</li>
              <li>subcat</li>
            </ul>
          </div>
          </li>
        <li className='main-nav-item'>
          <h4>category 05</h4>
          <div className='main-nav-submenu'>
            <ul>
              <li>subcat</li>
              <li>subcat</li>
              <li>subcat</li>
              <li>subcat</li>
              <li>subcat</li>
              <li>subcat</li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  </manu> 
  </>
  )
}

export default Header
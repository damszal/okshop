import React, { useState } from 'react'

function MainNav() {
  const [fullPage, setFullPage] = useState(false)

  const  manuHandler = () =>{
    return setFullPage((fullPage)=>!fullPage )
  }
  return (
    <>
      <div className={fullPage?'manu-640-full':'manu-640-container'}  
      >
        <span 
        className='manu-640-btn'
        onClick={manuHandler}
        >
          PICK YOUR SHOES
        </span>
      </div>
      <nav className='main-nav'>
        <ul className='main-nav-list'>
          <li className='main-nav-item'>
            <h4>MEN</h4>
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
            <h4>WOMEN</h4>
            <div className='main-nav-submenu'>
              <ul>
                <li>subcat</li>
                <li>subcat</li>
                <li>subcat</li>           
              </ul>
            </div>
          </li>
          <li className='main-nav-item'>
            <h4>KIDS</h4>
            <div className='main-nav-submenu'>
              <ul>
                <li>subcat</li>
                <li>subcat</li>
              </ul>
            </div>
          </li>
          <li className='main-nav-item'>
            <h4>LIMITED EDITION</h4>
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
            <h4>OUTLET</h4>
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
   </>   
  )
}

export default MainNav
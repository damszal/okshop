import React from 'react'

import '../css/pages/home.css'

function Home() {
  return (
    <div className='home-container'>
      <div className='slider'>
        <img src="https://placehold.co/900x360" alt="" />
      </div>
      <div className='main-banner'>
      </div>
      {/* <div className='mini-banners'> */}
        <div className='mini-banner-01'>
          <img src="https://placehold.co/200x200" alt="" />
        </div>
        <div className='mini-banner-02'>
          <img src="https://placehold.co/200x200" alt="" />
        </div>
        <div className='mini-banner-03'>
          <img src="https://placehold.co/200x200" alt="" />
        </div>
        <div className='mini-banner-04'>
          <img src="https://placehold.co/200x200" alt="" />
        </div>
        <div className='mini-banner-05'>
          <img src="https://placehold.co/200x200" alt="" />
        </div>
        <div className='mini-banner-06'>
          <img src="https://placehold.co/200x200" alt="" />
        </div>
      {/* </div> */}
    </div>
  )
}

export default Home
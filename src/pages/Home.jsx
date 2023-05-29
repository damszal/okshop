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
      {/* <div className='container-03'> */}
        <div className="c-01-adv">
          <img src="https://placehold.co/400x200" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod facilis commodi suscipit officia maiores provident error molestias maxime tempora ratione!</p>
        </div>
        <div className="c-02-adv">
          <img src="https://placehold.co/400x200" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod facilis commodi suscipit officia maiores provident error molestias maxime tempora ratione!</p>
        </div>
        <div className="c-03-adv">
          <img src="https://placehold.co/400x200" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod facilis commodi suscipit officia maiores provident error molestias maxime tempora ratione!</p>
        </div>
      {/* </div> */}
      {/* <div> */}
        <div className="c-01-disc">
        </div>
        <div className="c-02-disc">
        </div>  
        <div className="c-03-disc">
        </div>           
      {/* </div> */}
      <div className="footer">
        <h3>foooooooooooooter</h3>
      </div>
    </div>
  )
}

export default Home
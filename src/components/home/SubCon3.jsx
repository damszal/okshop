import React from 'react'
import imgUrl from '../../assets/items/item3small.png'

import { Outlet,Link } from "react-router-dom";

function SubCon3() {
  return (
    <>
    <section className='home-sub-con-03'>
        <div className="c-01-adv home-sub-con-3-item">
          <h2>item name</h2>
          <img src={imgUrl} alt="" />
            <button className='show-item-btn'>
              <Link to="/cart/item">show item</Link>
            </button>     
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod facilis commodi suscipit officia maiores provident error molestias maxime tempora ratione!</p>
        </div>
        <div className="c-02-adv home-sub-con-3-item">
          <h2>item name</h2>
          <img src={imgUrl} alt="" />
          <button className='show-item-btn'>
              <Link to="/cart/item">show item</Link>
          </button> 
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod facilis commodi suscipit officia maiores provident error molestias maxime tempora ratione!</p>
        </div>
        <div className="c-03-adv home-sub-con-3-item">
          <h2>item name</h2>
          <img src={imgUrl} alt="" />
          <button className='show-item-btn'>
              <Link to="/cart/item">show item</Link>
          </button> 
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod facilis commodi suscipit officia maiores provident error molestias maxime tempora ratione!</p>
        </div>
        <div className="c-04-adv home-sub-con-3-item">
          <h2>item name</h2>
          <img src={imgUrl} alt="" />
          <button className='show-item-btn'>
              <Link to="/cart/item">show item</Link>
          </button> 
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod facilis commodi suscipit officia maiores provident error molestias maxime tempora ratione!</p>
        </div>
        <div className="c-05-adv home-sub-con-3-item">
          <h2>item name</h2>
          <img src={imgUrl} alt="" />
          <button className='show-item-btn'>
              <Link to="/cart/item">show item</Link>
          </button> 
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod facilis commodi suscipit officia maiores provident error molestias maxime tempora ratione!</p>
        </div>
        <div className="c-06-adv home-sub-con-3-item">
          <h2>item name</h2>
          <img src={imgUrl} alt="" />
          <button className='show-item-btn'>
              <Link to="/cart/item">show item</Link>
          </button> 
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod facilis commodi suscipit officia maiores provident error molestias maxime tempora ratione!</p>
        </div>
    </section>
    <Outlet/>
    </>
  )
}

export default SubCon3
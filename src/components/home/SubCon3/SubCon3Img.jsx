import React from 'react'

import imgUrl from '../../../assets/items/item3small.png'
import { Link } from "react-router-dom";

function SubCon3Img() {
  return (
    <>
    <h2>item name</h2>
    <img src={imgUrl} alt="" />
      <button className='show-item-btn'>
        <Link to="/cart/item">show item</Link>
      </button>     
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod facilis commodi suscipit officia maiores provident error molestias maxime tempora ratione!</p>  
    </>
  )
}

export default SubCon3Img
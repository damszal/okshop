import React from 'react'
import { Link } from 'react-router-dom'

function SideCard() {
  return (
    <>
      <div className="item-cart-container">
        <h2 className="item-card-title">item title</h2>
        <div className="item-cart-img-container">
          <img src="https://placehold.co/600x400" alt="" />
        </div>
        <div className="item-proper-container">
          <div className="item-cart-size">size</div>
          <div className="item-cart-color">color</div>
          <div className="item-cart-qt">quantity</div>
        </div>
        <div className="item-cart-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel voluptatibus repellat fugiat odio minus doloremque eos delectus assumenda perspiciatis maiores.
        </div>
        <div className="item-cart-price">price</div>
        <div className="item-cart-add-icon">add-icon</div>
      </div>
      <div className="item-background">
        <Link to="/" />
      </div>
    </>
      )
}

export default SideCard
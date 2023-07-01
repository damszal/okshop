import React from 'react'
import imgUrlA from '../../assets/items/item1-A.png'
import imgUrlB from '../../assets/items/item1-B.png'
import imgUrlC from '../../assets/items/item1-C.png'
import imgUrlD from '../../assets/items/item1-D.png'
import imgUrlE from '../../assets/items/item1-E.png'

import { Outlet,Link } from "react-router-dom";



function SubCon1({cat}) {
  return (
    <section className='home-sub-con-01'>
        <picture className='main-img main-img-01'>
          <Link to="/cart/item">
            <source media="(max-width: 475px)" srcSet={imgUrlD} />
            <source media="(max-width: 640px)" srcSet={imgUrlC} />
            <source media="(max-width: 768px)" srcSet={imgUrlC} />
            <source media="(max-width: 1024px)" srcSet={imgUrlB} />
            <img 
            src={imgUrlB} 
            />
          </Link>
        </picture>      
        <picture className='main-img main-img-02'>
          <Link to="/cart/item">
            <source media="(max-width: 475px)" srcSet={imgUrlD} />
            <source media="(max-width: 640px)" srcSet={imgUrlC} />
            <source media="(max-width: 768px)" srcSet={imgUrlC} />
            <source media="(max-width: 1024px)" srcSet={imgUrlB} />
            <img 
            src={imgUrlB} 
            />
          </Link>
        </picture>
        <picture className='main-img main-img-03'>
        <Link to="/cart/item">
            <source media="(max-width: 475px)" srcSet={imgUrlD} />
            <source media="(max-width: 640px)" srcSet={imgUrlC} />
            <source media="(max-width: 768px)" srcSet={imgUrlC} />
            <source media="(max-width: 1024px)" srcSet={imgUrlB} />
            <img 
            src={imgUrlB} 
            />
        </Link>
        </picture>
  </section>
  )
}

export default SubCon1
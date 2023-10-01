import React from 'react'
import { Link } from 'react-router-dom'

function ImageView({urlAll, className, alt}) {
  return (
      <Link to="/cart/item" className={className}>
        <picture >
          <source media="(min-width: 1024px)" srcSet={urlAll.urlB}/>
          <source media="(min-width: 768px)" srcSet={urlAll.urlC}/>
          <source media="(min-width: 640px)" srcSet={urlAll.urlD}/>
          <source media="(min-width: 475px)" srcSet={urlAll.urlE}/>
          <img 
          src={urlAll.urlA} 
          alt={alt}
          />
        </picture>  
      </Link> 
  )
}

export default ImageView
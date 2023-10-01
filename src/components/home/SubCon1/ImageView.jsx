import React from 'react'
import { Link } from 'react-router-dom'

function ImageView({urlAll, className, alt}) {
  return (
      <Link to="/cart/item" className={className}>
        <picture >
          <source media="(min-width: 1024px)" srcSet={urlAll.urlB} alt={alt}/>
          <source media="(min-width: 768px)" srcSet={urlAll.urlC} alt={alt}/>
          <source media="(min-width: 640px)" srcSet={urlAll.urlD} alt={alt}/>
          <source media="(min-width: 475px)" srcSet={urlAll.urlE} alt={alt}/>
          <img 
          src={urlAll.urlA} 
          />
        </picture>  
      </Link> 
  )
}

export default ImageView
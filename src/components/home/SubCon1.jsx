import React from 'react'
import imgUrlA from '../../assets/items/item1-A.png'
import imgUrlB from '../../assets/items/item1-B.png'
import imgUrlC from '../../assets/items/item1-C.png'
import imgUrlD from '../../assets/items/item1-D.png'
import imgUrlE from '../../assets/items/item1-E.png'





function SubCon1({cat}) {
  return (
    <section className='home-sub-con-01'>
        <picture className='main-img main-img-01'>
          <source media="(max-width: 475px)" srcset={imgUrlD} />
          <source media="(max-width: 640px)" srcset={imgUrlC} />
          <source media="(max-width: 768px)" srcset={imgUrlC} />
          <source media="(max-width: 1024px)" srcset={imgUrlB} />
          <img 
          src={imgUrlB} 
          />
        </picture>
        <picture className='main-img main-img-02'>
        <source media="(max-width: 475px)" srcset={imgUrlD} />
          <source media="(max-width: 640px)" srcset={imgUrlC} />
          <source media="(max-width: 768px)" srcset={imgUrlC} />
          <source media="(max-width: 1024px)" srcset={imgUrlB} />
          <img 
          src={imgUrlB} 
          />
        </picture>
        <picture className='main-img main-img-03'>
        <source media="(max-width: 475px)" srcset={imgUrlD} />
          <source media="(max-width: 640px)" srcset={imgUrlC} />
          <source media="(max-width: 768px)" srcset={imgUrlC} />
          <source media="(max-width: 1024px)" srcset={imgUrlB} />
          <img 
          src={imgUrlB} 
          />
        </picture>
  </section>
  )
}

export default SubCon1
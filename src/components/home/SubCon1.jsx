import React from 'react'
import ImageView from './SubCon1/ImageView'

import imgUrlA from '../../assets/items/item1-A.png'
import imgUrlB from '../../assets/items/item1-B.png'
import imgUrlC from '../../assets/items/item1-C.png'
import imgUrlD from '../../assets/items/item1-D.png'
import imgUrlE from '../../assets/items/item1-E.png'

const imgUrls = {
  urlA : imgUrlA,
  urlB : imgUrlB,
  urlC : imgUrlC,
  urlD : imgUrlD,
  urlE : imgUrlE,
}


function SubCon1() {
  return (
    <section className='home-sub-con-01'>    
      <ImageView urlAll = {imgUrls} className={'main-img main-img-01'}/>
      <ImageView urlAll = {imgUrls} className={'main-img main-img-02'}/>
      <ImageView urlAll = {imgUrls} className={'main-img main-img-03'}/>
  </section>
  )
}

export default SubCon1
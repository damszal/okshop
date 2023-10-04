import { useState, useEffect } from 'react';

import ImageView from './SubCon1/ImageView'
import CarouselMobile from '../CarouselMobile';

import imgUrlA from '../../assets/items/item1-A.png'
import imgUrlB from '../../assets/items/item1-B.png'
import imgUrlC from '../../assets/items/item1-C.png'

const imgUrls = {
  urlA : imgUrlA,
  urlB : imgUrlB,
  urlC : imgUrlC,
}


function SubCon1() {

  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
      });
    };
    
    window.addEventListener('resize', handleResize);
    console.log(screenSize)
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenSize]);
  
  return (
    <>
    {(screenSize.width<476)?(<CarouselMobile />):(
      <section className='home-sub-con-01'>    
        <ImageView urlAll = {imgUrls} className={'main-img main-img-01'} alt={'image description'}/>
        <ImageView urlAll = {imgUrls} className={'main-img main-img-02'} alt={'image description'}/>
        <ImageView urlAll = {imgUrls} className={'main-img main-img-03'} alt={'image description'}/>
      </section>
    )}

    </>
  )
}

export default SubCon1
import { register } from 'swiper/element/bundle';
import CarouselMobImg from './CarouselMobImg'
import { useEffect } from 'react';

function CarouselMobile() {
  useEffect(()=>register(),[]

  )
  return (
    <swiper-container  >
      <swiper-slide>
        <CarouselMobImg />
      </swiper-slide>
      <swiper-slide>
        <CarouselMobImg />
      </swiper-slide>
      <swiper-slide>
        <CarouselMobImg />
      </swiper-slide>
    </swiper-container>

  )
}

export default CarouselMobile
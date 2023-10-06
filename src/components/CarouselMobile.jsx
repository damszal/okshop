import { register } from 'swiper/element/bundle';
import CarouselMobImg from './CarouselMobImg'

function CarouselMobile() {

  // register();
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
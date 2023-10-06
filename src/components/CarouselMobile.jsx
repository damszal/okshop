import Carousel from 'react-material-ui-carousel'
import carouselImg from '../assets/items/item1-A.png'
import CarouselMobImg from './home/CarouselMobImg'

function CarouselMobile() {
    var items = [
        {
          imgURL: carouselImg
        },
        {
          imgURL: carouselImg
        },
        {
          imgURL: carouselImg
        }
    ]
  return (
    <Carousel 
    next={ (next, active) => {} }
    prev={ (prev, active) => {} }
    >
      {
          items.map( (item, i) => <CarouselMobImg key={i} itemImg={item.imgURL} /> )
      }
    </Carousel>
  )
}

export default CarouselMobile
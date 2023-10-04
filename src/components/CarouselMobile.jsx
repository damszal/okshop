import Carousel from 'react-material-ui-carousel'
import { Link } from 'react-router-dom'
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

function Slider({itemImg})
{
  const alt = "img description"
    return (
          <Link to="/cart/item" >
              <img 
              src={itemImg} 
              alt={alt}
              className={'main-img main-img-01'}
              />
          </Link> 
    )
}

export default CarouselMobile
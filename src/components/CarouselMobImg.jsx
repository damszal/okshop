import { Link } from 'react-router-dom'
import carouselImg from '../assets/items/item1-A.png'

function CarouselMobImg() {
    const alt = "img description"
    const itemImg = '../assets/item1-1.png'
  return (
    <Link to="/cart/item" >
    <img 
    src={carouselImg} 
    alt={alt}
    className={"test"}
    />
    </Link> 
  )
}

export default CarouselMobImg
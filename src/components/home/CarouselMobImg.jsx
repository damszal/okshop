import { Link } from 'react-router-dom'

function CarouselMobImg({itemImg}) {
    const alt = "img description"
  return (
    <Link to="/cart/item" >
    <img 
    src={itemImg} 
    alt={alt}
    className={"test"}
    />
    </Link> 
  )
}

export default CarouselMobImg
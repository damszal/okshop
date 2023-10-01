
import imgUrl from '../../../assets/items/item3small.png'
import { Link } from "react-router-dom";

function SubCon3Img() {
  return (
    <>
    <h2>item name</h2>
    <img src={imgUrl} alt="image description" />
      <Link to="/cart/item" className='show-item-btn'>
        show item
      </Link>    
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod facilis commodi suscipit officia maiores provident error molestias maxime tempora ratione!</p>  
    </>
  )
}

export default SubCon3Img
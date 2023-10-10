import { Link } from 'react-router-dom'
import { Autocomplete,TextField } from '@mui/material'
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import ImageView from '../home/SubCon1/ImageView';

import imgUrlA from '../../assets/items/item1-A.png'
import imgUrlB from '../../assets/items/item1-B.png'
import imgUrlC from '../../assets/items/item1-C.png'

const imgUrls = {
  urlA : imgUrlA,
  urlB : imgUrlB,
  urlC : imgUrlC,
}

function SideCard() {
  const sizeOptions = []
  const colorOptions = []
  const quantityOptions = []
  return (
    <>
      <div className="item-cart-container">
        <h2 className="item-card-title">item title</h2>
        <div className="item-cart-img-container">
          <ImageView urlAll = {imgUrls} className={''} alt={'image description'}/>
          {/* <img src="https://placehold.co/600x400" alt="" /> */}
        </div>
        <div className="item-proper-container">
          <Autocomplete
            disablePortal
            id="item-cart-size"
            options={sizeOptions}
            sx={{ width: 100 }}
            renderInput={(params) => <TextField {...params} label="Size" />}
          />
          <Autocomplete
            disablePortal
            id="item-cart-color"
            options={colorOptions}
            sx={{ width: 100 }}
            renderInput={(params) => <TextField {...params} label="Color" />}
          />
          <Autocomplete
            disablePortal
            id="item-cart-qt"
            options={quantityOptions}
            sx={{ width: 100 }}
            renderInput={(params) => <TextField {...params} label="Qt" />}
          />
        </div>
        <div className="item-cart-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel voluptatibus repellat fugiat odio minus doloremque eos delectus assumenda perspiciatis maiores.
        </div>
        <div className="item-cart-add-icon">
          <AddShoppingCartIcon />
        </div>
        <div className='item-cart-close'>
          <Link to='/'>
            <CloseTwoToneIcon />
          </Link>
        </div>
        <div className="item-cart-price">price</div>
      </div>
      <div className="item-background">
        <Link to="/" />
      </div>
    </>
      )
}

export default SideCard
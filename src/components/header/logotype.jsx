import {Link} from 'react-router-dom';

function Logotype() {
  return (
    <Link className='logotype l-cont'> {/* propably <A> tag shouldn't be a logotype */}
      <span className='logotype__item logotype__item1_uper_color-blue'>ok</span>
      <span className='logotype__item logotype__item_rot'>!</span>
      <span className='logotype__item logotype__item_color-orange'>shop</span>     
    </Link>

  )
}

export default Logotype
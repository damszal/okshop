import {Link} from 'react-router-dom';

function MainHeaderNav() {
  return (
    <nav className='main-header-nav' >
        <Link to="signin" className='main-header-nav__link'>Sign in</Link>
        <Link to="login" className='main-header-nav__link'>Login</Link>
        <Link to="about" className='main-header-nav__link' >About</Link>
  </nav>
  )
}

export default MainHeaderNav
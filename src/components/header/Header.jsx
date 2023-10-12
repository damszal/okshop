import {Link} from 'react-router-dom';
import SearchBar from '../SearchBar.jsx';
import Basket from '../Basket.jsx';
import Logotype from './logotype.jsx';
import MainNav from '../MainNav.jsx';


function Header() {
  return (
  <>
    <header className='main-header m-h-cont'>
      <Logotype />
      <SearchBar />
      <nav className='main-header-nav' >
        <Link to="signin" className='main-header-nav__link'>Sign in</Link>
        <Link to="login" className='main-header-nav__link'>Login</Link>
        <Link to="about" className='main-header-nav__link' >About</Link>
      </nav>
      <Basket />
    </header>
    <MainNav />
  </>
  )
}

export default Header
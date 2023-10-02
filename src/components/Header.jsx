import {Link} from 'react-router-dom';
import SearchBar from './SearchBar.jsx';
import Basket from './Basket.jsx';
import Logotype from './logotype.jsx';
import MainNav from './MainNav.jsx';


function Header() {
  return (
  <>
    <header>
      <Link to="/" ><Logotype /></Link>
      <SearchBar />
      <nav>
        <Link to="signin">Sign in</Link>
        <Link to="login">Login</Link>
        <Link to="about">About</Link>
      </nav>
      <Basket />
    </header>
    <MainNav />
  </>
  )
}

export default Header
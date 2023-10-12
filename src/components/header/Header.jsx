import SearchBar from './SearchBar.jsx';
import Basket from '../Basket.jsx';
import Logotype from './logotype.jsx';
import MainNav from '../MainNav.jsx';
import MainHeaderNav from './MainHeaderNav.jsx';


function Header() {
  return (
  <>
    <header className='main-header m-h-cont'>
      <Logotype />
      <SearchBar />
      <MainHeaderNav />
      <Basket />
    </header>
    <MainNav />
  </>
  )
}

export default Header
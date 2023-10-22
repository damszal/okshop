import SearchBar from './SearchBar.jsx';
import Basket from './Basket.jsx';
import Logotype from './logotype.jsx';
import MainNav from '../mainManu/MainNav.jsx';
import MainHeaderNav from './MainHeaderNav.jsx';

function Header() {
  if (process.env.EXAMPLE_VAR === 12345){
    console.log('everything works well!!')
  } else {
    console.log('error')
  }
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
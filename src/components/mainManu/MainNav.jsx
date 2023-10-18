import { useState} from 'react'
import { useLoaderData } from 'react-router-dom'
import AccorElem from './AccorElem'
import AccorElemOther from './AccorElemOther'
import useFetchUserData from '../../hooks/useFetchUserData'
import useGetKidsData from '../../hooks/useGetKidsData'
import MainNavItem from './MainNavItem'
import MainNavItemOther from './MainNavItemOther'


function MainNav() {

  const [fullPage, setFullPage] = useState(false)
  const  manuHandler = () =>{
    return setFullPage((fullPage)=>!fullPage )
  }
  const manManuList = useLoaderData() // useLoader hook 
  const data = useFetchUserData("https://damszal.github.io/data.geojson") // standard fetch data
  const kidsData = useGetKidsData("https://damszal.github.io/data.geojson") // Axios fetch data method 

return (
  <>
      <nav className={fullPage?'manu-640-full':'manu-640-container'}  
      >
        <span className='manu-640-btn' onClick={manuHandler}>
          PICK YOUR SHOES
        </span>
          <AccorElem subItems={manManuList} accorElemTitle={'MEN'}/>
          <AccorElem subItems={data} accorElemTitle={'WOMEN'}/>
          <AccorElem subItems={kidsData} accorElemTitle={'KIDS'}/>
          <AccorElemOther accorElemTitle={'LIMITED EDITION'}/>
          <AccorElemOther accorElemTitle={'OUTLET'}/>
        <div className='manu-758-close-btn' onClick={manuHandler} >close [X]</div>
      </nav>
      <nav className='main-nav'>
        <ul className='main-nav-list'>
          <MainNavItem title ={'MAN'} manuList={manManuList}/>
          <MainNavItem title ={'WOMEN'} manuList={data}/>
          <MainNavItem title ={'KIDS'} manuList={kidsData}/>
          <MainNavItemOther title={'LIMITED EDITION'} />
          <MainNavItemOther title={'OUTLET'} />
        </ul>
    </nav>
   </>   
  )
}

export default MainNav

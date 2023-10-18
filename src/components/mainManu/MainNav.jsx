import { useState,useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'
import AccorElem from '../home/SubCon1/AccorElem'
import AccorElemOther from '../home/SubCon1/AccorElemOther'
import useFetchUserData from '../../hooks/useFetchUserData'
import useGetKidsData from '../../hooks/useGetKidsData'

function MainNav() {
  const [fullPage, setFullPage] = useState(false)
  const  manuHandler = () =>{
    return setFullPage((fullPage)=>!fullPage )
  }
  const manManuList = useLoaderData() // useLoader hook 
  const data = useFetchUserData("https://damszal.github.io/data.geojson")
  const kidsData = useGetKidsData("https://damszal.github.io/data.geojson") // Axios fetch data method 

return (
  <>
      <nav className={fullPage?'manu-640-full':'manu-640-container'}  
      >
        <span 
        className='manu-640-btn'
        onClick={manuHandler}
        >
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
          <li className='main-nav-item'>
            <h4>MEN</h4>
            <div className='main-nav-submenu'>
            <ul>
              {manManuList.map(user => (
                <li key={user.id}>{user.title}</li>
                ))}
            </ul>
            </div>
          </li>
          <li className='main-nav-item'>
            <h4>WOMEN</h4>
            <div className='main-nav-submenu'>
              <ul>
                {data.map(user => (
                  <li key={user.id}>{user.title}</li>
                  ))}
              </ul>
            </div>
          </li>
          <li className='main-nav-item'>
            <h4>KIDS</h4>
            <div className='main-nav-submenu'>
            <ul>
              {kidsData.map(user => (
                <li key={user.id}>{user.title}</li>
                ))}
            </ul>
            </div>
          </li>
          <li className='main-nav-item'>
            <h4>LIMITED EDITION</h4>
            <div className='main-nav-submenu'>
              <ul>
                <li>item#1</li>
                <li>item#2</li>
                <li>item#3</li>
                <li>item#4</li>
              </ul>
            </div>
          </li>
          <li className='main-nav-item'>
            <h4>OUTLET</h4>
            <div className='main-nav-submenu'>
              <ul>
              <li>item#1</li>
                <li>item#2</li>
                <li>item#3</li>
                <li>item#4</li>
                <li>item#5</li>
                <li>item#6</li>
              </ul>
            </div>
          </li>
        </ul>
    </nav>
   </>   
  )
}

export default MainNav

// fetch function for useLoader ==============================
export const manManuLoader = async () =>{
  const res = await fetch("https://damszal.github.io/data.geojson")
  const manuJson = await res.json()
  const manManuShort = await manuJson.manuColumns[1].columnMen;

  return manManuShort
}
// ===========================================================
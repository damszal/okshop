import { useState,useEffect, Fragment } from 'react'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import AccorElem from './mainManu/AccorElem'
import AccorElemOther from './mainManu/AccorElemOther'



function MainNav() {
  const [fullPage, setFullPage] = useState(false)
  const  manuHandler = () =>{
    return setFullPage((fullPage)=>!fullPage )
  }

  // useLoader hook ======================
  const manManuList = useLoaderData()
  //=======================================
  
  // this is the part of getting API in standard fetch data way
  const [data,setData] = useState([])
  const fetchUserData = () => {
     fetch("https://damszal.github.io/data.geojson")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setData(data.manuColumns[0].columnWomen)
      })
    }
    
  useEffect(() => {
     fetchUserData()
  }, [])

// ===============================================================

// Axios fetch data method 

const [kidsData, setKidsData] = useState([]);

const getKidsData = ()=> {
  axios.get("https://damszal.github.io/data.geojson").
    then((res)=>{
      return res.data.manuColumns[2].columnKids
    }).then((data)=>{
      setKidsData(data)
    })
}

useEffect(() => {
  getKidsData()
}, [])
// ==================================================================
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
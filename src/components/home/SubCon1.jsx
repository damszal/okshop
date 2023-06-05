import React from 'react'
import imgUrl from '../../assets/items/item1small.png'

function SubCon1({cat}) {
  return (
    <section className='home-sub-con-01'>
        <div className='main-slider '>
          <img src={imgUrl} alt="" />
        </div>
        <div className='main-banner'>
          {cat.map((e,i)=>{
            return (
              <div className={e.name}>
                <h2>{e.name}</h2>
                <ul>
                  {e.subcat.map(e=>{
                    return (
                      <li>{e.name}</li>
                    )
                  })}
                </ul>
              </div>
            )
          })}

        </div>
        {/* <div className='main-banner'>
          <div className="category01">
            <h2>category</h2>
            <p>info#</p>
            
          </div>
          <div className="category02">
            <h2>category</h2>
            <p>info#</p>
          </div>
          <div className="category03">
            <h2>category</h2>
            <p>info#</p>
          </div>
        </div> */}
  </section>
  )
}

export default SubCon1
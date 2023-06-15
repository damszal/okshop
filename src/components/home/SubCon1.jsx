import React from 'react'
import imgUrlA from '../../assets/items/item1-A.png'
import imgUrlB from '../../assets/items/item1-B.png'
import imgUrlC from '../../assets/items/item1-C.png'
import imgUrlD from '../../assets/items/item1-D.png'
import imgUrlE from '../../assets/items/item1-E.png'

import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import '../../css/components/accordion.scss'


function SubCon1({cat}) {
  return (
    <section className='home-sub-con-01'>
        <picture className='main-slider '>
          <source media="(max-width: 475px)" srcset={imgUrlE} />
          <source media="(max-width: 640px)" srcset={imgUrlD} />
          <source media="(max-width: 768px)" srcset={imgUrlC} />
          <source media="(max-width: 1024px)" srcset={imgUrlB} />
          <img 
          src={imgUrlA} 
          />
        </picture>
        <Accordion className='accordion' transition transitionTimeout={250}>
            {cat.map(e=>{
              return (
                <AccordionItem header={e.name} className={e.name}>
                  <ul>
                    {e.subcat.map(se=>{
                      return (
                        <li>{se.name}</li>
                      )
                    })}
                  </ul>
                </AccordionItem>
              )
            })}
          </Accordion>

        {/* <div className='main-banner'>
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

        </div> */}
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
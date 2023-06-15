import React from 'react'

import '../css/pages/home.scss'

import SubCon1 from '../components/home/SubCon1'
import SubCon2 from '../components/home/SubCon2'
import SubCon3 from '../components/home/SubCon3'
import SubCon4 from '../components/home/SubCon4'
import Footer from '../components/home/Footer'

function Home({cat}) {
  return (
    <>
    <main className='home-container'>
      <SubCon1 cat = {cat}/>
      <SubCon2 />
      <SubCon3 />
      <SubCon4 />
    </main>
    <Footer />
    </>
  )
}

export default Home
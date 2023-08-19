import React from 'react'
import GeneralInfo from './footer/generalInfo';
import RnR from './footer/RnR';
import Payment from './footer/Payment';
import SocialIcons from './footer/SocialIcons';
import CompanyInfo from './footer/CompanyInfo';

function Footer() {
  return (
    <>
    <footer className='home-footer'>
      <GeneralInfo />
      <RnR />
      <Payment />
    </footer>  
    <div className='company-info-container'>
      <CompanyInfo/>
      <SocialIcons/>
    </div>   
    </>
  )
}

export default Footer
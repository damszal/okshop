import GeneralInfo from './footer/GeneralInfo';
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
    <aside className='company-info-container'>
      <CompanyInfo/>
    </aside>   
      <SocialIcons/>
    </>
  )
}

export default Footer
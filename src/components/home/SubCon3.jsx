import SubCon3Img from './SubCon3Img';
import { Outlet} from "react-router-dom";

function SubCon3() {
  return (
    <>
    <section className='home-sub-con-03'>
        <div className="c-01-adv home-sub-con-3-item">
          <SubCon3Img />  
        </div>
        <div className="c-02-adv home-sub-con-3-item">
          <SubCon3Img />  
        </div>
        <div className="c-03-adv home-sub-con-3-item">
        <SubCon3Img />  
        </div>
        <div className="c-04-adv home-sub-con-3-item">
          <SubCon3Img />  
        </div>
        <div className="c-05-adv home-sub-con-3-item">
        <SubCon3Img />  
        </div>
        <div className="c-06-adv home-sub-con-3-item">
          <SubCon3Img />  
        </div>
    </section>
    <Outlet/>
    </>
  )
}

export default SubCon3
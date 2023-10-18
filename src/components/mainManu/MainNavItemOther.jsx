
function MainNavItemOther({title}) {
  return (
    <li className='main-nav-item'>
            <h4>{title}</h4>
            <div className='main-nav-submenu'>
              <ul>
                <li>item#1</li>
                <li>item#2</li>
                <li>item#3</li>
                <li>item#4</li>
              </ul>
            </div>
          </li>
  )
}

export default MainNavItemOther
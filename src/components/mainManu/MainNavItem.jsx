
function MainNavItem({title,manuList}) {
  return (
    <li className='main-nav-item'>
        <h4>{title}</h4>
        <div className='main-nav-submenu'>
        <ul>
          {manuList.map(user => (
            <li key={user.id}>{user.title}</li>
            ))}
        </ul>
        </div>
    </li>
  )
}

export default MainNavItem
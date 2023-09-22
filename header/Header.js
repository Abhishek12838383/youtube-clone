import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <div className="menu">
      <span class="material-symbols-outlined">
menu
</span>
<img src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg" alt="" />
      </div>
      <div className="search">
        <input placeholder='Search' type="text" />
        <span className='search-icon' class="material-symbols-outlined">
search
</span>

      </div>
      <div className="profile">
      <span class="material-symbols-outlined">
videocam
</span>
<span class="material-symbols-outlined">
apps
</span>
<span class="material-symbols-outlined">
account_circle
</span>
      </div>
    </div>
  )
}

export default Header

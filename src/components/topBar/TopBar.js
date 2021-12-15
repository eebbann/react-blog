import React from 'react' 
import './topBar.css'


function TopBar() {
	return (
		<div className='topBar-header'>
    <div className='topBar-logo'>Be-blog</div>
    <div className='topBar-menu'>
			<nav className='topBar-menu-item'>
				<ul className='topList'>
				<li className='topListItem'>Home</li>
				<li className='topListItem'>About</li>
				<li className='topListItem'>Create</li>
				<li className='topListItem'>Contact</li>
				<li className='topListItem'>Logout</li>
				</ul>
		</nav>
		</div>
    <div className='topBar-avatar'>
      <i className="fas fa-user-circle"></i>
			<i className='fas fa-search'></i>
		</div>
		</div>
	)
}

export default TopBar

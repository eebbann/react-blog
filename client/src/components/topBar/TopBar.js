import React from 'react' 
import { Link } from 'react-router-dom';
import './topBar.css'


function TopBar() {
	return (
		<div className='topBar-header'>
    <div className='topBar-logo'>Be-blog</div>
    <div className='topBar-menu'>
			<nav className='topBar-menu-item'>
				<ul className='topList'>
				<li className='topListItem'> <Link className='link' to="/">Home</Link> </li>
				<li className='topListItem'><Link className='link' to="/about">About</Link></li>
				<li className='topListItem'><Link className='link' to="/create">Create</Link></li>
				<li className='topListItem'><Link className='link' to="/">Contact </Link></li>
				<li className='topListItem'><Link className='link' to="/">Logout</Link></li>
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

import React from 'react'
import './header.css'

function Header() {
	return (
		<div className='header'>
			<div className='header-titles'>
				<span className='header-titleSm'>Blog Content</span>
				<span className='header-titleLg'>Web-3</span>
			</div>
			<img className='header-image' src='https://web3.foundation/assets/images/web3_foundation_1920w.png' alt='logo'/>

		</div>
	)
}

export default Header

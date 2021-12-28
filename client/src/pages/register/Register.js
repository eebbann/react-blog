import React from 'react'
import './register.css'

function Register() {
	return (
		<div className="register">
			<form className='registerForm'>
			<label>User Name</label>
				<input    type='text' placeholder='Enter your UserName'/>

				<label>Email</label>
				<input   id='name' type='email' placeholder='Enter your Email'/>

				<label>Password</label>
				<input type='password' placeholder='enter password' />
				<button className='registerFormButton'>Register</button>
				<span>Have an account ? <button className='reg'>Login</button></span>
			</form>
		</div>
	)
}

export default Register



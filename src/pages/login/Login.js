import React from 'react'
import './login.css'

function Login() {
	return (
		<div className="login">
			<form className='loginForm'>
				<label>Email</label>
				<input   id='name' type='email' placeholder='Enter your Email'/>

				<label>Password</label>
				<input type='password' placeholder='enter password' />
				<button className='loginFormButton'>Login</button>
				<span>Dont have an account ? <button className='reg'>Register</button></span>
			</form>
		</div>
	)
}

export default Login



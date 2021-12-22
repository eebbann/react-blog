import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar';

function Settings() {
	return (
		<div className='settings'>
      <div className ='settingsWrapper'> 
			<div className='settingsTitle'>
				<span className='settingUpdateTitle'>Update Your Account </span>
				<span className='settingUpdateTitle'>Delete Account </span>
       </div>
			 <form className='settingsForm'>
				 <label >Profile Picture</label>
				 <div className='settingsProfilePic'>
					 <img src='https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='profile'/>
					 <label htmlFor='file-upload' className='settingsUpload'> 
					 <i class="settingsIcon bi bi-person-circle"></i></label>
					 <input id='file-upload' type='file' style ={{display:'none'}}/>
					 </div>

					 <label>Username</label>
					 <input type='text' placeholder='Username'/>
					 <label>Email</label>
					 <input type='text' placeholder='Email'/>
					 <label>Password</label>
					 <input type='password' placeholder='Password'/>
					 <button className='settingsButton'>Button</button>

			 </form>
			</div>
			<Sidebar/>
		</div>
	)
}

export default Settings;

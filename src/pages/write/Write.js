import React from 'react'
import './write.css'
function Write() {
	return (
		<div className='write'>
			<img className='writeImg' src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="postImage"/>
		<form className='writeForm'>
				<div className='writeFormGroup'>
						<label htmlFor='fileInput'>
							<i className="writeIcon bi bi-plus-circle"> 	</i>
						</label>
					<input type='file'  id="fileInput" style={{display:"none"}}/>
					<input type='text'   placeholder='Title' className="writeInput" autoFocus="true"   />
				</div>
				<div className='writeFormGroup'>
					<textarea className="writeTextarea" type="text" placeholder='Write Your Story'></textarea>
				</div>
				 <button className='writeButton'> Submit</button>
		</form>
		</div>
	)
}

export default Write

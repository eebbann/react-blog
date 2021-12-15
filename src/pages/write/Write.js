import React from 'react'

function Write() {
	return (
		<div className='write'>
			<form className='writeForm'>
			<div className='writeFormGroup'>
				<label htmlFor='title'>Title</label>
			 <input type='file'    id="fileInput"/>
			 <input type='text'   placeholder='text'/>

		</div>
		</form>
		</div>
	)
}

export default Write

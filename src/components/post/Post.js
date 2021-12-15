import React from 'react'
import './post.css'

function Post() {
	return (
		<div className='post'> 
			<img className='postImg' src='https://blerds.atlantablackstar.com/wp-content/uploads/2014/08/blerd-14.jpg' alt='post'></img>
			<div className='postInfo'> 
					<div className='categories'>
						<span className='postCat'>WebDev</span>
						<span className='postCat'>Web-3</span> 
					</div>
			    <span className='postTitle'>The Phase of Web-3</span>
             <span className='postDate'>2020-05-05</span> 
			</div>
			<p className='desc'>Lorem this is the section for text description  nothing elsebut description of the message thanks for understanding</p>
		</div>
	)
}

export default Post

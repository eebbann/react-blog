import React from 'react'
import './singlePost.css'

function SinglePost() {
	return (
		<div className='singlePost'>
			<div className='singlePostWrapper'>
				<div className='imgContainer'>
				<img className='singlePostImg' src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' alt='post'/>
				</div>
				<h1 className='singlePostTitle'>
					The Phase of Web-3
				<div className='singlePostEdit'>
				<i class="singleIcon bi bi-pencil-square"></i>
				<i class="singleIcon bi bi-trash"></i>
				</div>
				</h1>
				<div className='singlePostInfo'>
					<span className='singlePostAuthor'>Author: <b>eebann</b> </span>
					<span className='singlePostDate'>1-1-2019</span>
					</div>
					<p className='singlePostContent'>Lorem this is a single page to write your content from the web s
					Lorem this is a single page to write your content from the web s
					Lorem this is a single page to write your content from the web s
					Lorem this is a single page to write your content from the web s
					Lorem this is a single page to write your content from the web s
					</p>
					<p className='singlePostContent'> Lorem this is a single page to write your content from the web s
					Lorem this is a single page to write your content from the web s
					Lorem this is a single page to write your content from the web s
					Lorem this is a single page to write your content from the web s
					Lorem this is a single page to write your content from the web s
					</p>
					<p>Lorem this is a single page to write your content from the web s
					Lorem this is a single page to write your content from the web s
					Lorem this is a single page to write your content from the web s
					Lorem this is a single page to write your content from the web s
					Lorem this is a single page to write your content from the web s
					</p>
		</div>
		</div>
	)
}

export default SinglePost

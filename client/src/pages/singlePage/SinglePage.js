import React from 'react'
import './singlePage.css'
import Sidebar from '../../components/sidebar/Sidebar';
import SinglePost from '../../components/singlePost/SinglePost';

function SinglePage() {
	return (
		<div className='singlePage'>
			<SinglePost/>
			<Sidebar />
		</div>
	)
}

export default SinglePage;

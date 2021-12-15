import React from "react";
import "./sidebar.css";
function Sidebar() {
	return (
		<>
			<div className="sidebar">
				<img className="sideImage"
					src="https://blerds.atlantablackstar.com/wp-content/uploads/2014/08/blerd-14.jpg"
					alt="woman"
				></img>
				<div className="sidebarItem">
					<div className="sidebarTitle">CATEGORIES</div>
					<ul className="sidebarList">
						<li className="sidebarListItem "> <i class="fa-brands fa-hive"></i>WebDev</li>
						<li className="sidebarListItem"> Crypto</li>
						<li className="sidebarListItem"> DevOps</li>
						<li className="sidebarListItem"> Web-3</li>
						<li className="sidebarListItem"> Machine Learning</li>
						<li className="sidebarListItem"> FinTech </li>
					</ul>
				</div>
			 
				 <div className="sidebarSocial"> 
							<ul className="sidebarSocialLink">
								<li className="sidebarIcon fab fa-facebook"> </li>
								<li className="sidebarIcon fab fa-twitter"> </li>
								<li className="sidebarIcon fab fa-instagram"> </li>
								<li className="sidebarIcon fab fa-youtube"> </li>
							</ul>
					</div>
			</div>
		</>
	);
}

export default Sidebar;

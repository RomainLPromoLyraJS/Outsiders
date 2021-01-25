import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineLogout } from 'react-icons/ai';
import { SidebarData } from './SidebarData';


const Nav = ({
	isLogged,
	handleLogout,
	username
}) => {
const [sidebar, setSidebar] = useState(false)
const showSidebar = () => setSidebar(!sidebar)



return (
<>
	<div onClick={showSidebar} className="header__container__burger">
		<span />
		<span />
		<span />
	</div>
		<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
			<ul className='nav-menu-items' >
			{/* if isLogged is 'true' return username and logout button
			onClick => Redirect to / */}
				{isLogged && (
					<li className='navbar-toggle'>
					<div>Bonjour {username}</div>
						<NavLink to='/' className='menu-bars'>
							<AiOutlineLogout onClick={handleLogout} to='/' />
						</NavLink>
					</li>
				)}
				{/* TODO: IF USING IMPORT DATA = Conditions !ifLogged render SignUp & Login in NAV // ifLogged SignUp & Login doesn't appear */}
				{SidebarData.map((item, index) => {
					return(
						<li key={index} className={item.className}>
							<NavLink exact to={item.path}>
								{item.icon}
								<span onClick={showSidebar}>{item.title}</span>
							</NavLink>
						</li>  
						)
				})}
			</ul>
	</nav>
</>
);
}

export default Nav;
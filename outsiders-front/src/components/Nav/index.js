import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillCloseCircle } from 'react-icons/ai';
import { SidebarData } from './SidebarData';


function Nav() {
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
            <li className='navbar-toggle'>
                <NavLink to='#' className='menu-bars'>
                    <AiFillCloseCircle onClick={showSidebar} />
                </NavLink>
            </li>
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
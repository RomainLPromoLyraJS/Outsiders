// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Nav = () => {
//     return (
//         <nav className='nav'>
//             <ul>
//                 <li>
//                     <NavLink
//                     exact
//                     to='/'
//                     >
//                         Accueil
//                     </NavLink>
//                 </li>
//                 <li>
//                     <NavLink
//                     exact
//                     to='/sports'
//                     >
//                         Sports
//                     </NavLink>
//                 </li>
//                 <li>
//                     <NavLink
//                     exact
//                     to='/trips'
//                     >
//                         Trips
//                     </NavLink>
//                 </li>
//             </ul>
//         </nav>
//     );
// }

// export default Nav;

import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai';
import { SidebarData } from './SidebarData';


function Nav() {
const [sidebar, setSidebar] = useState(false)

const showSidebar = () => setSidebar(!sidebar)


return (
    <>
    <div className='navbar'>
        <Link to='#' className='menu-bars'>
        <FaBars onClick={showSidebar}/>
        </Link>
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' >
            <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                < AiFillCloseCircle onClick={showSidebar} />
                </Link>
            </li>
            {SidebarData.map((item, index) => {
                return(
                    <li key={index} className={item.className}>
                        <Link to={item.path}>
                            {item.icon}
                            <span onClick={showSidebar}>{item.title}</span>
                        </Link>
                    </li>
                )
            })}
        </ul>
    </nav>
    </>
);
}

export default Nav;
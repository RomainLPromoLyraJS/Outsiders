import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink
                    exact
                    to='/'
                    >
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    exact
                    to='/sports'
                    >
                        Sports
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    exact
                    to='/trips'
                    >
                        Trips
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
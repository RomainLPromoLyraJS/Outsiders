import React from 'react';

//Import styles

import './header.scss';


const Header = () => {
    return (
        <div className='header'> 
            <img src="header_logo" alt="Outsiders" />
            <button className='header_login' type="submit">Connexion</button>
            <nav className='header_menu'>menu</nav>
        </div>
    )
};


export default Header;
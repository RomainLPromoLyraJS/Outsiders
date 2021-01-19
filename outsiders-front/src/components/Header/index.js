import React from 'react';

//Import styles

// import './header.scss';

import Nav from '../Nav';


const Header = () => {
    return (
        <div className='header'> 
            <img src="header_logo" alt="Outsiders" />
            <button className='header_login' type="submit">Connexion</button>
            <Nav />
        </div>
    )
};


export default Header;
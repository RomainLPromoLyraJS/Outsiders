// == Package imports
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Local imports
// images
import outsidersLogo from '../../assets/logos/Outsiders_LOGOS-line_COLOR.svg'
//components
import Hamburger from './Hamburger';


const Header = () => {
	return (
		<header className="header">
			<div className="header__container">
				<div className="header__container__image">
					<NavLink to="/">
						<img src={outsidersLogo} alt="Ousiders logo" />
					</NavLink>
				</div>
				<div className="header__container__burger">
					<span />
					<span />
					<span />
				</div>
			</div>
			<Hamburger />
		</header>
	)
};


export default Header;
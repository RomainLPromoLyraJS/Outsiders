// == Package imports
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Local imports
// images
import outsidersLogo from '../../assets/logos/Outsiders_LOGOS-line_COLOR.svg'
//components
import Nav from '../Nav';

const Header = () => {
	return (
		<header className="header">
			<div className="header__container">
				<div className="header__container__image">
					<NavLink to="/">
						<img src={outsidersLogo} alt="Ousiders logo" />
					</NavLink>
				</div>
				<Nav />
			</div>
		</header>
	)
};


export default Header;
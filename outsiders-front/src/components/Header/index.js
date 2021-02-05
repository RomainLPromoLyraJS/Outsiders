// == Package imports
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link, NavLink } from 'react-router-dom';

// == Local imports
// images
import outsidersLogo from '../../assets/logos/Outsiders_LOGOS-line_COLOR.svg'
//components
import Hamburger from './Hamburger';


const Header = ({ categories, isLogged, handleLogout, history, loadTripsData, username }) => {
	// Hamburger state
	const [ burgerState, setBurgerState ] = useState({
		init: false,
		clicked: null,
	});

	// track page changes
	useEffect(() => {
		history.listen(() => {
			setBurgerState({
				clicked: false,
			});
		})
	});

	// Open or close the menu
	const toggleMenu = () => {
		if (burgerState.init === false) {
			setBurgerState({
				init: null,
				clicked: true,
			});
		} else if (!!burgerState.clicked) {
			setBurgerState({
				clicked: !burgerState.clicked
			});
		} else if (!burgerState.clicked) {
			setBurgerState({
				clicked: !burgerState.clicked
			});
		}
	};

	return (
		<header className="header">
			<div className="header__container">
				<div className="header__container__image">
					<NavLink to="/">
						<img src={outsidersLogo} alt="Ousiders logo" />
					</NavLink>
				</div>
				<div className="header__container__right">
					{isLogged && (
						<div className="header__container__right__userName">
							<Link to="/mon-compte"><h2>{username}</h2></Link>
						</div>
					)}
					<div onClick={toggleMenu} className="header__container__right__burger">
						<span />
						<span />
						<span />
					</div>
				</div>
			</div>
			<Hamburger
				burgerState={burgerState}
				toggleMenu={toggleMenu}
				isLogged={isLogged}
				handleLogout={handleLogout}
				loadTripsData={loadTripsData}
				categories={categories}
			/>
		</header>
	)
};

Header.propTypes = {
	isLogged: PropTypes.bool.isRequired,
	handleLogout: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired,
}

export default withRouter(Header);
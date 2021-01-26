// == Package imports
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter, NavLink } from 'react-router-dom';

// == Local imports
// images
import outsidersLogo from '../../assets/logos/Outsiders_LOGOS-line_COLOR.svg'
//components
import Hamburger from './Hamburger';


const Header = ({ categories, isLogged, handleLogout, history, loadTripsData }) => {
	// Hamburger state
	const [ burgerState, setBurgerState ] = useState({
		init: false,
		clicked: null,
	});

	// state representing if menu is disabled or not
	const [ disabled, setDisabled ] = useState(false);

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
		disableMenu();

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

	// Prevent menu spam
	const disableMenu = () => {
		setDisabled(!disabled);
		setTimeout(() => {
			setDisabled(false)
		}, 1200);
	};


	return (
		<header className="header">
			<div className="header__container">
				<div className="header__container__image">
					<NavLink to="/">
						<img src={outsidersLogo} alt="Ousiders logo" />
					</NavLink>
				</div>
				<div disabled={disabled} onClick={toggleMenu} className="header__container__burger">
					<span />
					<span />
					<span />
				</div>
			</div>
			<Hamburger
				burgerState={burgerState}
				toggleMenu={toggleMenu}
				disabledState={disabled}
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
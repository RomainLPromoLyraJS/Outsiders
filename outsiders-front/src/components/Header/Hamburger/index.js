// == Package imports
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { IoSearch, IoAddCircleOutline } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";

// == Local imports
// images
import outsidersLogo from '../../../assets/logos/Outsiders_LOGOS-line_WHITE.svg'
// animation
import { openingMenu, closingMenu } from './burgerAnimations';

const Hamburger = ({ burgerState, toggleMenu, disabledState, isLogged, handleLogout }) => {
  // animated dom nodes
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBG = useRef(null);
  
  // toggle open and close
  useEffect(() => {
    if (burgerState.clicked === false) {
      // close the menu
      closingMenu(revealMenu, revealMenuBG, menu);
      
    } else if (burgerState.clicked === true || (burgerState.clicked === true && burgerState.init === null)) {
      // open the menu
      openingMenu(revealMenuBG, revealMenu, menu);
    }
  }, [burgerState]);

  // when logout btn is clicked
  const logOutOnClick = () => {
    handleLogout();
  }

  return (
    <div ref={el => (menu = el)} className="hamburger">
      <div ref={el => (revealMenuBG = el)} className="hamburger__bg" />
      <div ref={el => (revealMenu = el)} className="menu">
        <div className="menu__category__BG"></div>
        <div className="menu__container">
          <div className="menu__container__header">
            <div className="menu__container__header__logo">
              <NavLink to="/">
                <img src={outsidersLogo} alt="Ousiders logo" />
              </NavLink>
            </div>
            <div onClick={toggleMenu} disabled={disabledState} className="menu__container__header__close">
              <IoIosCloseCircle />
            </div>
          </div>
          <nav className="menu__container__nav">
            <div className="menu__container__nav__main">

              {/* Case : user logged */}
              {isLogged && <ul className="menu__container__nav__main__user">
                <li>
                  <NavLink to="/mon-compte">Mon compte</NavLink>
                </li>
                <li>
                  <NavLink to="/"><IoSearch /> Rechercher</NavLink>
                </li>
                <li>
                  <NavLink to="/"><IoAddCircleOutline /> Créer une sortie</NavLink>
                </li>
                <li>
                  <NavLink onClick={logOutOnClick} to="/">Déconnexion</NavLink>
                </li>
              </ul>}

              {/* Case : user not logged */}
              {!isLogged && <ul className="menu__container__nav__main__user">
                <li>
                  <NavLink to="/login">Connexion</NavLink>
                </li>
                <li>
                  <NavLink to="/signup">Inscription</NavLink>
                </li>
                <li>
                  <NavLink to="/"><IoSearch /> Rechercher</NavLink>
                </li>
              </ul>}
              <ul className="menu__container__nav__main__routes">
                <li>
                  <NavLink to="/">Accueil</NavLink>
                </li>
                <li>
                  <NavLink to="/sports">Sports</NavLink>
                </li>
                <li>
                  <NavLink to="/sorties">Sorties</NavLink>
                </li>
                <li>
                  <NavLink to="/about">À propos</NavLink>
                </li>
              </ul>
            </div>
            <ul className="menu__container__nav__categories">
              <li>
                <NavLink to="/">Air</NavLink>
              </li>
              <li>
                <NavLink to="/">Eau</NavLink>
              </li>
              <li>
                <NavLink to="/">Neige</NavLink>
              </li>
              <li>
                <NavLink to="/">Terre</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

Hamburger.propTypes = {
  burgerState: PropTypes.object.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  disabledState: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
}

export default Hamburger;
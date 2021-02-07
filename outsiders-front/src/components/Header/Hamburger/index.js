// == Package imports
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoSearch, IoAddCircleOutline } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";

// == Local imports
// images
import outsidersLogo from '../../../assets/logos/Outsiders_LOGOS-line_WHITE.svg'
// animation
import { openingMenu, closingMenu } from './burgerAnimations';
// utils
import { buildCatURL } from '../../../utils';

const Hamburger = ({ categories, loadTripsData, burgerState, toggleMenu, isLogged, handleLogout }) => {
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
              <Link to="/">
                <img src={outsidersLogo} alt="Ousiders logo" />
              </Link>
            </div>
            <div onClick={toggleMenu} className="menu__container__header__close">
              <IoIosCloseCircle />
            </div>
          </div>
          <nav className="menu__container__nav">
            <div className="menu__container__nav__main">

              {/* Case : user logged */}
              {isLogged && <ul className="menu__container__nav__main__user">
                <li>
                  <Link to="/mon-compte">Mon compte</Link>
                </li>
                <li>
                  <Link to="/"><IoSearch /> Rechercher</Link>
                </li>
                <li>
                  <Link to="/nouvelle-sortie"><IoAddCircleOutline /> Créer une sortie</Link>
                </li>
                <li>
                  <Link onClick={logOutOnClick} to="/">Déconnexion</Link>
                </li>
              </ul>}

              {/* Case : user not logged */}
              {!isLogged && <ul className="menu__container__nav__main__user">
                <li>
                  <Link to="/login">Connexion</Link>
                </li>
                <li>
                  <Link to="/signup">Inscription</Link>
                </li>
                <li>
                  <Link to="/"><IoSearch /> Rechercher</Link>
                </li>
              </ul>}
              <ul className="menu__container__nav__main__routes">
                <li>
                  <Link to="/">Accueil</Link>
                </li>
                <li>
                  <Link to="/sports">Sports</Link>
                </li>
                <li>
                  <Link to="/sorties" onClick={loadTripsData}>Sorties</Link>
                </li>
                <li>
                  <Link to="/about">À propos</Link>
                </li>
              </ul>
            </div>
            <ul className="menu__container__nav__categories">
              {categories.map((category) => {
                return <li key={category.id}>
                  <Link key={category.id} to={buildCatURL(category.title)}>{category.title}</Link>
                </li>
              })}
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
  isLogged: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
}

export default Hamburger;
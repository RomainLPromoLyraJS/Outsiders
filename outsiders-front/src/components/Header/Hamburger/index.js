// == Package imports
import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoSearch, IoAddCircleOutline } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";

// == Local imports
// images
import outsidersLogo from '../../../assets/logos/Outsiders_LOGOS-line_WHITE.svg'
//components

const Hamburger = () => {
  return (
    <div className="hamburger">
      <div className="hamburger__bg" />
      <div className="menu">
        <div className="menu__category__BG"></div>
        <div className="menu__container">
          <div className="menu__container__header">
            <div className="menu__container__header__logo">
              <NavLink to="/">
                <img src={outsidersLogo} alt="Ousiders logo" />
              </NavLink>
            </div>
            <div className="menu__container__header__close">
              <IoIosCloseCircle />
            </div>
          </div>
          <nav className="menu__container__nav">
            <div className="menu__container__nav__main">
              <ul className="menu__container__nav__main__user">
                <li>
                  <NavLink to="/">Mon compte</NavLink>
                </li>
                <li>
                  <NavLink to="/"><IoSearch /> Rechercher</NavLink>
                </li>
                <li>
                  <NavLink to="/"><IoAddCircleOutline /> Créer une sortie</NavLink>
                </li>
                <li>
                  <NavLink to="/">Déconnexion</NavLink>
                </li>
              </ul>
              <ul className="menu__container__nav__main__routes">
                <li>
                  <NavLink to="/">Accueil</NavLink>
                </li>
                <li>
                  <NavLink to="/">Sports</NavLink>
                </li>
                <li>
                  <NavLink to="/">Sorties</NavLink>
                </li>
                <li>
                  <NavLink to="/">À propos</NavLink>
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

export default Hamburger;
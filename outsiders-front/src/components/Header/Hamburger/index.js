// == Package imports
import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { IoSearch, IoAddCircleOutline } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import { gsap } from "gsap";

// == Local imports
// images
import outsidersLogo from '../../../assets/logos/Outsiders_LOGOS-line_WHITE.svg'
//components

const Hamburger = ({ burgerState, toggleMenu, disabledState }) => {
  // animated dom nodes
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBG = useRef(null);
  
  // toggle open and close
  useEffect(() => {
    if (burgerState.clicked === false) {
      // close the menu
      gsap.to([revealMenu, revealMenuBG], {
        duration: .8,
        height: 0,
        ease: 'power3.inOut',
        stagger: {
          amount: .07
        }
      });
      gsap.to(menu, {
        duration: 1,
        css: {display: "none"},
      });
      
    } else if (burgerState.clicked === true || (burgerState.clicked === true && burgerState.init === null)) {
      // open the menu
      gsap.to(menu, {
        duration: 0,
        css: {display: "block"},
      });
      gsap.to([revealMenuBG, revealMenu], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      staggerOpenning(revealMenuBG, revealMenu);
    }
  }, [burgerState]);

  const staggerOpenning = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: .8,
      height: 0,
      transformOrigin: "right top",
      skewY: 2,
      ease: "poxer3.inOut",
      stagger: {
        amount: 0.1,
      }
    });
  };

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
              <ul className="menu__container__nav__main__user">
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
                  <NavLink to="/">Déconnexion</NavLink>
                </li>
              </ul>
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

export default Hamburger;
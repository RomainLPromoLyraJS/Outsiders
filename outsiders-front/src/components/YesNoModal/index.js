import React from 'react';
import { NavLink } from 'react-router-dom';

const YesNoModal = ({ onClick, modalCSS, displayModal, setDisplayModal }) => (
  <div className={modalCSS}>
    <p>Sûr ?</p>
    <button onClick={onClick} className="delete-modal__btn yes"><NavLink to="/">Oui</NavLink></button>
    <button onClick={() => {setDisplayModal(!displayModal)}} className="delete-modal__btn no">Non</button>
  </div>
);

export default YesNoModal;
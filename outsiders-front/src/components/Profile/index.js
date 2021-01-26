// == Package Imports
import React from "react";
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Local imports
// utils
import { makeFullName } from '../../utils';
//images
import kelly from '../../assets/images/kelly.png';

const Profile = ({ user }) => {

  return (
    <div className="profil">
      <section className="profil__user">
        <div className="profil__user__main">
          <div className="profil__user__main__img">
            <img src={kelly} alt="User profil pic" />
          </div>
          <div className="profil__user__main__name">
            <h2>{makeFullName(user.firstname, user.lastname)}</h2>
            <p>{user.username}</p>
            <button>
              <NavLink to="/">Mes reviews</NavLink>
            </button>
          </div>
        </div>
        <div className="profil__user__description">
          <p>{user.description}</p>
        </div>
        <div className="profil__user__buttons">
          <NavLink to="/mon-compte/modifer" className="profil__user__buttons__btn">Modifier mon profil</NavLink>
          <button className="profil__user__buttons__btn delete">Supprimer mon profil</button>
        </div>
      </section>
      <section className="profil__trips">
        <div className="profil__trips__item">Je suis un trip</div>
        <div className="profil__trips__item">Je suis un trip</div>
        <div className="profil__trips__item">Je suis un trip</div>
      </section>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })
};

export default Profile;

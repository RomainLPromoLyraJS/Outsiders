// == Package Imports
import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Local imports
// utils
import { makeFullName } from '../../utils';
// components
import Trips from '../../containers/Trips';
import YesNoModal from '../YesNoModal';


const Profile = ({ user, getUserTrips, handleDeleteUser }) => {
  // toggle delete modal
  const [ displayModal, setDisplayModal ] = useState(false);
  const modalCSS = displayModal
    ? "delete-modal active"
    : "delete-modal inactive"

  // download user's trip everytime he comes to his profile page
  useEffect(() => {
    getUserTrips();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteUser = () => {
    handleDeleteUser();
  }

  return (
    <main className="profil">
      <section className="profil__user">
        <div className="profil__user__main">
          <div className="profil__user__main__name">
            <h1>{makeFullName(user.firstname, user.lastname)}</h1>
            <h2>{user.username}</h2>
          </div>
        </div>
        <div className="profil__user__description">
          <p>{user.description}</p>
        </div>
        <div className="profil__user__buttons">
          <NavLink to="/mon-compte/modifier" className="profil__user__buttons__btn">Modifier mon profil</NavLink>
          <button className="profil__user__buttons__btn delete" onClick={() => {setDisplayModal(!displayModal)}}>Supprimer mon profil</button>
        </div>
      </section>
      <section className="profil__trips">
        <h2 className="profil__trips__title">Mes sorties</h2>
        <Trips />
      </section>
      <YesNoModal onClick={deleteUser} modalCSS={modalCSS} displayModal={displayModal} setDisplayModal={setDisplayModal} />
    </main>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  getUserTrips: PropTypes.func.isRequired,
  handleDeleteUser: PropTypes.func.isRequired,
};

export default Profile;

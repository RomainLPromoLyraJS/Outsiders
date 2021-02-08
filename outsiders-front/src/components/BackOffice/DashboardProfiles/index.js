// == Package imports
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// == Local imports
import Modal from "../DashboardSports/Modal";

const DashboardProfiles = ({ loadUsersData, userList, handleDelete, handleChange }) => { 

  // sending the request to API
  const onSubmitDelete = (event) => {
    event.preventDefault();
    handleDelete();
  };

  // tracking field changes
  const onChange = (event) => {
    handleChange(event.target.value, event.target.name);
  };

  //my state for the modal window to delete a user
  const [deleteUserVisible, setDeleteUserVisible] = useState(false);

  // loading users data from api
  useEffect(() => {
    loadUsersData();
  // console.log('je suis dans le useEffect');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteUserVisible]);

  const toggleDelete = () => {
    setDeleteUserVisible(!deleteUserVisible);
  }

   return ( 
    <div className="dashboard-profiles">
      <form className="dashboard-profiles__form" onSubmit={onSubmitDelete}>
          <h3 className="dashboard-profiles__form__title">Supprimer un profil</h3>
          <label className="dashboard-profiles__form__label" htmlFor="delete-profile">
            Sélectionner le profil à supprimer dans la liste :
          </label>
          <select onChange={onChange} name="id" className="dashboard-profiles__form__select">
            <option value="">Profils</option>
            {userList.map((user) => {
              return (
                  <option key={user.id} value={user.id}>{user.username}</option>
                );
            })}
              </select>
          <button onClick={toggleDelete} type="submit" className="dashboard-profiles__form__button">
            Valider
          </button>
          {deleteUserVisible && (
            <Modal
            title="L'utilisateur"
              action="supprimé"
              visible={deleteUserVisible}
              hidden={toggleDelete}
            />
          )}
      </form>
    </div>
   )
};

DashboardProfiles.propTypes = {
  loadUsersData: PropTypes.func.isRequired,
  userList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
    })
  ).isRequired,

}

export default DashboardProfiles;

// == Package imports
import React, { useEffect } from "react";
import PropTypes from "prop-types";

// == Local imports
import DashboardNav from "../DashboardNav";

const DashboardProfiles = ({ loadUsersData, userList }) => { 

  // loading users data from api
  useEffect(() => {
    loadUsersData();
  // console.log('je suis dans le useEffect');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

   return ( 

    <div className="dashboard">
      <DashboardNav />
      <div className="dashboard-profiles">
        <form>
          <div className="dashboard-profiles__form">
            <h3>Supprimer un profil</h3>
            <label htmlFor="delete-profile">
              Sélectionner le profil à supprimer dans la liste :
            </label>
            <select name="id" className="dashboard-profiles__form__select">
              <option value="">Profils</option>
              {userList.map((user) => {
                return (
                   <option key={user.id} value={user.id}>{user.username}</option>
                 );
              })}
               </select>
            <button type="submit" className="dashboard-profiles__form__button">
              Valider
            </button>
          </div>
        </form>
      </div>
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

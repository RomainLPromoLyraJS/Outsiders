// == Package imports
import React from "react";

// == Local imports
import DashboardNav from "../DashboardNav";

const DashboardProfiles = () => (
  <>
    <div className="dashboard">
      <DashboardNav />
      <div className="dashboard-profiles">
        <form>
          <div className="dashboard-profiles__form">
            <h3>Créer un profil</h3>
            <label htmlFor="create-profile">Nom du profil </label>
            <input
              type="text"
              className="dashboard-profiles__form__input"
            ></input>
            <button type="submit" className="dashboard-profiles__form__button">
              Valider
            </button>
          </div>
          <div className="dashboard-profiles__form">
            <h3>Modifier un profil</h3>
            <label htmlFor="modify-profile">
              Sélectionner le profil à modifier dans la liste :
            </label>
            <select name="profile" className="dashboard-profiles__form__select">
              <option value="">Profils</option>
              <option value="">Profil 1</option>
              <option value="">Profil 2</option>
            </select>
            <button type="submit" className="dashboard-profiles__form__button">
              Valider
            </button>
          </div>
          <div className="dashboard-profiles__form">
            <h3>Supprimer un profil</h3>
            <label htmlFor="delete-profile">
              Sélectionner le profil à supprimer dans la liste :
            </label>
            <select name="profile" className="dashboard-profiles__form__select">
              <option value="">Profils</option>
              <option value="">Profil 1</option>
              <option value="">Profil 2</option>
            </select>
            <button type="submit" className="dashboard-profiles__form__button">
              Valider
            </button>
          </div>
        </form>
      </div>
    </div>
  </>
);

export default DashboardProfiles;

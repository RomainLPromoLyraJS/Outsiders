// == Package imports
import React from "react";
// import PropTypes from 'prop-types';

// == Local imports
import DashboardNav from "../DashboardNav";

const DashboardSports = ({ sports, handleSearch, handleChange, sportNameValue }) => {

  // sending the request to API
  const onSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  // tracking field changes
  const onChange = (event) => {
    handleChange(event.target.value, event.target.name);
  };

  return (
    <>
      
      <div className="dashboard">
        <DashboardNav />
        <div className="dashboard-sports">
          <form className="dashboard-sports__form" onSubmit={onSubmit}>
              <h3 className="dashboard-sports__form__title">Créer un sport</h3>
              <label forhtml="sport-name">Nom du sport :</label>
              <input
                name="sportName"
                type="text"
                className="dashboard-sports__form__input"
                onChange={onChange}
                value={sportNameValue}
              ></input>
              <br/>
              <label forhtml="sport-description">Description du sport :</label>
              <textarea
                className="dashboard-sports__form__textarea" onChange={onChange}
              ></textarea>
              <br/>
              <button type="submit" className="dashboard-sports__form__button">
                Valider
              </button>
          </form>
          <form className="dashboard-sports__form" onSubmit={onSubmit}>
              <h3 className="dashboard-sports__form__title">Modifier un sport</h3>
              <label forhtml="modify-sport">Sélectionner le sport à modifier dans la liste :</label>
              <br/>
              <select name="sport" className="dashboard-sports__form__select">
                <option value="">Sport</option>
                {sports.map(sport => {
                  return <option key={sport.id} value=''>{sport.title}</option>
                })}
              </select>
              <br/>
              <label forhtml="modify-sport">Modifier le nom du sport :</label>
              <input
                type="text"
                className="dashboard-sports__form__input" value="" onChange={onChange}
              ></input>
              <label forhtml="modify-description">Modifier la description :</label>
              <textarea
                className="dashboard-sports__form__textarea" value="" onChange={onChange}
              ></textarea>
              <button type="submit" className="dashboard-sports__form__button">
                Valider
              </button>
          </form>
          <form className="dashboard-sports__form" onSubmit={onSubmit}>
              <h3 className="dashboard-sports__form__title">Supprimer un sport</h3>
              <label forhtml="delete-sport">Sélectionner le sport à supprimer dans la liste :</label>
              <br/>
              <select name="sport" className="dashboard-sports__form__select">
                <option value="">Sport</option>
                <option value="">Surf</option>
                <option value="">Paddle</option>
              </select>
              <br/>
              <button type="submit" className="dashboard-sports__form__button">
                Valider
              </button>
          </form>
        </div>
      </div>
    </>
  );
};

// DashboardSports.propTypes = {
//   sports: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//   })).isRequired,
// 
// };

export default DashboardSports;

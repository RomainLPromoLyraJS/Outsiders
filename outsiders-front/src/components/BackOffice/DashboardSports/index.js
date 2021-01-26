// == Package imports
import React from "react";
import PropTypes from 'prop-types';

// == Local imports
import DashboardNav from "../DashboardNav";

const DashboardSports = ({ sports, categories, categoryIdValue, handleCreate, handleModify, handleDelete, handleChange, sportNameValue, sportDescriptionValue  }) => {

  // sending the request to API
  const onSubmitCreate = (event) => {
    event.preventDefault();
    handleCreate();
  };

  const onSubmitModify = (event) => {
    event.preventDefault();
    handleModify();
  }

  // const onSubmitDelete = (event) => {
  //   event.preventDefault();
  //   handleDelete();
  // }

  // tracking field changes
  const onChange = (event) => {
    handleChange(event.target.value, event.target.name);
  };

  return (
    <>
      
      <div className="dashboard">
        <DashboardNav />
        <div className="dashboard-sports">
          <form className="dashboard-sports__form" onSubmit={onSubmitCreate}>
              <h3 className="dashboard-sports__form__title">Créer un sport</h3>
              <label forhtml="category-name">Choisir une catégorie :</label>
              <br/>
              <select onChange={onChange} name="category_id" className="dashboard-sports__form__select">
                <option value="">Categorie</option>
                {categories.map(category => {
                  return <option key={category.id} value={category.id}>{category.title}</option>
                })}
              </select>
              <br/>
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
                className="dashboard-sports__form__textarea" onChange={onChange} name="sportDescription" value={sportDescriptionValue}
              ></textarea>
              <br/>
              <button type="submit" className="dashboard-sports__form__button">
                Valider
              </button>
          </form>
          <form className="dashboard-sports__form" onSubmit={onSubmitModify}>
              <h3 className="dashboard-sports__form__title">Modifier un sport</h3>
              <label forhtml="modify-sport">Sélectionner le sport à modifier dans la liste :</label>
              <br/>
              <select onChange={onChange} name="id" className="dashboard-sports__form__select">
                <option value="">Sport</option>
                {sports.map(sport => {
                  return <option key={sport.id} value={sport.id}>{sport.title}</option>
                })}
              </select>
              <br/>
              <label forhtml="modify-sport">Modifier le nom du sport :</label>
              <input
                type="text"
                className="dashboard-sports__form__input" name="sportName" onChange={onChange} value={sportNameValue}
              ></input>
              <label forhtml="modify-description">Modifier la description :</label>
              <textarea
                className="dashboard-sports__form__textarea" onChange={onChange} name="sportDescription" value={sportDescriptionValue}
              ></textarea>
              <button type="submit" className="dashboard-sports__form__button">
                Valider
              </button>
          </form>
          <form className="dashboard-sports__form" /*onSubmit={onSubmitDelete}*/>
              <h3 className="dashboard-sports__form__title">Supprimer un sport</h3>
              <label forhtml="delete-sport">Sélectionner le sport à supprimer dans la liste :</label>
              <br/>
              <select name="sport" className="dashboard-sports__form__select">
                <option value="">Sport</option>
                {sports.map(sport => {
                  return <option key={sport.id} value="">{sport.title}</option>
                })}
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

DashboardSports.propTypes = {
  
  sports: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  handleCreate: PropTypes.func.isRequired,
  handleModify: PropTypes.func.isRequired,
  // handleDelete: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  sportNameValue: PropTypes.string.isRequired,
  sportDescriptionValue: PropTypes.string.isRequired,

};

export default DashboardSports;

// == Package imports
import React, { useState } from "react";
import PropTypes from "prop-types";

// == Local imports
import DashboardNav from "../DashboardNav";
import Modal from "./Modal";

const DashboardSports = ({
  sports,
  categories,
  message,
  handleCreate,
  handleModify,
  handleDelete,
  handleChange,
  sportNameModifyValue,
  sportDescriptionModifyValue,
  sportNameCreateValue,
  sportDescriptionCreateValue,
}) => {
 // sending the request to API
  const onSubmitCreate = (event) => {
    event.preventDefault();
    handleCreate();
  };

  const onSubmitModify = (event) => {
    event.preventDefault();
    handleModify();
  };

  const onSubmitDelete = (event) => {
    event.preventDefault();
    handleDelete();
  };

  // tracking field changes
  const onChange = (event) => {
    handleChange(event.target.value, event.target.name);
  };

//my state for the modal window to create a sport
  const [ createSportVisible, createSportSetVisible ] = useState(false);

  const showCreate = () => {
    createSportSetVisible(true);
  };

  const hiddenCreate = () => {
    createSportSetVisible(false);
  };

  //my state for the modal window to modify a sport
  const [ modifySportVisible, modifySportSetVisible ] = useState(false);

  const showModify = () => {
    modifySportSetVisible(true);
  };

  const hiddenModify = () => {
    modifySportSetVisible(false);
  };

  //my state for the modal window to delete a sport
  const [ deleteSportVisible, deleteSportSetVisible ] = useState(false);

  const showDelete = () => {
    deleteSportSetVisible(true);
  };

  const hiddenDelete = () => {
    deleteSportSetVisible(false);
  };

  return (
    <>
      <div className="dashboard">
        <DashboardNav />
        <div className="dashboard-sports">
          <form className="dashboard-sports__form" onSubmit={onSubmitCreate}>
            <h3 className="dashboard-sports__form__title">Créer un sport</h3>
            <label forhtml="category-name">Choisir une catégorie :</label>
            <br />
            <select
              onChange={onChange} //--> each time you type a data in the input, the state changes
              name="category_id"
              className="dashboard-sports__form__select"
            >
              <option value="">Categorie</option>
              {categories.map((category) => {
                return (
                  <option key={category.id} value={category.id}>
                    {category.title}
                  </option>
                );
              })}
            </select>
            <br />
            <label forhtml="sport-name">Nom du sport :</label>
            <input
              name="sportNameCreate" //--> must be equal to the key of my state that I want to modify
              type="text"
              className="dashboard-sports__form__input"
              onChange={onChange}
              value={sportNameCreateValue}
            ></input>
            <br />
            <label forhtml="sport-description">Description du sport :</label>
            <textarea
              className="dashboard-sports__form__textarea"
              onChange={onChange}
              name="sportDescriptionCreate"
              value={sportDescriptionCreateValue}
            ></textarea>
            <br />
            <button onClick={showCreate} type="submit" className="dashboard-sports__form__button">
              Valider
            </button>
            {/* SHOWCREATE IF createSportVisible IS TRUE */}
            {createSportVisible && (
              <div>
              <Modal action='créé' visible={createSportVisible} hidden={hiddenCreate}/>
              </div>
            )}
            {/* <p>{message}</p> */}
          </form>
          <form className="dashboard-sports__form" onSubmit={onSubmitModify}>
            <h3 className="dashboard-sports__form__title">Modifier un sport</h3>
            <label forhtml="modify-sport">
              Sélectionner le sport à modifier dans la liste :
            </label>
            <br />
            <select
              onChange={onChange}
              name="id"
              className="dashboard-sports__form__select"
            >
              <option value="">Sport</option>
              {sports.map((sport) => {
                return (
                  <option key={sport.id} value={sport.id}>
                    {sport.title}
                  </option>
                );
              })}
            </select>
            <br />
            <label forhtml="category-name">Choisir une catégorie :</label>
            <br />
            <select
              onChange={onChange}
              name="category_id"
              className="dashboard-sports__form__select"
            >
              <option value="">Categorie</option>
              {categories.map((category) => {
                return (
                  <option key={category.id} value={category.id}>
                    {category.title}
                  </option>
                );
              })}
            </select>
            <br />
            <label forhtml="modify-sport">Modifier le nom du sport :</label>
            <input
              type="text"
              className="dashboard-sports__form__input"
              name="sportNameModify"
              onChange={onChange}
              value={sportNameModifyValue}
            ></input>
            <label forhtml="modify-description">
              Modifier la description :
            </label>
            <textarea
              className="dashboard-sports__form__textarea"
              onChange={onChange}
              name="sportDescriptionModify"
              value={sportDescriptionModifyValue}
            ></textarea>
            <button onClick={showModify} type="submit" className="dashboard-sports__form__button">
              Valider
            </button>
            {modifySportVisible && (
              <Modal action='modifié' visible={modifySportVisible} hidden={hiddenModify}/>
            )}
          </form>
          <form className="dashboard-sports__form" onSubmit={onSubmitDelete}>
            <h3 className="dashboard-sports__form__title">
              Supprimer un sport
            </h3>
            <label forhtml="delete-sport">
              Sélectionner le sport à supprimer dans la liste :
            </label>
            <br />
            <select
              onChange={onChange}
              name="id"
              className="dashboard-sports__form__select"
            >
              <option value="">Sport</option>
              {sports.map((sport) => {
                return (
                  <option key={sport.id} value={sport.id}>
                    {sport.title}
                  </option>
                );
              })}
            </select>
            <br />
            <button onClick={showDelete} type="submit" className="dashboard-sports__form__button">
              Valider
            </button>
            {deleteSportVisible && (
              <Modal action='supprimé' visible={deleteSportVisible} hidden={hiddenDelete}/>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

DashboardSports.propTypes = {
  sports: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleCreate: PropTypes.func.isRequired,
  handleModify: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  sportNameCreateValue: PropTypes.string.isRequired,
  sportNameModifyValue: PropTypes.string.isRequired,
  sportDescriptionCreateValue: PropTypes.string.isRequired,
  sportDescriptionModifyValue: PropTypes.string.isRequired,
};

export default DashboardSports;

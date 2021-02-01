// == Package imports
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// == Local imports
import DashboardNav from "../DashboardNav";
import Modal from "./Modal";

const DashboardSports = ({
  sports,
  categories,
  handleCreate,
  handleModify,
  handleDelete,
  handleChange,
  loadSportsData,
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
  const [createSportVisible, setCreateSportVisible] = useState(false);

  const toggleCreate = () => {
    setCreateSportVisible(!createSportVisible);
  };

  /* --> it's the same as these two functions showDelete and hiddenDelete just below.
      This allows you to factorize and type less code: the toggleCreate function acts 
      as an on / off button thanks to the "!" which means "passes the state to the reverse of what it is. 
      If it is true then it becomes false and vice versa. */

  // const showCreate = () => {
  //   createSportSetVisible(true);
  // };

  // const hiddenCreate = () => {
  //   createSportSetVisible(false);
  // };

  //my state for the modal window to modify a sport
  const [modifySportVisible, setModifySportVisible] = useState(false);

  const toggleModify = () => {
    setModifySportVisible(!modifySportVisible);
  };

  //my state for the modal window to delete a sport
  const [deleteSportVisible, setDeleteSportVisible] = useState(false);

  const toggleDelete = () => {
    setDeleteSportVisible(!deleteSportVisible);
  };

  useEffect(() => {
    loadSportsData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createSportVisible, modifySportVisible, deleteSportVisible]);

  return (
    <>
      <div className="dashboard">
      {/* <DashboardNav /> */}
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
            <button
              onClick={toggleCreate}
              type="submit"
              className="dashboard-sports__form__button"
            >
              Valider
            </button>
            {/* SHOWCREATE IF createSportVisible IS TRUE */}
            {createSportVisible && (
              <div>
                <Modal
                  title="Le sport"
                  action="créé"
                  visible={createSportVisible}
                  hidden={toggleCreate}
                />
              </div>
            )}
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
            <button
              onClick={toggleModify}
              type="submit"
              className="dashboard-sports__form__button"
            >
              Valider
            </button>
            {modifySportVisible && (
              <Modal
                title="Le sport"
                action="modifié"
                visible={modifySportVisible}
                hidden={toggleModify}
              />
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
            <button
              onClick={toggleDelete}
              type="submit"
              className="dashboard-sports__form__button"
            >
              Valider
            </button>
            {deleteSportVisible && (
              <Modal
                title="Le sport"
                action="supprimé"
                visible={deleteSportVisible}
                hidden={toggleDelete}
              />
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

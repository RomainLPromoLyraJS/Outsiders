import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const EditProfile = ({ isLogged, firstname, lastname, username, email, password, description, handleChange, handleSubmit }) => {
  const [ redirect, setRedirect] = useState(false);

  const onChange = (event) => {
    handleChange(event.target.value, event.target.name);
  }

  const onSubmit = (event) => {
    if (password.length < 8) {
      return;
    }
    event.preventDefault();
    handleSubmit();
    setRedirect(true);
  }

  return (
    <div className="editProfile">
      {/* redirect when signed up */}
      {redirect && (
        <Redirect to='/mon-compte' />
      )}

      <h1 className="editProfile__title">Modifier Profil</h1>
      <form className="editProfile__form" onSubmit={onSubmit}>
        <label className="editProfile__form__label" htmlFor="fisrtname">Prénom</label>
        <input
          value={firstname}
          onChange={onChange}
          className="editProfile__form__input"
          type="text"
          name="firstname"
          id="firstname"
          placeholder="Kelly"
        />
        <label className="editProfile__form__label" htmlFor="lastname">Nom de famille</label>
        <input
          value={lastname}
          onChange={onChange}
          className="editProfile__form__input"
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Slater"
        />
        <label className="editProfile__form__label" htmlFor="username">Nom d'utilisateur</label>
        <input
          value={username}
          onChange={onChange}
          className="editProfile__form__input"
          type="text"
          name="username"
          id="username"
          placeholder="Surf Master"
        />
        <label className="editProfile__form__label" htmlFor="email">Email</label>
        <input
          value={email}
          onChange={onChange}
          className="editProfile__form__input"
          type="email"
          name="email"
          id="email"
          placeholder="kelly.@slater.surf"
        />
        <label className="signup__form__label" htmlFor="password">Mot de passe</label>
        <input
          value={password}
          onChange={onChange}
          className="signup__form__input"
          type="password"
          name="password"
          id="password"
          placeholder="min 8 caractères (a, A, 2, *)"
        />
        <label className="editProfile__form__label" htmlFor="description">Description</label>
        <textarea
          name="description"
          value={description}
          onChange={onChange}
          id="description"
          className="editProfile__form__textarea"
          placeholder="C'est le moment de se décrire un petit peu..."
        />
        <button className="editProfile__form__button" type="submit">Valider !</button>
      </form>
    </div>
  );
};

EditProfile.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default EditProfile;
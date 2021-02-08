import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const Signup = ({ isLogged, firstname, lastname, username, email, password, description, handleChange, handleSubmit }) => {
  const [ redirect, setRedirect] = useState(false);

  const onChange = (event) => {
    handleChange(event.target.value, event.target.name);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit();
    setRedirect(true);
  }

  return (
    <div className="signup">
      {/* redirect when signed up */}
      {redirect && (
        <Redirect to='/login' />
      )}

      {/* redirect if user is logged */}
      {isLogged && (
        <Redirect to='/mon-compte' />
      )}

      <h1 className="signup__title">Inscription</h1>
      <form className="signup__form" onSubmit={onSubmit}>
        <label className="signup__form__label" htmlFor="fisrtname">Prénom</label>
        <input
          value={firstname}
          onChange={onChange}
          className="signup__form__input"
          type="text"
          name="firstname"
          id="firstname"
          placeholder="Kelly"
        />
        <label className="signup__form__label" htmlFor="lastname">Nom de famille</label>
        <input
          value={lastname}
          onChange={onChange}
          className="signup__form__input"
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Slater"
        />
        <label className="signup__form__label" htmlFor="username">Nom d'utilisateur</label>
        <input
          value={username}
          onChange={onChange}
          className="signup__form__input"
          type="text"
          name="username"
          id="username"
          placeholder="Surf Master"
        />
        <label className="signup__form__label" htmlFor="email">Email</label>
        <input
          value={email}
          onChange={onChange}
          className="signup__form__input"
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
        <label className="signup__form__label" htmlFor="description">Description</label>
        <textarea
          name="description"
          value={description}
          onChange={onChange}
          id="description"
          className="signup__form__textarea"
          placeholder="C'est le moment de se décrire un petit peu..."
        />
        <button className="signup__form__button" type="submit">Valider !</button>
      </form>
    </div>
  );
};

Signup.propTypes = {
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

export default Signup;
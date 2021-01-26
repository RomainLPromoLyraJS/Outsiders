import React from 'react';
import PropTypes from 'prop-types';

const Signup = () => {
  return (
    <div className="signup">
      <h1 className="signup__title">Inscription</h1>
      <form className="signup__form">
        <label className="signup__form__label" htmlFor="fisrtname">Prénom</label>
        <input
          className="signup__form__input"
          type="text"
          name="firstname"
          id="firstname"
          placeholder="Kelly"
        />
        <label className="signup__form__label" htmlFor="lastname">Nom de famille</label>
        <input
          className="signup__form__input"
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Slater"
        />
        <label className="signup__form__label" htmlFor="username">Nom d'utilisateur</label>
        <input
          className="signup__form__input"
          type="text"
          name="username"
          id="username"
          placeholder="Surf Master"
        />
        <label className="signup__form__label" htmlFor="email">Email</label>
        <input
          className="signup__form__input"
          type="email"
          name="email"
          id="email"
          placeholder="kelly.@slater.surf"
        />
        <label className="signup__form__label" htmlFor="password">Mot de passe</label>
        <input
          className="signup__form__input"
          type="password"
          name="password"
          id="password"
          placeholder="min 8 caractères (a, A, 2, *)"
        />
        <label className="signup__form__label" htmlFor="description">Mot de passe</label>
        <textarea
          id="description"
          className="signup__form__textarea"
          placeholder="C'est le moment de se décrire un petit peu..."
        />
        <button className="signup__form__button" type="submit">Valider !</button>
      </form>
    </div>
  );
};

export default Signup;
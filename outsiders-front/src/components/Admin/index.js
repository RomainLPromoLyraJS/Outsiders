// Packages imports
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

// Local imports 
import NotConnectedModal from "./NotConnectedModal";

// My Component
const Admin = ({
  emailValue,
  passwordValue,
  handleChange,
  handleAdmin,
  isLogged,
}) => {
  const [ clicked, setClicked ] = useState(false);

  const onChange = (event) => {
    handleChange(event.target.value, event.target.name);
  };

  const onClick = () => {
    setTimeout(() => {
      setClicked(true)
    }, 1000);
  };

  const onSubmitAdmin = (event) => {
    event.preventDefault();
    handleAdmin();
  };

  return (
    <div className="admin-page">
      

      <h1 className="admin-page__title">
        Connexion Admin
      </h1>
      <form className="admin-page__form" onSubmit={onSubmitAdmin}>
        <label className="admin-page__form__label" htmlFor="email">
          Email
        </label>
        <input
          className="admin-page__form__input"
          type="email"
          name="email"
          id="email"
          placeholder="Saisissez votre e-mail"
          value={emailValue}
          onChange={onChange}
        />
        <label className="admin-page__form__label" htmlFor="password">
          Mot de passe
        </label>
        <input
          className="admin-page__form__input"
          type="password"
          name="password"
          id="password"
          placeholder="Saisissez votre mot de passe"
          value={passwordValue}
          onChange={onChange}
        />
        <button 
          className="admin-page__form__button"
          type="submit"
          name="button"
          id="button"
          onClick={onClick}
        >
          Valider
        </button>
        
        {/* if email and/or password are wrong */}
        {!isLogged && clicked && (
          <NotConnectedModal clicked={clicked} setClicked={setClicked} />
        )}
       
        {/* redirect if user is logged */}
      {isLogged && (<Redirect to="/dashboard" />)}
      </form>
    </div>
  );
};

// Default value for Admin (propTypes)
Admin.propTypes = {
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Admin;

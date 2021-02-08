// Package imports
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

// Local Imports
import NotConnectedModal from "./NotConnectedModal";

const Login = ({ emailValue, passwordValue, handleChange, handleLogin, isLogged }) => {

  const [ clicked, setClicked ] = useState(false);

  const onChange = (event) => {
    handleChange(event.target.value, event.target.name);
  }

  const onClick = () => {
    setTimeout(() => {
      setClicked(true)
    }, 1000);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  }

  return (
    <div className="login">

      {/* redirect if user is logged */}
      {isLogged && (
        <Redirect to='/' />
      )}

      {/* if email and/or password are wrong */}
      {!isLogged && clicked && (
          <NotConnectedModal clicked={clicked} setClicked={setClicked} />
        )}

      <h1 className="login__title">Connexion</h1>
      <form className="login__form" onSubmit={handleSubmit}>
        <label className='login__form__label' htmlFor='email'>Email</label>
        <input
          className='login__form__input'
          type='email'
          name='email'
          id='email'
          placeholder='Saisissez votre e-mail'
          value={emailValue}
          onChange={onChange}
        />
        <label className='login__form__label' htmlFor='password'>Mot de passe</label>
        <input
          className='login__form__input'
          type='password'
          name='password'
          id='password'
          placeholder='Saisissez votre mot de passe'
          value={passwordValue}
          onChange={onChange}
        />
        <button className='login__form__button' type='submit' onClick={onClick}>Valider</button>
      </form>
    </div>
  );
};

// Default value for Login (propTypes)
Login.propTypes = {
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default Login;
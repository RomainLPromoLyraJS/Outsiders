// IMPORTS
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';



// My Component
const Login = ({ emailValue, passwordValue, handleChange, handleLogin, isLogged }) => {

    const onChange = (event) => {
      handleChange(event.target.value, event.target.name);
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      handleLogin();
    }
    

  return (
    <>
    {isLogged && (
      <Redirect to='/' />
      )}
    
    <div className='login-page'>
        <p className='login-page__description'>Si vous êtes membre du site, veuillez vous connecter :</p>
        <form
          className='login-page__form'
          onSubmit={handleSubmit}
          >
          <label className='login-page__form__label' htmlFor='email'>Email</label>
          <input
            className='login-page__form__input'
            type='email'
            name='email'
            id='email'
            placeholder='Saisissez votre e-mail'
            value={emailValue}
            onChange={onChange}
          />
          <label className='login-page__form__label' htmlFor='password'>Mot de passe</label>
          <input
            className='login-page__form__input'
            type='password'
            name='password'
            id='password'
            placeholder='Saisissez votre mot de passe'
            value={passwordValue}
            onChange={onChange}
          />
          
          <button
            className='login-page__form__button'
            type='submit'
            name='button'
            id='button'
          >
            Valider
          </button>
          
        </form>
    </div>
  </>
  )
};

// Default value for Login (propTypes)
Login.propTypes = { 
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired
};

export default Login;
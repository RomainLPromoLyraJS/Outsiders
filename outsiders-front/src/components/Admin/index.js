// IMPORTS
import React from 'react';
// import PropTypes from 'prop-types';

// My Component
const Admin = ({ emailValue, passwordValue, handleChange }) => {

    const onChange = (event) => {
        handleChange(event.target.value, event.target.name);
    }



  return (
    <div className='admin-page'>
        <p className='admin-page__description'>Si vous êtes un administrateur du site, vous pouvez vous connecter :</p>
        <form className='admin-page__form'>
          <label className='admin-page__form__label' htmlFor='email'>Email</label>
          <input
            className='admin-page__form__input'
            type='email'
            name='email'
            id='email'
            placeholder='Saisissez votre e-mail'
            value={emailValue}
            onChange={onChange}
          />
          <label className='admin-page__form__label' htmlFor='password'>Mot de passe</label>
          <input
            className='admin-page__form__input'
            type='password'
            name='password'
            id='password'
            placeholder='Saisissez votre mot de passe'
            value={passwordValue}
            onChange={onChange}
          />
          <button
            className='admin-page__form__button'
            type='submit'
            name='button'
            id='button'
          >
            Valider
          </button>
        </form>
    </div>
  )
};

// Default value for Admin (propTypes)
// Admin.propTypes = { 
 
// };

export default Admin;
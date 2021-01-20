// IMPORTS
import React from 'react';

// My Component
const Login = () => {
    return (
        <div className='login-page'>
            <p className='login-page__description'>Si vous êtes membre du site, veuillez vous connecter :</p>
           <form className='login-page__form'>
                <label className='login-page__form__label' htmlFor='email'>Identifiant</label>
                <input className='login-page__form__input' type='email' name='mail' id='mail' placeholder='Saisissez votre e-mail'/>
                <label className='login-page__form__label' htmlFor='password'>Mot de passe</label>
                <input className='login-page__form__input' type='password' name='password' id='password' placeholder='Saisissez votre mot de passe'/>
                <button className='login-page__form__button' type='submit' name='button' id='button'>Valider</button>
              </form>
        </div>
    )
};


export default Login;
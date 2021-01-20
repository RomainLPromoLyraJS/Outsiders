import React from 'react';
import PropTypes from 'prop-types';

const Signup = ({
  firstnameValue,
  lastnameValue,
  usernameValue,
  emailValue,
  passwordValue,
  descriptionValue,
  handleChange
}) => {
  const onChange = (event) => {
      handleChange(event.target.value, event.target.name);
  };
  
  return (
    <div className='signup'>
      <form className="signup_form">
        <h1 className="signup_title">Sign up</h1>
        <input
          className='signup_form_input'
          placeholder='FirstName'
          type='text'
          name='firstname'
          value={firstnameValue}
          onChange={onChange}
        />
        <input
          className='signup_form_input'
          placeholder='LastName'
          type='text'
          name='lastname'
          value={lastnameValue}
          onChange={onChange}
        />
        <input
          className='signup_form_input'
          placeholder='UserName'
          type='text'
          name='username'
          value={usernameValue}
          onChange={onChange}
        />
        <input
					className='signup_form_input'
					placeholder='Email'
					type='email'
					name='email'
					value={emailValue}
					onChange={onChange}
        />
        <input
          className='signup_form_input'
          placeholder='Password'
          type='password'
          name='password'
          value={passwordValue}
          onChange={onChange}
        />
        <input
          className='signup_form_input'
          placeholder='ShortDescription'
          type='text'
          name='description'
          value={descriptionValue}
          onChange={onChange}
        />
        <button
          type='submit'
          className='signup_form_button'
        >
          SignUp
        </button>
      </form>
    </div>
  )
};

Signup.propTypes = { 
  lastnameValue: PropTypes.string.isRequired,
  firstnameValue: PropTypes.string.isRequired,
  usernameValue: PropTypes.string.isRequired,  
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  descriptionValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Signup;
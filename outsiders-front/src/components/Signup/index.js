import React from 'react';




const Signup = () => {
    return (
        <div className='signup'>
            <form className="signup_form">
                <h1 className="signup_title">Sign up</h1>
                <input
                className='signup_form_input'
                placeholder='LastName'
                />
                <input
                className='signup_form_input'
                placeholder='FirstName'
                />
                <input
                className='signup_form_input'
                placeholder='Email'
                />
                <input
                className='signup_form_input'
                placeholder='Password'
                />
                <button
                type='submit'
                className='signup_form_button'>
                    SignUp
                </button>
            </form>
        </div>
    )
}

export default Signup;
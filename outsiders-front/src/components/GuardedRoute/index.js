import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from "react-router-dom";


/**
 * WHAT'S GuardedRoute ??
 * @link https://blog.netcetera.com/how-to-create-guarded-routes-for-your-react-app-d2fe7c7b6122
 * 
 * Calling GuardedRoute on src/components/App/index.js
 * look like => <GuardedRoute exact path='/mon-compte' component={Profile} isLogged={isLogged} />
 * 
 * GuardedRoute have some props :
 * @param {component}: Component = component property defined on props index.js above = {Profile}
 * @param {isLogged} = Redux State if user isLogged or not Logged = condition
 * @param {...rest} = all remaining properties defined on the props object (collect them inside an argument called rest) above = path
 * 
 */

export const GuardedRoute = ({ component: Component, isLogged, ...rest }) => (
    <Route {...rest} render={(props) => (
        isLogged === true
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
);

/**
 * @param {admin} = Redux State if user is Admin or not Admin = role_id condition
 */
export const AdminRoute = ({ component: Component, admin, ...rest }) => (
    <Route {...rest} render={(props) => (
        admin === 2
            ? <Component {...props} />
            : <Redirect to='/' />
    )} />
);

GuardedRoute.propTypes = {
    component: PropTypes.object.isRequired,
    isLogged: PropTypes.bool.isRequired,
}

export default GuardedRoute;


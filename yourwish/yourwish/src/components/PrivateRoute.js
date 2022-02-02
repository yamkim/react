import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import isLogined from '../libs/isLogined';

function PrivateRoute({
    component: Component,
    ...rest
}) {
    return (
        <Route {...rest} render={ (props) => {
            return (
                isLogined()
                    ? <Component {...props} />
                    : <Redirect to="/login"/>);
        }}/>
    );
}
export default PrivateRoute;
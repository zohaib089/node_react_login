import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {isLogin} from './__helper'
const PublicRoute = ({component: Component, restricted, ...rest}) => {
    
    return (

        <Route {...rest} render={props => (
            isLogin() && restricted ?
                <Redirect to="/welcome" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;
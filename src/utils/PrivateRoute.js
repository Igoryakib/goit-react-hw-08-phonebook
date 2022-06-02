import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

import {getAuthorization} from '../redux/authurization/auth-selectors';
import routePath from './routePath';

const PrivateRoute = ({isAuthorized, children}) => {
    return isAuthorized ? children : <Navigate to={routePath.homePage}/>
};

const mapStateToProps = state => ({
    isAuthorized: getAuthorization(state),
})

export default connect(mapStateToProps)(PrivateRoute);
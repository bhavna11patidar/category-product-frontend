import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import propTypes from 'prop-types';
import {connect} from 'react-redux';

const PrivateRoute=({component:Component, auth, ...rest})=>(
    <Route
        {...rest}
        render={props=>
            auth.isAuthenticate===true?(
                <Component {...props}></Component>
            ):
            (
                <Redirect to="/login"></Redirect>
            )
        }
    />
)

PrivateRoute.propTypes={
    auth:propTypes.object.isRequired
}

const mapStateToProps=state=>({
    auth:state.auth
})

export default connect(mapStateToProps)(PrivateRoute);


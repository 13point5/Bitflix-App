import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookie from "./Cookie";

const AuthRoute = ({ component: Comp, path, redirect, ...rest }) => {
    return (
        <Route
            path={path}
            {...rest}
            render={props => {
                return Cookie.is("Bitflix") ? (
                    <Comp {...props} />
                ) : (
                    <Redirect to={redirect} />
                );
            }}
        />
    );
};

export default AuthRoute;

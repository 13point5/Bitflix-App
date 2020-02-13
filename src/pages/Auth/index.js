import React, { Component } from "react";
import "./style.scss";
import AuthForm from "../../components/containers/AuthForm";

class AuthPage extends Component {
    render() {
        return (
            <div className="auth-page flex-center">
                <AuthForm />
            </div>
        );
    }
}

export default AuthPage;

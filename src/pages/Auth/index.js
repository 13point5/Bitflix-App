import React, { Component } from "react";
import "./style.scss";
import AuthForm from "../../components/containers/AuthForm";
import Cookie from "../../utils/Cookie";

class AuthPage extends Component {
    componentDidMount() {
        if (Cookie.is("Bitflix")) {
            this.props.history.replace("/home");
        }
    }

    render() {
        return (
            <div className="auth-page">
                <h3>BITFLIX</h3>
                <AuthForm />
            </div>
        );
    }
}

export default AuthPage;

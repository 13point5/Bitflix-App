import React, { Component } from "react";
import "./style.scss";
import Input from "../../stupid/Input";
import { signUp, signIn } from "../../../axios/User";
import Cookie from "../../../utils/Cookie";
import { withRouter } from "react-router-dom";

class AuthForm extends Component {
    state = {
        authType: "signUp",
        signUp: {
            name: "",
            email: "",
            password: ""
        },
        signIn: {
            email: "",
            password: ""
        }
    };

    componentDidMount = () => {
        const path_name = window.location.pathname.split("/");
        if (path_name.includes("signUp")) {
            this.authTabHandler("signIn");
            this.setState({ authType: "signIn" });
        } else {
            this.authTabHandler("signUp");
            this.setState({ authType: "signUp" });
        }
    };

    handleInputChange = event => {
        let { name, value } = event.target;
        let name_tokens = name.split("_");
        let new_state = { ...this.state };
        new_state[name_tokens[0]][[name_tokens[1]]] = value;
        this.setState(new_state);
    };

    authTabHandler = tabType => {
        if (tabType === "signIn") {
            this.setState({
                authType: "signIn",
                signUp: {
                    name: "",
                    email: "",
                    password: ""
                }
            });
            document
                .getElementById("signup-tab")
                .classList.add("left-disabled");
            document
                .getElementById("signin-tab")
                .classList.remove("right-disabled");
        } else {
            this.setState({
                authType: "signUp",
                signIn: {
                    email: "",
                    password: ""
                }
            });
            document
                .getElementById("signin-tab")
                .classList.add("right-disabled");
            document
                .getElementById("signup-tab")
                .classList.remove("left-disabled");
        }
    };

    authHandler = authType => {
        let res;
        const alertMessages = {
            signUp: "Could not Sign up",
            signIn: "Could not Sign in"
        };

        if (authType === "signUp") {
            res = signUp(this.state.signUp);
        } else {
            res = signIn(this.state.signIn);
        }

        res.then(data => {
            if (!data.token) {
                return alert(alertMessages[authType]);
            }
            Cookie.set("Bitflix", data.token);
            this.props.history.push("/home");
        }).catch(err => {
            console.log(err);
            alert("Something went wrong");
        });
    };

    render() {
        return (
            <div className="auth-box">
                <div className="auth-container">
                    <div className="auth-tabs-container">
                        <div
                            id="signup-tab"
                            className="auth-tab"
                            onClick={() => this.authTabHandler("signUp")}>
                            Sign up
                        </div>
                        <div
                            id="signin-tab"
                            className="auth-tab"
                            onClick={() => this.authTabHandler("signIn")}>
                            Log in
                        </div>
                    </div>
                    <div className="auth-form-container">
                        {this.state.authType === "signIn" ? (
                            <div
                                id="signin-form"
                                className="auth-form signin-form">
                                <Input
                                    id="signIn_email"
                                    name="signIn_email"
                                    type="email"
                                    placeholder="Email"
                                    onChange={this.handleInputChange}
                                    value={this.state.signIn.email}
                                />
                                <Input
                                    id="signIn_password"
                                    name="signIn_password"
                                    type="password"
                                    placeholder="Password"
                                    onChange={this.handleInputChange}
                                    value={this.state.signIn.password}
                                />
                                <div className="auth-bottom">
                                    <button
                                        onClick={() =>
                                            this.authHandler("signIn")
                                        }>
                                        Log in
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div
                                id="signup-form"
                                className="auth-form signup-form">
                                <Input
                                    id="signUp_name"
                                    name="signUp_name"
                                    type="name"
                                    placeholder="Name"
                                    onChange={this.handleInputChange}
                                    value={this.state.signUp.name}
                                />
                                <Input
                                    id="signUp_email"
                                    name="signUp_email"
                                    type="email"
                                    placeholder="Email"
                                    onChange={this.handleInputChange}
                                    value={this.state.signUp.email}
                                />
                                <Input
                                    id="signUp_password"
                                    name="signUp_password"
                                    type="password"
                                    placeholder="Password"
                                    onChange={this.handleInputChange}
                                    value={this.state.signUp.password}
                                />
                                <div className="auth-bottom">
                                    <button
                                        onClick={() =>
                                            this.authHandler("signUp")
                                        }>
                                        Create An Account
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(AuthForm);

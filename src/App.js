import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import AuthRoute from "./utils/AuthRoute";
import "./App.scss";
import Auth from "./pages/Auth";
import Home from "./pages/Home";

function App() {
    return (
        <BrowserRouter>
            <main className="pages-container">
                <Switch>
                    <Route
                        path={["/auth", "/auth/signIn", "/auth/signUp"]}
                        exact
                        component={Auth}
                    />
                    <Redirect from="/" to="/auth" exact />
                    <AuthRoute path="/home" component={Home} redirect="/" />
                </Switch>
            </main>
        </BrowserRouter>
    );
}

export default App;

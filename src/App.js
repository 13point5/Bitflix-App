import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.scss";
import AppBar from "./components/containers/AppBar";
import Auth from "./pages/Auth";

function App() {
    return (
        <BrowserRouter>
            <AppBar />
            <main className="pages-container">
                <Switch>
                    <Route
                        path={["/auth", "/auth/signIn", "/auth/signUp"]}
                        exact
                        component={Auth}
                    />
                    <Redirect from="/" to="/auth" exact />
                </Switch>
            </main>
        </BrowserRouter>
    );
}

export default App;

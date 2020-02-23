import React from "react";
import whyDidYouRender from "@welldone-software/why-did-you-render";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import AuthRoute from "./utils/AuthRoute";
import "./App.scss";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Error from "./pages/Error";

whyDidYouRender(React);

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
                    <Route component={Error} />
                </Switch>
            </main>
        </BrowserRouter>
    );
}

export default App;

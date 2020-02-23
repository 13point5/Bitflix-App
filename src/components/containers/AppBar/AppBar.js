import React from "react";
import "./style.scss";

const AppBar = props => {
    return (
        <header className="app_bar">
            <h4 className="logo">BITFLIX</h4>
            <nav className="nav_links">
                <ul>
                    <li>
                        <button onClick={props.newShow}>New Show</button>
                    </li>
                    <li>
                        <button onClick={props.logOut}>Sign Out</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default React.memo(AppBar);

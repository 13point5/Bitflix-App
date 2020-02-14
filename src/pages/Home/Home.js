import React, { Component } from "react";
import Cookie from "../../utils/Cookie";
import { getUser } from "../../axios/User";

class Home extends Component {
    state = {
        token: "",
        name: "",
        email: ""
    };

    componentDidMount = () => {
        this.setState({ token: `Bearer ${Cookie.get("Bitflix")}` });
        this.getUserDetails();
    };

    getUserDetails = () => {
        let res = getUser({
            headers: { Authorization: `Bearer ${Cookie.get("Bitflix")}` }
        });
        res.then(data => {
            if (data.name) {
                this.setState({ name: data.name, email: data.email });
            }
        }).catch(err => {
            console.error(err);
        });
    };

    render() {
        return <div>Hello {this.state.name}</div>;
    }
}

export default Home;

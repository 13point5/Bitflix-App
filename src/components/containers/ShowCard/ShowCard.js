import React, { Component } from "react";
import "./style.scss";
import { patchSingleShow } from "../../../axios/Show";

class ShowCard extends Component {
    state = {
        editable: "false",
        action: null,
        season: "",
        episode: "",
        id: null
    };

    componentDidMount() {
        this.setState({
            season: this.props.season,
            episode: this.props.episode,
            id: this.props.id
        });
    }

    handleInputChange = event => {
        let { name, value } = event.target;
        console.log(name);
        this.setState({ [name]: value });
    };

    editShowAction = () => {
        this.setState({ editable: "true", action: "confirm" });
    };

    deleteShowAction = () => {
        this.setState({ editable: "false", action: "delete" });
    };

    cancelAction = () => {
        this.setState({ editable: "false", action: null });
    };

    updateShow = () => {
        console.log(this.state.action);
        if (this.state.action === "delete") {
            console.log("slavdlunj");
            return this.props.delete();
        }
        let res = patchSingleShow(this.state.id, {
            season: this.state.season,
            episode: this.state.episode
        });

        res.then(data => {
            if (data.title) {
                this.cancelAction();
            }
        }).catch(err => {
            alert("Something went wrong");
            console.error(err);
        });
    };

    render() {
        return (
            <div className="show-card">
                <div className="show-header">
                    <h4>{this.props.title}</h4>
                    <div className="show-menu-items">
                        <i
                            onClick={this.editShowAction}
                            className="far fa-edit"></i>
                        <i
                            onClick={this.deleteShowAction}
                            className="far fa-trash-alt"></i>
                    </div>
                </div>
                <div className="show-body">
                    <div className="show-body-item">
                        <h5>Season</h5>
                        <input
                            className={`editable-${this.state.editable}`}
                            type="number"
                            pattern="[0-9]*"
                            name="season"
                            onChange={this.handleInputChange}
                            value={this.state.season}
                            readOnly={this.state.editable === "false"}
                        />
                    </div>
                    <div className="show-body-item">
                        <h5>Episode</h5>
                        <input
                            className={`editable-${this.state.editable}`}
                            type="number"
                            pattern="[0-9]*"
                            name="episode"
                            onChange={this.handleInputChange}
                            value={this.state.episode}
                            readOnly={this.state.editable === "false"}
                        />
                    </div>
                    {this.state.action ? (
                        <div className="show-body-item">
                            <button
                                onClick={this.updateShow}
                                className={`show-btn show-btn-left ${this.state.action}`}>
                                {this.state.editable === "true"
                                    ? "SAVE"
                                    : "DELETE"}
                            </button>
                            <button
                                className="show-btn show-btn-right"
                                onClick={this.cancelAction}>
                                CANCEL
                            </button>
                        </div>
                    ) : null}
                </div>
            </div>
        );
    }
}

export default ShowCard;

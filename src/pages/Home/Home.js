import React, { Component, Fragment } from "react";
import { getUser, signOut } from "../../axios/User";
import { getAllShows, addSingleShow, deleteSingleShow } from "../../axios/Show";
import ShowCard from "../../components/containers/ShowCard";
import AppBar from "../../components/containers/AppBar";
import Input from "../../components/stupid/Input";
import Cookie from "../../utils/Cookie";
import "./style.scss";

class Home extends Component {
    state = {
        name: "",
        shows: [],
        isNew: false,
        newShow: {
            title: "",
            season: 0,
            episode: 0
        }
    };

    componentDidMount = () => {
        this.getUserDetails();
        this.getShows();
    };

    showModal = () => {
        this.setState({
            isNew: true
        });
    };

    closeModal = () => {
        this.setState({
            isNew: false,
            newShow: {
                title: "",
                season: 0,
                episode: 0
            }
        });
    };

    logOutUser = () => {
        let res = signOut();
        res.then(() => {
            Cookie.delete("Bitflix");
            this.props.history.push("/auth");
        }).catch(err => {
            console.error(err);
            alert("Something went wrong");
        });
    };

    getUserDetails = () => {
        let res = getUser();
        res.then(data => {
            if (data && data.name) {
                this.setState({ name: data.name });
            }
        }).catch(err => {
            console.error(err);
        });
    };

    addShow = () => {
        let res = addSingleShow(this.state.newShow);
        res.then(data => {
            this.setState(prevState => {
                return {
                    shows: prevState.shows.concat(data)
                };
            });
        }).catch(err => {
            console.error(err);
            alert("Something went wrong!");
        });
        this.closeModal();
    };

    getShows = () => {
        let res = getAllShows();
        res.then(data => {
            console.log(data);
            this.setState({ shows: data });
        }).catch(err => {
            console.error(err);
        });
    };

    deleteShow = id => {
        let res = deleteSingleShow(id);
        res.then(() => {
            const shows = this.state.shows.filter(show => show._id !== id);
            this.setState({ shows: shows });
        }).catch(err => {
            console.error(err);
            alert("Something went wrong");
        });
    };

    handleInputChange = event => {
        let { name, value } = event.target;
        let name_tokens = name.split("_");
        let new_state = this.state;
        console.log(name_tokens);
        console.log(value);
        new_state[name_tokens[0]][name_tokens[1]] = value;
        this.setState(new_state);
    };

    render() {
        let showCards = null;

        if (this.state.shows && this.state.shows.length > 0) {
            showCards = this.state.shows.map((show, idx) => {
                return (
                    <ShowCard
                        key={`show-${idx}`}
                        title={show.title}
                        season={show.season}
                        episode={show.episode}
                        id={show._id}
                        delete={() => this.deleteShow(show._id)}
                    />
                );
            });
        }

        return (
            <Fragment>
                <AppBar logOut={this.logOutUser} newShow={this.showModal} />
                <div className="home-page">
                    <div className="home-header">
                        <h4 className="home-header-title">My Shows</h4>
                    </div>
                    <div className="shows-container">{showCards}</div>
                    <div className="show-nav"></div>
                </div>
                {this.state.isNew ? (
                    <div>
                        <div
                            id="myModal"
                            onClick={this.closeModal}
                            className="modal"></div>
                        <div className="modal-content">
                            <div className="new-show-card">
                                <h4>Add a Show</h4>
                                <div className="new-show-item">
                                    <h6>Title</h6>
                                    <Input
                                        type="text"
                                        value={this.state.newShow.title}
                                        name="newShow_title"
                                        onChange={this.handleInputChange}
                                        placeholder="Title"
                                    />
                                </div>
                                <div className="new-show-item">
                                    <h6>Season</h6>
                                    <Input
                                        type="number"
                                        value={this.state.newShow.season}
                                        name="newShow_season"
                                        onChange={this.handleInputChange}
                                        placeholder="Season"
                                    />
                                </div>
                                <div className="new-show-item">
                                    <h6>Episode</h6>
                                    <Input
                                        type="number"
                                        value={this.state.newShow.episode}
                                        name="newShow_episode"
                                        onChange={this.handleInputChange}
                                        placeholder="Episode"
                                    />
                                </div>
                                <button onClick={this.addShow}>SAVE</button>
                            </div>
                        </div>
                    </div>
                ) : null}
            </Fragment>
        );
    }
}

export default Home;

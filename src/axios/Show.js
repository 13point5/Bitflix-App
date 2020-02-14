import { showAxios } from "./Axios";
import Faith from "../utils/Faith";
import Cookie from "../utils/Cookie";

let authConfig = null;

if (Cookie.is("Bitflix")) {
    authConfig = {
        headers: { Authorization: `Bearer ${Cookie.get("Bitflix")}` }
    };
}

const addSingleShow = async showData => {
    let [err, res] = await Faith(showAxios.post("/new", showData, authConfig));

    if (err) return err.response;
    if (res) return res.data;
};

const getAllShows = async () => {
    let [err, res] = await Faith(showAxios.get("/all", authConfig));

    if (err) return err.response;
    if (res) return res.data;
};

const getSingleShow = async showId => {
    let [err, res] = await Faith(showAxios.get(`/${showId}`, authConfig));

    if (err) return err.response;
    if (res) return res.data;
};

const patchSingleShow = async (showId, showData) => {
    let [err, res] = await Faith(
        showAxios.patch(`/${showId}`, showData, authConfig)
    );

    if (err) return err.response;
    if (res) return res.data;
};

const deleteSingleShow = async showId => {
    let [err, res] = await Faith(showAxios.delete(`/${showId}`, authConfig));

    if (err) return err.response;
    if (res) return res.data;
};

export {
    addSingleShow,
    getAllShows,
    getSingleShow,
    patchSingleShow,
    deleteSingleShow
};

import { showAxios } from "./Axios";
import Faith from "../utils/Faith";
import Cookie from "../utils/Cookie";

const getHeader = () => {
    let authConfig = null;

    if (Cookie.is("Bitflix")) {
        authConfig = {
            headers: { Authorization: `Bearer ${Cookie.get("Bitflix")}` }
        };
    }

    return authConfig;
};

const addSingleShow = async showData => {
    let [err, res] = await Faith(showAxios.post("/new", showData, getHeader()));

    if (err) return err.response;
    if (res) return res.data;
};

const getAllShows = async () => {
    let [err, res] = await Faith(showAxios.get("/all", getHeader()));

    if (err) return err.response;
    if (res) return res.data;
};

const getSingleShow = async showId => {
    let [err, res] = await Faith(showAxios.get(`/${showId}`, getHeader()));

    if (err) return err.response;
    if (res) return res.data;
};

const patchSingleShow = async (showId, showData) => {
    let [err, res] = await Faith(
        showAxios.patch(`/${showId}`, showData, getHeader())
    );

    if (err) return err.response;
    if (res) return res.data;
};

const deleteSingleShow = async showId => {
    let [err, res] = await Faith(showAxios.delete(`/${showId}`, getHeader()));

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

import { userAxios } from "./Axios";
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

const signUp = async userData => {
    let [err, res] = await Faith(userAxios.post("/signUp", userData));

    if (err) return err.response;
    if (res) return res.data;
};

const signIn = async userData => {
    let [err, res] = await Faith(userAxios.post("/signIn", userData));

    if (err) return err.response;
    if (res) return res.data;
};

const signOut = async () => {
    let [err, res] = await Faith(userAxios.post("/signOut", getHeader()));

    if (err) return err.response;
    if (res) return res.data;
};

const signOutAll = async () => {
    let [err, res] = await Faith(userAxios.post("/signOutAll", getHeader()));

    if (err) return err.response;
    if (res) return res.data;
};

const getUser = async () => {
    let [err, res] = await Faith(userAxios.get("/me", getHeader()));

    if (err) return err.response;
    if (res) return res.data;
};

const patchUser = async userData => {
    let [err, res] = await Faith(userAxios.patch("/me", userData, getHeader()));

    if (err) return err.response;
    if (res) return res.data;
};

const deleteUser = async () => {
    let [err, res] = await Faith(userAxios.delete("/me", getHeader()));

    if (err) return err.response;
    if (res) return res.data;
};

export { signUp, signIn, signOut, signOutAll, getUser, patchUser, deleteUser };

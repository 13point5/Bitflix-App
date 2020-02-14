import { userAxios } from "./Axios";
import Faith from "../utils/Faith";

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

const getUser = async userData => {
    let [err, res] = await Faith(userAxios.get("/me", userData));

    if (err) return err.response;
    if (res) return res.data;
};

const patchUser = async userData => {
    let [err, res] = await Faith(userAxios.patch("/me", userData));

    if (err) return err.response;
    if (res) return res.data;
};

const deleteUser = async userData => {
    let [err, res] = await Faith(userAxios.delete("/me", userData));

    if (err) return err.response;
    if (res) return res.data;
};

export { signUp, signIn, getUser, patchUser, deleteUser };

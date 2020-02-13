import axios from "axios";

// Common config
axios.defaults.headers.post["Content-Type"] = "application/json";

// Instances

export const axiosBackend = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT
});

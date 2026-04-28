import axios from "axios";

const API = axios.create({
    baseURL: "",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

export default API;

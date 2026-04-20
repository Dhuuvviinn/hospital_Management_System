import axios from "axios";

const   API = axios.create({
    baseURL: `${window.location.protocol}//${window.location.hostname}:8000`,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

export default API;
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-type": "application/json"
    }
});
export default axiosInstance;


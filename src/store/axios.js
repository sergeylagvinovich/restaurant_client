import axios from "axios";

const instance = axios.create({
        withCredentials: true,
        baseURL: 'http://localhost:8080/api/v1/',
        timeout: 1000,
        headers: {
            'Content-Type': 'application/json',
            "Accept":"*/*",
        }
    })

export default instance;
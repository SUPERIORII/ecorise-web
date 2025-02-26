import axios from "axios";

const customUrl = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
})


export default customUrl
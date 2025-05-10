import axios from "axios";

const customUrl = axios.create({
  baseURL: "https://ecorise-global-initiative.onrender.com",
  // baseURL: "http://localhost:3000",
  withCredentials: true,
});

export default customUrl;

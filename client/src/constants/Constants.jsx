import axios from "axios";

// API ENDPOINTS
export const API_BASE_URL = axios.create({
  // baseURL: "https://ecorise-global-initiative.onrender.com",
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export const ENDPOINTS = {
  GET_USER: "/user",
  // NEWS ENDPOINTS
  GET_NEWS: "/api/news",
  LATEST_NEWS: "/api/news/latestNews",
  SPECIFIC_NEWS: "/api/news/eginews?egid=",
  SPECIFIC_QUERY_NEWS: "/eginews?egid=",
  PROJECT: "/api/project",
};

import { fromLocalStorage } from "@/services/localStorage.service";
import axios from "axios";

// Retrieve the BASE_URL from the .env file
const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

// Create the Axios instance with the necessary configurations
const instance = (path) =>
  axios.create({
    baseURL: path ? `${BASE_URL}/${path}` : BASE_URL,
    timeout: 1000,
    headers: {
      "Content-Type": "application/json",
    },
  });

// Add an interceptor to include the authorization header
instance.interceptors.request.use(
  (config) => {
    const accessToken = fromLocalStorage("access");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Export the Axios instance
export default instance;

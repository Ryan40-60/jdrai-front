import { fromLocalStorage } from "@/services/localStorage.service";
import axios from "axios";

// Retrieve the BASE_URL from the .env file
const BASE_URL = "http://localhost:3000";

const accessToken = fromLocalStorage("access");

// Create the Axios instance with the necessary configurations
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 2000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = fromLocalStorage("access");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Export the Axios instance
export default axiosInstance;

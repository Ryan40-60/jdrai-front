import axios from "axios";
import { fromLocalStorage } from "@/services/localStorage.service";

const BASE_URL = "http://localhost:3000";

// Create the Axios instance with the necessary configurations
const axiosInstance = axios.create({
  baseURL: BASE_URL, // Set the base URL for API requests
  timeout: 2000, // Set a timeout for requests
  headers: {
    "Content-Type": "application/json", // Set the content type for requests
  },
});

// Intercept requests before they are sent
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = fromLocalStorage("access"); // Get access token from local storage
    if (accessToken) {
      // If access token exists, add it to the Authorization header
      config.headers["Authorization"] = `Bearer ${accessToken.token}`;
    }
    return config; // Return modified request configuration
  },
  (error) => {
    return Promise.reject(error); // Reject the request if an error occurs
  }
);

// Export the Axios instance to be used throughout the application
export default axiosInstance;

import { fromLocalStorage } from "@/services/localStorage.service";
import axios from "axios";

// Retrieve the BASE_URL from the .env file
const BASE_URL = "http://localhost:3000";

// Create the Axios instance with the necessary configurations
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 2000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add an interceptor to include the authorization header
axiosInstance.interceptors.request.use((req) => {
  const accessToken = fromLocalStorage("access");
  if (accessToken) {
    req.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return req;
});

// Export the Axios instance
export default axiosInstance;

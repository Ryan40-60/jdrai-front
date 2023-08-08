import axiosInstance from "@/config/axios.config";
import { fromLocalStorage } from "./localStorage.service";

/**
 * Register a new user.
 *
 * @param {Object} data - User registration data.
 * @return {Promise<[Object, Object|null]>} A promise that resolves to an array
 * containing the response data or null and the error object or null.
 */
export async function register(data) {
  const userData = {
    username: data.username,
    email: data.email,
    password: data.password,
  };
  try {
    const response = await axiosInstance.post("/auth/register", userData);
    return [response.data, null];
  } catch (error) {
    return [null, error.response];
  }
}

/**
 * Log in an existing user.
 *
 * @param {Object} data - User login data.
 * @return {Promise<[Object, Error|null]>} A promise that resolves to an array
 * containing the response data or null and an error object or null.
 */
export async function login(data) {
  const body = {
    log: data.usernameOrEmail,
    password: data.password,
  };
  try {
    const response = await axiosInstance.post("/auth/login", body);
    return [response.data, null];
  } catch (error) {
    return [null, new Error("Failed to log user: ", error)];
  }
}

/**
 * Log out the currently authenticated user.
 *
 * @return {Promise<[Object, Error|null]>} A promise that resolves to an array
 * containing the response data or null and an error object or null.
 */
export async function logout() {
  try {
    const response = await axiosInstance.post("/auth/logout");
    return [response.data, null];
  } catch (error) {
    return [null, new Error("Failed to logout user: ", error)];
  }
}
